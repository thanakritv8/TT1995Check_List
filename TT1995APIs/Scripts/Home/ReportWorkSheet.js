var dataSource = [{
    worksheet: "รออนุมัติ",
    count: 3
}, {
    worksheet: "อนุมัติ",
    count: 8
}, {
    worksheet: "กำลังทำงาน",
    count: 6
}, {
    worksheet: "เสร็จสิ้น",
    count: 5
}];
$(function () {
    $("#chart").dxChart({
        dataSource: dataSource,
        series: {
            argumentField: "worksheet",
            valueField: "count",
            name: "จำนวนเอกสาร",
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

});