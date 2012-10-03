using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Golfaisverige.Models;

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
            
            var clubs = from club in db.Clubs
                        select new ClubModel
                        {
                            Name = club.Name,
                            Id = club.Id,
                            DistrictId = (int)club.DistrictId
                        };

            return clubs.ToList();
            
        }

        public void Dispose()
        {
            db.Dispose();
        }
    }
}