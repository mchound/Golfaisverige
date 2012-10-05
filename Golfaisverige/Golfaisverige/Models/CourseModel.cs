using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Golfaisverige.Models
{
    public class CourseModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int ClubId { get; set; }
        public int DistrictId { get; set; }
        public int NumberofHoles { get; set; }
        public int Par { get; set; }
    }
}