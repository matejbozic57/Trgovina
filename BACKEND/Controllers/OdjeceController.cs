using BACKEND.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;

namespace BACKEND.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class OdjeceController : ControllerBase 
    {
        private readonly EdunovaContext _context;

        public OdjeceController(EdunovaContext context)
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
        
    }
}
