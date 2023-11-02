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
        Console.WriteLine("INFO");
        return BD.selectSerie(Id);
    }

     public List<Actores> ModalActores(int Id){
        Console.WriteLine("INFO");

        return BD.selectActor(Id);        
    }
        public List<Temporada> ModalTemporada(int Id){
        Console.WriteLine("INFO3");
        List<Temporada> lista=BD.selectTemporada(Id);
        return lista;
    }
}
