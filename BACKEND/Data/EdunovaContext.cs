﻿using BACKEND.Models;
using Microsoft.EntityFrameworkCore;

namespace BACKEND.Data
{
    public class EdunovaContext : DbContext
    {
        public EdunovaContext(DbContextOptions<EdunovaContext> options) : base(options)
        { 
            
        
        
        }
        public DbSet<Odjeca> Odjece { get; set; }

    }
}
