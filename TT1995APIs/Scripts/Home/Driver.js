$(function () {

    $("#example-basic").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        autoFocus: true
    });

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
        },
        {
            "driver_id": 32,
            "driver_name": "หนูแดง  น้อยสร้อย",
            "dlot_expired": "NULL",
            "dlngt_expired": "NULL",
            "dldot_expired": "NULL",
            "dl_expired": "View",
            "lf_expired": "View",
            "pas_expired": "View"
        },
        {
            "driver_id": 33,
            "driver_name": "ศุภกร มาเลิศ",
            "dlot_expired": "1/23/2020",
            "dlngt_expired": "NULL",
            "dldot_expired": "7/23/2019",
            "dl_expired": "View",
            "lf_expired": "View",
            "pas_expired": "View"
        },
        {
            "driver_id": 34,
            "driver_name": "อรรถชาติ  เพชรฐิติกุล",
            "dlot_expired": "NULL",
            "dlngt_expired": "NULL",
            "dldot_expired": "3/23/2020",
            "dl_expired": "View",
            "lf_expired": "View",
            "pas_expired": "View"
        },
        {
            "driver_id": 35,
            "driver_name": "นวพงษ์  ไร่กันทา",
            "dlot_expired": "NULL",
            "dlngt_expired": "6/29/2019",
            "dldot_expired": "NULL",
            "dl_expired": "View",
            "lf_expired": "View",
            "pas_expired": "View"
        },
        {
            "driver_id": 36,
            "driver_name": "อนันต์  กลิ่นขจร",
            "dlot_expired": "NULL",
            "dlngt_expired": "9/23/2019",
            "dldot_expired": "NULL",
            "dl_expired": "View",
            "lf_expired": "View",
            "pas_expired": "View"
        },
        {
            "driver_id": 37,
            "driver_name": "ศรนรินทร์  รักชาติยิ่งชีพ",
            "dlot_expired": "NULL",
            "dlngt_expired": "NULL",
            "dldot_expired": "NULL",
            "dl_expired": "View",
            "lf_expired": "View",
            "pas_expired": "View"
        },
        {
            "driver_id": 38,
            "driver_name": "ทวีป แก้วระวัง",
            "dlot_expired": "NULL",
            "dlngt_expired": "NULL",
            "dldot_expired": "NULL",
            "dl_expired": "View",
            "lf_expired": "View",
            "pas_expired": "View"
        },
        {
            "driver_id": 40,
            "driver_name": "ศักดิ์  คุณงูเหลือม",
            "dlot_expired": "NULL",
            "dlngt_expired": "6/25/2020",
            "dldot_expired": "NULL",
            "dl_expired": "View",
            "lf_expired": "View",
            "pas_expired": "View"
        },
        {
            "driver_id": 41,
            "driver_name": "สมคิด  กุลประเสริฐ",
            "dlot_expired": "NULL",
            "dlngt_expired": "NULL",
            "dldot_expired": "NULL",
            "dl_expired": "View",
            "lf_expired": "View",
            "pas_expired": "View"
        },
        {
            "driver_id": 42,
            "driver_name": "จตุพล  นนท์คำวงศ์",
            "dlot_expired": "NULL",
            "dlngt_expired": "12/5/2019",
            "dldot_expired": "NULL",
            "dl_expired": "View",
            "lf_expired": "View",
            "pas_expired": "View"
        },
        {
            "driver_id": 43,
            "driver_name": "สุรเชษฎ  เจิดขุนทด",
            "dlot_expired": "NULL",
            "dlngt_expired": "9/23/2019",
            "dldot_expired": "NULL",
            "dl_expired": "View",
            "lf_expired": "View",
            "pas_expired": "View"
        },
        {
            "driver_id": 44,
            "driver_name": "สงบ  มหาชัย",
            "dlot_expired": "NULL",
            "dlngt_expired": "NULL",
            "dldot_expired": "12/5/2019",
            "dl_expired": "View",
            "lf_expired": "View",
            "pas_expired": "View"
        },
        {
            "driver_id": 45,
            "driver_name": "อั๋น  อ่อนศรี",
            "dlot_expired": "NULL",
            "dlngt_expired": "9/23/2019",
            "dldot_expired": "NULL",
            "dl_expired": "View",
            "lf_expired": "View",
            "pas_expired": "View"
        },
        {
            "driver_id": 46,
            "driver_name": "สมใจ  ยิ้มแย้ม",
            "dlot_expired": "12/5/2019",
            "dlngt_expired": "NULL",
            "dldot_expired": "NULL",
            "dl_expired": "View",
            "lf_expired": "View",
            "pas_expired": "View"
        },
        {
            "driver_id": 47,
            "driver_name": "วิทยา  ช่อทอง",
            "dlot_expired": "NULL",
            "dlngt_expired": "9/23/2019",
            "dldot_expired": "NULL",
            "dl_expired": "View",
            "lf_expired": "View",
            "pas_expired": "View"
        },
        {
            "driver_id": 48,
            "driver_name": "มนัสชัย  เนยตะขบ",
            "dlot_expired": "NULL",
            "dlngt_expired": "NULL",
            "dldot_expired": "NULL",
            "dl_expired": "View",
            "lf_expired": "View",
            "pas_expired": "View"
        },
        {
            "driver_id": 49,
            "driver_name": "บานค่ำ  หอมทรง",
            "dlot_expired": "NULL",
            "dlngt_expired": "NULL",
            "dldot_expired": "12/5/2019",
            "dl_expired": "View",
            "lf_expired": "View",
            "pas_expired": "View"
        },
        {
            "driver_id": 50,
            "driver_name": "กมลพร อินทร์สอาด",
            "dlot_expired": "NULL",
            "dlngt_expired": "9/23/2019",
            "dldot_expired": "NULL",
            "dl_expired": "View",
            "lf_expired": "View",
            "pas_expired": "View"
        },
        {
            "driver_id": 51,
            "driver_name": "สุพจน์  พานจันทร์",
            "dlot_expired": "12/5/2019",
            "dlngt_expired": "NULL",
            "dldot_expired": "NULL",
            "dl_expired": "View",
            "lf_expired": "View",
            "pas_expired": "View"
        },
        {
            "driver_id": 52,
            "driver_name": "วิเชียร  ศรีสกุล",
            "dlot_expired": "NULL",
            "dlngt_expired": "NULL",
            "dldot_expired": "NULL",
            "dl_expired": "View",
            "lf_expired": "View",
            "pas_expired": "View"
        },
        {
            "driver_id": 53,
            "driver_name": "ภาสกร  เนตรคำกุล",
            "dlot_expired": "NULL",
            "dlngt_expired": "12/5/2019",
            "dldot_expired": "NULL",
            "dl_expired": "View",
            "lf_expired": "View",
            "pas_expired": "View"
        },
        {
            "driver_id": 56,
            "driver_name": "สนิท สีสมุทร",
            "dlot_expired": "NULL",
            "dlngt_expired": "9/23/2019",
            "dldot_expired": "NULL",
            "dl_expired": "View",
            "lf_expired": "View",
            "pas_expired": "View"
        },
        {
            "driver_id": 57,
            "driver_name": "ทัด มาวงศ์นอก",
            "dlot_expired": "NULL",
            "dlngt_expired": "12/5/2019",
            "dldot_expired": "NULL",
            "dl_expired": "View",
            "lf_expired": "View",
            "pas_expired": "View"
        },
        {
            "driver_id": 58,
            "driver_name": "สัญญา พานชนะ",
            "dlot_expired": "NULL",
            "dlngt_expired": "9/23/2019",
            "dldot_expired": "NULL",
            "dl_expired": "View",
            "lf_expired": "View",
            "pas_expired": "View"
        },
        {
            "driver_id": 59,
            "driver_name": "กิตติศักดิ์ จัตุเชื้อ",
            "dlot_expired": "9/23/2019",
            "dlngt_expired": "NULL",
            "dldot_expired": "NULL",
            "dl_expired": "View",
            "lf_expired": "View",
            "pas_expired": "View"
        }
    ];

    var dl_data = [
        {
            "dl_id": 1,
            "id_no": "t-2456",
            "type": "ท.1",
            "expire_date": "06/26/2019"
        },
        {
            "dl_id": 1,
            "id_no": "t-9547",
            "type": "ท.2",
            "expire_date": "07/26/2019"
        },
        {
            "dl_id": 1,
            "id_no": "t-5154",
            "type": "ท.3",
            "expire_date": "08/26/2019"
        }
    ];

    var lf_data = [
        {
            "lf_id": 1,
            "IdNo": "S3-2235-61",
            "name_factory": "SCG",
            "expire_date": "07/05/2019"
        },
        {
            "lf_id": 3,
            "IdNo": "33520",
            "name_factory": "วีนิไทย",
            "expire_date": "12/31/2019"
        },
        {
            "lf_id": 4,
            "IdNo": "2732",
            "name_factory": "ไทยแทงค์",
            "expire_date": "12/31/2019"
        }
    ];

    var pas_data = [
        {
            "pas_id": 1,
            "id_no": "45143",
            "expire_date": "12/31/2019"
        },
        {
            "pas_id": 2,
            "id_no": "41278",
            "expire_date": "06/15/2019"
        },
        {
            "pas_id": 3,
            "id_no": "78413",
            "expire_date": "02/17/2019"
        }
    ];


    var show_column = [
        {
            dataField: "driver_name",
            caption: "ชื่อ",
        },
        {
            dataField: "dlot_expired",
            caption: "ใบอนุญาตขับขี่ขนส่งน้ำมัน",
        },
        {
            dataField: "dlngt_expired",
            caption: "ใบอนุญาตขับขี่ขนส่งก๊าสธรรมชาติ",
        },
        {
            dataField: "dldot_expired",
            caption: "ใบอนุญาตขับขี่ขนส่งวัตถุอันตราย",
        },
        {
            dataField: "dl_expired",
            caption: "ใบอนุญาตขับขี่",
            cellTemplate: function (container, options) {
                $('<a style="color:green;font-weight:bold;" />').addClass('dx-link')
                    .text(options.value)
                    .on('dxclick', function (e) {
                        show_popup(e, 'ใบอนุญาตขับขี่', options, dl_data);
                    }).appendTo(container);
            }
        },
        {
            dataField: "lf_expired",
            caption: "ใบอนุญาตโรงงาน",
            cellTemplate: function (container, options) {
                $('<a style="color:green;font-weight:bold;" />').addClass('dx-link')
                    .text(options.value)
                    .on('dxclick', function (e) {
                        show_popup(e, 'ใบอนุญาตโรงงาน', options, lf_data);
                    }).appendTo(container);
            }
        },
        ,
        {
            dataField: "pas_expired",
            caption: "พาสสปอร์ต",
            cellTemplate: function (container, options) {
                $('<a style="color:green;font-weight:bold;" />').addClass('dx-link')
                    .text(options.value)
                    .on('dxclick', function (e) {
                        show_popup(e, 'พาสสปอร์ต', options, pas_data);
                    }).appendTo(container);
            }
        }
    ];

    var grid_driver = $("#grid_driver").dxDataGrid({
        dataSource: driver,
        keyExpr: "driver_id",
        paging: {
            pageSize: 10
        },
        columns: show_column,
        showBorders: true
    }).dxDataGrid("instance");

    function show_popup(e, title, options, data) {
        console.log(options);
        popup_driver.option('title', title + '(' + options.data.driver_name + ')');
        popup_driver._options.contentTemplate = function (content) {
            var maxHeight = $("#popup_driver .dx-overlay-content").height() - 150;
            content.append("<div id='grid_add_data' style='max-height: " + maxHeight + "px;' ></div>");

        }

        $("#popup_driver").dxPopup("show");
        show_grid_in_popup(data);
    }

    var popup_driver = $("#popup_driver").dxPopup({
        visible: false,
        width: "60%",
        height: "70%",
        showTitle: true,
        title: "ประวัติ",
        contentTemplate: function (content) {
            return $("<div id='grid_add_data'>test</div>");
        }
    }).dxPopup("instance");

    function show_grid_in_popup(data) {
        var grid_add_data = $("#grid_add_data").dxDataGrid({
            dataSource: data,
            //columns: show_column,
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

});