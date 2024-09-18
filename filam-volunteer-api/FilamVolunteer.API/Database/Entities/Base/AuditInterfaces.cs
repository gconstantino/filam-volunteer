using System.ComponentModel.DataAnnotations;

namespace FilamVolunteer.API.Database.Entities.Base
{
    public interface ICreatedAudit
    {
        DateTime CreatedDate { get; set; }
        [StringLength(50)]
        string CreatedBy { get; set; }
    }

    public interface IModifiedAudit
    {
        DateTime? ModifiedDate { get; set; }
        [StringLength(50)]
        string ModifiedBy { get; set; }
    }

    public interface IDeletedAudit
    {
        bool IsDeleted { get; set; }
        [StringLength(50)]
        string DeletedBy { get; set; }
    }
}
