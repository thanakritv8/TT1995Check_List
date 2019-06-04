using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TT1995APIs.Models;

namespace TT1995APIs.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        private static SqlConnection ConnectDatabase(string server, string username, string password)
        {
            SqlConnection connection = new SqlConnection("Server=" + server + ";UID=" + username + ";PASSWORD=" + password + ";Max Pool Size=4000;Connect Timeout=600;Trusted_Connection=False;");
            connection.Open();
            return connection;
        }

        #region Customer

        public JsonResult GetCustomer()
        {
            List<CustomerModels> ul = new List<CustomerModels>();
            using (SqlConnection con = ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "SELECT * FROM [TT1995_CheckList].[dbo].[customer]";
                using (SqlCommand cmd = new SqlCommand(_SQL, con))
                {
                    DataTable _Dt = new DataTable();
                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    da.Fill(_Dt);
                    da.Dispose();
                    foreach (DataRow _Item in _Dt.Rows)
                    {
                        CustomerModels CM = new CustomerModels();
                        CM.customer_id = Int32.Parse(_Item["cus_id"].ToString());
                        CM.customer_name = _Item["cus_name"].ToString();
                        ul.Add(CM);
                    }
                }
                con.Close();
            }
            return Json(ul, JsonRequestBehavior.AllowGet);
        }

        public JsonResult InsertCustomer(string cus_name)
        {
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "insert into [TT1995_CheckList].[dbo].[customer] (cus_name) output inserted.cus_id values ('" + cus_name + "')";
                using (SqlCommand cmd = new SqlCommand(_SQL, con))
                {
                    ExecuteModels EM = new ExecuteModels();
                    try
                    {
                        EM.intReturn = Int32.Parse(cmd.ExecuteScalar().ToString());
                        if (EM.intReturn >= 1)
                        {
                            EM.status = 200;
                            EM.code = "OK";
                            EM.record = 1;
                        }
                    }
                    catch (Exception ex)
                    {
                        EM.status = -1;
                        EM.code = ex.Message;
                    }
                    ul.Add(EM);
                }
                con.Close();
            }
            return Json(ul, JsonRequestBehavior.AllowGet);
        }

        #endregion

    }
}