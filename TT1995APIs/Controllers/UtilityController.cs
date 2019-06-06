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

        public SqlConnection ConnectDatabase(string server, string username, string password)
        {
            SqlConnection connection = new SqlConnection("Server=" + server + ";UID=" + username + ";PASSWORD=" + password + ";Max Pool Size=4000;Connect Timeout=600;Trusted_Connection=False;");
            connection.Open();
            return connection;
        }
    }
}