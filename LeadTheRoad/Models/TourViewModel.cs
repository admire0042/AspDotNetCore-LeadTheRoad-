using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeadTheRoad.Models
{
    public class TourViewModel
    {
        public Hotel Hotel { get; set; }
        public Flight Flight { get; set; }
        public NoAdult NoAdult { get; set; }
        public FlightType FlightTyp { get; set; }
      
        public List<Packages> Packages = new List<Packages>()
        {
            new Packages(){ Location = "Thailand", Cost = 1200m, Duration = "5 days", Image = "~/images/Thailand.jpg"},
            new Packages(){ Location = " Malaysia", Cost = 1100m, Duration = "6 days", Image = "~/images/malaysia.jpg"},
            new Packages(){ Location = "Hong Kong", Cost = 2400m, Duration = "3 days", Image = "~/images/hongkong.jpg"},
            new Packages(){ Location = "China", Cost = 1500m, Duration = "5 days", Image = "~/images/chaina.jpg"},
            new Packages(){ Location = "Maldives", Cost = 1800m, Duration = "7 days", Image = "~/images/Maldives.jpg"},
            new Packages(){ Location = "Mauritius", Cost = 1000m, Duration = "5 days", Image = "~/images/Mauritius.jpg"},
            new Packages(){ Location = "New Zealand", Cost = 2100m, Duration = "3 days", Image = "~/images/NewZealand.jpg"},
            new Packages(){ Location = "Singapore", Cost = 1300m, Duration = "6 days", Image = "~/images/Singapore.jpg"}
        };

        //,, , China, Maldives, Mauritius, New Zealand, and Singapore. 
    }
}
