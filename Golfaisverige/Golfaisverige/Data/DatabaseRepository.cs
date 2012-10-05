using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Golfaisverige.Models;
using AutoMapper;

namespace Golfaisverige.Data
{
    public class DatabaseRepository : IDisposable
    {
        private GolfSwedenEntities db;

        public DatabaseRepository()
        {
            db = new GolfSwedenEntities();
        }

        public IEnumerable<ClubModel> GetClubs()
        {

            List<ClubModel> clubs = db.Clubs.Select(c => new ClubModel
            {
                Name = c.Name,
                Id = c.Id,
                DistrictId = (int)c.DistrictId,
                Courses = c.Courses.Select(course => new CourseModel
                    {
                        Name = course.Name,
                        ClubId = course.Club_id,
                        DistrictId = (int)c.DistrictId,
                        Id = course.Id,
                        NumberofHoles = (int)course.Number_of_holes,
                        Par = (int)course.Par
                    })
            }).ToList();

            //var clubs = from club in db.Clubs
            //            orderby club.Name
            //            select new ClubModel
            //            {
            //                Name = club.Name,
            //                Id = club.Id,
            //                DistrictId = (int)club.DistrictId
            //            };

            return clubs;
            
        }        

        public void Dispose()
        {
            db.Dispose();
        }
    }
}