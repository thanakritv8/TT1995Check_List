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

    function GetLicenseAllHead() {
        return $.ajax({
            type: "GET",
            url: "http://tabien.threetrans.com/TTApi/CheckList/Profile/GetLicenseAllHead",
            dataType: "json",
            async: false,
            success: function (data) {
            }
        }).responseJSON;
    }

    function GetLicenseAllTail() {
        return $.ajax({
            type: "GET",
            url: "http://tabien.threetrans.com/TTApi/CheckList/Profile/GetLicenseAllTail",
            dataType: "json",
            async: false,
            success: function (data) {
            }
        }).responseJSON;
    }

    function GetExpiredById(license_id) {
        return $.ajax({
            type: "GET",
            url: "http://tabien.threetrans.com/TTApi/CheckList/Profile/GetExpiredById",
            data: { license_id: license_id},
            dataType: "json",
            async: false,
            success: function (data) {
            }
        }).responseJSON;
    }

    function GetExpiredById(license_id) {
        return $.ajax({
            type: "POST",
            url: "http://tabien.threetrans.com/TTApi/CheckList/Profile/GetExpiredById",
            data: { license_id: license_id },
            dataType: "json",
            async: false,
            success: function (data) {
            }
        }).responseJSON;
    }

    function GetExpiredOtherById(license_id) {
        return $.ajax({
            type: "POST",
            url: "http://tabien.threetrans.com/TTApi/CheckList/Profile/GetExpiredOtherById",
            data: { license_id: license_id },
            dataType: "json",
            async: false,
            success: function (data) {
            }
        }).responseJSON;
    }

    function GetDetailLicense(license_id) {
        return $.ajax({
            type: "POST",
            url: "http://tabien.threetrans.com/TTApi/CheckList/Profile/GetDetailLicense",
            data: { license_id: license_id },
            dataType: "json",
            async: false,
            success: function (data) {
            }
        }).responseJSON;
    }

    var car_head = GetLicenseAllHead();

    var car_tail = GetLicenseAllTail();

    var show_column = [
        {
            dataField: "number_car",
            caption: "เบอร์รถ",
        },
        {
            dataField: "license_car",
            caption: "ทะเบียน",
        },
        {
            dataField: "col1",
            caption: "ภาษี/ประกันภัย",
            cellTemplate: function (container, options) {
                $('<a style="color:green;font-weight:bold;" />').addClass('dx-link')
                    .text(options.value)
                    .on('dxclick', function (e) {
                        //console.log(e);
                        console.log(options);
                        show_popup_tax_or_insurance(e, 'ภาษี/ประกันภัย', options);
                    }).appendTo(container);
            }
        },
        {
            dataField: "col2",
            caption: "ใบอนุญาติ",
            cellTemplate: function (container, options) {
                $('<a style="color:green;font-weight:bold;" />').addClass('dx-link')
                    .text(options.value)
                    .on('dxclick', function (e) {
                        console.log(e);
                        
                        show_popup_license(e, 'ใบอนุญาติ', options);
                    }).appendTo(container);
            }
        },
        {
            dataField: "col3",
            caption: "รายละเอียด",
            cellTemplate: function (container, options) {
                $('<a style="color:green;font-weight:bold;" />').addClass('dx-link')
                    .text(options.value)
                    .on('dxclick', function (e) {
                        console.log(e);
                        show_popup_detail(e, 'รายละเอียด', options);
                    }).appendTo(container);
            }
        },
        {
            dataField: "col4",
            caption: "เครื่องมือ",
            cellTemplate: function (container, options) {
                $('<a style="color:green;font-weight:bold;" />').addClass('dx-link')
                    .text(options.value)
                    .on('dxclick', function (e) {
                        window.open('http://tabien.threetrans.com/Home/License', '_blank');
                    }).appendTo(container);
            }
        },
    ];

  

   
    var grid_car_head = $("#grid_car_head").dxDataGrid({
        dataSource: car_head,
        searchPanel: {
            visible: true,
            highlightCaseSensitive: true
        },
        keyExpr: "license_id",
        paging: {
            pageSize: 10
        },
        columns: show_column,
       
        showBorders: true,
        
    }).dxDataGrid("instance");

    var grid_car_tail = $("#grid_car_tail").dxDataGrid({
        dataSource: car_tail,
        searchPanel: {
            visible: true,
            highlightCaseSensitive: true
        },
        keyExpr: "license_id",
        paging: {
            pageSize: 10
        },
        columns: show_column,
        
        showBorders: true,
        
    }).dxDataGrid("instance");

    var popup_truck = $("#popup_truck").dxPopup({
        visible: false,
        width: "60%",
        height: "70%",
        showTitle: true,
        title: "ประวัติ",
        contentTemplate: function (content) {
            return $("<div id='grid_add_data'>test</div>");
        }
    }).dxPopup("instance");

    function show_popup_tax_or_insurance(e, title, options) {
        //console.log(options);
        popup_truck.option('title', title + '(เบอร์รถ :' + options.data.number_car + ', ทะเบียน :' + options.data.license_car + ')');
        popup_truck._options.contentTemplate = function (content) {
            var maxHeight = $("#popup_add_customer .dx-overlay-content").height() - 150;
            content.append("<div id='grid_tax_or_insurance' style='max-height: " + maxHeight + "px;' ></div>");

        }
        $("#popup_truck").dxPopup("show");
        show_grid_in_popup_tax_or_insurance(options);
    }

    function show_grid_in_popup_tax_or_insurance(options) {
        //console.log(options);
        //var data_filter = data_tax_or_insurance.filter(function (arr) {
        //    return arr.license_id == options.key;
        //});
        var grid_tax_or_insurance = $("#grid_tax_or_insurance").dxDataGrid({
            dataSource: GetExpiredById(options.key),
            columns: [{
                dataField: "display",
                caption: "ข้อมูล"
            }, {
                dataField: "expire",
                caption: "หมดอายุ"
            }],
            showBorders: true,
            height: 'auto',
            scrolling: {
                mode: "virtual"
            },
        }).dxDataGrid('instance');
    }

    var popup_license = $("#popup_license").dxPopup({
        visible: false,
        width: "60%",
        height: "70%",
        showTitle: true,
        title: "ประวัติ",
        contentTemplate: function (content) {
            return $("<div id='grid_license'>test</div>");
        }
    }).dxPopup("instance");

    function show_popup_license(e, title, options) {
        console.log(options);
        popup_license.option('title', title + '(เบอร์รถ :' + options.data.number_car + ', ทะเบียน :' + options.data.license_car + ')');
        popup_license._options.contentTemplate = function (content) {
            var maxHeight = $("#popup_add_customer .dx-overlay-content").height() - 150;
            content.append("<div id='grid_license' style='max-height: " + maxHeight + "px;' ></div>");

        }
        $("#popup_license").dxPopup("show");
        show_grid_in_popup_license(options);
    }

    function show_grid_in_popup_license(options) {
        var grid_license = $("#grid_license").dxDataGrid({
            dataSource: GetExpiredOtherById(options.key),
            columns: [{
                dataField: "display",
                caption: "ข้อมูล"
            }, {
                dataField: "expire",
                caption: "หมดอายุ"
            }, {
                dataField: "detail",
                caption: "เลขที่"
            }, {
                dataField: "detail2",
                caption: "รายละเอียด"
            }],
            showBorders: true,
            height: 'auto',
            scrolling: {
                mode: "virtual"
            },
        }).dxDataGrid('instance');
    }

    var popup_detail = $("#popup_detail").dxPopup({
        visible: false,
        width: "60%",
        height: "70%",
        showTitle: true,
        title: "ประวัติ",
        contentTemplate: function (content) {
            return $("<div id='grid_license'>test</div>");
        }
    }).dxPopup("instance");

    function show_popup_detail(e, title, options) {
        console.log(options.key);
        var detail = GetDetailLicense(options.key)[0];
        console.log(detail);
        popup_detail.option('title', title + '(เบอร์รถ :' + options.data.number_car + ', ทะเบียน :' + options.data.license_car + ')');

        popup_detail._options.contentTemplate = function (content) {
            return $("<div class='row'><div class='col-sm-6' style='height:100%;padding: 5% 5% 5% 5%;'><div id='gallery' ></div></div><div class='col-sm-6' style='height:100%;padding: 5% 5% 5% 5%;'><h4>ข้อมูล</h4><span>ลักษณะ : <span id='style_car'></span></span><br><span>น้ำหนักรถเปล่า : <span id='weight_car'></span> ตัน</span><br><span>ยี่ห้อ : <span id='brand_engine'></span></span><br><span>รุ่น : <span id='model_car'></span></span></div></div>");
        }

        $("#popup_detail").dxPopup("show");
        $('#style_car').html(detail.style_car);
        $('#model_car').html(detail.model_car);
        $('#weight_car').html(detail.weight_car);
        $('#brand_engine').html(detail.brand_engine);

        $("#gallery").dxGallery({
            dataSource: detail.gallery,
            height: "80%",
            width: "100%",
            slideshowDelay: 3000,
            loop: true,
            showIndicator: true,
            itemTemplate: function (item, index) {
                var t = item.path.replace("..", "http://tabien.threetrans.com");
                t = t.replace("#", "%23");
                var result = $("<div>");
                $("<img>").attr("src", t).appendTo(result);
                $("<div>").addClass("item-position").text(item.position).appendTo(result);
                $("<div>").addClass("item-address").text('').appendTo(result);
                return result;
            }
        });
       

    }



});