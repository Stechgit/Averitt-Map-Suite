jQuery(function fullToShipDate($){
    $("#toShipmentDATE").datepicker({
        dateFormat: 'yy-mm-dd',
        onSelect: function (toDate) {
            console.log(toDate)
        }
    });
});

jQuery(function fullFromShipDate($){
    $("#fromShipmentDATE").datepicker({
        dateFormat: 'yy-mm-dd',
        onSelect: function (fromDate) {
            console.log(fromDate)
        }
    })
});