let botonAgregar = document.getElementById("btnAgregar");
let botonEliminar = document.getElementById("btnEliminar");
let lista = document.getElementById("listado");

botonAgregar.addEventListener("click", function(){
    let tareas = document.getElementById("txtTarea");
    //console.log(tarea.value);
    let agregarTarea = document.createElement('li');
    agregarTarea.textContent = tareas.value; 

    if(tareas.value != ""){
        lista.appendChild(agregarTarea);
        tareas.value = "";
    }else{
     alert("Favor de rellenar el campo")
    }
});

botonEliminar.addEventListener("click", function(){
    lista.removeChild(lista.lastChild);

    if(tareas.value != ""){
    lista.removeChild(lista.lastChild);
    }else{
     confirm("¿Estas segur de eliminar?")
    }
});