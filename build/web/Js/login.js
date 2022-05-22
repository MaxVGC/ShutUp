let params = new URLSearchParams(location.search);

$(document).ready(() => {
    var contract = params.get('alert');
    switch (contract) {
        case '0':
            alert('Usuario creado correctamente');
            break;
        case '1':
            alert('Contraseña incorrecta');
            break;
        case '2':
            alert('No existe una cuenta asociada a los datos ingresados')
            break;
    }
});

var aux = document.getElementById