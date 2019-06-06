using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace TT1995APIs.Controllers
{
    public class UtilityController : Controller
    {
        // GET: Utility
        public ActionResult Index()
        {
            return View();
        }

        public string EncryptSHA256Managed(string StrInput)
        {
            UnicodeEncoding uEncode = new UnicodeEncoding();
            byte[] bytClearString = uEncode.GetBytes(StrInput);
            SHA256Managed sha = new SHA256Managed();
            byte[] hash = sha.ComputeHash(bytClearString);
            return Convert.ToBase64String(hash);
        }        
    }
}