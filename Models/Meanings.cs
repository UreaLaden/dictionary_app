namespace dictionary_app.Models
{
    public class Meanings
    {
        public int Id { get; set; }
        public string? PartOfSpeech { get; set; }
        public List<UserDictionary>? definitions { get; set; }
    }
}
