using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Golfaisverige.Models
{    
    public class ClubModel
    {        
        public int Id { get; set; }
        public int DistrictId { get; set; }
        public string Name { get; set; }
        public IEnumerable<CourseModel> Courses { get; set; }
    }
}