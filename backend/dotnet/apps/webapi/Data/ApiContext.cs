using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
namespace Backend.Dotnet.Apps.Webapi.Data
{
    public class ApiContext:IdentityDbContext{
        public ApiContext(DbContextOptions<ApiContext> options):
        base(options)
        {
            
        }
    }
    
}


