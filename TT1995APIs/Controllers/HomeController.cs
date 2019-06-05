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
                string _SQL = "insert into [TT1995_CheckList].[dbo].[customer] (cus_name, create_by_user_id) output inserted.cus_id values (N'" + cus_name + "', 1)";
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

        public JsonResult UpdateCustomer(string cus_id, string cus_name)
        {
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "update [TT1995_CheckList].[dbo].[customer] set cus_name = N'" + cus_name + "', update_date = getdate(), update_by_user_id = 1 where cus_id = " + cus_id;
                using (SqlCommand cmd = new SqlCommand(_SQL, con))
                {
                    ExecuteModels EM = new ExecuteModels();
                    try
                    {
                        if (Int32.Parse(cmd.ExecuteNonQuery().ToString()) == 1)
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

        public JsonResult DeleteCustomer(string cus_id)
        {
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "delete from [TT1995_CheckList].[dbo].[customer] where cus_id = " + cus_id;
                using (SqlCommand cmd = new SqlCommand(_SQL, con))
                {
                    ExecuteModels EM = new ExecuteModels();
                    try
                    {
                        
                        if (Int32.Parse(cmd.ExecuteNonQuery().ToString()) == 1)
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

        #region Customer Contact

        public JsonResult GetCustomerContact()
        {
            List<CustomerContactModels> ul = new List<CustomerContactModels>();
            using (SqlConnection con = ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "SELECT * FROM [TT1995_CheckList].[dbo].[customer_contact]";
                using (SqlCommand cmd = new SqlCommand(_SQL, con))
                {
                    DataTable _Dt = new DataTable();
                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    da.Fill(_Dt);
                    da.Dispose();
                    foreach (DataRow _Item in _Dt.Rows)
                    {
                        CustomerContactModels CCM = new CustomerContactModels();
                        CCM.customer_contact_id = Int32.Parse(_Item["cus_contact_id"].ToString());
                        CCM.name = _Item["name"].ToString();
                        CCM.position = _Item["position"].ToString();
                        CCM.tel = _Item["tel"].ToString();
                        CCM.email = _Item["email"].ToString();
                        ul.Add(CCM);
                    }
                }
                con.Close();
            }
            return Json(ul, JsonRequestBehavior.AllowGet);
        }

        public JsonResult InsertCustomerContact(string name, string position, string tel, string line, string email)
        {
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "insert into [TT1995_CheckList].[dbo].[customer_contact] (name, position, tel, line, email, create_by_user_id) output inserted.cus_contact_id values (N'" + name + "', N'" + position + "', N'"+ tel +"', N'" + line + "', N'" + email + "', 1)";
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

        public JsonResult UpdateCustomerContact(string cus_contact_id, string name, string position, string tel, string line, string email)
        {
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string[] col = { "name", "position", "tel", "line", "email" };
                string[] data = { name, position, tel, line, email };
                string _SQL = "update [TT1995_CheckList].[dbo].[customer_contact] set update_date = getdate(), update_by_user_id = 1, ";
                for (int i = 0; i <= col.Length - 1; i++)
                {
                    if (data[i] != null)
                    {
                        _SQL += col[i] + " = N'" + data[i] + "',";
                    }
                }
                _SQL = _SQL.Substring(0, _SQL.Length - 1);
                _SQL += " where cus_contact_id = " + cus_contact_id;                             
                
                using (SqlCommand cmd = new SqlCommand(_SQL, con))
                {
                    ExecuteModels EM = new ExecuteModels();
                    try
                    {
                        if (Int32.Parse(cmd.ExecuteNonQuery().ToString()) == 1)
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

        public JsonResult DeleteCustomerContact(string cus_contact_id)
        {
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "delete from [TT1995_CheckList].[dbo].[customer_contact] where cus_contact_id = " + cus_contact_id;
                using (SqlCommand cmd = new SqlCommand(_SQL, con))
                {
                    ExecuteModels EM = new ExecuteModels();
                    try
                    {

                        if (Int32.Parse(cmd.ExecuteNonQuery().ToString()) == 1)
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