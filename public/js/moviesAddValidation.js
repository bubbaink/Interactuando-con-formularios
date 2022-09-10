window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    

let form = document.querySelector("form");
let mvTitulo = document.querySelector("#title");
let mvRating = document.querySelector("#rating");
let mvAwards = document.querySelector("#awards");
let mvDate = document.querySelector("#release_date");
let mvLength = document.querySelector("#length");
let mvGenre_id = document.querySelector("#genre_id");

mvTitulo.focus();

mvTitulo.addEventListener('blur', function(event){
    if(!event.target.value){
        mvTitulo.classList.add("is-invalid")
        document.querySelector(".error-title").classList.add("is-invalid")
        document.querySelector(".error-title").innerHTML = "Ingrese un titulo"
    }else{
        document.querySelector(".error-title").classList.remove("is-invalid")
        document.querySelector(".error-title").innerHTML = ""
        mvTitulo.classList.remove("is-invalid")
        mvTitulo.classList.add("is-valid")
    }
})
mvRating.addEventListener('blur', function(event){
    if(!event.target.value){
        mvRating.classList.add("is-invalid")
        document.querySelector(".error-rating").classList.add("is-invalid")
        document.querySelector(".error-rating").innerHTML = "Ingrese un rating"
    }else if((event.target.value > 10 || event.target.value < 0)){
        mvRating.classList.add("is-invalid")
        document.querySelector(".error-rating").classList.add("is-invalid")
        document.querySelector(".error-rating").innerHTML = "El rating debe tener un valor entre 1 y 10"
    }else{
        document.querySelector(".error-rating").classList.remove("is-invalid")
        document.querySelector(".error-rating").innerHTML = ""
        mvRating.classList.remove("is-invalid")
        mvRating.classList.add("is-valid")
    }
})
mvAwards.addEventListener('blur', function(event){
    if(!event.target.value ){
        mvAwards.classList.add("is-invalid")
        document.querySelector(".error-awards").classList.add("is-invalid")
        document.querySelector(".error-awards").innerHTML = "Debe ingresar un valor en Awards"
    }else if((event.target.value > 10 || event.target.value < 0)){
        mvAwards.classList.add("is-invalid")
        document.querySelector(".error-awards").classList.add("is-invalid")
        document.querySelector(".error-awards").innerHTML = "Los Awards deben tener un valor entre 1 y 10"
    }else{
        document.querySelector(".error-awards").classList.remove("is-invalid")
        document.querySelector(".error-awards").innerHTML = ""
        mvAwards.classList.remove("is-invalid")
        mvAwards.classList.add("is-valid")
    }
})
mvDate.addEventListener('blur', function(event){
    if(!event.target.value){
        mvDate.classList.add("is-invalid")
        document.querySelector(".error-release_date").classList.add("is-invalid")
        document.querySelector(".error-release_date").innerHTML = "Debe ingresar un fecha"
    }else{
        document.querySelector(".error-release_date").classList.remove("is-invalid")
        document.querySelector(".error-release_date").innerHTML = ""
        mvDate.classList.remove("is-invalid")
        mvDate.classList.add("is-valid")
    }
})
mvLength.addEventListener('blur', function(event){
    if(!event.target.value){
        mvLength.classList.add("is-invalid")
        document.querySelector(".error-length").classList.add("is-invalid")
        document.querySelector(".error-length").innerHTML = "Debe ingresar la duracion de la pelicula"
    }else if ((event.target.value > 360 || event.target.value < 60)){
        mvLength.classList.add("is-invalid")
        document.querySelector(".error-length").classList.add("is-invalid")
        document.querySelector(".error-length").innerHTML = "La pelicula tiene que durar entre 60 min y 360 min"
    }else{
        document.querySelector(".error-length").classList.remove("is-invalid")
        document.querySelector(".error-length").innerHTML = ""
        mvLength.classList.remove("is-invalid")
        mvLength.classList.add("is-valid")
    }
})
mvGenre_id.addEventListener('blur', function(event){
    if(!event.target.value){
        mvGenre_id.classList.add("is-invalid")
        document.querySelector(".error-genre").classList.add("is-invalid")
        document.querySelector(".error-genre").innerHTML = "Debe ingresar un genero"
    }else{
        document.querySelector(".error-genre").classList.remove("is-invalid")
        document.querySelector(".error-genre").innerHTML = ""
        mvGenre_id.classList.remove("is-invalid")
        mvGenre_id.classList.add("is-valid")
    }
})



form.addEventListener('submit', function(event){
    let error = 0

    event.preventDefault()
    
    for (let i = 0; i < form.elements.length - 1; i++) {
        if(!form.elements[i].value){
            error = 1;
            form.elements[i].classList.add("is-invalid")
        }
    }

    for (let i = 0; i < form.elements.length; i++) {
        if(form.elements[i].classList.contains("is-invalid")){
            error = 1;
        }
        
    }

    if(!error){
        alert("La pelicula se guardo exitosamente")
        document.querySelector(".errores").innerHTML = ""
        document.querySelector(".errores").classList.remove("alert-warning")
        event.target.submit()
    }else{
        document.querySelector(".errores").innerHTML = "Opss... aun posee faltantes/errores"
        document.querySelector(".errores").classList.add("alert-warning")
    }
})



}