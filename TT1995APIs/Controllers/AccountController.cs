using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TT1995APIs.Models.Account;

namespace TT1995APIs.Controllers
{
    public class AccountController : Controller
    {
        // GET: Account
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult CheckLogin()
        {
            List<AccountStatusModels> ul = new List<AccountStatusModels>();
            //using (SqlConnection con = ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            //{
            //    string _SQL = "SELECT * FROM [TT1995_CheckList].[dbo].[customer]";
            //    using (SqlCommand cmd = new SqlCommand(_SQL, con))
            //    {
            //        DataTable _Dt = new DataTable();
            //        SqlDataAdapter da = new SqlDataAdapter(cmd);
            //        da.Fill(_Dt);
            //        da.Dispose();
            //        foreach (DataRow _Item in _Dt.Rows)
            //        {
            //            AccountStatusModels CM = new AccountStatusModels();
            //            CM.customer_id = Int32.Parse(_Item["cus_id"].ToString());
            //            CM.customer_name = _Item["cus_name"].ToString();
            //            ul.Add(CM);
            //        }
            //    }
            //    con.Close();
            //}
            return Json(ul, JsonRequestBehavior.AllowGet);
        }
    }
}