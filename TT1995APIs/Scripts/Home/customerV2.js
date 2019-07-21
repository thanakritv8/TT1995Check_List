$(function () {

    var columns_add_customer = [
        {
            dataField: "name",
            caption: "ชื่อ",
        },
        {
            dataField: "force",
            caption: "กำหนดหัว/หาง",
            dataType: "boolean",
        }
    ];

    var show_column_product = [
        {
            dataField: "name",
            caption: "ชื่อสินค้า",
        },
        {
            dataField: "fleet",
            caption: "ฟลีท",
        },
        {
            dataField: "style_transport",
            caption: "ลักษณะการขนส่ง",
        },
        {
            dataField: "method_pack",
            caption: "วิธีการบรรจุ",
        },
        {
            dataField: "driver_car",
            caption: "พขร/รถบรรทุก",
            cellTemplate: function (container, options) {
                $('<a style="color:green;font-weight:bold;" />').addClass('dx-link')
                    .text(options.value)
                    .on('dxclick', function (e) {
                        popup_driver_truck.option('title', 'พขร/รถบรรทุก');
                        $("#popup_driver_truck").dxPopup("show");
                        show_gridDriver_in_popupDriverTruck(options);
                        show_gridHeadCar_in_popupDriverTruck(options);
                        show_gridTailCar_in_popupDriverTruck(options);
                    }).appendTo(container);
            }
        },
        {
            dataField: "doc_equip",
            caption: "เอกสาร/อุปกรณ์",
            cellTemplate: function (container, options) {
                $('<a style="color:green;font-weight:bold;" />').addClass('dx-link')
                    .text(options.value)
                    .on('dxclick', function (e) {
                        popup_doc_equip.option('title', 'เอกสาร/อุปกรณ์');
                        $("#popup_doc_equip").dxPopup("show");
                        show_gridDoc_in_popupDocEquip(options);
                        show_gridTran_in_popupDocEquip(options);
                        show_gridSafety_in_popupDocEquip(options);
                    }).appendTo(container);
            }
        }
    ];
    var _document = [
        {
            doc_id: "1",
            number: "1456",
            name: "ใบขนส่งก๊าส",
            take: 1,
            bring: 1,
            //detail:"View",
            note: "123456789",
            pic: "",
            btn_upload_file: "",
            path: "../img/doc/doc.jpg"
        },
        {
            doc_id: "2",
            number: "2456",
            name: "ใบขนส่งสินค้า",
            take: 1,
            bring: 0,
            //detail: "View",
            note: "jfjgsdklgjksdgjsdgljldfjgjk",
            pic: "",
            btn_upload_file: "",
            path: "../img/doc/doc.jpg"
        }
    ];
    var show_column_gridDoc = [
    {
        dataField: "number",
        caption: "เลขที่เอกสาร",
    },
    {
        dataField: "name",
        caption: "ชื่อเอกสาร",
    },
    {
        dataField: "take",
        caption: "นำไป",
        dataType: "boolean",
        //visible: false
    },
    {
        dataField: "bring",
        caption: "นำกลับ",
        dataType: "boolean",
        //visible: false
    }
];

    var equipment_transport = [{
        eq_tran_id: 1,
        number: "1",
        eq_name: "ซัฟฟอร์ตเหล็กคอย",
        style: "style1",
        property: "pro1",
        suggest: "suggest1",
        stick_car: 0,
        job_only: 1,
        btn_upload_file: "",
        pic: "../img/transport/transport.png",
    }, {
        eq_tran_id: 2,
        number: "2",
        eq_name: "เหล็กเสียบข้างพร้อมโซ่",
        style: "style2",
        property: "pro2",
        suggest: "suggest2",
        stick_car: 1,
        job_only: 0,
        btn_upload_file: "",
        pic: "../img/transport/transport.png",
    }, {
        eq_tran_id: 3,
        number: "3",
        eq_name: "สเตย์ผ้าใบ",
        style: "style3",
        property: "pro3",
        suggest: "suggest3",
        stick_car: 0,
        job_only: 1,
        btn_upload_file: "",
        pic: "../img/transport/transport.png",
    }, {
        eq_tran_id: 4,
        number: "4",
        eq_name: "โซ่+เกลียวเร่ง",
        style: "style4",
        property: "pro4",
        suggest: "suggest4",
        stick_car: 1,
        job_only: 1,
        btn_upload_file: "",
        pic: "../img/transport/transport.png",

    }, {
        eq_tran_id: 5,
        number: "5",
        eq_name: "ผ้าใบบาง-ชั้นใน ขนาด 5x7 เมตร",
        style: "style5",
        property: "pro5",
        suggest: "suggest5",
        stick_car: 0,
        job_only: 1,
        btn_upload_file: "",
        pic: "../img/transport/transport.png",
    }, {
        eq_tran_id: 6,
        number: "6",
        eq_name: "ผ้าใบหนา-ชั้นนอก 5x7 เมตร",
        style: "style6",
        property: "pro6",
        suggest: "suggest6",
        stick_car: 1,
        job_only: 0,
        btn_upload_file: "",
        pic: "../img/transport/transport.png",
    }, {
        eq_tran_id: 7,
        number: "7",
        eq_name: "ผ้าใบหนา-ชั้นนอก 5x16 เมตร",
        style: "style7",
        property: "pro7",
        suggest: "suggest7",
        stick_car: 0,
        job_only: 0,
        btn_upload_file: "",
        pic: "../img/transport/transport.png",
    }];
    var show_column_gridTran = [
        {
            dataField: "choose",
            caption: "หมายเลข",
            dataType: "boolean",
        },
        {
            dataField: "number",
            caption: "หมายเลข"
        },
        {
            dataField: "eq_name",
            caption: "ชื่ออุปกรณ์"
        },
        {
            dataField: "qty",
            caption: "จำนวน"
        }
];

    var equipment_safety = [{
        eq_safety_id: 1,
        number: "1",
        eq_name: "หมวกนิรภัย",
        style: "style1",
        property: "pro1",
        suggest: "suggest1",
        stick_car: 1,
        job_only: 0,
        btn_upload_file: "",
        pic: "../img/safety/safety.png",
    }, {
        eq_safety_id: 2,
        number: "2",
        eq_name: "หน้ากากนิรภัย",
        style: "style2",
        property: "pro2",
        suggest: "suggest2",
        stick_car: 1,
        job_only: 0,
        btn_upload_file: "",
        pic: "../img/safety/safety.png",
    }, {
        eq_safety_id: 3,
        number: "3",
        eq_name: "แว่นตานิรภัย",
        style: "style3",
        property: "pro3",
        suggest: "suggest3",
        stick_car: 1,
        job_only: 1,
        btn_upload_file: "",
        pic: "../img/safety/safety.png",
    }, {
        eq_safety_id: 4,
        number: "4",
        eq_name: "เอียร์ปลั๊ก",
        style: "style4",
        property: "pro4",
        suggest: "suggest4",
        stick_car: 1,
        job_only: 0,
        btn_upload_file: "",
        pic: "../img/safety/safety.png",
    }, {
        eq_safety_id: 5,
        number: "5",
        eq_name: "ถุงมือนิรภัย",
        style: "style5",
        property: "pro5",
        suggest: "suggest5",
        stick_car: 1,
        job_only: 1,
        btn_upload_file: "",
        pic: "../img/safety/safety.png",
    }, {
        eq_safety_id: 6,
        number: "6",
        eq_name: "รองเท้าเซฟตี้",
        style: "style6",
        property: "pro6",
        suggest: "suggest6",
        stick_car: 1,
        job_only: 0,
        btn_upload_file: "",
        pic: "../img/safety/safety.png",
    }, {
        eq_safety_id: 7,
        number: "7",
        eq_name: "เสื้อสะท้อนแสง",
        style: "style7",
        property: "pro7",
        suggest: "suggest7",
        stick_car: 0,
        job_only: 1,
        btn_upload_file: "",
        pic: "../img/safety/safety.png",
    }, {
        eq_safety_id: 8,
        number: "8",
        eq_name: "สายรัดป้องกันตกจากที่สูง",
        style: "style8",
        property: "pro8",
        suggest: "suggest8",
        stick_car: 0,
        job_only: 0,
        btn_upload_file: "",
        pic: "../img/safety/safety.png",
    }];
    var show_column_gridSafety = [
        {
            dataField: "choose",
            caption: "หมายเลข",
            dataType: "boolean",
        },
        {
            dataField: "number",
            caption: "หมายเลข"
        },
        {
            dataField: "eq_name",
            caption: "ชื่ออุปกรณ์"
        },
        {
            dataField: "qty",
            caption: "จำนวน"
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
    var lookup_driver = [
        {
            "ID": 1,
            "Name": "ฝึกหัด"
        },
        {
            "ID": 2,
            "Name": "เริ่มต้น"
        },
        {
            "ID": 2,
            "Name": "ป่านกลาง"
        },
        {
            "ID": 2,
            "Name": "ชำนาญ"
        }
    ];
    var show_column_gridDriver = [
        {
            dataField: "choose",
            caption: "เลือก",
            dataType: "boolean",
        },
        {
            dataField: "driver_name",
            caption: "ชื่อ"
        },
        {
            dataField: "expertise",
            caption: "ความชำนาญ",
            lookup: {
                dataSource: lookup_driver,
                valueExpr: "ID",
                displayExpr: "Name"
            }
        }
    ];

    var car_head = [
  {
      "license_id": 11,
      "number_car": 1,
      "license_car": "70-2174",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 209,
      "number_car": 2,
      "license_car": "70-2131",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 14,
      "number_car": 3,
      "license_car": "70-2477",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 15,
      "number_car": 5,
      "license_car": "70-2287",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 16,
      "number_car": 6,
      "license_car": "70-1660",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 26,
      "number_car": 7,
      "license_car": "70-1936",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 20,
      "number_car": 8,
      "license_car": "70-1934",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 9,
      "number_car": 9,
      "license_car": "70-2018",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 19,
      "number_car": 10,
      "license_car": "70-2531",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 18,
      "number_car": 12,
      "license_car": "70-2039",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 2,
      "number_car": 14,
      "license_car": "70-2175",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 211,
      "number_car": 15,
      "license_car": "70-2311",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 13,
      "number_car": 17,
      "license_car": "70-2397",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 25,
      "number_car": 19,
      "license_car": "70-1262",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 23,
      "number_car": 20,
      "license_car": "70-9093",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 24,
      "number_car": 21,
      "license_car": "70-2808",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 22,
      "number_car": 22,
      "license_car": "70-3019",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 28,
      "number_car": 23,
      "license_car": "70-2782",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 29,
      "number_car": 24,
      "license_car": "70-9883",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 30,
      "number_car": 25,
      "license_car": "70-9884",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 31,
      "number_car": 26,
      "license_car": "70-9937",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 32,
      "number_car": 27,
      "license_car": "70-9938",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 33,
      "number_car": 28,
      "license_car": "70-2956",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 50,
      "number_car": 29,
      "license_car": "71-6533",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 34,
      "number_car": 30,
      "license_car": "70-9767",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 35,
      "number_car": 31,
      "license_car": "70-3021",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 36,
      "number_car": 32,
      "license_car": "70-2510",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 37,
      "number_car": 33,
      "license_car": "70-3018",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 39,
      "number_car": 35,
      "license_car": "70-9766",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 40,
      "number_car": 36,
      "license_car": "70-3020",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 41,
      "number_car": 37,
      "license_car": "70-3053",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 42,
      "number_car": 39,
      "license_car": "70-3054",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 43,
      "number_car": 40,
      "license_car": "70-9835",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 44,
      "number_car": 41,
      "license_car": "70-9836",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 45,
      "number_car": 42,
      "license_car": "70-4703",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 46,
      "number_car": 43,
      "license_car": "70-4704",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 47,
      "number_car": 44,
      "license_car": "70-4699",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 48,
      "number_car": 45,
      "license_car": "70-4700",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 49,
      "number_car": 48,
      "license_car": "70-4644",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 51,
      "number_car": 49,
      "license_car": "70-4645",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 52,
      "number_car": 50,
      "license_car": "70-1979",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 53,
      "number_car": 51,
      "license_car": "71-6435",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 57,
      "number_car": 52,
      "license_car": "71-6578",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 59,
      "number_car": 53,
      "license_car": "71-6100",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 68,
      "number_car": 58,
      "license_car": "70-7497",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 63,
      "number_car": 59,
      "license_car": "70-5246",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 17,
      "number_car": 60,
      "license_car": "70-7569",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 210,
      "number_car": 61,
      "license_car": "70-2475",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 65,
      "number_car": 62,
      "license_car": "70-8764",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 73,
      "number_car": 63,
      "license_car": "70-8763",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 76,
      "number_car": 64,
      "license_car": "70-9307",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 77,
      "number_car": 65,
      "license_car": "70-9308",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 79,
      "number_car": 67,
      "license_car": "70-9310",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 80,
      "number_car": 68,
      "license_car": "70-9473",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 81,
      "number_car": 69,
      "license_car": "70-9335",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 82,
      "number_car": 70,
      "license_car": "70-9309",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 83,
      "number_car": 71,
      "license_car": "70-9312",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 84,
      "number_car": 72,
      "license_car": "70-9311",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 85,
      "number_car": 73,
      "license_car": "71-0373",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 86,
      "number_car": 74,
      "license_car": "71-0374",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 87,
      "number_car": 75,
      "license_car": "71-0454",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 78,
      "number_car": 76,
      "license_car": "71-0455",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 88,
      "number_car": 77,
      "license_car": "71-0661",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 89,
      "number_car": 78,
      "license_car": "71-0662",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 90,
      "number_car": 79,
      "license_car": "71-1138",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 91,
      "number_car": 80,
      "license_car": "71-1137",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 54,
      "number_car": 81,
      "license_car": "71-1653",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 55,
      "number_car": 82,
      "license_car": "71-1916",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 56,
      "number_car": 83,
      "license_car": "71-1915",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 58,
      "number_car": 84,
      "license_car": "71-2480",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 60,
      "number_car": 85,
      "license_car": "71-2502",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 61,
      "number_car": 86,
      "license_car": "71-2503",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 230,
      "number_car": 86,
      "license_car": "70-2503",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 62,
      "number_car": 87,
      "license_car": "71-2504",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 64,
      "number_car": 88,
      "license_car": "71-3154",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 66,
      "number_car": 90,
      "license_car": "71-4174",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 67,
      "number_car": 91,
      "license_car": "71-4175",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 69,
      "number_car": 92,
      "license_car": "71-4223",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 71,
      "number_car": 93,
      "license_car": "71-7409",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 72,
      "number_car": 94,
      "license_car": "71-7410",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 74,
      "number_car": 95,
      "license_car": "70-5245",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 75,
      "number_car": 96,
      "license_car": "71-8130",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 226,
      "number_car": 97,
      "license_car": "71-8131",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 227,
      "number_car": 98,
      "license_car": "71-8455",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 225,
      "number_car": 99,
      "license_car": "71-8454",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  }
    ];
    var show_column_headCar = [
        {
            dataField: "choose",
            caption: "เลือก",
            dataType: "boolean",
        },
        {
            dataField: "number_car",
            caption: "เบอร์รถ",
        },
        {
            dataField: "license_car",
            caption: "ทะเบียน",
        },
        {
            dataField: "detail",
            caption: "รายละเอียด",
            allowEditing: false,
            cellTemplate: function (container, options) {
                $('<a style="color:green;font-weight:bold;" />').addClass('dx-link')
                    .text(options.value)
                    .on('dxclick', function (e) {
                        show_popup_detail(e, 'รายละเอียด', options);
                    }).appendTo(container);
            }
        },


    ];

    var car_tail = [
  {
      "license_id": 97,
      "number_car": "T-001",
      "license_car": "71-8614",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 98,
      "number_car": "T-002",
      "license_car": "71-1468",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 99,
      "number_car": "T-003",
      "license_car": "71-1469",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 101,
      "number_car": "T-004",
      "license_car": "71-1470",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 103,
      "number_car": "T-005",
      "license_car": "71-1466",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 105,
      "number_car": "T-006",
      "license_car": "71-1467",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 106,
      "number_car": "T-007",
      "license_car": "71-4502",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 108,
      "number_car": "T-008",
      "license_car": "71-4503",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 109,
      "number_car": "T-009",
      "license_car": "71-4504",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 110,
      "number_car": "T-010",
      "license_car": "71-4505",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 115,
      "number_car": "T-011",
      "license_car": "71-4506",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 114,
      "number_car": "T-012",
      "license_car": "71-4507",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 113,
      "number_car": "T-013",
      "license_car": "71-4508",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 112,
      "number_car": "T-014",
      "license_car": "71-4509",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 111,
      "number_car": "T-015",
      "license_car": "71-4510",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 107,
      "number_car": "T-016",
      "license_car": "71-4501",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 104,
      "number_car": "T-017",
      "license_car": "71-6579",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 102,
      "number_car": "T-018",
      "license_car": "71-6534",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 100,
      "number_car": "T-019",
      "license_car": "71-6101",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 118,
      "number_car": "T-023",
      "license_car": "70-1294",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 119,
      "number_car": "T-024",
      "license_car": "70-3742",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 120,
      "number_car": "T-025",
      "license_car": "70-6192",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 124,
      "number_car": "T-029",
      "license_car": "70-3390",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 143,
      "number_car": "T-040",
      "license_car": "70-4992",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 144,
      "number_car": "T-041",
      "license_car": "70-2026",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 148,
      "number_car": "T-042",
      "license_car": "70-2952",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 149,
      "number_car": "T-043",
      "license_car": "70-2953",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 151,
      "number_car": "T-044",
      "license_car": "70-2954",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 153,
      "number_car": "T-045",
      "license_car": "70-3155",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 155,
      "number_car": "T-046",
      "license_car": "70-4961",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 161,
      "number_car": "T-050",
      "license_car": "71-3329",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 165,
      "number_car": "T-052",
      "license_car": "70-6897",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 169,
      "number_car": "T-054",
      "license_car": "70-0786",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 172,
      "number_car": "T-056",
      "license_car": "70-0790",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 179,
      "number_car": "T-060",
      "license_car": "70-0519",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 185,
      "number_car": "T-061",
      "license_car": "70-0788",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 191,
      "number_car": "T-063",
      "license_car": "70-0778",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 194,
      "number_car": "T-066",
      "license_car": "71-3326",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 168,
      "number_car": "T-067",
      "license_car": "70-7097",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 163,
      "number_car": "T-069",
      "license_car": "83-7253",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 162,
      "number_car": "T-070",
      "license_car": "83-7508",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 159,
      "number_car": "T-071",
      "license_car": "83-7507",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 156,
      "number_car": "T-072",
      "license_car": "83-7251",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 154,
      "number_car": "T-073",
      "license_car": "83-7509",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 152,
      "number_car": "T-074",
      "license_car": "70-0655",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 150,
      "number_car": "T-075",
      "license_car": "70-1175",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 147,
      "number_car": "T-076",
      "license_car": "70-0610",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 146,
      "number_car": "T-077",
      "license_car": "70-1174",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 145,
      "number_car": "T-078",
      "license_car": "70-0777",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 142,
      "number_car": "T-079",
      "license_car": "70-0625",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 136,
      "number_car": "T-083",
      "license_car": "70-7103",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 133,
      "number_car": "T-085",
      "license_car": "70-5059",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 131,
      "number_car": "T-086",
      "license_car": "70-5022",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 130,
      "number_car": "T-087",
      "license_car": "70-5058",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 171,
      "number_car": "T-088",
      "license_car": "71-5886",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 174,
      "number_car": "T-089",
      "license_car": "71-3314",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 176,
      "number_car": "T-090",
      "license_car": "83-7249",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 181,
      "number_car": "T-091",
      "license_car": "83-7250",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 183,
      "number_car": "T-092",
      "license_car": "83-7252",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 186,
      "number_car": "T-093",
      "license_car": "83-7254",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 188,
      "number_car": "T-094",
      "license_car": "83-7505",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 189,
      "number_car": "T-095",
      "license_car": "83-7506",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 192,
      "number_car": "T-096",
      "license_car": "83-7510",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 204,
      "number_car": "T-097",
      "license_car": "70-2476",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 201,
      "number_car": "T-098",
      "license_car": "70-2419",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 200,
      "number_car": "T-099",
      "license_car": "70-3127",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 215,
      "number_car": "T-100",
      "license_car": "70-5247",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 199,
      "number_car": "T-101",
      "license_car": "70-2907",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 221,
      "number_car": "T-102",
      "license_car": "70-2487",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 198,
      "number_car": "T-103",
      "license_car": "71-3486",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 197,
      "number_car": "T-105",
      "license_car": "70-7098",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 196,
      "number_car": "T-106",
      "license_car": "70-0520",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 195,
      "number_car": "T-107",
      "license_car": "70-0521",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 190,
      "number_car": "T-108",
      "license_car": "70-1633",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 184,
      "number_car": "T-109",
      "license_car": "70-1685",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 182,
      "number_car": "T-110",
      "license_car": "70-2632",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 180,
      "number_car": "T-111",
      "license_car": "70-2631",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 178,
      "number_car": "T-112",
      "license_car": "70-0783",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 229,
      "number_car": "T-113",
      "license_car": "71-8613",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 96,
      "number_car": "T-020-S2",
      "license_car": "70-2132",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 223,
      "number_car": "T-021-S2",
      "license_car": "70-3144",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 117,
      "number_car": "T-022-S2",
      "license_car": "70-1293",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 121,
      "number_car": "T-026-S2",
      "license_car": "70-5061",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 122,
      "number_car": "T-027-L3",
      "license_car": "70-3174",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  },
  {
      "license_id": 123,
      "number_car": "T-028-D2",
      "license_car": "70-4571",
      "tax_or_insurance": "View",
      "license": "View",
      "detail": "View",
      "tool": "แก้ไข"
  }
    ];
    var show_column_tailCar = [
        {
            dataField: "choose",
            caption: "เลือก",
            dataType: "boolean",
        },
        {
            dataField: "number_car",
            caption: "เบอร์รถ",
        },
        {
            dataField: "license_car",
            caption: "ทะเบียน",
        },
        {
            dataField: "detail",
            caption: "รายละเอียด",
            allowEditing: false,
            cellTemplate: function (container, options) {
                $('<a style="color:green;font-weight:bold;" />').addClass('dx-link')
                    .text(options.value)
                    .on('dxclick', function (e) {
                        show_popup_detail(e, 'รายละเอียด', options);
                    }).appendTo(container);
            }
        },


    ];
    var gallery = [{
        ID: "1",
        Address: "652 Avonwick Gate",
        City: "Toronto",
        State: "ON",
        ZipCode: "M3A25",
        Beds: "4",
        Baths: "4",
        HouseSize: 7500,
        LotSize: "0.8",
        Price: "ด้านซ้าย",
        Coordinates: "43.7507639, -79.3184378",
        Features: "Dishwasher, Disposal, Separate laundry room, 3/4 bath downstairs, Formal dining room, Downstairs family room, Separate family room, Breakfast Bar/Counter, Breakfast nook (eating area), Granite countertops in kitchen, Hardwood flooring in kitchen, Kitchen island, Solid surface countertops in kitchen, Entry foyer, Front living room, Ceiling fan in master bedroom, Master bedroom separate from other, Mirrored door closet in master bedroom, 2nd bedroom: 11x13, 3rd bedroom: 11x14, 4th Bedroom: 18x13, Alarm system owned, Built-in microwave, Carpet, Ceiling fan(s), Convection oven, Double built-in gas ovens, Gas cooktop, Gas stove, Marble/Stone floors",
        YearBuilt: "2008",
        Type: "0",
        Status: "1",
        Image: "../img/รูปรถ/ด้าน ซ้าย 70-2039.jpg"
    },
    {
        ID: "2",
        Address: "82649 Topeka St",
        City: "Riverbank",
        State: "CA",
        ZipCode: "95360",
        Beds: "5",
        Baths: "3",
        HouseSize: 12500,
        LotSize: "1.2",
        Price: "ด้านท้าย",
        Coordinates: "37.7369999,-120.9430488",
        Features: "Dishwasher, Disposal, Separate laundry room, Full bath downstairs, Formal dining room, Downstairs family room, Separate family room, Breakfast Bar/Counter, Breakfast nook (eating area), Granite countertops in kitchen, Kitchen custom cabinets, Kitchen island, Pantry, Walk-in pantry, Entry foyer, Formal living room, Rear living room, Vaulted ceiling in living room, Balcony in master bedroom, Master bedroom separate from other, Master bedroom upstairs, Sitting room in master bedroom, Walk-in closet in master bedroom, 2nd bedroom: 13X20, 3rd bedroom: 13X17, 4th Bedroom: 13X18, 5th Bedroom: 14X16, Alarm system owned, Blinds, Built-in electric oven, Built-in microwave, Carpet, Ceiling fan(s), Gas cooktop, Intercom system, Marble/Stone floors, Water conditioner owned, Water filtering system, Window Coverings Throughout",
        YearBuilt: "2009",
        Type: "0",
        Status: "0",
        Image: "../img/รูปรถ/ด้านท้าย 70-2039.jpg"
    },
    {
        ID: "3",
        Address: "328 S Kerema Ave",
        City: "Milford",
        State: "CT",
        ZipCode: "06465",
        Beds: "4",
        Baths: "2",
        HouseSize: 8356,
        LotSize: "0.04",
        Price: "ด้านหน้า",
        Coordinates: "41.1957999,-73.1022988",
        Features: "Dishwasher, Disposal, Refrigerator, Separate laundry room, Washer/Dryer on 2nd floor, Full bath downstairs, Formal dining room, Downstairs family room, Separate family room, Wet bar in family room, Breakfast nook (eating area), Garden window in kitchen, Granite countertops in kitchen, Kitchen island, Marble/Stone flooring in kitchen, Pantry, Formal living room, Front living room, Master bedroom separate from other, Master bedroom upstairs, Sitting room in master bedroom, Walk-in closet in master bedroom, 2nd bedroom: 16x12, 3rd bedroom: 13x16, 4th Bedroom: 18x12, Alarm system owned, Built-in microwave, Carpet, Ceiling fan(s), Double built-in electric ovens, Gas cooktop, Marble/Stone floors",
        YearBuilt: "2010",
        Type: "0",
        Status: "0",
        Image: "../img/รูปรถ/ด้านหน้า 70-2039.jpg"
    },
    {
        ID: "4",
        Address: "5119 Beryl Dr",
        City: "San Antonio",
        State: "TX",
        ZipCode: "78212",
        Beds: "4",
        Baths: "2",
        HouseSize: 7980,
        LotSize: "0.7",
        Price: "ด้านขวา",
        Coordinates: "29.4972699,-98.5366788",
        Features: "Dishwasher, Disposal, Refrigerator, Separate laundry room, Full bath downstairs, Living/Dining room combo, Separate family room, Breakfast Bar/Counter, Breakfast nook (eating area), Granite countertops in kitchen, Kitchen custom cabinets, Kitchen island, Recessed lighting in kitchen, Tile flooring in kitchen, Walk-in pantry, Formal living room, Front living room, Ceiling fan in master bedroom, Master bedroom downstairs, Walk-in closet in master bedroom, 2nd bedroom: 15x13, 3rd bedroom: 12x12, 4th Bedroom: 14x12, Alarm system owned, Blinds, Built-in microwave, Carpet, Ceiling fan(s), Central vacuum, Convection oven, Double built-in electric ovens, Electric cooktop, Intercom system, Tile floors",
        YearBuilt: "2007",
        Type: "0",
        Status: "1",
        Image: "../img/รูปรถ/ด้าย ขวา70-2039.jpg"
    },
    {
        ID: "5",
        Address: "61207 16th St N",
        City: "Moorhead",
        State: "MN",
        ZipCode: "56564",
        Beds: "5",
        Baths: "4",
        HouseSize: 14250,
        LotSize: "1.1",
        Price: "มุมหน้าซ้าย",
        Coordinates: "46.88933,-96.7522388",
        Features: "Dishwasher, Disposal, Separate laundry room, Washer/Dryer on 1st floor, Full bath downstairs, Formal dining room, Downstairs family room, Separate family room, Breakfast Bar/Counter, Breakfast nook (eating area), Granite countertops in kitchen, Kitchen custom cabinets, Kitchen island, Formal living room, Rear living room, Sunken living room, Vaulted ceiling in living room, Balcony in master bedroom, Ceiling fan in master bedroom, Master bedroom separate from other, Master bedroom upstairs, Walk-in closet in master bedroom, 2nd bedroom: 16X17, 3rd bedroom: 14X16, 4th Bedroom: 13X13, 5th Bedroom: 12X12, Blinds, Built-in microwave, Carpet, Ceiling fan(s), Central vacuum, Double built-in electric ovens, Gas cooktop, Marble/Stone floors, Pot shelves, Water conditioner owned, Water filtering system, Window Coverings Throughout",
        YearBuilt: "2010",
        Type: "0",
        Status: "0",
        Image: "../img/รูปรถ/มุม หน้าซ้าย70-2039.jpg"
    },
    {
        ID: "6",
        Address: "8512 Tanglewood Cir",
        City: "Reform",
        State: "AL",
        ZipCode: "35487",
        Beds: "3",
        Baths: "2",
        HouseSize: 5600,
        LotSize: "0.2",
        Price: "มุมซ้าย",
        Coordinates: "33.3794,-87.9785788",
        Features: "Dishwasher, Disposal, Refrigerator, Separate laundry room, Full bath downstairs, Formal dining room, Built-in bookcases in family room, Downstairs family room, Separate family room, Breakfast Bar/Counter, Breakfast nook (eating area), Granite countertops in kitchen, Kitchen custom cabinets, Kitchen island, Marble/Stone flooring in kitchen, Pantry, Formal living room, Front living room, Ceiling fan in master bedroom, Master bedroom downstairs, Master bedroom separate from other, Sitting room in master bedroom, Walk-in closet in master bedroom, 2nd bedroom: 11X15, 3rd bedroom: 11X14, Alarm system owned, Blinds, Built-in microwave, Carpet, Ceiling fan(s), Double built-in electric ovens, Drapes, Electric cooktop, Marble/Stone floors, Window Coverings Throughout, Wine refrigerator",
        YearBuilt: "2011",
        Type: "0",
        Status: "0",
        Image: "../img/รูปรถ/มุมซ้าย 70-2039.bmp"
    },
    {
        ID: "7",
        Address: "7121 Bailey St",
        City: "Worcester",
        State: "MA",
        ZipCode: "01605",
        Beds: "4",
        Baths: "3",
        HouseSize: 6900,
        LotSize: "2.1",
        Price: "มุมท้ายขวา",
        Coordinates: "42.2797,-71.8746388",
        Features: "Dishwasher, Disposal, Refrigerator, Separate laundry room, Washer/Dryer on 1st floor, Full bath downstairs, Formal dining room, Downstairs family room, Separate family room, Breakfast Bar/Counter, Breakfast nook (eating area), Kitchen island, Recessed lighting in kitchen, Tile countertops in kitchen, Walk-in pantry, Entry foyer, Formal living room, Front living room, Dressing room in master bedroom, Master bedroom separate from other, Master bedroom upstairs, Walk-in closet in master bedroom, 2nd bedroom: 14x16, 3rd bedroom: 12x13, 4th Bedroom: 13x14, Carpet, Double built-in electric ovens, Drywall, Gas cooktop, Manmade wood or laminate floors, Marble/Stone floors, Water conditioner loope",
        YearBuilt: "2008",
        Type: "0",
        Status: "1",
        Image: "../img/รูปรถ/มุมด้าน ท้าย ขวา70-2039.jpg"
    },
    {
        ID: "8",
        Address: "620201 Plymouth Rd",
        City: "Detroit",
        State: "MI",
        ZipCode: " 48224",
        Beds: "4",
        Baths: "4",
        HouseSize: 7840,
        LotSize: "0.33",
        Price: "มุมด้านหน้าขวา",
        Coordinates: "42.3716299,-83.2572188",
        Features: "Dishwasher, Disposal, Refrigerator, Separate laundry room, Full bath downstairs, Formal dining room, 2+ family rooms, Separate family room, Breakfast nook (eating area), Granite countertops in kitchen, Kitchen custom cabinets, Kitchen island, Walk-in pantry, Entry foyer, Formal living room, Rear living room, Vaulted ceiling in living room, Ceiling fan in master bedroom, Master bedroom downstairs, Walk-in closet in master bedroom, 2nd bedroom: 12x15, 3rd bedroom: 12x15, 4th Bedroom: 12x15, Blinds, Built-in microwave, Carpet, Ceiling fan(s), Electric cooktop, Shutters, Skylight(s), Water conditioner owned, Water filtering system, Window coverings partial",
        YearBuilt: "2010",
        Type: "0",
        Status: "0",
        Image: "../img/รูปรถ/มุมด้าน หน้าขวา70-2039.jpg"
    },
    {
        ID: "9",
        Address: "1198 Theresa Cir",
        City: "Whitinsville",
        State: "MA",
        ZipCode: "01582",
        Beds: "4",
        Baths: "3",
        HouseSize: 4990,
        LotSize: "0.8",
        Price: "มุมด้านท้ายซ้าย",
        Coordinates: "42.1072,-71.6928888",
        Features: "Dishwasher, Disposal, Refrigerator, Separate laundry room, Washer/Dryer on 1st floor, 1/2 bath downstairs, Formal dining room, 2+ family rooms, Built-in bookcases in family room, Breakfast Bar/Counter, Granite countertops in kitchen, Kitchen island, Tile flooring in kitchen, Walk-in pantry, Entry foyer, Formal living room, Built-in bookcases in master bedroom, Built-in entertainment center in master bedroom, Ceiling fan in master bedroom, Dressing room in master bedroom, Walk-in closet in master bedroom, 2nd bedroom: 13x12, 3rd bedroom: 12x12, 4th Bedroom: 13x12, Alarm system rented, Blinds, Built-in microwave, Carpet, Ceiling fan(s), Double built-in gas ovens, Tile floors, Window Coverings Throughout",
        YearBuilt: "2011",
        Type: "0",
        Status: "0",
        Image: "../img/รูปรถ/มุมด้านท้ายซ้าย70-2039.jpg"
    },
    ];

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
                        show_grid_branch(newValue);
                        show_grid_product(newValue);
                        show_grid_route(newValue);
                        //console.log(formWidget._options.items[0]);
                    }
                },
                label: {
                    text: formData.label_name
                },
                colSpan: 4
            },
            {
                itemType: "button",
                horizontalAlignment: "left",
                buttonOptions: {
                    text: "เพิ่ม/แก้ไข ลูกค้า",
                    type: "default",
                    onClick: function (e) {
                        show_popup(e, 'เพิ่ม/แก้ไข ลูกค้า', 'customer');
                    }
                },
                colSpan: 6
            },
            ]
        },
        ]
    }).dxForm("instance");

    function show_grid_branch(cs_id) {
        // alert(cs_id);
        var data_branch_filter = branch.filter(function (arr) {
            return arr.cs_id == cs_id;
        });
        //formWidget.option('items[0].items[2].editorOptions.dataSource', data_branch_filter);
        grid_branch.option('dataSource', data_branch_filter);

    }

    function show_grid_product(cs_id) {
        var data_product_filter = product.filter(function (arr) {
            return arr.cs_id == cs_id;
        });
        // console.log(data_contact_filter);
        grid_product.option('dataSource', data_product_filter);
    }

    function show_grid_route(cs_id) {
        var data_route_filter = route.filter(function (arr) {
            return arr.cs_id == cs_id;
        });
        grid_route.option('dataSource', data_route_filter);
    }

    var grid_branch = $("#grid_branch").dxDataGrid({
        // dataSource: product,
        keyExpr: "branch_id",
        editing: {
            allowUpdating: true, // Enables editing
            allowAdding: true, // Enables insertion
            allowDeleting: true, // Enables removing
            mode: 'popup',
            form: {
                items: allow_edit_branch
            },
        },
        onContentReady: function (e) {
            e.element.find(".dx-datagrid-header-panel").find(".dx-toolbar-before").html('<div style="padding-top: 10px" class="textstyle_1"><B>&nbsp;&nbsp;สาขา</B></div>');
        },
        searchPanel: {
            visible: true,
            highlightCaseSensitive: true
        },
        showBorders: true
    }).dxDataGrid("instance");

    var grid_product = $("#grid_product").dxDataGrid({
        // dataSource: product,
        keyExpr: "pro_id",
        editing: {
            allowUpdating: true, // Enables editing
            allowAdding: true, // Enables insertion
            allowDeleting: true, // Enables removing
            mode: 'popup',
            form: {
                //items: allow_edit
            },
        },
        onContentReady: function (e) {
            e.element.find(".dx-datagrid-header-panel").find(".dx-toolbar-before").html('<div style="padding-top: 10px" class="textstyle_1"><B>&nbsp;&nbsp;สินค้า</B></div>');
        },
        searchPanel: {
            visible: true,
            highlightCaseSensitive: true
        },
        columns: show_column_product,
        showBorders: true
    }).dxDataGrid("instance");
        var popup_doc_equip = $("#popup_doc_equip").dxPopup({
            visible: false,
            width: "60%",
            height: "70%",
            showTitle: true,
            title: "ประวัติ",
            contentTemplate: function (container) {
                var scrollView = $("<div id='scrollView'></div>");
                var content = $("<div></div>");
                scrollView.append(content);

                content.html("<div class='row'><div class='col-sm-12'><div id='grid_doc'></div><br></div><div class='col-sm-6'><div id='grid_transport'></div></div><div class='col-sm-6'><div id='grid_safety'></div></div></div>");
                scrollView.dxScrollView({
                    height: '100%',
                    width: '100%'

                });

                container.append(scrollView);

                return container;

            },
            onShown: function () {
            }
        }).dxPopup("instance");
            function show_gridDoc_in_popupDocEquip(options) {
                var grid_doc = $("#grid_doc").dxDataGrid({
                    dataSource: _document,
                    columns: show_column_gridDoc,
                    showBorders: true,
                    height: 'auto',
                    width:'50%',
                    scrolling: {
                        mode: "virtual"
                    },
                    editing: {
                        allowUpdating: true, // Enables editing
                        //allowAdding: true, // Enables insertion
                        //allowDeleting: true, // Enables removing
                        mode: 'batch',
                    },
                    onToolbarPreparing: function (e) {
                        e.toolbarOptions.items.unshift({
                            location: "before",
                            template: function () {
                                return $("<div/>")
                                    //.addClass("informer")
                                    .append(
                                        $("<h2 />")
                                            .addClass("count"),
                                        $("<span />")
                                            //.addClass("name")
                                            .text("เอกสาร")
                                    );
                            }
                        });
                    },
                    searchPanel: {
                        visible: true,
                        highlightCaseSensitive: true
                    },
                }).dxDataGrid('instance');
            }
            function show_gridTran_in_popupDocEquip(options) {
                var grid_transport = $("#grid_transport").dxDataGrid({
                    dataSource: equipment_transport,
                    columns: show_column_gridTran,
                    showBorders: true,
                    height: 'auto',
                    width: 'auto',
                    scrolling: {
                        mode: "virtual"
                    },
                    editing: {
                        allowUpdating: true, // Enables editing
                        //allowAdding: true, // Enables insertion
                        //allowDeleting: true, // Enables removing
                        mode: 'batch',
                    },
                    onContentReady: function (e) {
                        //e.element.find(".dx-datagrid-header-panel").find(".dx-toolbar-before").html('<div style="padding-top: 10px" class="textstyle_1"><B>&nbsp;&nbsp;อุปกรณ์ขนส่ง</B></div>');
                    },
                    onToolbarPreparing: function (e) {
                        e.toolbarOptions.items.unshift({
                            location: "before",
                            template: function () {
                                return $("<div/>")
                                    //.addClass("informer")
                                    .append(
                                        $("<h2 />")
                                            .addClass("count"),
                                        $("<span />")
                                            //.addClass("name")
                                            .text("อุปกรณ์ขนส่ง")
                                    );
                            }
                        });
                    },
                    searchPanel: {
                        visible: true,
                        highlightCaseSensitive: true
                    },
                }).dxDataGrid('instance');
    }
            function show_gridSafety_in_popupDocEquip(options) {
                var grid_safety = $("#grid_safety").dxDataGrid({
                    dataSource: equipment_safety,
                    columns: show_column_gridSafety,
                    showBorders: true,
                    height: 'auto',
                    width: 'auto',
                    scrolling: {
                        mode: "virtual"
                    },
                    editing: {
                        allowUpdating: true, // Enables editing
                        //allowAdding: true, // Enables insertion
                        //allowDeleting: true, // Enables removing
                        mode: 'batch',
                    },
                    onContentReady: function (e) {
                        //e.element.find(".dx-datagrid-header-panel").find(".dx-toolbar-before").html('<div style="padding-top: 10px" class="textstyle_1"><B>&nbsp;&nbsp;อุปกรณ์เซฟตี้</B></div>');
                    },
                    onToolbarPreparing: function (e) {
                        e.toolbarOptions.items.unshift({
                            location: "before",
                            template: function () {
                                return $("<div/>")
                                    //.addClass("informer")
                                    .append(
                                        $("<h2 />")
                                            .addClass("count"),
                                        $("<span />")
                                            //.addClass("name")
                                            .text("อุปกรณ์เซฟตี้")
                                    );
                            }
                        });
                    },
                    searchPanel: {
                        visible: true,
                        highlightCaseSensitive: true
                    },
                }).dxDataGrid('instance');
    }
        var popup_driver_truck = $("#popup_driver_truck").dxPopup({
            visible: false,
            width: "60%",
            height: "70%",
            showTitle: true,
            title: "ประวัติ",
            contentTemplate: function (container) {
                var scrollView = $("<div id='scrollView'></div>");
                var content = $("<div></div>");
                scrollView.append(content);

                content.html("<div class='row'><div class='col-sm-12'><div id='grid_driver'></div><br></div><div class='col-sm-6'><div id='grid_headCar'></div></div><div class='col-sm-6'><div id='grid_tailCar'></div></div></div>");
                scrollView.dxScrollView({
                    height: '100%',
                    width: '100%'

                });

                container.append(scrollView);

                return container;

            },
            onShown: function () {
            }
        }).dxPopup("instance");
            function show_gridDriver_in_popupDriverTruck(options) {
                var grid_driver = $("#grid_driver").dxDataGrid({
                    dataSource: driver,
                    columns: show_column_gridDriver,
                    showBorders: true,
                    height: '250',
                    width: '50%',
                    scrolling: {
                        mode: "virtual"
                    },
                    editing: {
                        allowUpdating: true, // Enables editing
                        //allowAdding: true, // Enables insertion
                        //allowDeleting: true, // Enables removing
                        mode: 'batch',
                    },
                    onToolbarPreparing: function (e) {
                        e.toolbarOptions.items.unshift({
                            location: "before",
                            template: function () {
                                return $("<div/>")
                                    //.addClass("informer")
                                    .append(
                                        $("<h2 />")
                                            .addClass("count"),
                                        $("<span />")
                                            //.addClass("name")
                                            .text("เอกสาร")
                                    );
                            }
                        });
                    },
                    searchPanel: {
                        visible: true,
                        highlightCaseSensitive: true
                    },
                }).dxDataGrid('instance');
            }
            function show_gridHeadCar_in_popupDriverTruck(options) {
                var grid_headCar = $("#grid_headCar").dxDataGrid({
                    dataSource: car_head,
                    columns: show_column_headCar,
                    showBorders: true,
                    height: '250',
                    width: '100%',
                    scrolling: {
                        mode: "virtual"
                    },
                    editing: {
                        allowUpdating: true, // Enables editing
                        //allowAdding: true, // Enables insertion
                        //allowDeleting: true, // Enables removing
                        mode: 'batch',
                    },
                    onContentReady: function (e) {
                        //e.element.find(".dx-datagrid-header-panel").find(".dx-toolbar-before").html('<div style="padding-top: 10px" class="textstyle_1"><B>&nbsp;&nbsp;อุปกรณ์ขนส่ง</B></div>');
                    },
                    onToolbarPreparing: function (e) {
                        e.toolbarOptions.items.unshift({
                            location: "before",
                            template: function () {
                                return $("<div/>")
                                    //.addClass("informer")
                                    .append(
                                        $("<h2 />")
                                            .addClass("count"),
                                        $("<span />")
                                            //.addClass("name")
                                            .text("หัวลาก")
                                    );
                            }
                        });
                    },
                    searchPanel: {
                        visible: true,
                        highlightCaseSensitive: true
                    },
                }).dxDataGrid('instance');
            }
            function show_gridTailCar_in_popupDriverTruck(options) {
                var grid_tailCar = $("#grid_tailCar").dxDataGrid({
                    dataSource: car_tail,
                    columns: show_column_tailCar,
                    showBorders: true,
                    height: '250',
                    width: '100%',
                    scrolling: {
                        mode: "virtual"
                    },
                    editing: {
                        allowUpdating: true, // Enables editing
                        //allowAdding: true, // Enables insertion
                        //allowDeleting: true, // Enables removing
                        mode: 'batch',
                    },
                    onContentReady: function (e) {
                        //e.element.find(".dx-datagrid-header-panel").find(".dx-toolbar-before").html('<div style="padding-top: 10px" class="textstyle_1"><B>&nbsp;&nbsp;อุปกรณ์ขนส่ง</B></div>');
                    },
                    onToolbarPreparing: function (e) {
                        e.toolbarOptions.items.unshift({
                            location: "before",
                            template: function () {
                                return $("<div/>")
                                    //.addClass("informer")
                                    .append(
                                        $("<h2 />")
                                            .addClass("count"),
                                        $("<span />")
                                            //.addClass("name")
                                            .text("หางกึ่งพ่วง")
                                    );
                            }
                        });
                    },
                    searchPanel: {
                        visible: true,
                        highlightCaseSensitive: true
                    },
                }).dxDataGrid('instance');
            }
            var popup_detail = $("#popup_detail").dxPopup({
                visible: false,
                width: "600",
                height: "400",
                showTitle: true,
                title: "ประวัติ",
                contentTemplate: function (content) {
                    return $("<div id='grid_license'>test</div>");
                }
            }).dxPopup("instance");
                function show_popup_detail(e, title, options) {
                    console.log(options);
                    popup_detail.option('title', title + '(เบอร์รถ :' + options.data.number_car + ', ทะเบียน :' + options.data.license_car + ')');
                    popup_detail._options.contentTemplate = function (content) {
                        var maxHeight = $("#popup_add_customer .dx-overlay-content").height() - 150;
                        content.append("<div class='row'><div class='col-sm-6' style='height:100%;padding: 5% 5% 5% 5%;'><div id='gallery' ></div></div><div class='col-sm-6' style='height:100%;padding: 5% 5% 5% 5%;'><h4>ข้อมูล</h4><span>ลักษณะ : ลากจูง</span><br><span>น้ำหนักรถเปล่า : 8600 ตัน</span><br><span>ยี่ห้อ : SCANIA</span><br><span>รุ่น : Y52PH6X4Z</span></div></div>");
                        $("#gallery").dxGallery({
                            dataSource: gallery,
                            height: "80%",
                            width: "100%",
                            slideshowDelay: 3000,
                            loop: true,
                            showIndicator: true,
                            itemTemplate: function (item, index) {
                                var result = $("<div>");
                                $("<img>").attr("src", item.Image).appendTo(result);
                                $("<div>").addClass("item-price").text(item.Price).appendTo(result);
                                $("<div>").addClass("item-address").text('').appendTo(result);
                                return result;
                            }
                        });

                    }
                    $("#popup_detail").dxPopup("show");
                    //show_grid_in_popup_detail(options);
                }


    var grid_route = $("#grid_route").dxDataGrid({
        // dataSource: product,
        keyExpr: "route_id",
        editing: {
            allowUpdating: true, // Enables editing
            allowAdding: true, // Enables insertion
            allowDeleting: true // Enables removing
        },
        onContentReady: function (e) {
            e.element.find(".dx-datagrid-header-panel").find(".dx-toolbar-before").html('<div style="padding-top: 10px" class="textstyle_1"><B>&nbsp;&nbsp;เส้นทาง</B></div>');
        },
        searchPanel: {
            visible: true,
            highlightCaseSensitive: true
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
    "label_name": "ลูกค้า",
    "branch": "",
    "label_branch": "สาขา",
    "address": "",
    "label_address": "ที่อยู่",
    "contact": "",
    "label_contact": "ติดต่อ",
    "data_contact": "",
    "label_data_contact": "ข้อมูลติดต่อ",
    // "Date": null,
    // "Country": "",
    // "City": "",
    // "Address": "",
    // "Phone": "",
    // "Accepted": false
};

var customer_select = [
    {
        cs_id: 1,
        name: "TRT",
        force: 1,
    }, {
        cs_id: 2,
        name: "Maxxis",
        force: 0,
    }, {
        cs_id: 3,
        name: "Thai Summit",
        force: 0,
    }
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

var branch = [
    {
        branch_id: 1,
        branch: "ปลวกแดง",
        address: "7/114 หมู่ 4 นิคมอุตสาหกรรมอมตะซิตี้ ตำบลมาบยางพร อำเภอปลวกแดง",
        //country: 'ไทย',
        //province: "ระยอง",
        //district: "ปลวกแดง",
        //sub_district: "มาบยางพร",
        //house_no: "7/114",
        //postcode: '21140',
        cs_id: 1,
    },
    {
        branch_id: 2,
        branch: "ปลวกแดง",
        address: "300/1 หมู่ 1 นิคมอุตสาหกรรมอีสเทิร์นซีบอร์ด ตำบลตาสิทธิ์ อำเภอปลวกแดง",
        //country: 'ไทย',
        //province: "ระยอง",
        //district: "ปลวกแดง",
        //sub_district: "ตาสิทธิ์",
        //house_no: "300/1",
        //postcode: '21140',
        cs_id: 2,
    },
    {
        branch_id: 3,
        branch: "ปลวกแดง",
        address: "500/9, ตาสิทธิ์, ปลวกแดง, ",
        //country: 'ไทย',
        //province: "ระยอง",
        //district: "ปลวกแดง",
        //sub_district: "ตาสิทธิ์",
        //house_no: "500/9",
        //postcode: '21140',
        cs_id: 3,
    },
    {
        branch_id: 4,
        branch: "ปิ่นทอง",
        address: "150/14,16-20, หนองขาม, ศรีราชา, ชลบุรี 20110",
        //country: 'ไทย',
        //province: "ชลบุรี",
        //district: "ศรีราชา",
        //sub_district: "หนองขาม",
        //house_no: "150/14,16-20",
        //postcode: '20110',
        cs_id: 3,
    },
    {
        branch_id: 5,
        branch: "แหลมฉบัง",
        address: "202 ม.3 นิคมอุตสาหกรรมแหลมฉบัง ต.ทุ่งสุขลา อ.ศรีราชา",
        //country: 'ไทย',
        //province: "ชลบุรี",
        //district: "ศรีราชา",
        //sub_district: "ทุ่งสุขลา",
        //house_no: "202",
        //postcode: '20230',
        cs_id: 3,
    },
];

var contact = [
    {
        contact_id: 1,
        name: 'นาย ตึ้ง',
        positon: 'ฟู่จ่ง',
        tel: '081-2345678'
    },
    {
        contact_id: 2,
        name: 'นาย ภูมิ',
        positon: 'นายกรัฐมนตรี',
        tel: '081-2345678'
    },
    {
        contact_id: 3,
        name: 'นาย ก็อล์ฟ',
        positon: 'เด็กแว้น',
        tel: '081-2345678'
    },
    {
        contact_id: 4,
        name: 'นาย มอส',
        positon: 'เด็กสมัยนี้โตไวเนอะ',
        tel: '081-2345678'
    }
]

var product = [
    {
        pro_id: 1,
        name: 'CO2',
        condition: '18 ตัน ควรโหลดไม่เกิน 18.50 ตัน',
        style_transport: 'บรรจุถัง ขนส่งทางบก บร',
        method_pack: 'บรรจุถัง',
        driver_car: 'View',
        doc_equip: 'View',
        fleet: 'ต่างประเทศ',
        truck_number: 'A123-9807-009',
        special_method: '- รอถังเย็นก่อนโหลดงาน 30 นาที',
        supplement_method: '- รองไม้ที่ล้อ กันรถไหล',
        cs_id: 1,
    },
    {
        pro_id: 2,
        name: '',
        condition: '',
        style_transport: '',
        method_pack: '',
        driver_car: 'View',
        doc_equip: 'View',
        fleet: '',
        truck_number: '',
        special_method: '',
        supplement_method: '',
        cs_id: 1,
    },
    {
        pro_id: 3,
        name: '',
        condition: '',
        style_transport: '',
        method_pack: '',
        driver_car: 'View',
        doc_equip: 'View',
        fleet: '',
        truck_number: '',
        special_method: '',
        supplement_method: '',
        cs_id: 1,
    },
    {
        pro_id: 4,
        name: '',
        condition: '',
        style_transport: '',
        method_pack: '',
        driver_car: 'View',
        doc_equip: 'View',
        fleet: '',
        truck_number: '',
        special_method: '',
        supplement_method: '',
        cs_id: 1,
    },
    {
        pro_id: 5,
        name: '',
        condition: '',
        style_transport: '',
        method_pack: '',
        driver_car: 'View',
        doc_equip: 'View',
        fleet: '',
        truck_number: '',
        special_method: '',
        supplement_method: '',
        cs_id: 1,
    },
];

var route = [
    {
        route_id: 1,
        point_up_product: "แหลมฉบัง",
        point_down_product: "เชียงใหม่",
        checkpoint: "กทม",
        distance:"95",
        cs_id: 1,
    },
    {
        route_id: 2,
        point_up_product: "ปลวกแดง",
        point_down_product: "อมตะ",
        checkpoint: "ชลบุรี",
        distance: "60",
        cs_id: 1,
    },

]

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

var allow_edit_branch = [
    {
        itemType: "group",
        colCount: 2,
        colSpan: 2,
        //caption: "Title",
        items: ["branch", "address"]
    },
    {
        itemType: "group",
        colCount: 2,
        colSpan: 2,
        items: [
            {
                colSpan: 2,
                template: function (data, itemElement) {
                    //console.log(data.component._options);
                    //console.log(data.component._options.validationGroup.oldData.path);
                    itemElement.append($("<div id='grid_contact'></div>"));
                    var grid_contact = $("#grid_contact").dxDataGrid({
                        dataSource: contact,
                        keyExpr: "contact_id",
                        editing: {
                            allowUpdating: true, // Enables editing
                            allowAdding: true, // Enables insertion
                            allowDeleting: true // Enables removing
                        },
                        onContentReady: function (e) {
                            e.element.find(".dx-datagrid-header-panel").find(".dx-toolbar-before").html('<div style="padding-top: 10px" class="textstyle_1"><B>&nbsp;&nbsp;ติดต่อ</B></div>');
                        },
                        showBorders: true
                    }).dxDataGrid("instance");
                }
            },
            //{
            //    itemType: "group",
            //    //colCount: 3,
            //    items: ["take", "bring", "note",
            //        {
            //            template: function (data, itemElement) {

            //                //$("#image").hide();
            //                itemElement.append($("<div id='btn_upload_file'></div>"));
            //                btn_upload_file = $("#btn_upload_file").dxFileUploader({
            //                    selectButtonText: "Select photo",
            //                    labelText: "",
            //                    accept: "image/*",
            //                    uploadMode: "useForm",
            //                    onValueChanged: function (e) {
            //                        //alert('test');
            //                        if (e.value.length) {
            //                            var reader = new FileReader();
            //                            reader.onload = function (e) {
            //                                $('#image').attr('src', e.target.result);
            //                                $("#image").show();
            //                            }
            //                            reader.readAsDataURL(e.value[0]);
            //                        }
            //                    }
            //                }).dxFileUploader("instance");
            //            },
            //            //template: "<div class='btn_upload_file'></div>",
            //        }
            //    ]
            //}
        ]
        ,
    }
];