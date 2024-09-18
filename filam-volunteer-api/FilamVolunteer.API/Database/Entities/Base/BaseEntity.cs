using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace FilamVolunteer.API.Database.Entities.Base
{
    public abstract class BaseEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
    }

    public abstract class BaseEntityWithCreatedAudit : BaseEntity, ICreatedAudit
    {
        public DateTime CreatedDate { get; set; }
        public string CreatedBy { get; set; }
    }

    public abstract class BaseEntityWithModifiedAudit : BaseEntity, IModifiedAudit
    {
        public DateTime? ModifiedDate { get; set; }
        public string ModifiedBy { get; set; }
    }

    public abstract class BaseEntityWithDeletedAudit : BaseEntity, IDeletedAudit
    {
        public bool IsDeleted { get; set; }
        public string DeletedBy { get; set; }
    }

    public abstract class BaseEntityWithCreatedAndModifiedAudit : BaseEntity, ICreatedAudit, IModifiedAudit
    {
        public DateTime CreatedDate { get; set; }
        [StringLength(50)]
        public string CreatedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string ModifiedBy { get; set; }
    }

    public abstract class BaseEntityFullAudit : BaseEntity, ICreatedAudit, IModifiedAudit, IDeletedAudit
    {
        public DateTime CreatedDate { get; set; }
        [StringLength(50)]
        public string CreatedBy { get; set; }
        public bool IsDeleted { get; set; }
        public string DeletedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string ModifiedBy { get; set; }
    }
}
