var tabla;

function init(){
$("#producto_form").on("submit", function(e){
    guardaryeditar(e);
});
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

function guardaryeditar(e){
    e.preventDefault();
    let formData = new FormData($("#producto_form")[0]);
    $.ajax({
        url: "../../controller/producto.php?op=guardaryeditar",
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: function(datos){
            console.log(datos);
            $("#producto_form")[0].reset();
            $("#modalmantenimiento").modal('hide');
            $("#producto_data").DataTable().ajax.reload();

            swal.fire(
                "¡Registro!",
                "Registro exitoso",
                "success"
            );
        }
    })
}

function editar(prod_id){
    $('#mdltitle').html('Editar Registro');

    $.post("../../controller/producto.php?op=mostrar",{prod_id:prod_id}, function(data){
        data = JSON.parse(data);
        $("#prod_id").val((data.prod_id));
        $("#prod_nom").val((data.prod_nom));
    })

    $('#modalmantenimiento').modal('show');
}
function eliminar(prod_id){
    swal.fire({//codigo de libreria sweetAlert2
        title: "CRUD",
        text: "Esta seguro de Eliminar el registro",
        icon: 'error',
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No",
        reverseButtons: true
    }).then((result) => {
        if(result.isConfirmed){ 
            
            $.post("../../controller/producto.php?op=eliminar",{prod_id:prod_id}, function(data){

            });
            $('#producto_data').DataTable().ajax.reload();

            swal.fire(
                'Eliminado',
                'El producto se elimino correctamente',
                'success'
            )
        }
    })
}

$(document).on('click','#btnnuevo',function(){
    $('#mdltitle').html('Nuevo Registro');
    $('#producto_form')[0].reset();
    $('#prod_id').val('');
    $('#modalmantenimiento').modal('show');
});
init();