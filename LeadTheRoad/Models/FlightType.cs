using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LeadTheRoad.Models
{
    public enum FlightType
    {

        Economy,
        [Display(Name = "Premium Economy")]
        Premium,
        Business,
        [Display(Name = "First Class")]
        First 
    }
}
