using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TT1995APIs.Models.Home
{    
    public class AddressBillModels
    {
        public int address_bill_id { get; set; }
        public string address { get; set; }
        public int province_id { get; set; }
        public string zip_code { get; set; }
    }

    public class AddressCustomerModels
    {
        public int address_id { get; set; }
        public string address { get; set; }
        public string zip_code { get; set; }
        public int province_id { get; set; }
        public int cus_id { get; set; }
    }

    public class CountryModels
    {
        public int country_id { get; set; }
        public string country { get; set; }
    }

    public class CustomerContactModels
    {
        public int customer_contact_id { get; set; }
        public string name { get; set; }
        public string position { get; set; }
        public string tel { get; set; }
        public string line { get; set; }
        public string email { get; set; }
    }

    public class CustomerModels
    {
        public int customer_id { get; set; }
        public string customer_name { get; set; }
    }

    public class ProductModels
    {
        public int product_id { get; set; }
        public string product_name { get; set; }
        public int product_type_id { get; set; }
    }

    public class ProductTypeModels
    {
        public int product_type_id { get; set; }
        public string product_type { get; set; }
    }

    public class ProvinceModels
    {
        public int province_id { get; set; }
        public string province { get; set; }
        public int country_id { get; set; }
    }

}