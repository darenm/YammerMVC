// --------------------------------------------------------------------------------------------------------------------
// <copyright file="HomeController.cs" company="">
//   
// </copyright>
// <summary>
//   The home controller.
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace YammerMVC.Controllers
{
    using System.Web.Mvc;

    /// <summary>
    /// The home controller.
    /// </summary>
    public class HomeController : Controller
    {
        #region Public Methods and Operators

        /// <summary>
        /// The about.
        /// </summary>
        /// <returns>
        /// </returns>
        public ActionResult About()
        {
            return this.View();
        }

        /// <summary>
        /// The index.
        /// </summary>
        /// <returns>
        /// </returns>
        public ActionResult Index()
        {
            this.ViewBag.Message = "Welcome to ASP.NET MVC!";

            return this.View();
        }

        #endregion
    }
}