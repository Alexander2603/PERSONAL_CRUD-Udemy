var tabla;

function init(){

}

$(document).ready(function(){
    tabla = $('#producto_data').dataTable({
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginacion y filtrado realizados por el servidor
        dom: "Bfrtip", //Definimos los elementos del control de la tabla
        buttons: [
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
            'pdf'
        ],
        "ajax":{
            url: '../../controller/producto.php?op=listar',
            type: "get",
            dataType: "json",
            error: function(e){
                console.log(e.responseText);
            }
        },
        "bDestoy": true,
        "responsive": true,
        "bInfo": true,
        "iDisplayLength": 10,//por cada 10 registros hace una paginacion
        "order":[[0, "asc"]], //Ordenar (columna, orden)
        "language":{
            "aProcessing":      "Procesando",
            "sLengthMenu":      "Mostrar _MENU_registros",
            "sZeroRecords":     "No se encontraron resultados",
            "sEmptyTable":      "Ningun dato disponible en esta tabla",
            "sInfo":            "Mostrando in total de _TOTAL_registros",
            "aInfoEmpty":       "Mostrando un total de 0 registros",
            "sInfoFiltered":    "(Filtrado de un total de  _MAX_registros)",
            "sInfoPostFix":     "",   
            "sSearch":          "Buscar..",
            "sUrl":             "",
            "sInfoThousands":   ",",
            "sLoadingRecords":  "Cargando..",
            "oPaginate": {
                "sFirst":   "Primero",
                "sLast":    "Ultimo",
                "sNext":    "Siguiente",
                "sPrevious":"Anterior"
            },
            "oAria": {
                "sSortAscending":   ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending":  ": Activer para ordenar la columna de manera descendente"
            }
        }
    }).DataTable();
});
init();