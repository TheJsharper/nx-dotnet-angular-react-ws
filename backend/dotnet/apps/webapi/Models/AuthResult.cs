using System.Collections.Generic;
namespace  Backend.Dotnet.Apps.Webapi.Models;

public class AuthResult{

    public string Token { get; set; }= string.Empty;
    public bool Result  { get; set; }
    public List<string> Errors { get; set; }

}