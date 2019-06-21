$(function () {

    $("#example-basic").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        autoFocus: true
    });

    var previuos_menu = 'trans_equip';

    function getcustomer() {
        $.ajax({
            type: "POST",
            url: "../Home/GetCustomer",
            dataType: "json",
            async: false,
            success: function (data) {
                console.log(data);
                dataGrid.option("dataSource", data);
            },
            complete: function (jqXHR) {
                console.log(jqXHR.status);
            },
            error: function (e) {
                console.log(e);
            }
        });
    }

    function getcountry() {
        $.ajax({
            type: "POST",
            url: "../Home/GetCountry",
            dataType: "json",
            async: false,
            success: function (data) {
                console.log(data);
                dataGrid.option("dataSource", data);
            },
            complete: function (jqXHR) {
                console.log(jqXHR.status);
            },
            error: function (e) {
                console.log(e);
            }
        });
    }

    function gettransequip() {
        console.log(equipment_transport);
        dataGrid.option("dataSource", equipment_transport);
    }

    var dataGrid = $("#gridContainer").dxDataGrid({
        //dataSource: customers,
        // columns: ["customer_id", "customer_name"],
        showBorders: true
    }).dxDataGrid("instance");
    gettransequip();

    $('#trans_equip').click(function () {
        $('#' + previuos_menu).removeClass("active");
        previuos_menu = 'trans_equip';
        $('#' + previuos_menu).addClass("active");
        gettransequip();
    });
    $('#customer').click(function () {
        $('#' + previuos_menu).removeClass("active");
        previuos_menu = 'customer';
        $('#' + previuos_menu).addClass("active");
        getcustomer();
    });
    $('#safety').click(function () {
        $('#' + previuos_menu).removeClass("active");
        previuos_menu = 'safety';
        $('#' + previuos_menu).addClass("active");
        getcustomer();
    });
});

var equipment_transport = [{
    eq_tran_id: 1,
    eq_name: "ซัฟฟอร์ตเหล็กคอย"
}, {
    eq_tran_id: 2,
    eq_name: "เหล็กเสียบข้างพร้อมโซ่"
}, {
    eq_tran_id: 3,
    eq_name: "สเตย์ผ้าใบ"
}, {
    eq_tran_id: 4,
    eq_name: "โซ่+เกลียวเร่ง"
}, {
    eq_tran_id: 5,
    eq_name: "ผ้าใบบาง-ชั้นใน ขนาด 5x7 เมตร"
}, {
    eq_tran_id: 6,
    eq_name: "ผ้าใบหนา-ชั้นนอก 5x7 เมตร"
}, {
    eq_tran_id: 7,
    eq_name: "ผ้าใบหนา-ชั้นนอก 5x16 เมตร"
}];

var customers = [{
    "ID": 1,
    "CompanyName": "Super Mart of the West",
    "Address": "702 SW 8th Street",
    "City": "Bentonville",
    "State": "Arkansas",
    "Zipcode": 72716,
    "Phone": "(800) 555-2797",
    "Fax": "(800) 555-2171",
    "Website": "http://www.nowebsitesupermart.com"
}, {
    "ID": 2,
    "CompanyName": "Electronics Depot",
    "Address": "2455 Paces Ferry Road NW",
    "City": "Atlanta",
    "State": "Georgia",
    "Zipcode": 30339,
    "Phone": "(800) 595-3232",
    "Fax": "(800) 595-3231",
    "Website": "http://www.nowebsitedepot.com"
}, {
    "ID": 3,
    "CompanyName": "K&S Music",
    "Address": "1000 Nicllet Mall",
    "City": "Minneapolis",
    "State": "Minnesota",
    "Zipcode": 55403,
    "Phone": "(612) 304-6073",
    "Fax": "(612) 304-6074",
    "Website": "http://www.nowebsitemusic.com"
}, {
    "ID": 4,
    "CompanyName": "Tom's Club",
    "Address": "999 Lake Drive",
    "City": "Issaquah",
    "State": "Washington",
    "Zipcode": 98027,
    "Phone": "(800) 955-2292",
    "Fax": "(800) 955-2293",
    "Website": "http://www.nowebsitetomsclub.com"
}, {
    "ID": 5,
    "CompanyName": "E-Mart",
    "Address": "3333 Beverly Rd",
    "City": "Hoffman Estates",
    "State": "Illinois",
    "Zipcode": 60179,
    "Phone": "(847) 286-2500",
    "Fax": "(847) 286-2501",
    "Website": "http://www.nowebsiteemart.com"
}, {
    "ID": 6,
    "CompanyName": "Walters",
    "Address": "200 Wilmot Rd",
    "City": "Deerfield",
    "State": "Illinois",
    "Zipcode": 60015,
    "Phone": "(847) 940-2500",
    "Fax": "(847) 940-2501",
    "Website": "http://www.nowebsitewalters.com"
}, {
    "ID": 7,
    "CompanyName": "StereoShack",
    "Address": "400 Commerce S",
    "City": "Fort Worth",
    "State": "Texas",
    "Zipcode": 76102,
    "Phone": "(817) 820-0741",
    "Fax": "(817) 820-0742",
    "Website": "http://www.nowebsiteshack.com"
}, {
    "ID": 8,
    "CompanyName": "Circuit Town",
    "Address": "2200 Kensington Court",
    "City": "Oak Brook",
    "State": "Illinois",
    "Zipcode": 60523,
    "Phone": "(800) 955-2929",
    "Fax": "(800) 955-9392",
    "Website": "http://www.nowebsitecircuittown.com"
}, {
    "ID": 9,
    "CompanyName": "Premier Buy",
    "Address": "7601 Penn Avenue South",
    "City": "Richfield",
    "State": "Minnesota",
    "Zipcode": 55423,
    "Phone": "(612) 291-1000",
    "Fax": "(612) 291-2001",
    "Website": "http://www.nowebsitepremierbuy.com"
}, {
    "ID": 10,
    "CompanyName": "ElectrixMax",
    "Address": "263 Shuman Blvd",
    "City": "Naperville",
    "State": "Illinois",
    "Zipcode": 60563,
    "Phone": "(630) 438-7800",
    "Fax": "(630) 438-7801",
    "Website": "http://www.nowebsiteelectrixmax.com"
}, {
    "ID": 11,
    "CompanyName": "Video Emporium",
    "Address": "1201 Elm Street",
    "City": "Dallas",
    "State": "Texas",
    "Zipcode": 75270,
    "Phone": "(214) 854-3000",
    "Fax": "(214) 854-3001",
    "Website": "http://www.nowebsitevideoemporium.com"
}, {
    "ID": 12,
    "CompanyName": "Screen Shop",
    "Address": "1000 Lowes Blvd",
    "City": "Mooresville",
    "State": "North Carolina",
    "Zipcode": 28117,
    "Phone": "(800) 445-6937",
    "Fax": "(800) 445-6938",
    "Website": "http://www.nowebsitescreenshop.com"
}];