using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TT1995APIs.Models.Home;
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

        public ActionResult ProfileData()
        {
            return View();
        }

        #region Profile

        #region Customer

        public JsonResult GetCustomer()
        {
            UtilityController uc = new UtilityController();
            List<CustomerModels> ul = new List<CustomerModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
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
            UtilityController uc = new UtilityController();
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
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
            UtilityController uc = new UtilityController();
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
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
            UtilityController uc = new UtilityController();
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
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
            UtilityController uc = new UtilityController();
            List<CustomerContactModels> ul = new List<CustomerContactModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
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
            UtilityController uc = new UtilityController();
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
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
            UtilityController uc = new UtilityController();
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
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
            UtilityController uc = new UtilityController();
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
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

        #region Address Customer

        public JsonResult GetAddressCustomer()
        {
            UtilityController uc = new UtilityController();
            List<AddressCustomerModels> ul = new List<AddressCustomerModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "SELECT * FROM [TT1995_CheckList].[dbo].[address_customer]";
                using (SqlCommand cmd = new SqlCommand(_SQL, con))
                {
                    DataTable _Dt = new DataTable();
                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    da.Fill(_Dt);
                    da.Dispose();
                    foreach (DataRow _Item in _Dt.Rows)
                    {
                        AddressCustomerModels ACM = new AddressCustomerModels();
                        ACM.address_id = Int32.Parse(_Item["address_id"].ToString());
                        ACM.address = _Item["address"].ToString();
                        ACM.zip_code = _Item["zip_code"].ToString();
                        ACM.province_id = Int32.Parse(_Item["province_id"].ToString());
                        ACM.cus_id = Int32.Parse(_Item["cus_id"].ToString());
                        ul.Add(ACM);
                    }
                }
                con.Close();
            }
            return Json(ul, JsonRequestBehavior.AllowGet);
        }

        public JsonResult InsertAddressCustomer(string address, string zip_code, string province_id, string cus_id)
        {
            UtilityController uc = new UtilityController();
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "insert into [TT1995_CheckList].[dbo].[address_customer] (address, zip_code, province_id, cus_id, create_by_user_id) output inserted.address_id values (N'" + address + "', N'" + zip_code + "', '" + province_id + "', '" + cus_id + "', 1)";
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

        public JsonResult UpdateAddressCustomer(string address_id, string address, string zip_code, string province_id, string cus_id)
        {
            UtilityController uc = new UtilityController();
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string[] col = { "address", "zip_code", "province_id", "cus_id" };
                string[] data = { address, zip_code, province_id, cus_id };
                string _SQL = "update [TT1995_CheckList].[dbo].[address_customer] set update_date = getdate(), update_by_user_id = 1, ";
                for (int i = 0; i <= col.Length - 1; i++)
                {
                    if (data[i] != null)
                    {
                        _SQL += col[i] + " = N'" + data[i] + "',";
                    }
                }
                _SQL = _SQL.Substring(0, _SQL.Length - 1);
                _SQL += " where address_id = " + address_id;

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

        public JsonResult DeleteAddressCustomer(string address_id)
        {
            UtilityController uc = new UtilityController();
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "delete from [TT1995_CheckList].[dbo].[address_customer] where address_id = " + address_id;
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

        #region Product

        public JsonResult GetProduct()
        {
            UtilityController uc = new UtilityController();
            List<ProductModels> ul = new List<ProductModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "SELECT * FROM [TT1995_CheckList].[dbo].[product]";
                using (SqlCommand cmd = new SqlCommand(_SQL, con))
                {
                    DataTable _Dt = new DataTable();
                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    da.Fill(_Dt);
                    da.Dispose();
                    foreach (DataRow _Item in _Dt.Rows)
                    {
                        ProductModels PM = new ProductModels();
                        PM.product_id = Int32.Parse(_Item["product_id"].ToString());
                        PM.product_name = _Item["product_name"].ToString();
                        PM.product_type_id = Int32.Parse(_Item["product_type_id"].ToString());
                        ul.Add(PM);
                    }
                }
                con.Close();
            }
            return Json(ul, JsonRequestBehavior.AllowGet);
        }

        public JsonResult InsertProduct(string product_name, string product_type_id)
        {
            UtilityController uc = new UtilityController();
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "insert into [TT1995_CheckList].[dbo].[product] (product_name, product_type_id, create_by_user_id) output inserted.product_id values (N'" + product_name + "', '" + product_type_id + "', 1)";
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

        public JsonResult UpdateProduct(string product_id, string product_name, string product_type_id)
        {
            UtilityController uc = new UtilityController();
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string[] col = { "product_name", "product_type_id" };
                string[] data = { product_name, product_type_id };
                string _SQL = "update [TT1995_CheckList].[dbo].[product] set update_date = getdate(), update_by_user_id = 1, ";
                for (int i = 0; i <= col.Length - 1; i++)
                {
                    if (data[i] != null)
                    {
                        _SQL += col[i] + " = N'" + data[i] + "',";
                    }
                }
                _SQL = _SQL.Substring(0, _SQL.Length - 1);
                _SQL += " where product_id = " + product_id;

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

        public JsonResult DeleteProduct(string product_id)
        {
            UtilityController uc = new UtilityController();
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "delete from [TT1995_CheckList].[dbo].[product] where product_id = " + product_id;
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

        #region Product Type

        public JsonResult GetProductType()
        {
            UtilityController uc = new UtilityController();
            List<ProductTypeModels> ul = new List<ProductTypeModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "SELECT * FROM [TT1995_CheckList].[dbo].[product_type]";
                using (SqlCommand cmd = new SqlCommand(_SQL, con))
                {
                    DataTable _Dt = new DataTable();
                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    da.Fill(_Dt);
                    da.Dispose();
                    foreach (DataRow _Item in _Dt.Rows)
                    {
                        ProductTypeModels PTM = new ProductTypeModels();
                        PTM.product_type_id = Int32.Parse(_Item["product_type_id"].ToString());
                        PTM.product_type = _Item["product_type"].ToString();                        
                        ul.Add(PTM);
                    }
                }
                con.Close();
            }
            return Json(ul, JsonRequestBehavior.AllowGet);
        }

        public JsonResult InsertProductType(string product_type)
        {
            UtilityController uc = new UtilityController();
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "insert into [TT1995_CheckList].[dbo].[product_type] (product_type, create_by_user_id) output inserted.product_type_id values (N'" + product_type + "', 1)";
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

        public JsonResult UpdateProductType(string product_type_id, string product_type)
        {
            UtilityController uc = new UtilityController();
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string[] col = { "product_type" };
                string[] data = { product_type };
                string _SQL = "update [TT1995_CheckList].[dbo].[product_type] set update_date = getdate(), update_by_user_id = 1, ";
                for (int i = 0; i <= col.Length - 1; i++)
                {
                    if (data[i] != null)
                    {
                        _SQL += col[i] + " = N'" + data[i] + "',";
                    }
                }
                _SQL = _SQL.Substring(0, _SQL.Length - 1);
                _SQL += " where product_type_id = " + product_type_id;

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

        public JsonResult DeleteProductType(string product_type_id)
        {
            UtilityController uc = new UtilityController();
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "delete from [TT1995_CheckList].[dbo].[product_type] where product_type_id = " + product_type_id;
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

        #region Address Bill

        public JsonResult GetAddressBill()
        {
            UtilityController uc = new UtilityController();
            List<AddressBillModels> ul = new List<AddressBillModels>();

            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "SELECT * FROM [TT1995_CheckList].[dbo].[address_bill]";
                using (SqlCommand cmd = new SqlCommand(_SQL, con))
                {
                    DataTable _Dt = new DataTable();
                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    da.Fill(_Dt);
                    da.Dispose();
                    foreach (DataRow _Item in _Dt.Rows)
                    {
                        AddressBillModels ABM = new AddressBillModels();
                        ABM.address_bill_id = Int32.Parse(_Item["address_bill_id"].ToString());
                        ABM.address = _Item["address"].ToString();
                        ABM.province_id = Int32.Parse(_Item["province_id"].ToString());
                        ABM.zip_code = _Item["zip_code"].ToString();
                        ul.Add(ABM);
                    }
                }
                con.Close();
            }
            return Json(ul, JsonRequestBehavior.AllowGet);
        }

        public JsonResult InsertAddressBill(string address, string province_id, string zip_code)
        {
            UtilityController uc = new UtilityController();
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "insert into [TT1995_CheckList].[dbo].[address_bill] (address, province_id, zip_code, create_by_user_id) output inserted.address_bill_id values (N'" + address + "', '" + province_id + "', '" + zip_code + "', 1)";
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

        public JsonResult UpdateAddressBill(string address_bill_id, string address, string province_id, string zip_code)
        {
            UtilityController uc = new UtilityController();
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string[] col = { "address", "province_id", "zip_code" };
                string[] data = { address, province_id, zip_code };
                string _SQL = "update [TT1995_CheckList].[dbo].[address_bill] set update_date = getdate(), update_by_user_id = 1, ";
                for (int i = 0; i <= col.Length - 1; i++)
                {
                    if (data[i] != null)
                    {
                        _SQL += col[i] + " = N'" + data[i] + "',";
                    }
                }
                _SQL = _SQL.Substring(0, _SQL.Length - 1);
                _SQL += " where address_bill_id = " + address_bill_id;

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

        public JsonResult DeleteAddressBill(string address_bill_id)
        {
            UtilityController uc = new UtilityController();
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "delete from [TT1995_CheckList].[dbo].[address_bill] where address_bill_id = " + address_bill_id;
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

        #region Country

        public JsonResult GetCountry()
        {
            UtilityController uc = new UtilityController();
            List<CountryModels> ul = new List<CountryModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "SELECT * FROM [TT1995_CheckList].[dbo].[country]";
                using (SqlCommand cmd = new SqlCommand(_SQL, con))
                {
                    DataTable _Dt = new DataTable();
                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    da.Fill(_Dt);
                    da.Dispose();
                    foreach (DataRow _Item in _Dt.Rows)
                    {
                        CountryModels CM = new CountryModels();
                        CM.country_id = Int32.Parse(_Item["country_id"].ToString());
                        CM.country = _Item["country"].ToString();                        
                        ul.Add(CM);
                    }
                }
                con.Close();
            }
            return Json(ul, JsonRequestBehavior.AllowGet);
        }

        public JsonResult InsertCountry(string country)
        {
            UtilityController uc = new UtilityController();
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "insert into [TT1995_CheckList].[dbo].[country] (country, create_by_user_id) output inserted.country_id values (N'" + country + "', 1)";
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

        public JsonResult UpdateCountry(string country_id, string country)
        {
            UtilityController uc = new UtilityController();
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string[] col = { "country" };
                string[] data = { country };
                string _SQL = "update [TT1995_CheckList].[dbo].[country] set update_date = getdate(), update_by_user_id = 1, ";
                for (int i = 0; i <= col.Length - 1; i++)
                {
                    if (data[i] != null)
                    {
                        _SQL += col[i] + " = N'" + data[i] + "',";
                    }
                }
                _SQL = _SQL.Substring(0, _SQL.Length - 1);
                _SQL += " where country_id = " + country_id;

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

        public JsonResult DeleteCountry(string country_id)
        {
            UtilityController uc = new UtilityController();
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "delete from [TT1995_CheckList].[dbo].[country] where country_id = " + country_id;
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

        #region Province

        public JsonResult GetProvince()
        {
            UtilityController uc = new UtilityController();
            List<ProvinceModels> ul = new List<ProvinceModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "SELECT * FROM [TT1995_CheckList].[dbo].[province]";
                using (SqlCommand cmd = new SqlCommand(_SQL, con))
                {
                    DataTable _Dt = new DataTable();
                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    da.Fill(_Dt);
                    da.Dispose();
                    foreach (DataRow _Item in _Dt.Rows)
                    {
                        ProvinceModels PM = new ProvinceModels();
                        PM.province_id = Int32.Parse(_Item["province_id"].ToString());
                        PM.province = _Item["province"].ToString();
                        PM.country_id = Int32.Parse(_Item["country_id"].ToString());
                        ul.Add(PM);
                    }
                }
                con.Close();
            }
            return Json(ul, JsonRequestBehavior.AllowGet);
        }
        
        public JsonResult InsertProvince(string province, string country_id)
        {
            UtilityController uc = new UtilityController();
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "insert into [TT1995_CheckList].[dbo].[province] (province, country_id, create_by_user_id) output inserted.country_id values ('" + province + "', '" + country_id + "', 1)";
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

        public JsonResult UpdateProvince(string province_id, string province, string country_id)
        {
            UtilityController uc = new UtilityController();
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string[] col = { "province", "country_id" };
                string[] data = { province, country_id };
                string _SQL = "update [TT1995_CheckList].[dbo].[province] set update_date = getdate(), update_by_user_id = 1, ";
                for (int i = 0; i <= col.Length - 1; i++)
                {
                    if (data[i] != null)
                    {
                        _SQL += col[i] + " = N'" + data[i] + "',";
                    }
                }
                _SQL = _SQL.Substring(0, _SQL.Length - 1);
                _SQL += " where province_id = " + province_id;

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

        public JsonResult DeleteProvince(string province_id)
        {
            UtilityController uc = new UtilityController();
            List<ExecuteModels> ul = new List<ExecuteModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "delete from [TT1995_CheckList].[dbo].[province] where province_id = " + province_id;
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

        #endregion

        #region Relation

        public JsonResult GetRelationState(string table_id_main, string table_id_second)
        {
            UtilityController uc = new UtilityController();
            List<StateModels> ul = new List<StateModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                DataTable _DtMain = GetConfigTable(table_id_main);
                DataTable _DtSecond = GetConfigTable(table_id_second);
                if(_DtMain.Rows.Count > 0 && _DtSecond.Rows.Count > 0)
                {
                    string _TbMain = _DtMain.Rows[0]["table_name"].ToString();
                    string _TbSecond = _DtSecond.Rows[0]["table_name"].ToString();

                    string _SQL = "SELECT * FROM [TT1995_CheckList].[dbo].[relation_state] where table_id_main = " + table_id_main + " and table_id_second = " + table_id_second;
                    SqlCommand cmd = new SqlCommand(_SQL, con);
                    DataTable _Dt = new DataTable();
                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    da.Fill(_Dt);
                    da.Dispose();
                    foreach (DataRow _Item in _Dt.Rows)
                    {
                        StateModels SM = new StateModels();
                        SM.state_id = Int32.Parse(_Item["state_id"].ToString());
                        SM.table_id_main = Int32.Parse(_Item["table_id_main"].ToString());
                        SM.table_id_second = Int32.Parse(_Item["table_id_second"].ToString());
                        ul.Add(SM);
                    }
                    con.Close();
                }
                
            }
            return Json(ul, JsonRequestBehavior.AllowGet);
        }

        private DataTable GetConfigTable(string table_id)
        {
            UtilityController uc = new UtilityController();
            DataTable _Dt = new DataTable();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "SELECT table_name, display FROM [TT1995_CheckList].[dbo].[config_table] where table_id = " + table_id;
                SqlCommand cmd = new SqlCommand(_SQL, con);
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(_Dt);
                da.Dispose();               
                con.Close();
            }
            return _Dt;
        }

        #endregion
    }
}