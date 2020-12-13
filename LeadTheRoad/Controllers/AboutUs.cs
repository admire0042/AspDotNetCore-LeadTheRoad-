using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace LeadTheRoad.Controllers
{
    public class AboutUs : Controller
    {
        public IActionResult About()
        {
            return View();
        }
    }
}
