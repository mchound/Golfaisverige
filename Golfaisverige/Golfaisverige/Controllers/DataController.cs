using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Golfaisverige.Models;
using Golfaisverige.Data;

namespace Golfaisverige.Controllers
{
    public class DataController : ApiController
    {
        public IEnumerable<ClubModel> GetClubs()
        {
            IEnumerable<ClubModel> clubs = null;
            using (DatabaseRepository db = new DatabaseRepository())
            {
                clubs = db.GetClubs();
            }

            return clubs;
        }
    }
}
