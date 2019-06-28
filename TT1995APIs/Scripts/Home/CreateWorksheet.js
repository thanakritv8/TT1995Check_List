$(function () {
    var customer_current_select;
    var branch_current_select;
    var formWidget = $("#form").dxForm({

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
                editorType: "dxTextBox",
                label: {
                    text: formData.label_address,

                },
                editorOptions: {
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

                    height: 90
                }
            },
            ]
        },
        ]
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

    function show_grid_product(bs_id) {
        var data_product_filter = product.filter(function (arr) {
            return arr.bs_id == bs_id;
        });
        // console.log(data_contact_filter);
        grid_product.option('dataSource', data_product_filter);
    }

    var grid_product = $("#grid_product").dxDataGrid({
        // dataSource: product,
        keyExpr: "pro_id",
        editing: {
            allowUpdating: true, // Enables editing
            allowAdding: true, // Enables insertion
            allowDeleting: true // Enables removing
        },
        showBorders: true
    }).dxDataGrid("instance");

    function show_popup(e, title, table) {
        console.log(e);
        popup_add_customer.option('title', title);
        popup_add_customer._options.contentTemplate = function (content) {
            var maxHeight = $("#popup_add_customer .dx-overlay-content").height() - 150;
            content.append("<div id='grid_add_data' style='max-height: " + maxHeight + "px;' ></div>");
        }

        $("#popup_add_customer").dxPopup("show");

        if (table == 'customer') {
            show_grid_in_popup(columns_add_customer, customer_select);
        } else if (table == 'branch') {
            show_grid_in_popup(columns_add_branch, branch_select.filter(function (arr) { return arr.cs_id == customer_current_select; }));
        } else if (table == 'contact') {
            show_grid_in_popup(columns_add_contact, contact_select.filter(function (arr) { return arr.bs_id == branch_current_select; }));
        }

    }

    function filter(data_full) {
        var data_filter = data_full.filter(function (arr) { return arr.bs_id == bs_id; });
        return data_product_filter;
    }

    function show_grid_in_popup(show_column, data_source) {
        var grid_add_data = $("#grid_add_data").dxDataGrid({
            dataSource: data_source,
            columns: show_column,
            editing: {
                allowUpdating: true,
                allowAdding: true,
                allowDeleting: true
            },
            showBorders: true,
            height: 'auto',
            scrolling: {
                mode: "virtual"
            },
            searchPanel: {
                visible: true,
                width: "auto",
                placeholder: "Search..."
            }
        }).dxDataGrid('instance');
    }

    var popup_add_customer = $("#popup_add_customer").dxPopup({
        visible: false,
        width: "60%",
        height: "70%",
        showTitle: true,
        title: "ประวัติ",
        contentTemplate: function (content) {
            return $("<div id='grid_add_data'>test</div>");
        }
    }).dxPopup("instance");




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

var product = [
    {
        pro_id: 1,
        name: 'CO2',
        condition: '18 ตัน ควรโหลดไม่เกิน 18.50 ตัน',
        style_transport: 'บรรจุถัง ขนส่งทางบก บร',
        method_pack: 'บรรจุถัง',
        fleet: 'ต่างประเทศ',
        truck_number: 'A123-9807-009',
        special_method: '- รอถังเย็นก่อนโหลดงาน 30 นาที',
        supplement_method: '- รองไม้ที่ล้อ กันรถไหล',
        bs_id: 1
    },
    {
        pro_id: 2,
        name: '',
        condition: '',
        style_transport: '',
        method_pack: '',
        fleet: '',
        truck_number: '',
        special_method: '',
        supplement_method: '',
        bs_id: 2
    },
    {
        pro_id: 3,
        name: '',
        condition: '',
        style_transport: '',
        method_pack: '',
        fleet: '',
        truck_number: '',
        special_method: '',
        supplement_method: '',
        bs_id: 3
    },
    {
        pro_id: 4,
        name: '',
        condition: '',
        style_transport: '',
        method_pack: '',
        fleet: '',
        truck_number: '',
        special_method: '',
        supplement_method: '',
        bs_id: 4
    },
    {
        pro_id: 5,
        name: '',
        condition: '',
        style_transport: '',
        method_pack: '',
        fleet: '',
        truck_number: '',
        special_method: '',
        supplement_method: '',
        bs_id: 5
    },
];

var columns_add_customer = [
    {
        dataField: "name",
        caption: "ชื่อ",
    }
];

var columns_add_branch = [
    {
        dataField: "branch",
        caption: "สาขา",
    },
    {
        dataField: "house_no",
        caption: "เลขที่",
    },
    {
        dataField: "sub_district",
        caption: "ตำบล",
    },
    {
        dataField: "district",
        caption: "อำเภอ",
    },
    {
        dataField: "province",
        caption: "จังหวัด",
    },
    {
        dataField: "country",
        caption: "ประเทศ",
    },
];

var columns_add_contact = [
    {
        dataField: "branch",
        caption: "สาขา",
    },
    {
        dataField: "house_no",
        caption: "เลขที่",
    },
    {
        dataField: "sub_district",
        caption: "ตำบล",
    },
    {
        dataField: "district",
        caption: "อำเภอ",
    },
    {
        dataField: "province",
        caption: "จังหวัด",
    },
    {
        dataField: "postcode",
        caption: "รหัสไปษณี",
    },
    {
        dataField: "country",
        caption: "ประเทศ",
    },
];

var columns_add_contact = [
    {
        dataField: "cus_name",
        caption: "ชื่อ",
    },
    {
        dataField: "position",
        caption: "ตำแหน่ง",
    },
    {
        dataField: "line",
        caption: "ไลน์",
    },
    {
        dataField: "tel",
        caption: "โทร",
    },
    {
        dataField: "email",
        caption: "อีเมล์",
    },
]

var form = $("#example-advanced-form").show();
form.steps({
    headerTag: "h3",
    bodyTag: "fieldset",
    transitionEffect: "slideLeft",
    onStepChanging: function (event, currentIndex, newIndex) {
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