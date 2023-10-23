using Microsoft.AspNetCore.Mvc;

namespace TPBase.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        ViewBag.series = BD.selectSeries();
        Console.WriteLine(BD.selectSeries());
        return View();
    }

    public Series ModalSeries(int Id){
        return BD.selectSerie(Id);
    }

        public Actores ModalActores(int Id){
        return BD.selectActor(Id);        
    }

        public Temporada ModalTemporada(int Id){
            return BD.selectTemporada(Id);        
    }
}
