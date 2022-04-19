using BhoomitsBooks.DataAccess.Repository.IRepository;
using BhoomitsBooks.Models;
using BhoomitsBooks.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using BhoomitsBookStore.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace BhoomitsBookStore.Area.Customer.Controllers
{
    //Explicitly define that the controller is in the Customer Area
    [Area("Customer")]
    public class HomeController : Controller // Extends from Controller
    {

        private readonly ILogger<HomeController> _logger;
        private readonly IUnitOfWork _unifOfWork;

        public HomeController(ILogger<HomeController> logger, IUnitOfWork unifOfWork)
        {
            _logger = logger;
            _unifOfWork = unifOfWork;
        }
        // Two breakpoints added
        public IActionResult Index()
        {
            IEnumerable<Product> productList = _unifOfWork.Product.GetAll(includeProperties: "Category,CoverType");
            return View(productList);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new BhoomitsBookStore.Models.ViewModels.ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
