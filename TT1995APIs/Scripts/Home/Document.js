$(function () {
    var btn_upload_file;
    var show_column = [
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
            visible: false
        },
        {
            dataField: "bring",
            caption: "นำกลับ",
            dataType: "boolean",
            visible: false
        },
        {
            dataField: "note",
            caption: "คำอธิบาย",
            visible: false
        },
        //{
        //    dataField: "detail",
        //    caption: "รายละเอียด",
        //    cellTemplate: function (container, options) {
        //        $('<a style="color:Blue;font-weight:bold;" />').addClass('dx-link')
        //            .text(options.value)
        //            .on('dxclick', function (e) {
        //                //console.log(e);
        //                //show_popup(e, 'อนุญาติรถเข้าโรงงาน', options);
        //            }).appendTo(container);
        //    }
        //},
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
        items: ["number", "name"]
    },
    {
        itemType: "group",
        colCount: 2,
        colSpan: 2,
        items: [
            {
                template: function (data, itemElement) {
                    //console.log(data.component._options);
                    //console.log(data.component._options.validationGroup.oldData.path);
                    itemElement.append($("<div class='center'><div class='form-avatar' id='form-avatar'><img src='" + data.component._options.validationGroup.oldData.path + "' id='image' width='100%' height='100%'></div></div>"));
                } 
            },
            {
                itemType: "group",
                //colCount: 3,
                items: ["take", "bring", "note",
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
        dataSource: document,
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
        },
        searchPanel: {
            visible: true,
            highlightCaseSensitive: true
        },
        
        //editing: {
        //    mode: 'popup'
        //},
        showBorders: true
    }).dxDataGrid("instance");


});