using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using FilamVolunteer.API.Database.Entities;
using FilamVolunteer.API.Database.Entities.Base;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;

namespace FilamVolunteer.API.Database
{
    public class FilamVolunteerDbContext : IdentityDbContext<IdentityUser>
    {

        private readonly IHttpContextAccessor _httpContextAccessor;

        public FilamVolunteerDbContext(DbContextOptions<FilamVolunteerDbContext> options, IHttpContextAccessor httpContextAccessor) :
            base(options)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public DbSet<Event> Events { get; set; }

        public DbSet<EventJob> EventJobs { get; set; }

        public override int SaveChanges()
        {
            HandleAuditing();
            return base.SaveChanges();
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            HandleAuditing();
            return base.SaveChangesAsync(cancellationToken);
        }

        private void HandleAuditing()
        {
            var entries = ChangeTracker.Entries()
                .Where(e => e.State == EntityState.Added || e.State == EntityState.Modified || e.State == EntityState.Deleted);

            foreach (var entry in entries)
            {
                var userId = _httpContextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.NameIdentifier);

                if (entry.State == EntityState.Added && entry.Entity is ICreatedAudit createdAudit)
                {
                    createdAudit.CreatedDate = DateTime.UtcNow;
                    createdAudit.CreatedBy = userId;
                }

                if (entry.State == EntityState.Modified && entry.Entity is IModifiedAudit modifiedAudit)
                {
                    modifiedAudit.ModifiedDate = DateTime.UtcNow;
                    modifiedAudit.ModifiedBy = userId;
                }

                if (entry.State == EntityState.Deleted && entry.Entity is IDeletedAudit deletedAudit)
                {
                    entry.State = EntityState.Modified; // Soft delete
                    deletedAudit.IsDeleted = true;
                    deletedAudit.DeletedBy = userId;
                }
            }
        }
    }
}
