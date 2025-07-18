using BACKEND.Data;
using BACKEND.Models;
using Microsoft.AspNetCore.Mvc;

namespace BACKEND.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class OdjecaController : ControllerBase
    {
        private readonly EdunovaContext _context;

        public OdjecaController(EdunovaContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_context.Odjece);

            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPost]
        public IActionResult Post(Odjeca odjeca)
        {
            try
            {
                _context.Odjece.Add(odjeca);
                _context.SaveChanges();
                return StatusCode(StatusCodes.Status201Created, odjeca);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPut("{sifra:int}")]

        public IActionResult Put(int sifra, Odjeca odjeca)
        {
            if (sifra < 1)
            {
                return BadRequest(new { poruka = "Sifra mora biti veca od 0" });
            }

            try
            {
                Odjeca o = _context.Odjece.Find(sifra);

                if (o == null)
                {
                    return NotFound();
                }

                o.Naziv = odjeca.Naziv;
                o.Opis = odjeca.Opis;
                o.Stanje = odjeca.Stanje;
                o.Cijena = odjeca.Cijena;
                o.Velicina = odjeca.Velicina;
                _context.Odjece.Update(o);
                _context.SaveChanges();
                return Ok(o);
            }

            catch (Exception e)
            {
                return BadRequest(e);
            }


        }

        [HttpDelete("{sifra:int}")]
        public IActionResult Delete(int sifra)
        {
            if (sifra < 1)
            {
                return BadRequest(new { poruka = "Sifra mora biti veca od 0" });
            }

            try
            {
                Odjeca o = _context.Odjece.Find(sifra);

                if (o == null)
                {
                    return NotFound();
                }
                _context.Odjece.Remove(o);
                _context.SaveChanges();
                return NoContent();
            }

            catch (Exception e)
            {
                return BadRequest(e);
            }
        }


        [HttpGet("{sifra:int}")]
        public IActionResult Get(int sifra)
        {
            if(sifra < 1)
            {
                return BadRequest();
            }
            try
            {
                var o = _context.Odjece.Find(sifra);
                if (o == null)
                {
                    return NotFound();
                }
                return Ok(o);

            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

    }
}
