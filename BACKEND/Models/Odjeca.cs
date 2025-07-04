using System.ComponentModel.DataAnnotations;

namespace BACKEND.Models
{
    public class Odjeca : Entitet
    {
 

        public decimal Cijena { get; set; }

        public string Velicina { get; set; }

        public string Opis { get; set; }

        public string Naziv { get; set; }

        public string Stanje { get; set; }

    }
}
