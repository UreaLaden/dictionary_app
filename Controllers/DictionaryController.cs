using Azure.Core;
using dictionary_app.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace dictionary_app.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DictionaryController : ControllerBase
    {
        public DictionaryController() { }


        [HttpGet("{word}")]
        public async Task GetDefinition(string word)
        {
            Console.WriteLine("Making a request");
            using(var client = new HttpClient())
            {
                client.BaseAddress = new Uri($"https://api.dictionaryapi.dev/api/v2/entries/en/{word}");
                
                var response = await client.GetAsync(client.BaseAddress);
                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();
                    Console.WriteLine(content);
                }
                else
                {
                    Console.WriteLine("An error occured: ", response.StatusCode);
                }

            }
        }
    }
}
