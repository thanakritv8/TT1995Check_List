using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TT1995APIs.Models.Home
{
    public class StateModels
    {
        public int state_id { get; set; }
        public int fk_id_main { get; set; }
        public int fk_id_second { get; set; }
        public int table_id_main { get; set; }
        public int table_id_second { get; set; }
    }
}