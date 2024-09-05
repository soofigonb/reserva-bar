let datos = {
    nombre:'',
    apellido:'',
    correo: '',
    edad:'',
    fecha:''
}


let reservas = {

    set(objeto,propiedad,valor){

        if (propiedad === 'nombre' || propiedad === 'apellido') {
            if (valor === '') {
                alert('Los campos de nombre y apellido no pueden estar vacíos.');
                return false;

            }else{
                objeto[propiedad] = valor; 
            }
        

        }else{
            if (propiedad === 'edad') {
                if (valor < 18) {
                    alert('Debes ser mayor de edad para crear una reservación.');
                    return false;

                }else{
                    objeto[propiedad] = valor;
                }
            }else{
                if (propiedad === 'correo') {
                    let correo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                    if (!correo.test(valor)) {
                        alert('Ingrese un correo válido.');
                        return false;

                    }else{
                        objeto[propiedad] = valor;
                    }

                }else{
                    if (propiedad === 'fecha') {
                        if (valor === '') {
                            alert('Debes seleccionar una fecha.');
                            return false;

                        }else{
                            objeto[propiedad] = valor;
                        }
                    }
                }
            }


        }
           
    }
}

let reserva = new Proxy (datos,reservas);

document.querySelector('#boton').addEventListener('click',function(event) {
    event.preventDefault(); //Prevenimos el envío del formulario

    //Obteniendo valores del formulario
    let nombre = document.querySelector('input[placeholder="Nombre"]').value;
    let apellido = document.querySelector('input[placeholder="Apellido"]').value;
    let correo = document.querySelector('#email').value;
    let edad = parseInt(document.querySelector('#edad').value,10);
    let fecha = document.querySelector('#fecha').value;
    

    //Asignando valores:
    reserva.nombre = nombre;
    reserva.apellido = apellido;
    reserva.correo = correo;
    reserva.edad = edad;
    reserva.fecha = fecha;

    //Verificando si los todos los datos fueron asignados correctamente
    if (reserva.edad >= 18) {
        console.log('Reserva realizada correctamente',reserva);
        alert('Reserva realizada con éxito.')
    }

    // Vaciar el formulario
    document.querySelector('form').reset();


});