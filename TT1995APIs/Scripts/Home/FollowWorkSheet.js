$(function () {

    var dataSource = [{
        worksheet: "สร้างแล้ว",
        count: 3
    },
        //{
        //worksheet: "อนุมัติ",
        //count: 8
        //},
        {
        worksheet: "กำลังทำงาน",
        count: 6
    }, {
        worksheet: "เสร็จสิ้น",
        count: 5
    }];

    var data_follow_worksheet = [
        {
            "tran_id": 'TT000001',
            "order_id": 'PO000001',
            "tran_name": "งาน A",
            "detail": [{ print: 'ปริ๊น', check:'ตรวจสอบ'}],
            "tran_status": "เสร็จสิ้น",
            "create_date": "2019.01.01",
            "create_by": "ธนกฤต",
            "jobWork": "",
        },
        {
            "tran_id": 'TT000002',
            "order_id": 'PO000002',
            "tran_name": "งาน B",
            "detail": [{ print: 'ปริ๊น', check: 'ตรวจสอบ' }],
            "tran_status": "กำลังทำงาน",
            "create_date": "2019.01.01",
            "create_by": "ธนกฤต",
            "jobWork": "อัพโหลดไฟล์",
        },
        {
            "tran_id": 'TT000003',
            "order_id": 'PO000003',
            "tran_name": "งาน C",
            "detail": [{ print: 'ปริ๊น', check: 'ตรวจสอบ' }],
            "tran_status": "กำลังทำงาน",
            "create_date": "2019.01.01",
            "create_by": "ธนกฤต",
            "jobWork": "อัพโหลดไฟล์",
        },
        {
            "tran_id": 'TT000004',
            "order_id": 'PO000004',
            "tran_name": "งาน D",
            "detail": [{ print: 'ปริ๊น', check: 'ตรวจสอบ' }],
            "tran_status": "เสร็จสิ้น",
            "create_date": "2019.01.01",
            "create_by": "ธนกฤต",
            "jobWork": "",

        },
        {
            "tran_id": 'TT000005',
            "order_id": 'PO000005',
            "tran_name": "งาน E",
            "detail": [{ print: 'ปริ๊น', check: 'ตรวจสอบ' }],
            "tran_status": "เสร็จสิ้น",
            "create_date": "2019.01.01",
            "create_by": "ธนกฤต",
            "jobWork": "",
        },
        {
            "tran_id": 'TT000006',
            "order_id": 'PO000006',
            "tran_name": "งาน F",
            "detail": [{ print: 'ปริ๊น', check: 'ตรวจสอบ' }],
            "tran_status": "รออนุมัติ",
            "create_date": "2019.01.01",
            "create_by": "ธนกฤต",
            "jobWork": "อนุมัติ",
        },
        {
            "tran_id": 'TT000007',
            "order_id": 'PO000007',
            "tran_name": "งาน G",
            "detail": [{ print: 'ปริ๊น', check: 'ตรวจสอบ' }],
            "tran_status": "เสร็จสิ้น",
            "create_date": "2019.01.01",
            "create_by": "ธนกฤต",
            "jobWork": "",
        },
        {
            "tran_id": 'TT000008',
            "order_id": 'PO000008',
            "tran_name": "งาน H",
            "detail": [{ print: 'ปริ๊น', check: 'ตรวจสอบ' }],
            "tran_status": "กำลังทำงาน",
            "create_date": "2019.01.01",
            "create_by": "ธนกฤต",
            "jobWork": "อัพโหลดไฟล์",
        },
        {
            "tran_id": 'TT000009',
            "order_id": 'PO000009',
            "tran_name": "งาน I",
            "detail": [{ print: 'ปริ๊น', check: 'ตรวจสอบ' }],
            "tran_status": "รออนุมัติ",
            "create_date": "2019.01.01",
            "create_by": "ธนกฤต",
            "jobWork": "อนุมัติ",

        },
        {
            "tran_id": 'TT0000010',
            "order_id": 'PO0000010',
            "tran_name": "งาน J",
            "detail": [{ print: 'ปริ๊น', check:'ตรวจสอบ'}],
            "tran_status": "เสร็จสิ้น",
            "create_date": "2019.01.01",
            "create_by": "ธนกฤต",
            "jobWork": "",
        },
        {
            "tran_id": 'TT0000011',
            "order_id": 'PO0000011',
            "tran_name": "งาน K",
            "detail": [{ print: 'ปริ๊น', check: 'ตรวจสอบ' }],
            "tran_status": "เสร็จสิ้น",
            "create_date": "2019.01.01",
            "create_by": "ธนกฤต",
            "jobWork": "",
        },
        {
            "tran_id": 'TT0000012',
            "order_id": 'PO0000012',
            "tran_name": "งาน L",
            "detail": [{ print: 'ปริ๊น', check: 'ตรวจสอบ' }], 
            "tran_status": "รออนุมัติ",
            "create_date": "2019.01.01",
            "create_by": "ธนกฤต",
            "jobWork": "อนุมัติ",
        }
    ];

    var popup_job_work = $("#popup_jobWork").dxPopup({
        visible: false,
        width: "60%",
        height: "70%",
        showTitle: true,
        title: "กิจกรรม",
        contentTemplate: function (content) {
            return $("<div id='fileuploader'></div><div class = 'content' id = 'selected-files'></div >");
        }
    }).dxPopup("instance");

    var popup_job_work = $("#popup_check").dxPopup({
        visible: false,
        width: "200",
        height: "170",
        showTitle: true,
        title: "ตรวจสอบ",
        contentTemplate: function (content) {
            return $("<div>วันที่ปริ๊น: <span>07/11/2019<span></p><p>โดย: <span>นาย ทิว<span></p><p>เสร็จ: <span>07/12/219<span></p></div>");
        }
    }).dxPopup("instance");

    function popup_fileUploader() {
        var fileUploader = $("#fileuploader").dxFileUploader({
            multiple: false,
            accept: "*",
            value: [],
            uploadMode: "instantly",
            uploadUrl: "https://js.devexpress.com/Content/Services/upload.aspx",
            onValueChanged: function (e) {
                var files = e.value;
                if (files.length > 0) {
                    $("#selected-files .selected-item").remove();
                    $.each(files, function (i, file) {                        
                        $selectedItem.appendTo($("#selected-files"));
                    });
                    $("#selected-files").show();
                }
                else
                    $("#selected-files").hide();
            }
        }).dxFileUploader("instance");
    }


    var show_column = [
        {
            dataField: "tran_id",
            caption: "เลขที่ใบงาน",
        },
        {
            dataField: "order_id",
            caption: "เลขที่คำสั่งลูกค้า",
        },
        {
            dataField: "tran_name",
            caption: "ชื่องาน",
        },
        {
            dataField: "tran_status",
            caption: "สถานะ",
        },
        {
            dataField: "create_date",
            caption: "วันสร้างเอกสาร",
        },
        {
            dataField: "create_by",
            caption: "ผู้สร้าง",
        },
        {
            dataField: "jobWork",
            caption: "กิจกรรม",
            cellTemplate: function (container, options) {
                $('<a style="color:green;font-weight:bold;" />').addClass('dx-link')
                    .text(options.value)
                    .on('dxclick', function (e) {
                        if (options.value == "อนุมัติ") {
                            var result = DevExpress.ui.dialog.confirm("<i>คุณต้องการอนุมัติใช่มั้ย?</i>", "Confirm");
                            //result.done(function (dialogResult) {
                            //    alert(dialogResult ? "Confirmed" : "Canceled");
                            //});
                        } else {
                            $("#popup_jobWork").dxPopup("show");
                            popup_fileUploader();
                        }
                    }).appendTo(container);
            }
        },
        {
            dataField: "detail",
            caption: "รายละเอียด",
            cellTemplate: function (container, options) {
                $('<a style="color:green;font-weight:bold;" />').addClass('dx-link')
                    .addClass('a-margin-left')
                    .text(options.value[0].print)
                    .on('dxclick', function (e) {
                        //console.log(options.value);
                        window.open('../Report/WorkSheet.pdf', '_blank');
                    }).appendTo(container);
                $('<a style="color:green;font-weight:bold;" />').addClass('dx-link')
                    .addClass('a-margin-left')
                    .text(options.value[0].check)
                    .on('dxclick', function (e) {
                        $("#popup_check").dxPopup("show");
                    }).appendTo(container);
            }
        }
    ];

    var grid_follow_worksheet = $("#grid_follow_worksheet").dxDataGrid({
        dataSource: data_follow_worksheet,
        keyExpr: "tran_id",
        columns: show_column,
        showBorders: true,
        searchPanel: {
            visible: true,
            width: 240,
            placeholder: "Search..."
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [5, 10, 20]
        },
        paging: {
            pageSize: 10
        },
        filterRow: {
            visible: true
        },
    }).dxDataGrid("instance");

    $("#chart").dxChart({
        dataSource: dataSource,
        series: {
            argumentField: "worksheet",
            valueField: "count",
            name: "สถานะ",
            type: "bar",
            color: '#ffaa66'
        },
        legend: {
            verticalAlignment: "bottom",
            horizontalAlignment: "center"
        },
        title: "ใบงานการเดินทาง",
    });
    var now = new Date();

    $("#date_start").dxDateBox({
        type: "date",
        value: now
    });
    $("#date_end").dxDateBox({
        type: "date",
        value: now
    });
    $("#validate").dxButton({
        text: "ค้นหา",
        type: "default",
        onClick: function (e) {
            var result = e.validationGroup.validate();
            if (result.isValid) {
                DevExpress.ui.notify("ค้นหาสำเร็จ", "success");
            } else {
                DevExpress.ui.notify("ค้นหาไม่สำเร็จ", "error");
            }
        }
    });

    $("#checkBoxCreated").dxCheckBox({
        text: "สร้างแล้ว",
        //value: undefined,
        onValueChanged: function (e) {
            //alert(e.value);
        }
    });

    $("#checkBoxDoing").dxCheckBox({
        text: "กำลังทำ",
        //value: undefined,
        onValueChanged: function (e) {
            //alert(e.value);
        }
    });

    $("#checkBoxFinish").dxCheckBox({
        text: "เสร็จแล้ว",
        //value: undefined,
        onValueChanged: function (e) {
            //alert(e.value);
        }
    });
    $("#checkBoxAll").dxCheckBox({
        text: "All",
        //value: undefined,
        onValueChanged: function (e) {
            //alert(e.value);
        }
    });


});