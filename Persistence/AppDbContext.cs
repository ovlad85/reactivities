using System;
using Domain;
using Microsoft.EntityFrameworkCore;
namespace Persistence;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

public class AppDbContext(DbContextOptions options) : IdentityDbContext<User>(options)
{
    public required DbSet<Activity> Activities { get; set; }
    public required DbSet<ActivityAttendee> ActivityAttendees { get; set; }
    
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        //configuring the many-to-many relationship
        builder.Entity<ActivityAttendee>(x =>
        {
            x.HasKey(aa => new { aa.ActivityId, aa.UserId });
            x.HasOne(aa => aa.Activity).WithMany(a => a.Attendees).HasForeignKey(aa => aa.ActivityId);
            x.HasOne(aa => aa.User).WithMany(u => u.Activities).HasForeignKey(aa => aa.UserId);
        });
    }
}
