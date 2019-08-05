$(function () {

    $("#example-basic").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        autoFocus: true
    });
    function GetDriverAll() {
        return $.ajax({
            type: "GET",
            url: "http://tabien.threetrans.com/TTApi/CheckList/Profile/GetDriverAll",
            dataType: "json",
            async: false,
            success: function (data) {
            }
        }).responseJSON;
    }
    var driver = GetDriverAll();

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
        //{
        //    dataField: "dlot_expired",
        //    caption: "ใบอนุญาตขับขี่ขนส่งน้ำมัน",
        //},
        //{
        //    dataField: "dlngt_expired",
        //    caption: "ใบอนุญาตขับขี่ขนส่งก๊าสธรรมชาติ",
        //},
        //{
        //    dataField: "dldot_expired",
        //    caption: "ใบอนุญาตขับขี่ขนส่งวัตถุอันตราย",
        //},
        //{
        //    dataField: "dl_expired",
        //    caption: "ใบอนุญาตขับขี่",
        //    cellTemplate: function (container, options) {
        //        $('<a style="color:green;font-weight:bold;" />').addClass('dx-link')
        //            .text(options.value)
        //            .on('dxclick', function (e) {
        //                show_popup(e, 'ใบอนุญาตขับขี่', options, dl_data);
        //            }).appendTo(container);
        //    }
        //},
        //{
        //    dataField: "lf_expired",
        //    caption: "ใบอนุญาตโรงงาน",
        //    cellTemplate: function (container, options) {
        //        $('<a style="color:green;font-weight:bold;" />').addClass('dx-link')
        //            .text(options.value)
        //            .on('dxclick', function (e) {
        //                show_popup(e, 'ใบอนุญาตโรงงาน', options, lf_data);
        //            }).appendTo(container);
        //    }
        //},
        //,
        //{
        //    dataField: "pas_expired",
        //    caption: "พาสสปอร์ต",
        //    cellTemplate: function (container, options) {
        //        $('<a style="color:green;font-weight:bold;" />').addClass('dx-link')
        //            .text(options.value)
        //            .on('dxclick', function (e) {
        //                show_popup(e, 'พาสสปอร์ต', options, pas_data);
        //            }).appendTo(container);
        //    }
        //}
    ];

    var grid_driver = $("#grid_driver").dxDataGrid({
        dataSource: driver,
        searchPanel: {
            visible: true,
            highlightCaseSensitive: true
        },
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