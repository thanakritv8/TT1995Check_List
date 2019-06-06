using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TT1995APIs.Models
{
    public class AddressBillModels
    {
        public int address_bill_id { get; set; }
        public string address { get; set; }
        public int province_id { get; set; }
        public string zip_code { get; set; }        
    }
}