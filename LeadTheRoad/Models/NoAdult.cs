using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LeadTheRoad.Models
{
    public enum NoAdult
    {
        [Display (Name = "1")]
        Monday,

        [Display(Name = "2")]
        Tuesday,

        [Display(Name = "3")]
        Wed,

        [Display(Name = "4")]
        Fri
    }
}
