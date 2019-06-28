$(function () {

    // Customer Form
    var customer_current_select;
    var branch_current_select;
    var formWidget = $("#form_1").dxForm({
        formData: formData,
        readOnly: false,
        showColonAfterLabel: true,
        showValidationSummary: true,
        validationGroup: "customerData",
        items: [{
            itemType: "group",
            //caption: "Customer",
            colCount: 10,
            items: [{
                dataField: "name",
                editorType: "dxSelectBox",
                editorOptions: {
                    // dataSource: customer_select,
                    dataSource: customer_select,
                    key: "cs_id",
                    displayExpr: 'name',
                    valueExpr: 'cs_id',
                    onValueChanged: function (e) {
                        console.log(formWidget);
                        var previousValue = e.previousValue;
                        var newValue = e.value;
                        customer_current_select = e.value;
                        branch_current_select = 0;
                        show_branch(newValue);
                        console.log(formWidget._options.items[0]);
                    }
                },

                label: {
                    text: formData.label_name
                },
                colSpan: 10
            },
            {
                dataField: "branch",
                editorType: "dxSelectBox",
                editorOptions: {
                    // dataSource: branch_select,
                    key: "bs_id",
                    displayExpr: 'branch',
                    valueExpr: 'bs_id',
                    onValueChanged: function (e) {
                        console.log(e);
                        var previousValue = e.previousValue;
                        var newValue = e.value;
                        branch_current_select = e.value;
                        show_address(newValue);
                        show_contact(newValue);
                        //show_grid_product(newValue);
                    }
                },
                label: {
                    text: formData.label_branch
                },
                colSpan: 10
            },
            {
                colSpan: 10,
                dataField: "address",
                editorType: "dxTextArea",
                label: {
                    text: formData.label_address,
                },
                editorOptions: {
                    height: 90,
                    readOnly: true
                }

            },
            {
                colSpan: 10,
                dataField: "contact",
                editorType: "dxSelectBox",
                editorOptions: {
                    key: "cons_id",
                    displayExpr: 'cus_name',
                    valueExpr: 'cons_id',
                    onValueChanged: function (e) {
                        console.log(e);
                        var previousValue = e.previousValue;
                        var newValue = e.value;

                        show_data_contact(newValue);
                    }
                },
                label: {
                    text: formData.label_contact,
                },
            },
            {
                colSpan: 10,
                dataField: "data_contact",
                editorType: "dxTextArea",
                label: {
                    text: formData.label_data_contact,

                },
                editorOptions: {
                    height: 90,
                    readOnly: true
                }
            },
            ]
        },
        ]
    }).dxForm("instance");
    // End Customer Form

    // Truck Form
    var form_2 = $("#form_2").dxForm({
        formData: formData,
        readOnly: false,
        showColonAfterLabel: true,
        showValidationSummary: true,
        validationGroup: "customerData",
        items: [{
            itemType: "group",
            colCount: 10,
            items: [
                {
                    dataField: "truck_head",
                    editorType: "dxSelectBox",
                    editorOptions: {
                        dataSource: truck_head_select,
                        key: "license_id",
                        displayExpr: 'license_car',
                        valueExpr: 'license_id',
                        onValueChanged: function (e) {
                            console.log(form_2);
                            var previousValue = e.previousValue;
                            var newValue = e.value;
                        }
                    },

                    label: {
                        text: formData.label_truck_head
                    },
                    colSpan: 10
                },
                {
                    dataField: "truck_tail",
                    editorType: "dxSelectBox",
                    editorOptions: {
                        dataSource: truck_tail_select,
                        key: "license_id",
                        displayExpr: 'license_car',
                        valueExpr: 'license_id',
                        onValueChanged: function (e) {
                            console.log(form_2);
                            var previousValue = e.previousValue;
                            var newValue = e.value;
                        }
                    },

                    label: {
                        text: formData.label_truck_tail
                    },
                    colSpan: 10
                },
            ]
        }]
    }).dxForm("instance");
    // End Truck Form

    // Driver Form
    $("#form_3").dxDataGrid({
        dataSource: driver,
        columns: [
          {
              dataField: "Check",
              caption: "เลือก",
              dataType: "boolean",
              width: 100
          },
          {
              dataField: "driver_name",
              caption: "ชื่อ",
          }
        ]
    }
    )
    //End Driver Form

    // Document Form
    $("#form_4").dxDataGrid({
        dataSource: document_tran,
        columns: [      
          {
              dataField: "doc_name",
              caption: "ชื่อเอกสาร"
          },
          {
              dataField: "check_go",
              caption: "ไป",
              dataType: "boolean"
          }
          ,
          {
              dataField: "check_back",
              caption: "กลับ",
              dataType: "boolean"
          }
        ]
    }
    )
    // End Document Form

    // Equip Transport
    $("#form_5").dxDataGrid({
        dataSource: equipment_transport,
        columns: [
          {
              dataField: "Check",
              caption: "เลือก",
              dataType: "boolean",
              width: 100
          },
          {
              dataField: "eq_name",
              caption: "ชื่ออุปกรณ์ขนส่ง",
          }
        ]
    }
    )
    // End Equip Transport

    // Equip Safety
    $("#form_6").dxDataGrid({
        dataSource: equipment_safety,
        columns: [
          {
              dataField: "Check",
              caption: "เลือก",
              dataType: "boolean",
              width: 100
          },
          {
              dataField: "eq_name",
              caption: "ชื่ออุปกรณ์เซฟตี้",
          }
        ]
    }
    )
    // End Equip Safety

    var form_7 = $("#form_7").dxForm({
        formData: formData,
        readOnly: false,
        showColonAfterLabel: true,
        showValidationSummary: true,
        validationGroup: "customerData",
        items: [{
            itemType: "group",
            colCount: 10,
            items: [
                {
                    colSpan: 10,
                    dataField: "method_special",
                    editorType: "dxTextArea",
                    label: {
                        text: formData.label_method_special
                    },
                    editorOptions: {
                        height: 90
                    }
                },
                {
                    colSpan: 10,
                    dataField: "method_supply",
                    editorType: "dxTextArea",
                    label: {
                        text: formData.labelmethod_supply
                    },
                    editorOptions: {
                        height: 90
                    }
                }
            ]
        }]
    }).dxForm("instance");
   
    function show_branch(cs_id) {
        // alert(cs_id);
        var data_branch_filter = branch_select.filter(function (arr) {
            return arr.cs_id == cs_id;
        });
        formWidget.option('items[0].items[1].editorOptions.dataSource', data_branch_filter);

    }

    function show_address(bs_id) {
        var data_branch_filter = branch_select.filter(function (arr) {
            return arr.bs_id == bs_id;
        });
        console.log(data_branch_filter[0]);
        formWidget.option('items[0].items[2].editorOptions.value', data_branch_filter[0].house_no + ', ' + data_branch_filter[0].sub_district + ', ' + data_branch_filter[0].district + ', ' + data_branch_filter[0].province + ', ' + data_branch_filter[0].postcode + ', ' + data_branch_filter[0].country);
    }

    function show_contact(bs_id) {
        var data_contact_filter = contact_select.filter(function (arr) {
            return arr.bs_id == bs_id;
        });

        formWidget.option('items[0].items[3].editorOptions.dataSource', data_contact_filter);
    }

    function show_data_contact(cons_id) {
        var data_contact_filter = contact_select.filter(function (arr) {
            return arr.cons_id == cons_id;
        });
        // console.log(data_contact_filter);
        formWidget.option('items[0].items[4].editorOptions.value', 'ตำแหน่ง: ' + data_contact_filter[0].position + ', ไลน์ไอดี: ' + data_contact_filter[0].line + ', โทร: ' + data_contact_filter[0].tel + ', อีเมล์: ' + data_contact_filter[0].email);
    }

});


var formData = {
    "name": "",
    "label_name": "เลือกลูกค้า",
    "branch": "",
    "label_branch": "เลือกสาขา",
    "address": "",
    "label_address": "ที่อยู่",
    "contact": "",
    "label_contact": "เลือกผู้ติดต่อ",
    "data_contact": "",
    "label_data_contact": "ข้อมูลติดต่อ",
    "truck_head": "",
    "label_truck_head": "เลือกหัวลาก",
    "truck_tail": "",
    "label_truck_tail": "เลือกหางกึ่งพ่วง",
    "method_special": "",
    "label_method_special": "วิธีการพิเศษ (ควบคุมเฉพาะงาน)",
    "method_supply": "",
    "labelmethod_supply": "วิธีการเสริม (คำแนะนำ)"
    // "Date": null,
    // "Country": "",
    // "City": "",
    // "Address": "",
    // "Phone": "",
    // "Accepted": false
};

var countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'The Bahamas'
    , 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso'
    , 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Democratic Republic of the Congo'
    , 'Republic of the Congo', 'Costa Rica', 'Ivory Coast', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador'
    , 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'The Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada'
    , 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Republic of Ireland', 'Israel', 'Italy', 'Jamaica'
    , 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'North Korea', 'South Korea', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein'
    , 'Lithuania', 'Luxembourg', 'Republic of Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico'
    , 'Federated States of Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Kingdom of the Netherlands', 'New Zealand'
    , 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palau', 'State of Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal'
    , 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'São Tomé and Príncipe', 'Saudi Arabia'
    , 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan'
    , 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu'
    , 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];

var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia", "Phoenix", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Indianapolis",
    "Jacksonville", "San Francisco", "Columbus", "Charlotte", "Fort Worth", "Detroit", "El Paso", "Memphis", "Seattle", "Denver", "Washington", "Boston", "Nashville",
    "Baltimore", "Oklahoma City", "Louisville", "Portland", "Las Vegas", "Milwaukee", "Albuquerque", "Tucson", "Fresno", "Sacramento", "Long Beach", "Kansas City", "Mesa"
    , "Virginia Beach", "Atlanta", "Colorado Springs", "Omaha", "Raleigh", "Miami", "Oakland", "Minneapolis", "Tulsa", "Cleveland", "Wichita", "Arlington", "New Orleans",
    "Bakersfield", "Tampa", "Honolulu", "Aurora", "Anaheim", "Santa Ana", "St. Louis", "Riverside", "Corpus Christi", "Lexington", "Pittsburgh", "Anchorage", "Stockton",
    "Cincinnati", "Saint Paul", "Toledo", "Greensboro", "Newark", "Plano", "Henderson", "Lincoln", "Buffalo", "Jersey City", "Chula Vista", "Fort Wayne", "Orlando",
    "St. Petersburg", "Chandler", "Laredo", "Norfolk", "Durham", "Madison", "Lubbock", "Irvine", "Winston–Salem", "Glendale", "Garland", "Hialeah", "Reno", "Chesapeake",
    "Gilbert", "Baton Rouge", "Irving", "Scottsdale", "North Las Vegas", "Fremont", "Boise", "Richmond"];

var customer_select = [
    {
        cs_id: 1,
        name: "TRT"
    }, {
        cs_id: 2,
        name: "Maxxis"
    }, {
        cs_id: 3,
        name: "Thai Summit"
    }
];

var branch_select = [
    {
        bs_id: 1,
        branch: "ปลวกแดง",
        // address:"7/114 หมู่ 4 นิคมอุตสาหกรรมอมตะซิตี้ ตำบลมาบยางพร อำเภอปลวกแดง",
        country: 'ไทย',
        province: "ระยอง",
        district: "ปลวกแดง",
        sub_district: "มาบยางพร",
        house_no: "7/114",
        postcode: '21140',

        cs_id: 1,
    },
    {
        bs_id: 2,
        branch: "ปลวกแดง",
        // address:"300/1 หมู่ 1 นิคมอุตสาหกรรมอีสเทิร์นซีบอร์ด ตำบลตาสิทธิ์ อำเภอปลวกแดง",
        country: 'ไทย',
        province: "ระยอง",
        district: "ปลวกแดง",
        sub_district: "ตาสิทธิ์",
        house_no: "300/1",
        postcode: '21140',
        cs_id: 2,
    },
    {
        bs_id: 3,
        branch: "ปลวกแดง",
        // address:"500/9, ตาสิทธิ์, ปลวกแดง, ",
        country: 'ไทย',
        province: "ระยอง",
        district: "ปลวกแดง",
        sub_district: "ตาสิทธิ์",
        house_no: "500/9",
        postcode: '21140',
        cs_id: 3,
    },
    {
        bs_id: 4,
        branch: "ปิ่นทอง",
        // address:"150/14,16-20, หนองขาม, ศรีราชา, ชลบุรี 20110",
        country: 'ไทย',
        province: "ชลบุรี",
        district: "ศรีราชา",
        sub_district: "หนองขาม",
        house_no: "150/14,16-20",
        postcode: '20110',
        cs_id: 3,
    },
    {
        bs_id: 5,
        branch: "แหลมฉบัง",
        // address:"202 ม.3 นิคมอุตสาหกรรมแหลมฉบัง ต.ทุ่งสุขลา อ.ศรีราชา",
        country: 'ไทย',
        province: "ชลบุรี",
        district: "ศรีราชา",
        sub_district: "ทุ่งสุขลา",
        house_no: "202",
        postcode: '20230',
        cs_id: 3,
    },
];

var contact_select = [{
    cons_id: 1,
    cus_name: 'ธนกฤต จินะการณ์',
    position: 'staff',
    line: '1hz',
    tel: '0970268120',
    email: 'thanakritv8@gmail.com',
    bs_id: 1
}, {
    cons_id: 2,
    cus_name: 'จารุวรรณ จันดี',
    position: 'staff',
    line: 'jaruwan',
    tel: '0887704772',
    email: 'jaruwan@gmail.com',
    bs_id: 2
}, {
    cons_id: 3,
    cus_name: 'Joey Doodee',
    position: 'staff',
    line: 'joey',
    tel: '0878675432',
    email: 'Joey@gmail.com',
    bs_id: 3
}, {
    cons_id: 4,
    cus_name: 'นรสิง ตีลังกา',
    position: 'staff',
    line: 'norasing',
    tel: '0832234512',
    email: 'norasing@gmail.com',
    bs_id: 4
}, {
    cons_id: 5,
    cus_name: 'มอส สายระยอง',
    position: 'staff',
    line: 'mos',
    tel: '0855546789',
    email: 'mos@gmail.com',
    bs_id: 5
}
];

var truck_head_select = [
    {
        "license_id": 2,
        "number_car": 14,
        "license_car": "70-2175",
        "mi_expired": "11/22/2019",
        "ai_expired": "NULL",
        "ei_expired": "NULL",
        "dpi_expired": "4/30/2019",
        "tax_expired": "6/30/2019",
        "lcf_expired": "View"
    },
    {
        "license_id": 9,
        "number_car": 9,
        "license_car": "70-2018",
        "mi_expired": "2/7/2019",
        "ai_expired": "NULL",
        "ei_expired": "NULL",
        "dpi_expired": "5/1/2020",
        "tax_expired": "12/31/2019",
        "lcf_expired": "View"
    },
    {
        "license_id": 11,
        "number_car": 1,
        "license_car": "70-2174",
        "mi_expired": "10/21/2019",
        "ai_expired": "6/30/2020",
        "ei_expired": "NULL",
        "dpi_expired": "4/30/2019",
        "tax_expired": "6/30/2019",
        "lcf_expired": "View"
    },
    {
        "license_id": 13,
        "number_car": 17,
        "license_car": "70-2397",
        "mi_expired": "9/17/2019",
        "ai_expired": "9/30/2018",
        "ei_expired": "NULL",
        "dpi_expired": "NULL",
        "tax_expired": "9/30/2019",
        "lcf_expired": "View"
    },
    {
        "license_id": 14,
        "number_car": 3,
        "license_car": "70-2477",
        "mi_expired": "9/25/2019",
        "ai_expired": "6/30/2020",
        "ei_expired": "NULL",
        "dpi_expired": "6/16/2019",
        "tax_expired": "6/30/2019",
        "lcf_expired": "View"
    },
    {
        "license_id": 15,
        "number_car": 5,
        "license_car": "70-2287",
        "mi_expired": "NULL",
        "ai_expired": "6/17/2019",
        "ei_expired": "NULL",
        "dpi_expired": "NULL",
        "tax_expired": "2/26/2019",
        "lcf_expired": "View"
    },
    {
        "license_id": 16,
        "number_car": 6,
        "license_car": "70-1660",
        "mi_expired": "9/2/2019",
        "ai_expired": "3/31/2020",
        "ei_expired": "NULL",
        "dpi_expired": "4/30/2019",
        "tax_expired": "3/31/2020",
        "lcf_expired": "View"
    },
    {
        "license_id": 17,
        "number_car": 60,
        "license_car": "70-7569",
        "mi_expired": "10/31/2019",
        "ai_expired": "9/30/2019",
        "ei_expired": "NULL",
        "dpi_expired": "NULL",
        "tax_expired": "9/30/2019",
        "lcf_expired": "View"
    },
    {
        "license_id": 18,
        "number_car": 12,
        "license_car": "70-2039",
        "mi_expired": "8/9/2019",
        "ai_expired": "6/30/2020",
        "ei_expired": "NULL",
        "dpi_expired": "5/1/2020",
        "tax_expired": "6/28/2018",
        "lcf_expired": "View"
    },
    {
        "license_id": 19,
        "number_car": 10,
        "license_car": "70-2531",
        "mi_expired": "8/15/2019",
        "ai_expired": "6/30/2020",
        "ei_expired": "NULL",
        "dpi_expired": "4/30/2019",
        "tax_expired": "6/30/2019",
        "lcf_expired": "View"
    },
    {
        "license_id": 20,
        "number_car": 8,
        "license_car": "70-1934",
        "mi_expired": "8/9/2019",
        "ai_expired": "3/31/2020",
        "ei_expired": "NULL",
        "dpi_expired": "4/30/2020",
        "tax_expired": "3/31/2020",
        "lcf_expired": "View"
    },
    {
        "license_id": 22,
        "number_car": 22,
        "license_car": "70-3019",
        "mi_expired": "9/10/2019",
        "ai_expired": "6/30/2020",
        "ei_expired": "NULL",
        "dpi_expired": "4/30/2019",
        "tax_expired": "6/30/2019",
        "lcf_expired": "View"
    },
    {
        "license_id": 23,
        "number_car": 20,
        "license_car": "70-9093",
        "mi_expired": "4/18/2020",
        "ai_expired": "6/30/2020",
        "ei_expired": "NULL",
        "dpi_expired": "NULL",
        "tax_expired": "6/30/2019",
        "lcf_expired": "View"
    },
    {
        "license_id": 24,
        "number_car": 21,
        "license_car": "70-2808",
        "mi_expired": "3/28/2020",
        "ai_expired": "3/31/2019",
        "ei_expired": "12/15/2019",
        "dpi_expired": "5/1/2020",
        "tax_expired": "3/31/2020",
        "lcf_expired": "View"
    },
    {
        "license_id": 25,
        "number_car": 19,
        "license_car": "70-1262",
        "mi_expired": "3/14/2020",
        "ai_expired": "3/31/2019",
        "ei_expired": "NULL",
        "dpi_expired": "4/30/2019",
        "tax_expired": "3/31/2020",
        "lcf_expired": "View"
    },
    {
        "license_id": 26,
        "number_car": 7,
        "license_car": "70-1936",
        "mi_expired": "11/7/2019",
        "ai_expired": "3/31/2020",
        "ei_expired": "NULL",
        "dpi_expired": "4/30/2019",
        "tax_expired": "3/31/2019",
        "lcf_expired": "View"
    },
    {
        "license_id": 28,
        "number_car": 23,
        "license_car": "70-2782",
        "mi_expired": "8/18/2019",
        "ai_expired": "3/31/2019",
        "ei_expired": "12/15/2019",
        "dpi_expired": "5/1/2020",
        "tax_expired": "3/31/2020",
        "lcf_expired": "View"
    }
];

var truck_tail_select = [
    {
        "license_id": 96,
        "number_car": "T-020-S2",
        "license_car": "70-2132",
        "mi_expired": "NULL",
        "ai_expired": "12/31/2019",
        "ei_expired": "NULL",
        "dpi_expired": "NULL",
        "tax_expired": "12/31/2019",
        "lcf_expired": "View"
    },
        {
            "license_id": 97,
            "number_car": "T-001",
            "license_car": "71-8614",
            "mi_expired": "5/17/2019",
            "ai_expired": "6/30/2019",
            "ei_expired": "NULL",
            "dpi_expired": "NULL",
            "tax_expired": "NULL",
            "lcf_expired": "View"
        },
        {
            "license_id": 98,
            "number_car": "T-002",
            "license_car": "71-1468",
            "mi_expired": "5/17/2020",
            "ai_expired": "3/31/2020",
            "ei_expired": "NULL",
            "dpi_expired": "NULL",
            "tax_expired": "3/30/2020",
            "lcf_expired": "View"
        },
        {
            "license_id": 99,
            "number_car": "T-003",
            "license_car": "71-1469",
            "mi_expired": "5/17/2020",
            "ai_expired": "3/31/2020",
            "ei_expired": "NULL",
            "dpi_expired": "NULL",
            "tax_expired": "3/30/2020",
            "lcf_expired": "View"
        },
        {
            "license_id": 100,
            "number_car": "T-019",
            "license_car": "71-6101",
            "mi_expired": "5/16/2020",
            "ai_expired": "12/31/2019",
            "ei_expired": "NULL",
            "dpi_expired": "NULL",
            "tax_expired": "12/31/2019",
            "lcf_expired": "View"
        },
        {
            "license_id": 101,
            "number_car": "T-004",
            "license_car": "71-1470",
            "mi_expired": "5/17/2020",
            "ai_expired": "3/31/2019",
            "ei_expired": "NULL",
            "dpi_expired": "NULL",
            "tax_expired": "3/31/2020",
            "lcf_expired": "View"
        },
        {
            "license_id": 102,
            "number_car": "T-018",
            "license_car": "71-6534",
            "mi_expired": "5/16/2020",
            "ai_expired": "6/30/2020",
            "ei_expired": "NULL",
            "dpi_expired": "NULL",
            "tax_expired": "6/30/2019",
            "lcf_expired": "View"
        },
        {
            "license_id": 103,
            "number_car": "T-005",
            "license_car": "71-1466",
            "mi_expired": "5/17/2020",
            "ai_expired": "3/31/2019",
            "ei_expired": "NULL",
            "dpi_expired": "NULL",
            "tax_expired": "3/30/2020",
            "lcf_expired": "View"
        },
        {
            "license_id": 104,
            "number_car": "T-017",
            "license_car": "71-6579",
            "mi_expired": "5/16/2020",
            "ai_expired": "6/30/2019",
            "ei_expired": "NULL",
            "dpi_expired": "NULL",
            "tax_expired": "3/30/2020",
            "lcf_expired": "View"
        }
];

var driver = [
    {
        "driver_id": 28,
        "driver_name": "เอกพันธ์  ฮวบขุนทด",
        "dlot_expired": "NULL",
        "dlngt_expired": "NULL",
        "dldot_expired": "6/23/2019",
        "dl_expired": "View",
        "lf_expired": "View",
        "pas_expired": "View"
    },
    {
        "driver_id": 29,
        "driver_name": "มานพ   ทองเทพ",
        "dlot_expired": "12/5/2019",
        "dlngt_expired": "NULL",
        "dldot_expired": "NULL",
        "dl_expired": "View",
        "lf_expired": "View",
        "pas_expired": "View"
    },
    {
        "driver_id": 30,
        "driver_name": "แสวง  โสขะ",
        "dlot_expired": "6/23/2020",
        "dlngt_expired": "NULL",
        "dldot_expired": "NULL",
        "dl_expired": "View",
        "lf_expired": "View",
        "pas_expired": "View"
    },
    {
        "driver_id": 31,
        "driver_name": "สมหวัง  โสขะ",
        "dlot_expired": "NULL",
        "dlngt_expired": "NULL",
        "dldot_expired": "NULL",
        "dl_expired": "View",
        "lf_expired": "View",
        "pas_expired": "View"
    }
];

var equipment_transport = [{
    eq_tran_id: 1,
    eq_name: "ซัฟฟอร์ตเหล็กคอย",
    basic_equipment: 1

}, {
    eq_tran_id: 2,
    eq_name: "เหล็กเสียบข้างพร้อมโซ่",
    basic_equipment: 1
}, {
    eq_tran_id: 3,
    eq_name: "สเตย์ผ้าใบ",
    basic_equipment: 0
}, {
    eq_tran_id: 4,
    eq_name: "โซ่+เกลียวเร่ง",
    basic_equipment: 0

}, {
    eq_tran_id: 5,
    eq_name: "ผ้าใบบาง-ชั้นใน ขนาด 5x7 เมตร",
    basic_equipment: 1
}, {
    eq_tran_id: 6,
    eq_name: "ผ้าใบหนา-ชั้นนอก 5x7 เมตร",
    basic_equipment: 0
}, {
    eq_tran_id: 7,
    eq_name: "ผ้าใบหนา-ชั้นนอก 5x16 เมตร",
    basic_equipment: 1
}];

var equipment_safety = [{
    eq_safety_id: 1,
    eq_name: "หมวกนิรภัย",
}, {
    eq_safety_id: 2,
    eq_name: "หน้ากากนิรภัย",
}, {
    eq_safety_id: 3,
    eq_name: "แว่นตานิรภัย",
}, {
    eq_safety_id: 4,
    eq_name: "เอียร์ปลั๊ก",
}, {
    eq_safety_id: 5,
    eq_name: "ถุงมือนิรภัย",
}, {
    eq_safety_id: 6,
    eq_name: "รองเท้าเซฟตัี้",
}, {
    eq_safety_id: 7,
    eq_name: "เสื้อสะท้อนแสง",
}, {
    eq_safety_id: 8,
    eq_name: "สายรัดป้องกันตกจากที่สูง",
}];

var document_tran = [
    {
        "doc_id": 1,
        "doc_name": "DO"
    },
    {
        "doc_id": 2,
        "doc_name": "บัตรชั่ง"
    },
    {
        "doc_id": 3,
        "doc_name": "COA"
    },
    {
        "doc_id": 4,
        "doc_name": "MSDS"
    }
];

var form = $("#example-advanced-form").show();
form.steps({
    headerTag: "h3",
    bodyTag: "fieldset",
    transitionEffect: "slideLeft",
    onStepChanging: function (event, currentIndex, newIndex) {
        return true;
        /*
        // Allways allow previous action even if the current form is not valid!
        if (currentIndex > newIndex) {
            return true;
        }
        // Forbid next action on "Warning" step if the user is to young
        if (newIndex === 3 && Number($("#age-2").val()) < 18) {
            return false;
        }
        // Needed in some cases if the user went back (clean up)
        if (currentIndex < newIndex) {
            // To remove error styles
            form.find(".body:eq(" + newIndex + ") label.error").remove();
            form.find(".body:eq(" + newIndex + ") .error").removeClass("error");
        }
        form.validate().settings.ignore = ":disabled,:hidden";
        return form.valid();
        */
    },
    onStepChanged: function (event, currentIndex, priorIndex) {
        // Used to skip the "Warning" step if the user is old enough.
        if (currentIndex === 2 && Number($("#age-2").val()) >= 18) {
            form.steps("next");
        }
        // Used to skip the "Warning" step if the user is old enough and wants to the previous step.
        if (currentIndex === 2 && priorIndex === 3) {
            form.steps("previous");
        }
    },
    onFinishing: function (event, currentIndex) {
        form.validate().settings.ignore = ":disabled";
        return form.valid();
    },
    onFinished: function (event, currentIndex) {
        alert("Submitted!");
    }
}).validate({
    errorPlacement: function errorPlacement(error, element) { element.before(error); },
    rules: {
        confirm: {
            equalTo: "#password-2"
        }
    }
});