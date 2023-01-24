using System.ComponentModel.DataAnnotations;
namespace dictionary_app.Models
{
    public class Definition
    {
        public int Id { get; set; }
        public string? definition { get; set; }
        public List<Synonym>? Synonyms { get; set; }

        public List<Antonym>? Antonyms { get; set; }
    }
}
