using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using LeadTheRoad.Models;

namespace LeadTheRoad.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }


        ////List<Packages> packages = new List<Packages>()
        ////{
        ////    new Packages(){ Location = "Thailand", Cost = 300m, Duration = 5, Image = "~/images/Thailand.jpg"},
        ////    new Packages(){ Location = "Thailand", Cost = 300m, Duration = 5, Image = "~/images/Thailand.jpg"},
        ////    new Packages(){ Location = "Thailand", Cost = 300m, Duration = 5, Image = "~/images/Thailand.jpg"},
        ////    new Packages(){ Location = "Thailand", Cost = 300m, Duration = 5, Image = "~/images/Thailand.jpg"},
        ////    new Packages(){ Location = "Thailand", Cost = 300m, Duration = 5, Image = "~/images/Thailand.jpg"},
        ////    new Packages(){ Location = "Thailand", Cost = 300m, Duration = 5, Image = "~/images/Thailand.jpg"},
        ////    new Packages(){ Location = "Thailand", Cost = 300m, Duration = 5, Image = "~/images/Thailand.jpg"},
        ////    new Packages(){ Location = "Thailand", Cost = 300m, Duration = 5, Image = "~/images/Thailand.jpg"}
        ////};

        //, Malaysia, Hong Kong, China, Maldives, Mauritius, New Zealand, and Singapore.   

       

        public IActionResult Index()
        {
            TourViewModel tour = new TourViewModel();
            return View(tour);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult Feedback()
        {
            return View();
        }

        public IActionResult FAQ()
        {
            return View();
        }
        public IActionResult Query()
        {
            return View();
        }
        public IActionResult Genova()
        {
            return View();
        }

        public IActionResult Bern()
        {
            return View();
        }
        public IActionResult Basel()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
