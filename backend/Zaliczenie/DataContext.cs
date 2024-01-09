using Microsoft.EntityFrameworkCore;
using Zaliczenie.Persistance;

namespace Zaliczenie
{
    public class DataContext : DbContext
    {

        public DataContext()
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to sqlite database
            options.UseSqlite($"Data Source=BazaNaZaliczenie.db");
        }

        public DbSet<UserDb> Users { get; set; }
    }
}
