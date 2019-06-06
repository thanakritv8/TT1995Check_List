using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TT1995APIs.Models.Account;

namespace TT1995APIs.Controllers
{
    public class AccountController : Controller
    {
        public JsonResult CheckLogin(string username, string password)
        {
            UtilityController uc = new UtilityController();
            List<AccountStatusModels> ul = new List<AccountStatusModels>();
            using (SqlConnection con = uc.ConnectDatabase(Properties.Settings.Default.IPAddress, Properties.Settings.Default.Username, Properties.Settings.Default.Password))
            {
                string _SQL = "SELECT * FROM [TT1995].[dbo].[account] where username = '" + username + "' and password = '" + uc.EncryptSHA256Managed(password) + "'";
                using (SqlCommand cmd = new SqlCommand(_SQL, con))
                {
                    DataTable _Dt = new DataTable();
                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    da.Fill(_Dt);
                    da.Dispose();
                    if (_Dt.Rows.Count > 0)
                    {
                        AccountStatusModels ASM = new AccountStatusModels();
                        ASM.user_id = Int32.Parse(_Dt.Rows[0]["user_id"].ToString());
                        ASM.username = _Dt.Rows[0]["username"].ToString();
                        ASM.firstname = _Dt.Rows[0]["firstname"].ToString();
                        ASM.lastname = _Dt.Rows[0]["lastname"].ToString();
                        ASM.group_id = Int32.Parse(_Dt.Rows[0]["group_id"].ToString());
                        ASM.login_status = 1;
                        List<PermissionAccountModels> ulPAM = new List<PermissionAccountModels>();
                        
                        _SQL = "SELECT p.application_id, p.permission_status, ct.display FROM [TT1995_CheckList].[dbo].[permission] as p join [TT1995_CheckList].[dbo].[config_table] as ct where p.group_id = " + ASM.group_id;
                        using (SqlCommand cmd_permission = new SqlCommand(_SQL, con))
                        {
                            DataTable _Dt_Permission = new DataTable();
                            SqlDataAdapter da_Permission = new SqlDataAdapter(cmd_permission);
                            da_Permission.Fill(_Dt_Permission);
                            da_Permission.Dispose();
                            foreach (DataRow _Item in _Dt_Permission.Rows)
                            {
                                PermissionAccountModels PAM = new PermissionAccountModels();
                                PAM.application_id = Int32.Parse(_Item["application_id"].ToString());
                                PAM.application_name = _Item["display"].ToString();
                                PAM.access_status = Int32.Parse(_Item["permission_status"].ToString()); ;
                                ulPAM.Add(PAM);
                            }
                        }
                        ASM.permission = ulPAM;                       
                        ul.Add(ASM);
                    }                    
                }
                con.Close();
            }
            return Json(ul, JsonRequestBehavior.AllowGet);
        }
    }
}