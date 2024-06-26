using System.Text;
using  Backend.Dotnet.Apps.Webapi.Configurations;
using Backend.Dotnet.Apps.Webapi.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;


//using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.Configure<JwtConfig>( builder.Configuration.GetSection("JwtConfig"));
/*
builder.Services.AddDbContext<ApiContext>(options=>
  options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"))  
);*/
builder.Services.AddDbContext<ApiContext>(options=>
  options.UseInMemoryDatabase(Guid.NewGuid().ToString())  
);
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDefaultIdentity<IdentityUser>(options=>{
  options.SignIn.RequireConfirmedAccount = false;
}).AddEntityFrameworkStores<ApiContext>();

builder.Services.AddAuthentication(options=>{
  options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
  options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
  options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(jwt =>{
  var key = Encoding.ASCII.GetBytes(builder.Configuration.GetSection("jwtConfig:Secret").Value);
  jwt.SaveToken = true;
  jwt.TokenValidationParameters = new TokenValidationParameters(){
    ValidateIssuerSigningKey = true,
    IssuerSigningKey = new SymmetricSecurityKey(key),
  ValidateIssuer = true,
  ValidateAudience = false,
  RequireExpirationTime = false,
  ValidateLifetime = false
  };
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
