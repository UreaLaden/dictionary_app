using Microsoft.EntityFrameworkCore;

namespace dictionary_app.Models
{
    public class DictionaryContext :DbContext
    {
        public DictionaryContext(DbContextOptions<DictionaryContext> options) : base(options) { }
        public DbSet<UserDictionary> Words { get; set; } = null;
    }
}
