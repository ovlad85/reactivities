using System;
namespace Domain;
using Microsoft.AspNetCore.Identity;

public class User: IdentityUser
{
    public string? DisplayName { get; set; }
    public string? Bio { get; set; }
    public string? ImageUrl { get; set; }
}
