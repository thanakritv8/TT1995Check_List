$(function () {

    //global
    var cus_id = 0;
    var cus_contact_id = 0;
    function get_address_customer() {
        if (cus_id != 0) {

        }
    }

    function get_contact_customer() {
        if (cus_contact_id != 0) {

        }
    }


    $("#example-basic").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        autoFocus: true,
        onStepChanged: function (event, currentIndex, priorIndex) {
            if (currentIndex == 1) {
                get_address_customer();
            } else if (currentIndex == 2) {
                get_contact_customer();
            }
        },
        onInit: function (event, currentIndex) {
            if (currentIndex == 0) {
                get_customer();
            }
        }
    });

    function get_customer() {
        var dataGrid = $('#gridContainer').dxDataGrid({
            //dataSource: customers,
            columns: [{
                dataField: 'cus_id',
                caption: 'รหัสลูกค้า'
            }, {
                dataField: 'cus_name',
                caption: 'ชื่อลูกค้า'
            }, {
                dataField: 'modify_date',
                caption: 'วันที่แก้ไขล่าสุด'
            }, {
                dataField: 'modify_by',
                caption: 'แก้ไขโดย'
            }],
            showBorders: true,
            editing: {
                mode: 'row',
                allowUpdating: true,
                allowDeleting: true,
                allowAdding: true,
                useIcons: true
            },
            selection: {
                mode: "single"
            },
            onSelectionChanged: function (selectedItems) {
                var data = selectedItems.selectedRowsData[0];
                if (data) {
                    cus_id = data.cus_id;
                }
            }

        }).dxDataGrid("instance");
        ajax_test(dataGrid);
    }
    function ajax_test(dataGrid) {
        //ajax
        dataGrid.option("dataSource", customers);
    }
});

var customers = [{
    cus_id: '1',
    cus_name: 'TRT',
    modify_date: '2019-01-01',
    modify_by: 'Thanakrit'
}, {
    cus_id: '2',
    cus_name: 'Maxxis',
    modify_date: '2019-01-01',
    modify_by: 'Thanakrit'
}, {
    cus_id: '3',
    cus_name: 'Roki',
    modify_date: '2019-01-01',
    modify_by: 'Thanakrit'
}, {
    cus_id: '4',
    cus_name: 'Thai Summit',
    modify_date: '2019-01-01',
    modify_by: 'Thanakrit'
}, {
    cus_id: '5',
    cus_name: 'Thai Oil',
    modify_date: '2019-01-01',
    modify_by: 'Thanakrit'
}, {
    cus_id: '6',
    cus_name: 'PTT',
    modify_date: '2019-01-01',
    modify_by: 'Thanakrit'
}, {
    cus_id: '7',
    cus_name: 'Mitsubishi',
    modify_date: '2019-01-01',
    modify_by: 'Thanakrit'
}, {
    cus_id: '8',
    cus_name: 'Honda',
    modify_date: '2019-01-01',
    modify_by: 'Thanakrit'
}, {
    cus_id: '9',
    cus_name: 'AAT',
    modify_date: '2019-01-01',
    modify_by: 'Thanakrit'
}, {
    cus_id: '10',
    cus_name: 'AAT',
    modify_date: '2019-01-01',
    modify_by: 'Thanakrit'
}];