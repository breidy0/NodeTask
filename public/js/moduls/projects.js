import Swal from 'sweetalert2';
import axios from 'axios';

const btnEliminar = document.getElementById('eliminar-proyecto');

if(btnEliminar){
    btnEliminar.addEventListener('click', e => {
        const urlProyecto = e.target.dataset.proyectoUrl;     
        Swal.fire({
            title: 'Deseas borrar este proyecto?',
            text: "Un proyecto eliminado no se puede recuperar",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#42d462',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Borrar', 
            cancelButtonText: 'No, Cancelar'
        }).then((result) => {
            if (result.value) {
                // enviar petición a axios
                const url = `${location.origin}/projects/${urlProyecto}`;
                axios.delete(url)
                    .then((respuesta) => {
                            Swal.fire(
                                'Proyecto Eliminado',
                                respuesta.data,
                                'success'
                            );
                            // redireccionar al inicio
                            setTimeout(() => {
                                window.location.href = '/projects/'
                            }, 3000);
                    })
                    .catch(() => {
                        Swal.fire({
                            type:'error',
                            title: 'Hubo un error',
                            text: 'No se pudo eliminar el Proyecto'
                        })
                    })
            }
        })
    })
}
export default btnEliminar;