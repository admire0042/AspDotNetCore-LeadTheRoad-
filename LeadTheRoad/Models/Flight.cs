using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeadTheRoad.Models
{
    public class Flight
    {
        public string Name { get; set; }
        public string PhoneNo { get; set; }
        public string Email { get; set; }
        public string FlyFrom { get; set; }
        public string FlyTo { get; set; }
        public DateTime CurLocation { get; set; }
        public DateTime Destination { get; set; }
        public int NoAdult { get; set; }
        public int NoChildren { get; set; }
        public int NoInfant { get; set; }
        public string TicketClass { get; set; }

    }
}
