using System.ComponentModel;

namespace dictionary_app.Models
{
    public class Phonetics
    {
        public int Id { get; set; }
        public string? Text { get; set; }
        public string? Audio { get; set; }
        public string? SourceUrl { get; set; }
        public License? Licence { get; set; }
    }
}
