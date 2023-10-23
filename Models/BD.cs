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

    public static List<Temporada> selectTemporada() {

        using (SqlConnection bd = new SqlConnection(_connection))
        {
            string query = "SELECT * FROM Temporadas";
            return bd.Query<Temporada>(query).ToList();
        }
    }

}