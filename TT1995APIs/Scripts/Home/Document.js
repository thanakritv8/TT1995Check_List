$(function () {
    var btn_upload_file;
    var GetDocumentAll;
    var GbE;
    function GetDocumentAll() {
        return $.ajax({
            type: "GET",
            url: "http://tabien.threetrans.com/TTApi/CheckList/Profile/GetDocumentAll",
            dataType: "json",
            async: false,
            success: function (data) {
            }
        }).responseJSON;
    }

    function GetDocumentType() {
        return $.ajax({
            type: "GET",
            url: "http://tabien.threetrans.com/TTApi/CheckList/Profile/GetDocumentType",
            dataType: "json",
            async: false,
            success: function (data) {
            }
        }).responseJSON;
    }

    var doc_type = GetDocumentType();

    GetDocumentAll = GetDocumentAll();

    var show_column = [
        {
            dataField: "doc_code",
            caption: "เลขที่เอกสาร",
        },
        {
            dataField: "doc_name",
            caption: "ชื่อเอกสาร",
        },
        {
            dataField: "remark",
            caption: "คำอธิบาย",
            visible: false
        },
        {
            dataField: "doc_type_id",
            caption: "ชนิดเอกสาร",
            lookup: {
                dataSource: doc_type,
                valueExpr: "doc_type_id",
                displayExpr: "doc_type"
            }
        },
        {
            dataField: "btn_upload_file",
            caption: "Upload File",
            visible: false
        }
    ];

    var allow_edit = [
        {
        itemType: "group",
        colCount: 2,
        colSpan: 2,
        //caption: "Title",
            items: ["doc_code", "doc_name"]
    },
    {
        itemType: "group",
        colCount: 2,
        colSpan: 2,
        items: [
            {
                template: function (data, itemElement) {
                    var pic = '';
                    if (typeof data.component._options.validationGroup.oldData === "undefined") {
                        pic = '';

                    } else {
                        console.log(data);
                        pic = (data.component._options.validationGroup.oldData.doc_path).replace("C:\\inetpub\\wwwroot", "http://tabien.threetrans.com");
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
                items: ["doc_type_id","remark",
                    {
                        template: function (data, itemElement) {
                            
                            itemElement.append($("<div id='btn_upload_file'></div>"));
                            btn_upload_file = $("#btn_upload_file").dxFileUploader({
                                selectButtonText: "Select photo",
                                labelText: "",
                                accept: "image/*",
                                uploadMode: "useForm",
                                onValueChanged: function (e) {
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
                    }
                ]
            }]
        ,
    }
    ];

    var document = [
        {
            doc_id: "1",
            number:"1456",
            name:"ใบขนส่งก๊าส",
            take: 1,
            bring: 1,
            //detail:"View",
            note: "123456789",
            pic: "",
            btn_upload_file: "",
            path :"../img/doc/doc.jpg"
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

    var grid_document = $("#grid_document").dxDataGrid({
        dataSource: GetDocumentAll,
        keyExpr: "doc_id",
        paging: {
            pageSize: 10
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
            popup: {
                title: "รายการบริษัทประกัน พรบ",
                showTitle: true,
                width: "70%",
                position: { my: "center", at: "center", of: window },
                toolbarItems: [{
                    toolbar: 'bottom',
                    location: 'after',
                    widget: "dxButton",
                    options: {
                        text: "Save",
                        onClick: function (e) {
                            if(fnUpdateDocumentImg(GbE.key)){
                                grid_document.saveEditData();
                            }
                        }
                    }
                }, {
                    toolbar: 'bottom',
                    location: 'after',
                    widget: "dxButton",
                    options: {
                        text: "Cancel",
                        onClick: function (args) {
                            grid_document.cancelEditData();
                        }
                    }
                }]

            }
        },
        onEditingStart: function (e) {
            GbE = e;
        },
        onRowInserting: function ( e) {
            
            var idInsert = fnInsertDocument(e.data);
            if (idInsert != 0) {
            } else {
                e.cancel = true;
            }
        },
        onRowUpdating: function (e) {
            if (!fnUpdateDocument(e.newData, e.key)) {
                e.cancel = true;
            }
        },
        onRowRemoving: function (e) {
            e.cancel = fnDeleteDocument(e.key);
        },
        searchPanel: {
            visible: true,
            highlightCaseSensitive: true
        },
        onOptionChanged: function (e) {
            console.log(e)
        },
        
        //editing: {
        //    mode: 'popup'
        //},
        showBorders: true
    }).dxDataGrid("instance");

    function fnInsertDocument(data) {
        var model = new FormData();
        model.append('doc_code', data.doc_code);
        model.append('doc_name', data.doc_name);
        model.append('remark', data.remark);
        model.append('doc_type_id', data.doc_type_id);
        model.append('Image', btn_upload_file._options.value[0]);
        console.log(data);
        //console.log(model);

        var id_return = 0;
        $.ajax({
            type: 'POST',
            url: "http://tabien.threetrans.com/TTApi/CheckList/Profile/InsertDocument",
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

    function fnUpdateDocument(data, key) {
        console.log(data);
        var model = new FormData();
        model.append('doc_id', key);
        model.append('doc_code', data.doc_code);
        model.append('doc_name', data.doc_name);
        model.append('remark', data.remark);
        model.append('doc_type_id', data.doc_type_id);
        //model.append('Image', btn_upload_file._options.value[0]);
        //data.eq_safety_id = key;
        console.log(btn_upload_file._options.value[0]);
        console.log(data.remark);
        console.log(key);
        var returnStatus;
        $.ajax({
            type: "POST",
            url: "http://tabien.threetrans.com/TTApi/CheckList/Profile/UpdateDocument",
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

    function fnUpdateDocumentImg(key) {
        var model = new FormData();
        model.append('doc_id', key);
        model.append('Image', btn_upload_file._options.value[0]);
        var returnStatus;
        $.ajax({
            type: "POST",
            url: "http://tabien.threetrans.com/TTApi/CheckList/Profile/UpdateDocument",
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

    function fnDeleteDocument(data) {
        $.ajax({
            type: "POST",
            url: "http://tabien.threetrans.com/TTApi/CheckList/Profile/DeleteDocument",
            data: { doc_id: data },
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