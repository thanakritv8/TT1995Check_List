$(function () {

    $("#example-basic").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        autoFocus: true
    });
    var equipment_safety_select;

    $("ul li:nth-child(2)").addClass("disabled");
    $("a:contains('Next')").attr('href', '')
    
    $('a:contains("Next")').click(function () {
        var data_safety_type_filter = equipment_safety_type.filter(function (arr) {
            return arr.eq_safety_id == equipment_safety_select;
        });
        grid_equipment_safety_type.option('dataSource', data_safety_type_filter);
    });

    var grid_equipment_safety = $("#grid_equipment_safety").dxDataGrid({
        dataSource: equipment_safety,
        keyExpr: "eq_safety_id",
        selection: {
            mode: "single"
        },
        onSelectionChanged: function (selectedItems) {
            $("ul li:nth-child(2)").removeClass("disabled")
            $("a:contains('Next')").attr('href', '#next')
            var data = selectedItems.selectedRowsData[0];
            equipment_safety_select = data.eq_safety_id;

            

            //console.log(data);
        },
        editing: {
            allowUpdating: true, // Enables editing
            allowAdding: true, // Enables insertion
            allowDeleting: true // Enables removing
        },
        showBorders: true
    }).dxDataGrid("instance");

    

    var grid_equipment_safety_type = $("#grid_equipment_safety_type").dxDataGrid({
        keyExpr: "eq_safety_type_id",
        selection: {
            mode: "single"
        },
        onSelectionChanged: function (selectedItems) {
            var data = selectedItems.selectedRowsData[0];
            console.log(data);
        },
        editing: {
            allowUpdating: true, // Enables editing
            allowAdding: true, // Enables insertion
            allowDeleting: true // Enables removing
        },
        showBorders: true
    }).dxDataGrid("instance");



    //$('#trans_equip').click(function () {
    //    $('#' + previuos_menu).removeClass("active");
    //    previuos_menu = 'trans_equip';
    //    $('#' + previuos_menu).addClass("active");
    //    gettransequip();
    //});
    //$('#customer').click(function () {
    //    $('#' + previuos_menu).removeClass("active");
    //    previuos_menu = 'customer';
    //    $('#' + previuos_menu).addClass("active");
    //    getcustomer();
    //});
    //$('#safety').click(function () {
    //    $('#' + previuos_menu).removeClass("active");
    //    previuos_menu = 'safety';
    //    $('#' + previuos_menu).addClass("active");
    //    getcustomer();
    //});


});


var equipment_safety = [{
    eq_safety_id: 1,
    eq_name: "หมวกนิรภัย",
}, {
    eq_safety_id: 2,
    eq_name: "หน้ากากนิรภัย",
}, {
    eq_safety_id: 3,
    eq_name: "แว่นตานิรภัย",
}, {
    eq_safety_id: 4,
    eq_name: "เอียร์ปลั๊ก",
}, {
    eq_safety_id: 5,
    eq_name: "ถุงมือนิรภัย",
}, {
    eq_safety_id: 6,
    eq_name: "รองเท้าเซฟตัี้",
}, {
    eq_safety_id: 7,
    eq_name: "เสื้อสะท้อนแสง",
}, {
    eq_safety_id: 8,
    eq_name: "สายรัดป้องกันตกจากที่สูง",
}];

var equipment_safety_type = [{
    eq_safety_type_id: 1,
    eq_safety_type_en: "Head and scalp protection",
    eq_safety_type_th: "ป้องกันศีรษะและหนังศีรษะ",
    eq_safety_id: 1
}, {
    eq_safety_type_id: 2,
    eq_safety_type_en: "Respiratory protection",
    eq_safety_type_th: "ป้องกันระบบทางเดินหายใจ",
    eq_safety_id: 2
}, {
    eq_safety_type_id: 3,
    eq_safety_type_en: "Eye protection",
    eq_safety_type_th: "ป้องกันดวงตา",
    eq_safety_id: 3
}, {
    eq_safety_type_id: 4,
    eq_safety_type_en: "Hearing protection",
    eq_safety_type_th: "ป้องกันการได้ยิน",
    eq_safety_id: 4
}, {
    eq_safety_type_id: 5,
    eq_safety_type_en: "Hand and arm protection",
    eq_safety_type_th: "ป้องกันมือและแขน",
    eq_safety_id: 5
}, {
    eq_safety_type_id: 6,
    eq_safety_type_en: "Foot and leg protection",
    eq_safety_type_th: "ป้องกันเท้าและขา",
    eq_safety_id: 6
}, {
    eq_safety_type_id: 7,
    eq_safety_type_en: "Body protection",
    eq_safety_type_th: "ป้องกันร่างกายลำตัว",
    eq_safety_id: 7
}, {
    eq_safety_type_id: 8,
    eq_safety_type_en: "Height and access protection",
    eq_safety_type_th: "ป้องกันความสูงและการเข้าถึง",
    eq_safety_id: 8
}];