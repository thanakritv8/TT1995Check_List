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
        #region Poom

        #region Equipment_lade

        public JsonResult GetEquipment_lade()
        {
            List<Equipment_lade> ul = new List<Equipment_lade>();
            using (SqlConnection con = ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "SELECT * FROM [TT1995_CheckList].[dbo].[equipment_lade]";
                using (SqlCommand cmd = new SqlCommand(_SQL, con))
                {
                    DataTable _Dt = new DataTable();
                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    da.Fill(_Dt);
                    da.Dispose();
                    foreach (DataRow _Item in _Dt.Rows)
                    {
                        Equipment_lade EL = new Equipment_lade();
                        EL.eq_lade_id = Int32.Parse(_Item["eq_lade_id"].ToString());
                        EL.eq_lade = _Item["eq_lade"].ToString();
                        EL.carrier_lade_id = Int32.Parse(_Item["carrier_lade_id"].ToString());
                        ul.Add(EL);
                    }
                }
                con.Close();
            }
            return Json(ul, JsonRequestBehavior.AllowGet);
        }

        public JsonResult InsertEquipment_lade(string eq_lade, int carrier_lade_id)
        {
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "insert into [TT1995_CheckList].[dbo].[equipment_lade] (eq_lade, carrier_lade_id) output inserted.eq_lade_id values ('" + eq_lade + "','" + carrier_lade_id + "')";
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

        #region Carrier_lade

        public JsonResult GetCarrier_lade()
        {
            List<Carrier_lade> ul = new List<Carrier_lade>();
            using (SqlConnection con = ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "SELECT * FROM [TT1995_CheckList].[dbo].[carrier_lade]";
                using (SqlCommand cmd = new SqlCommand(_SQL, con))
                {
                    DataTable _Dt = new DataTable();
                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    da.Fill(_Dt);
                    da.Dispose();
                    foreach (DataRow _Item in _Dt.Rows)
                    {
                        Carrier_lade CL = new Carrier_lade();
                        CL.carrier_lade_id = Int32.Parse(_Item["carrier_lade_id"].ToString());
                        CL.carrier_lade = _Item["carrier_lade"].ToString();
                        ul.Add(CL);
                    }
                }
                con.Close();
            }
            return Json(ul, JsonRequestBehavior.AllowGet);
        }

        public JsonResult InsertCarrier_lade(string carrier_lade)
        {
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "insert into [TT1995_CheckList].[dbo].[carrier_lade] (carrier_lade) output inserted.carrier_lade_id values ('" + carrier_lade + "')";
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

        #region Equipment_safety

        public JsonResult GetEquipment_safety()
        {
            List<Equipment_safety> ul = new List<Equipment_safety>();
            using (SqlConnection con = ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "SELECT * FROM [TT1995_CheckList].[dbo].[equipment_safety]";
                using (SqlCommand cmd = new SqlCommand(_SQL, con))
                {
                    DataTable _Dt = new DataTable();
                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    da.Fill(_Dt);
                    da.Dispose();
                    foreach (DataRow _Item in _Dt.Rows)
                    {
                        Equipment_safety ES = new Equipment_safety();
                        ES.eq_safety_id = Int32.Parse(_Item["eq_safety_id"].ToString());
                        ES.eq_name = _Item["eq_name"].ToString();
                        ES.eq_safety_type_id = Int32.Parse(_Item["equipment_safety_type_id"].ToString());
                        ul.Add(ES);
                    }
                }
                con.Close();
            }
            return Json(ul, JsonRequestBehavior.AllowGet);
        }

        public JsonResult InsertEquipment_safety(string eq_name, int eq_safety_type_id)
        {
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "insert into [TT1995_CheckList].[dbo].[eq_safety] (eq_name, eq_safety_type_id) output inserted.eq_safety_id values ('" + eq_name + "','" + eq_safety_type_id + "')";
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

        #region Equipment_safety_type

        public JsonResult GetEquipment_safety_type()
        {
            List<Equipment_safety_type> ul = new List<Equipment_safety_type>();
            using (SqlConnection con = ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "SELECT * FROM [TT1995_CheckList].[dbo].[equipment_safety_type]";
                using (SqlCommand cmd = new SqlCommand(_SQL, con))
                {
                    DataTable _Dt = new DataTable();
                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    da.Fill(_Dt);
                    da.Dispose();
                    foreach (DataRow _Item in _Dt.Rows)
                    {
                        Equipment_safety_type EST = new Equipment_safety_type();
                        EST.eq_safety_type_id = Int32.Parse(_Item["eq_safety_type_id"].ToString());
                        EST.eq_safety_type = _Item["eq_safety_type"].ToString();
                        ul.Add(EST);
                    }
                }
                con.Close();
            }
            return Json(ul, JsonRequestBehavior.AllowGet);
        }

        public JsonResult InsertEquipment_safety_type(string eq_safety_type)
        {
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "insert into [TT1995_CheckList].[dbo].[equipment_safety_type] (eq_safety_type) output inserted.eq_safety_type_id values ('" + eq_safety_type + "')";
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

        #region Equipment_transport

        public JsonResult GetEquipment_transport()
        {
            List<Equipment_transport> ul = new List<Equipment_transport>();
            using (SqlConnection con = ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "SELECT * FROM [TT1995_CheckList].[dbo].[equipment_transport]";
                using (SqlCommand cmd = new SqlCommand(_SQL, con))
                {
                    DataTable _Dt = new DataTable();
                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    da.Fill(_Dt);
                    da.Dispose();
                    foreach (DataRow _Item in _Dt.Rows)
                    {
                        Equipment_transport ET = new Equipment_transport();
                        ET.eq_tran_id = Int32.Parse(_Item["eq_tran_id"].ToString());
                        ET.eq_name = _Item["eq_name"].ToString();
                        ul.Add(ET);
                    }
                }
                con.Close();
            }
            return Json(ul, JsonRequestBehavior.AllowGet);
        }

        public JsonResult InsertEquipment_transport(string eq_name)
        {
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "insert into [TT1995_CheckList].[dbo].[equipment_transport] (eq_name) output inserted.eq_tran_id values ('" + eq_name + "')";
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

        #region Volume_unit

        public JsonResult GetVolume_unit()
        {
            List<Volume_unit> ul = new List<Volume_unit>();
            using (SqlConnection con = ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "SELECT * FROM [TT1995_CheckList].[dbo].[volume_unit]";
                using (SqlCommand cmd = new SqlCommand(_SQL, con))
                {
                    DataTable _Dt = new DataTable();
                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    da.Fill(_Dt);
                    da.Dispose();
                    foreach (DataRow _Item in _Dt.Rows)
                    {
                        Volume_unit VU = new Volume_unit();
                        VU.vol_unit_id = Int32.Parse(_Item["vol_unit_id"].ToString());
                        VU.vol_unit = _Item["eq_name"].ToString();
                        ul.Add(VU);
                    }
                }
                con.Close();
            }
            return Json(ul, JsonRequestBehavior.AllowGet);
        }

        public JsonResult InsertVolume_unit(string vol_unit)
        {
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "insert into [TT1995_CheckList].[dbo].[volume_unit] (vol_unit) output inserted.vol_unit_id values ('" + vol_unit + "')";
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
        #endregion

    }
}