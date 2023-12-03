$(".sidebar ul li").on('click', function(){
    $(".sidebar ul li.active").removeClass('active');
    $(this).addClass('active');
})


$("#btn-crear").click(function(){
    let timerInterval
  Swal.fire({
    title: 'No cierre!',
    html: 'Creando su Cuenta <b></b> ',
    timer: 5000,
    timerProgressBar: true,
    allowOutsideClick:false,
    allowEscapeKey: true,
    allowEnterKey:true,
    stopKeydownPropagation: false,
    didOpen: () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer')
    }
  });
   
  });


  $("#Insert").click(function(){
    Swal.fire({
        title:"Exito",
        text:"Su informacion esta Guardada",
        icon: 'success',
        backdrop: true,
        timer:5000,
        timerProgressBar: true,
    
     toast: true,
     position: 'top',
   //   para no dar click afuera
     allowOutsideClick: true,
     allowEscapeKey: true,
     allowEnterKey:true,
     stopKeydownPropagation: false,
    
    });
});

/*********** para eliminar el registro del cliente *************/
$("#Save").click(function(){
    Swal.fire({
        title: "Estas seguro?",
        text: "No podrás revertir esto.!",
        icon: "warning",
        showCancelButton: true,
        backdrop: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        timer:10000,
        confirmButtonText: "Si, Eliminar esto!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Borrado!",
            text: "tu registro a sido borrado.",
            icon: "exito",
            timer:10000,
          });
        }
      });
});

/******** boton de rechazar  *********** */
$("#Rechazar").click(function(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Estas Seguro?",
        text: "No podrás revertir esto.!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Rechazar!",
        cancelButtonText: "cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Rechazar!",
            icon: "success"
          });
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Tu cliente esta a salvo :)",
            icon: "error"
          });
        }
      });
});

/***** boton para el cliente aceptado *****/


  $("#Aceptar").click(function(){
    Swal.fire({
        title: "Cliente Aceptado!",
        text: "El cliente ha sido aceptado!",
        icon: "success",

     position: 'center',
   //   para no dar click afuera
     allowOutsideClick: false,
     allowEscapeKey: true,
     allowEnterKey:true,
     stopKeydownPropagation: true,
      });
  
});