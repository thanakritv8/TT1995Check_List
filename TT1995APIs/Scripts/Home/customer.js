$(function () {

    //global
    var cus_id = 0;
    var address_id = 0;
    var currentIndex;

    $("#example-basic").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        autoFocus: true,
        onStepChanged: function (event, currentIndex, priorIndex) {
            console.log(currentIndex);
            if (currentIndex == 0) {

                var data_address_customer_filter = address_customer.filter(function (arr) {
                    return arr.cus_id == cus_id;
                });
                dataGrid_address_customer.option('dataSource', data_address_customer_filter);
                //alert(cus_id);
                if (cus_id == 0) {
                    disable_next();
                } else if (cus_id != 0) {
                    enable_next();
                }
                address_id = 0;
            }
            else if (currentIndex == 1) {
                var data_address_customer_filter = address_customer.filter(function (arr) {
                    return arr.cus_id == cus_id;
                });
                dataGrid_address_customer.option('dataSource', data_address_customer_filter);
                if (address_id == 0) {
                    disable_next();
                } else if (address_id != 0) {
                    enable_next();
                }
            }
            else if (currentIndex == 2) {
                var data_contact_customer_filter = contact_customer.filter(function (arr) {
                    return arr.address_id == address_id;
                });
                dataGrid_contact_customer.option('dataSource', data_contact_customer_filter);
                //if (address_id == 0) {
                //    disable_next();
                //} else if (address_id != 0) {
                //    enable_next();
                //}
            }


        },
        //onInit: function (event, currentIndex) {
        //    if (currentIndex == 0) {
        //        get_customer();
        //    }
        //}
    });


    // Get Customer
    disable_next();
    function disable_next() {
        $("a:contains('Next')").attr('href', '');
        $('ul[role|="menu"] li:nth-child(2)').addClass("disabled");
    }

    function enable_next() {
        $('ul[role|="menu"] li:nth-child(2)').removeClass("disabled");
        $("a:contains('Next')").attr('href', '#next');
    }


    $('a:contains("Next")').click(function () {
        //alert('test');

    });

    //function get_customer() {
    var dataGrid = $('#gridCustomer').dxDataGrid({
        dataSource: customers,
        keyExpr: "cus_id",
        paging: {
            pageSize: 10
        },
        columns: [{
            dataField: 'cus_id',
            caption: 'รหัสลูกค้า'
        }, {
            dataField: 'cus_name',
            caption: 'ชื่อลูกค้า'
        }, {
            dataField: 'modify_date',
            caption: 'วันที่แก้ไขล่าสุด'
        }, {
            dataField: 'modify_by',
            caption: 'แก้ไขโดย'
        }],
        showBorders: true,
        editing: {
            mode: 'row',
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true,
            useIcons: true
        },
        selection: {
            mode: "single"
        },
        onSelectionChanged: function (selectedItems) {
            var data = selectedItems.selectedRowsData[0];
            if (typeof data != "undefined") {
                cus_id = data.cus_id;
                enable_next();
            }

        }

    }).dxDataGrid("instance");
    //call_ajax(dataGrid,customers);
    //}

    // Get Address Customer

    var dataGrid_address_customer = $('#gridCustomerAddress').dxDataGrid({
        //dataSource: customers,
        keyExpr: "address_id",
        paging: {
            pageSize: 10
        },
        columns: [{
            dataField: 'address_id',
            caption: 'รหัสที่อยู่',
            alignment: "left"
        }, {
            dataField: 'address',
            caption: 'ที่อยู่'
        }, {
            dataField: 'zipcode',
            caption: 'รหัสไปรษณีย์'
        }, {
            dataField: 'province_id',
            caption: 'จังหวัด',
            alignment: "left"
        }, {
            dataField: 'cus_id',
            caption: 'รหัสลูกค้า',
            alignment: "left"
        }],
        showBorders: true,
        editing: {
            mode: 'row',
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true,
            useIcons: true
        },
        selection: {
            mode: "single"
        },
        onSelectionChanged: function (selectedItems) {
            //var data = selectedItems.selectedRowsData[0];
            //if (data) {
            //    cus_address_id = data.address_id;
            //    console.log('cus_address_id:' + cus_address_id);
            //}
            var data = selectedItems.selectedRowsData[0];
            if (typeof data != "undefined") {
                //console.log(data);
                address_id = data.address_id;
                enable_next();
            }


        }

    }).dxDataGrid("instance");
    //call_ajax(dataGrid,address_customer);

    //function get_contact_customer() {
    //    if (cus_address_id != 0) {
    var dataGrid_contact_customer = $('#gridCustomerContact').dxDataGrid({
        //dataSource: customers,
        paging: {
            pageSize: 10
        },
        columns: [{
            dataField: 'cus_contact_id',
            caption: 'รหัสติดต่อ',
            alignment: "left"
        }, {
            dataField: 'cus_name',
            caption: 'ชื่อลูกค้า'
        }, {
            dataField: 'position',
            caption: 'ตำแหน่ง'
        }, {
            dataField: 'line',
            caption: 'ไลน์'
        }, {
            dataField: 'tel',
            caption: 'โทร'
        }, {
            dataField: 'email',
            caption: 'อีเมล'
        }],
        showBorders: true,
        editing: {
            mode: 'row',
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true,
            useIcons: true
        },
        selection: {
            mode: "single"
        },
        /* onSelectionChanged: function (selectedItems) {
             var data = selectedItems.selectedRowsData[0];
             if (data) {
                 cus_address_id = data.address_id;
                 console.log('cus_address_id:' + cus_address_id);
             }
         }*/

    }).dxDataGrid("instance");
    //call_ajax(dataGrid, customer_contact);
    //    }
    //}

    function call_ajax(dataGrid, dataJSON) {
        //ajax
        dataGrid.option("dataSource", dataJSON);
    }
});

var customers = [{
    cus_id: '1',
    cus_name: 'TRT',
    modify_date: '2019-01-01',
    modify_by: 'Thanakrit'
}, {
    cus_id: '2',
    cus_name: 'Maxxis',
    modify_date: '2019-01-01',
    modify_by: 'Thanakrit'
}, {
    cus_id: '3',
    cus_name: 'Roki',
    modify_date: '2019-01-01',
    modify_by: 'Thanakrit'
}, {
    cus_id: '4',
    cus_name: 'Thai Summit',
    modify_date: '2019-01-01',
    modify_by: 'Thanakrit'
}, {
    cus_id: '5',
    cus_name: 'Thai Oil',
    modify_date: '2019-01-01',
    modify_by: 'Thanakrit'
}, {
    cus_id: '6',
    cus_name: 'PTT',
    modify_date: '2019-01-01',
    modify_by: 'Thanakrit'
}, {
    cus_id: '7',
    cus_name: 'Mitsubishi',
    modify_date: '2019-01-01',
    modify_by: 'Thanakrit'
}, {
    cus_id: '8',
    cus_name: 'Honda',
    modify_date: '2019-01-01',
    modify_by: 'Thanakrit'
}, {
    cus_id: '9',
    cus_name: 'AAT',
    modify_date: '2019-01-01',
    modify_by: 'Thanakrit'
}, {
    cus_id: '10',
    cus_name: 'AAT',
    modify_date: '2019-01-01',
    modify_by: 'Thanakrit'
}];

var address_customer = [{
    address_id: 1,
    address: '999/315 ต.ปลวกแดง อ.ปลวกแดง',
    zipcode: '21140',
    province_id: 5,
    cus_id: 1
}, {
    address_id: 2,
    address: '999/314 ต.ปลวกแดง อ.ปลวกแดง',
    zipcode: '21140',
    province_id: 5,
    cus_id: 2
}, {
    address_id: 3,
    address: '999/12 ต.ปลวกแดง อ.ปลวกแดง',
    zipcode: '21140',
    province_id: 5,
    cus_id: 3
}, {
    address_id: 4,
    address: '999/11 ต.ปลวกแดง อ.ปลวกแดง',
    zipcode: '21140',
    province_id: 5,
    cus_id: 4
}, {
    address_id: 5,
    address: '999/10 ต.ปลวกแดง อ.ปลวกแดง',
    zipcode: '21140',
    province_id: 5,
    cus_id: 4
}, {
    address_id: 6,
    address: '61 ต.งงจัง อ.งงจัง',
    zipcode: '21190',
    province_id: 6,
    cus_id: 5
}, {
    address_id: 7,
    address: '999/8 ต.ปลวกแดง อ.ปลวกแดง',
    zipcode: '21140',
    province_id: 5,
    cus_id: 6
}, {
    address_id: 8,
    address: '999/7 ต.ปลวกแดง อ.ปลวกแดง',
    zipcode: '21140',
    province_id: 5,
    cus_id: 7
}, {
    address_id: 9,
    address: '999/6 ต.ปลวกแดง อ.ปลวกแดง',
    zipcode: '21140',
    province_id: 5,
    cus_id: 8
}, {
    address_id: 10,
    address: '999/5 ต.ปลวกแดง อ.ปลวกแดง',
    zipcode: '21140',
    province_id: 5,
    cus_id: 9
}, {
    address_id: 11,
    address: '999/4 ต.ปลวกแดง อ.ปลวกแดง',
    zipcode: '21140',
    province_id: 5,
    cus_id: 1
}, {
    address_id: 12,
    address: '999/3 ต.ปลวกแดง อ.ปลวกแดง',
    zipcode: '21140',
    province_id: 5,
    cus_id: 10
}, {
    address_id: 13,
    address: '999/2 ต.ปลวกแดง อ.ปลวกแดง',
    zipcode: '21140',
    province_id: 5,
    cus_id: 9
}, {
    address_id: 14,
    address: '999/1 ต.ปลวกแดง อ.ปลวกแดง',
    zipcode: '21140',
    province_id: 5,
    cus_id: 9
}];

var contact_customer = [{
    cus_contact_id: 1,
    cus_name: 'ธนกฤต จินะการณ์',
    position: 'staff',
    line: '1hz',
    tel: '0970268120',
    email: 'thanakritv8@gmail.com',
    address_id: 1
}, {
    cus_contact_id: 2,
    cus_name: 'จารุวรรณ จันดี',
    position: 'staff',
    line: 'jaruwan',
    tel: '0887704772',
    email: 'jaruwan@gmail.com',
    address_id: 2
}, {
    cus_contact_id: 3,
    cus_name: 'Joey Doodee',
    position: 'staff',
    line: 'joey',
    tel: '0878675432',
    email: 'Joey@gmail.com',
    address_id: 3
}, {
    cus_contact_id: 4,
    cus_name: 'นรสิง ตีลังกา',
    position: 'staff',
    line: 'norasing',
    tel: '0832234512',
    email: 'norasing@gmail.com',
    address_id: 4
}, {
    cus_contact_id: 5,
    cus_name: 'มอส สายระยอง',
    position: 'staff',
    line: 'mos',
    tel: '0855546789',
    email: 'mos@gmail.com',
    address_id: 5
}, {
    cus_contact_id: 6,
    cus_name: 'ทิว ปลวกแดง',
    position: 'staff',
    line: 'tew',
    tel: '0898798897',
    email: 'tew@gmail.com',
    address_id: 6
}, {
    cus_contact_id: 7,
    cus_name: 'ภูมิ สายแบ๋ว',
    position: 'staff',
    line: 'poom',
    tel: '0834534523',
    email: 'poom@gmail.com',
    address_id: 7
}, {
    cus_contact_id: 8,
    cus_name: 'พลาก้อน โตไกล',
    position: 'staff',
    line: 'palakon',
    tel: '0812343435',
    email: 'palakon@gmail.com',
    address_id: 8
}, {
    cus_contact_id: 9,
    cus_name: 'ดาว แสงเดือน',
    position: 'staff',
    line: 'daw',
    tel: '0878697867',
    email: 'daw@gmail.com'
    ,
    address_id: 9
}, {
    cus_contact_id: 10,
    cus_name: 'จันเป็ง จะจ๋า',
    position: 'staff',
    line: 'janpeng',
    tel: '0854782556',
    email: 'janpeng@gmail.com',
    address_id: 10
}, {
    cus_contact_id: 11,
    cus_name: 'ทักษิน ชินจัง',
    position: 'staff',
    line: 'taksin',
    tel: '0917658980',
    email: 'taksin@gmail.com',
    address_id: 11
}, {
    cus_contact_id: 12,
    cus_name: 'ประยุทธ จัน',
    position: 'staff',
    line: 'payut',
    tel: '0981234231',
    email: 'payut@gmail.com',
    address_id: 12
}, {
    cus_contact_id: 13,
    cus_name: 'ชวน หลีกหนี',
    position: 'staff',
    line: 'chon',
    tel: '0872465780',
    email: 'chon@gmail.com',
    address_id: 13
}];