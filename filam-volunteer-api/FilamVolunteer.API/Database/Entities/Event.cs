using System.ComponentModel.DataAnnotations;
using FilamVolunteer.API.Database.Entities.Base;

namespace FilamVolunteer.API.Database.Entities
{
    public class Event : BaseEntityFullAudit
    {
        [Required]
        [StringLength(100, ErrorMessage = "Name cannot be longer than 100 characters.")]
        public string Name { get; set; }

        [StringLength(500, ErrorMessage = "Description cannot be longer than 500 characters.")]
        public string Description { get; set; }

        [StringLength(200, ErrorMessage = "Location cannot be longer than 200 characters.")]
        public string Location { get; set; }

        [StringLength(100, ErrorMessage = "City cannot be longer than 100 characters.")]
        public string City { get; set; }

        [StringLength(200, ErrorMessage = "Address cannot be longer than 200 characters.")]
        public string Address { get; set; }

        [StringLength(10, ErrorMessage = "ZipCode cannot be longer than 10 characters.")]
        public string ZipCode { get; set; }

        [Required]
        public DateTime StartDate { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime EndDate { get; set; }

        [Url(ErrorMessage = "Please enter a valid URL.")]
        public string ImageUrl { get; set; }


    }
}
