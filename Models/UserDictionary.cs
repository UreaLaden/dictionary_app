using System.ComponentModel.DataAnnotations;

namespace dictionary_app.Models
{
    public class UserDictionary
    {
        public int Id { get; set; }
        public string? Word { get; set; }
        public string? Phonetic { get; set; }
        public Phonetics? Phonetics { get; set; }
        public List<Meanings>? Meanings { get; set; }
    }
}
