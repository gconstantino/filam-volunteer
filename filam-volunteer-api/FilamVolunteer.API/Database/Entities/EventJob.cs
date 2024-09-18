using System.ComponentModel.DataAnnotations;
using FilamVolunteer.API.Database.Entities.Base;

namespace FilamVolunteer.API.Database.Entities
{
    public class EventJob : BaseEntityWithCreatedAudit
    {
        [Required]
        public string Name { get; set; }

        public string Description { get; set; }

        [Required]
        public int EventId { get; set; }

        public Event Event { get; set; }

        public int PersonsNeeded { get; set; }
    }
}
