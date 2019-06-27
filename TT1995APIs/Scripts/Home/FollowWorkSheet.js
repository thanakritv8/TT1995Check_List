$(function () {

    var data_follow_worksheet = [
        {
            "tran_id": 'TT000001',
            "order_id": 'PO000001',
            "tran_name": "งาน A",
            "detail": "View",
            "tran_status": "เสร็จสิ้น",
            "create_date": "2019.01.01",
            "create_by": "ธนกฤต"
        },
        {
            "tran_id": 'TT000002',
            "order_id": 'PO000002',
            "tran_name": "งาน B",
            "detail": "View",
            "tran_status": "กำลังทำงาน",
            "create_date": "2019.01.01",
            "create_by": "ธนกฤต"
        },
        {
            "tran_id": 'TT000003',
            "order_id": 'PO000003',
            "tran_name": "งาน C",
            "detail": "View",
            "tran_status": "กำลังทำงาน",
            "create_date": "2019.01.01",
            "create_by": "ธนกฤต"
        },
        {
            "tran_id": 'TT000004',
            "order_id": 'PO000004',
            "tran_name": "งาน D",
            "detail": "View",
            "tran_status": "เสร็จสิ้น",
            "create_date": "2019.01.01",
            "create_by": "ธนกฤต"
        },
        {
            "tran_id": 'TT000005',
            "order_id": 'PO000005',
            "tran_name": "งาน E",
            "detail": "View",
            "tran_status": "เสร็จสิ้น",
            "create_date": "2019.01.01",
            "create_by": "ธนกฤต"
        },
        {
            "tran_id": 'TT000006',
            "order_id": 'PO000006',
            "tran_name": "งาน F",
            "detail": "View",
            "tran_status": "รออนุมัติ",
            "create_date": "2019.01.01",
            "create_by": "ธนกฤต"
        },
        {
            "tran_id": 'TT000007',
            "order_id": 'PO000007',
            "tran_name": "งาน G",
            "detail": "View",
            "tran_status": "เสร็จสิ้น",
            "create_date": "2019.01.01",
            "create_by": "ธนกฤต"
        },
        {
            "tran_id": 'TT000008',
            "order_id": 'PO000008',
            "tran_name": "งาน H",
            "detail": "View",
            "tran_status": "กำลังทำงาน",
            "create_date": "2019.01.01",
            "create_by": "ธนกฤต"
        },
        {
            "tran_id": 'TT000009',
            "order_id": 'PO000009',
            "tran_name": "งาน I",
            "detail": "View",
            "tran_status": "รออนุมัติ",
            "create_date": "2019.01.01",
            "create_by": "ธนกฤต"
        },
        {
            "tran_id": 'TT0000010',
            "order_id": 'PO0000010',
            "tran_name": "งาน J",
            "detail": "View",
            "tran_status": "เสร็จสิ้น",
            "create_date": "2019.01.01",
            "create_by": "ธนกฤต"
        },
        {
            "tran_id": 'TT0000011',
            "order_id": 'PO0000011',
            "tran_name": "งาน K",
            "detail": "View",
            "tran_status": "เสร็จสิ้น",
            "create_date": "2019.01.01",
            "create_by": "ธนกฤต"
        },
        {
            "tran_id": 'TT0000012',
            "order_id": 'PO0000012',
            "tran_name": "งาน L",
            "detail": "View",
            "tran_status": "รออนุมัติ",
            "create_date": "2019.01.01",
            "create_by": "ธนกฤต"
        }
    ];


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
            dataField: "detail",
            caption: "รายละเอียด",
            cellTemplate: function (container, options) {
                $('<a style="color:green;font-weight:bold;" />').addClass('dx-link')
                    .text(options.value)
                    .on('dxclick', function (e) {
                        window.open('../Report/WorkSheet.pdf', '_blank');
                    }).appendTo(container);
            }
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
    ];

    var grid_driver = $("#grid_follow_worksheet").dxDataGrid({
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

});