using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TT1995APIs.Models.Account
{
    public class AccountStatusModels
    {
        public int user_id { get; set; }
        public string username { get; set; }
        public string firstname { get; set; }
        public string lastname { get; set; }
        public int group_id { get; set; }
        public int login_status { get; set; }
        public List<PermissionAccountModels> permission { get; set; }
    }

    public class PermissionAccountModels
    {
        public int application_id { get; set; }
        public string application_name { get; set; }
        public int access_status { get; set; }
    }
}