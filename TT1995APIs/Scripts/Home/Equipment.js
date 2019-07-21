$(function () {
    $("#tab").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        enableFinishButton: false,
        enablePagination: false,
        enableAllSteps: true,
    });
    $(".last").addClass("done");

    function get_eq_safety() {
        return $.ajax({
            type: "GET",
            url: "http://43.254.133.49:8015/TTApi/CheckList/Profile/GetEquipmentSafetyAll",
            dataType: "json",
            async: false,
            success: function (data) {
            }
        }).responseJSON;
    }
    function get_eq_transport() {
        return $.ajax({
            type: "GET",
            url: "http://43.254.133.49:8015/TTApi/CheckList/Profile/GetEquipmentTransportAll",
            dataType: "json",
            async: false,
            success: function (data) {
            }
        }).responseJSON;
    }

    var equipment_safety = get_eq_safety();
    var equipment_transport = get_eq_transport();

    var equipment_type = [{
        eq_type_id: "1",
        eq_type:'พื้นฐาน'
    },{
        eq_type_id: "2",
        eq_type: 'พิเศษ'
    }
    ]

    var allow_edit = [
    {
        itemType: "group",
        colCount: 2,
        colSpan: 2,
        //caption: "Title",
            items: ["eq_safety_code", "eq_name"]
    },
{
    itemType: "group",
    colCount: 2,
    colSpan: 2,
    items: [
        {
            template: function (data, itemElement) {
                //console.log(data.component._options.validationGroup.oldData.eq_path);
                var pic = '';
                if (typeof data.component._options.validationGroup.oldData === "undefined") {
                    pic = '';
                   
                } else {
                    console.log(data);
                    pic = (data.component._options.validationGroup.oldData.eq_path).replace("C:\\inetpub\\wwwroot", "http://43.254.133.49:8015");
                    console.log(pic);
                }
                itemElement.append($("<div class='center'><div class='form-avatar' id='form-avatar'><img src='" + pic + "' id='image' width='100%' height='100%'></div></div>"));
                if (pic == '') {
                    $("#image").hide();
                }
            }
        },
        {
            itemType: "group",
            //colCount: 3,
            items: ["style", "property", "suggestion","eq_type_id",// "stick_car", "job_only",
                {
                    template: function (data, itemElement) {

                        //$("#image").hide();
                        itemElement.append($("<div id='btn_upload_file'></div>"));
                        btn_upload_file = $("#btn_upload_file").dxFileUploader({
                            selectButtonText: "Select photo",
                            labelText: "",
                            accept: "image/*",
                            uploadMode: "useForm",
                            onValueChanged: function (e) {
                                //alert('test');
                                if (e.value.length) {
                                    var reader = new FileReader();
                                    reader.onload = function (e) {
                                        $('#image').attr('src', e.target.result);
                                        $("#image").show();
                                    }
                                    reader.readAsDataURL(e.value[0]);
                                }
                            }
                        }).dxFileUploader("instance");
                    },
                    //template: "<div class='btn_upload_file'></div>",
                }
            ]
        }]
    ,
}
    ];
    var allow_edit_transport = [
    {
        itemType: "group",
        colCount: 2,
        colSpan: 2,
        //caption: "Title",
        items: ["eq_tran_code", "eq_name"]
    },
{
    itemType: "group",
    colCount: 2,
    colSpan: 2,
    items: [
        {
            template: function (data, itemElement) {
                //console.log(data.component._options.validationGroup.oldData.eq_path);
                var pic = '';
                if (typeof data.component._options.validationGroup.oldData === "undefined") {
                    pic = '';

                } else {
                    console.log(data);
                    pic = (data.component._options.validationGroup.oldData.eq_path).replace("C:\\inetpub\\wwwroot", "http://43.254.133.49:8015");
                    console.log(pic);
                }
                itemElement.append($("<div class='center'><div class='form-avatar' id='form-avatar'><img src='" + pic + "' id='image' width='100%' height='100%'></div></div>"));
                if (pic == '') {
                    $("#image").hide();
                }
            }
        },
        {
            itemType: "group",
            //colCount: 3,
            items: ["style", "property", "suggestion", "eq_type_id",// "stick_car", "job_only",
                {
                    template: function (data, itemElement) {

                        //$("#image").hide();
                        itemElement.append($("<div id='btn_upload_file'></div>"));
                        btn_upload_file = $("#btn_upload_file").dxFileUploader({
                            selectButtonText: "Select photo",
                            labelText: "",
                            accept: "image/*",
                            uploadMode: "useForm",
                            onValueChanged: function (e) {
                                //alert('test');
                                if (e.value.length) {
                                    var reader = new FileReader();
                                    reader.onload = function (e) {
                                        $('#image').attr('src', e.target.result);
                                        $("#image").show();
                                    }
                                    reader.readAsDataURL(e.value[0]);
                                }
                            }
                        }).dxFileUploader("instance");
                    },
                    //template: "<div class='btn_upload_file'></div>",
                }
            ]
        }]
    ,
}
    ];

    var show_column = [
        {
            dataField: "eq_safety_code",
            caption: "หมายเลข"
        },
        {
            dataField: "eq_name",
            caption: "ชื่อ"
        },
        {
            dataField: "style",
            caption: "ลักษณะ"
        },
        {
            dataField: "property",
            caption: "คุณสมบัติ"
        },
        {
            dataField: "suggestion",
            caption: "คำแนะนำ"
        },
        {
            dataField: "eq_type_id",
            caption: "ชนิดอุปกรณ์",
            lookup: {
                dataSource: equipment_type,
                valueExpr: "eq_type_id",
                displayExpr: "eq_type"
            }
        },
        //{
        //    dataField: "stick_car",
        //    caption: "อุปกรณ์พื้นฐานติดรถ",
        //    dataType: "boolean",
        //},
        //{
        //    dataField: "job_only",
        //    caption: "อุปกรณ์พิเศษเฉพาะงาน",
        //    dataType: "boolean",
        //}
    ];
    var show_column_transport = [
        {
            dataField: "eq_tran_code",
            caption: "หมายเลข"
        },
        {
            dataField: "eq_name",
            caption: "ชื่อ"
        },
        {
            dataField: "style",
            caption: "ลักษณะ"
        },
        {
            dataField: "property",
            caption: "คุณสมบัติ"
        },
        {
            dataField: "suggestion",
            caption: "คำแนะนำ"
        },
        {
            dataField: "eq_type_id",
            caption: "ชนิดอุปกรณ์",
            lookup: {
                dataSource: equipment_type,
                valueExpr: "eq_type_id",
                displayExpr: "eq_type"
            }
        },
        //{
        //    dataField: "stick_car",
        //    caption: "อุปกรณ์พื้นฐานติดรถ",
        //    dataType: "boolean",
        //},
        //{
        //    dataField: "job_only",
        //    caption: "อุปกรณ์พิเศษเฉพาะงาน",
        //    dataType: "boolean",
        //}
    ];

    var grid_transport = $("#grid_transport").dxDataGrid({
        dataSource: equipment_transport,
        keyExpr: "eq_tran_id",
        searchPanel: {
            visible: true,
        },
        columns: show_column_transport,
        editing: {
            allowUpdating: true, // Enables editing
            allowAdding: true, // Enables insertion
            allowDeleting: true, // Enables removing
            mode: 'popup',
            form: {
                items: allow_edit_transport
            },
        },
        onRowInserting: function (e) {
            var idInsert = fnInsertEqTransport(e.data);
            if (idInsert != 0) {
            } else {
                e.cancel = true;
            }
        },
        onRowUpdating: function (e) {
            if (!fnUpdateEqTransport(e.newData, e.key)) {
                e.cancel = true;
            }
        },
        onRowRemoving: function (e) {
            e.cancel = fnDeleteEqTransport(e.key);
        },

        showBorders: true
    }).dxDataGrid("instance");
    var grid_safety = $("#grid_safety").dxDataGrid({
        dataSource: equipment_safety,
        keyExpr: "eq_safety_id",
        searchPanel: {
            visible: true,
        },
        columns: show_column,
        editing: {
            allowUpdating: true, // Enables editing
            allowAdding: true, // Enables insertion
            allowDeleting: true, // Enables removing
            mode: 'popup',
            form: {
                items: allow_edit
            },
        },
        onRowInserting: function (e) {
            var idInsert = fnInsertEqSafety(e.data);
            if (idInsert != 0) {
            } else {
                e.cancel = true;
            }
        },
        onRowUpdating: function (e) {
            if (!fnUpdateEqSafety(e.newData, e.key)) {
                e.cancel = true;
            }
        },
        onRowRemoving: function (e) {
            e.cancel = fnDeleteEqSafety(e.key);
        },
        showBorders: true
    }).dxDataGrid("instance");

    function fnInsertEqSafety(data) {
        console.log(btn_upload_file._options.value[0]);
        var model = new FormData();
        model.append('eq_safety_code', data.eq_safety_code);
        model.append('eq_name', data.eq_name);
        model.append('style', data.style);
        model.append('property', data.property);
        model.append('suggestion', data.suggestion);
        model.append('eq_type_id', data.eq_type_id);
        model.append('Image', btn_upload_file._options.value[0]);

        console.log(model);
        
        var id_return = 0;
        $.ajax({
            type: 'POST',
            url: "http://43.254.133.49:8015/TTApi/CheckList/Profile/InsertEquipmentSafety",
            data: model,
            dataType: "json",
            processData: false,
            contentType: false,// not json 
            async: false,
            success: function (res) {
                console.log(res);
                id_return = res.id_return;
                if (id_return > 0) {
                    DevExpress.ui.notify("เพิ่มข้อมูลเรียบร้อยแล้ว", "success");
                    grid_safety.option('dataSource', '');
                    grid_safety.refresh();
                    grid_safety.option('dataSource', get_eq_safety());
                    grid_safety.refresh();
                } else {
                    DevExpress.ui.notify("ไม่สามารถเพิ่มข้อมูลได้กรุณาตรวจสอบข้อมูล", "error");
                }
            }
        });
        return id_return;
    }
    function fnInsertEqTransport(data) {
        var model = new FormData();
        model.append('eq_tran_code', data.eq_tran_code);
        model.append('eq_name', data.eq_name);
        model.append('style', data.style);
        model.append('property', data.property);
        model.append('suggestion', data.suggestion);
        model.append('eq_type_id', data.eq_type_id);
        model.append('Image', btn_upload_file._options.value[0]);

        console.log(model);

        var id_return = 0;
        $.ajax({
            type: 'POST',
            url: "http://43.254.133.49:8015/TTApi/CheckList/Profile/InsertEquipmentTransport",
            data: model,
            dataType: "json",
            processData: false,
            contentType: false,// not json 
            async: false,
            success: function (res) {
                console.log(res);
                id_return = res.id_return;
                if (id_return > 0) {
                    DevExpress.ui.notify("เพิ่มข้อมูลเรียบร้อยแล้ว", "success");
                    grid_transport.option('dataSource', '');
                    grid_transport.refresh();
                    grid_transport.option('dataSource', get_eq_transport());
                    grid_transport.refresh();
                } else {
                    DevExpress.ui.notify("ไม่สามารถเพิ่มข้อมูลได้กรุณาตรวจสอบข้อมูล", "error");
                }
            }
        });
        return id_return;
    }

    function fnUpdateEqSafety(data, key) {
        console.log(data);
        var model = new FormData();
        model.append('eq_safety_code', data.eq_safety_code);
        model.append('eq_name', data.eq_name);
        model.append('style', data.style);
        model.append('property', data.property);
        model.append('suggestion', data.suggestion);
        model.append('eq_type_id', data.eq_type_id);
        model.append('eq_safety_id', key);
        model.append('Image', btn_upload_file._options.value[0]);
        //data.eq_safety_id = key;
        console.log(btn_upload_file._options.value[0]);
        console.log(data.style);
        console.log(key);
        var returnStatus;
        $.ajax({
            type: "POST",
            url: "http://43.254.133.49:8015/TTApi/CheckList/Profile/UpdateEquipmentSafety",
            data: model,
            dataType: "json",
            async: false,
            processData: false,
            contentType: false,// not json 
            success: function (res) {
                console.log(res);
                if (res.code == "OK") {
                    DevExpress.ui.notify("แก้ไขข้อมูลเรียบร้อยแล้ว", "success");
                    returnStatus = true;
                } else {
                    DevExpress.ui.notify("ไม่สามารถแก้ไขข้อมูลได้กรุณาตรวจสอบข้อมูล", "error");
                    returnStatus = false;
                }
            }
        });
        return returnStatus;
    }
    function fnUpdateEqTransport(data, key) {
        console.log(data);
        var model = new FormData();
        model.append('eq_tran_code', data.eq_safety_code);
        model.append('eq_name', data.eq_name);
        model.append('style', data.style);
        model.append('property', data.property);
        model.append('suggestion', data.suggestion);
        model.append('eq_type_id', data.eq_type_id);
        model.append('eq_safety_id', key);
        model.append('Image', btn_upload_file._options.value[0]);
        //data.eq_safety_id = key;
        console.log(btn_upload_file._options.value[0]);
        console.log(data.style);
        console.log(key);
        var returnStatus;
        $.ajax({
            type: "POST",
            url: "http://43.254.133.49:8015/TTApi/CheckList/Profile/UpdateEquipmentTransport",
            data: model,
            dataType: "json",
            async: false,
            processData: false,
            contentType: false,// not json 
            success: function (res) {
                console.log(res);
                if (res.code == "OK") {
                    DevExpress.ui.notify("แก้ไขข้อมูลเรียบร้อยแล้ว", "success");
                    returnStatus = true;
                } else {
                    DevExpress.ui.notify("ไม่สามารถแก้ไขข้อมูลได้กรุณาตรวจสอบข้อมูล", "error");
                    returnStatus = false;
                }
            }
        });
        return returnStatus;
    }

    function fnDeleteEqSafety(data) {
        $.ajax({
            type: "POST",
            url: "http://43.254.133.49:8015/TTApi/CheckList/Profile/DeleteEquipmentSafety",
            data: { eq_safety_id: data},
            dataType: "json",
            async: false,
            success: function (res) {
                console.log(res);
                if (res.code == "OK") {
                    DevExpress.ui.notify("ลบข้อมูลเรียบร้อยแล้ว", "success");
                    returnStatus = false;
                } else {
                    DevExpress.ui.notify("ไม่สามารถลบข้อมูลได้", "error");
                    returnStatus = true;
                }
            }
        });
        return returnStatus;
    }
    function fnDeleteEqTransport(data) {
        $.ajax({
            type: "POST",
            url: "http://43.254.133.49:8015/TTApi/CheckList/Profile/DeleteEquipmentTransport",
            data: { eq_tran_id: data },
            dataType: "json",
            async: false,
            success: function (res) {
                console.log(res);
                if (res.code == "OK") {
                    DevExpress.ui.notify("ลบข้อมูลเรียบร้อยแล้ว", "success");
                    returnStatus = false;
                } else {
                    DevExpress.ui.notify("ไม่สามารถลบข้อมูลได้", "error");
                    returnStatus = true;
                }
            }
        });
        return returnStatus;
    }
});
