using System.Data.SqlClient;
using Dapper;

public class BD{
    private static string _connection = @"Server=.;Database=BDSeries;Trusted_Connection=True;";

    public static List<Actores> selectActores() {

        using (SqlConnection bd = new SqlConnection(_connection))
        {
            string query = "SELECT * FROM Actores";
            return bd.Query<Actores>(query).ToList();
        }
    }

    public static List<Series> selectSeries() {

        using (SqlConnection bd = new SqlConnection(_connection))
        {
            string query = "SELECT * FROM Series";
            return bd.Query<Series>(query).ToList();
        }
    }
    public static List<Actores> selectActor(int id) {
        using (SqlConnection bd = new SqlConnection(_connection))
        {
            string query = "SELECT * FROM Series WHERE IdSerie = @Zid";
            return bd.Query<Actores>(query, new {Zid = id}).ToList();
        }
    }

    public static Series selectSerie(int id) {
        Series Serie = null;

        using (SqlConnection bd = new SqlConnection(_connection))
        {
            string query = "SELECT * FROM Series WHERE IdSerie = @Zid";
            Serie = bd.QueryFirstOrDefault<Series>(query, new {Zid = id});
        }
        return Serie;
    }

    public static List<Temporada> selectTemporada(int id) {
        List<Temporada> Temporada = null;

        using (SqlConnection bd = new SqlConnection(_connection))
        {
            string query = "SELECT * FROM Temporadas WHERE IdTemporada = @Zid";
            Temporada = bd.Query<Temporada>(query, new {Zid = id}).ToList();
        }
        return Temporada;
    }

}