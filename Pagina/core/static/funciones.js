function validarUsuario() {
    let user = document.querySelector("#user");
    if(user.value.length >= 6){
        user.classList.add("correct");
        user.classList.remove("incorrect");
        document.querySelector("#error-user").innerHTML = "&nbsp;"
    }else{
        user.classList.remove("correct");
        user.classList.add("incorrect");
        document.querySelector("#error-user").innerHTML = "Ingrese 6 caracteres minimo."
    }

}

function validarContraseña() {
    let password = document.querySelector("#password");
    if(password.value.length >= 6){
        password.classList.add("correct");
        password.classList.remove("incorrect");
        document.querySelector("#error-password").innerHTML = "&nbsp;"
    }else{
        password.classList.remove("correct");
        password.classList.add("incorrect");
        document.querySelector("#error-password").innerHTML = "Ingrese 6 caracteres minimo."
    }

}

function añadirAlCarrito(event){
    var button = event.target;
    var item = button.parentElement;
    var titulo = item.getElementsByClassName('titulo-item')[0].innerText;
    var precio = item.getElementsByClassName('precio-item')[0].innerText;
    var imagenSrc = item.getElementsByClassName('img-item')[0].src;
    console.log(imagenSrc);

    agregarItemAlCarrito(titulo, precio, imagenSrc);

}
function agregarItemAlCarrito(titulo, precio, imagenSrc){
    var item = document.createElement('div');
    item.classList.add = ('item');
    var itemsCarrito = document.getElementsByClassName('carrito-items')[0];

    //controlamos que el item que intenta ingresar no se encuentre en el carrito
    var nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
    for(var i=0;i < nombresItemsCarrito.length;i++){
        if(nombresItemsCarrito[i].innerText==titulo){
            alert("El item ya se encuentra en el carrito");
            return;
        }
    }

    var itemCarritoContenido = `
        <div class="carrito-item">
            <img src="${imagenSrc}" width="80px" alt="">
            <div class="carrito-item-detalles">
                <span class="carrito-item-titulo">${titulo}</span>
                <div class="selector-cantidad">
                    <i class="fa-solid fa-minus restar-cantidad"></i>
                    <input type="text" value="1" class="carrito-item-cantidad" disabled>
                    <i class="fa-solid fa-plus sumar-cantidad"></i>
                </div>
                <span class="carrito-item-precio">${precio}</span>
            </div>
            <button class="btn-eliminar">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `
    item.innerHTML = itemCarritoContenido;
    itemsCarrito.append(item);
}
// limpiarCarrito(){}
// bonoPerruno(){}

async function getChiste(){
    try{
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?lang=es&type=twopart')
        if(!response.ok){
            throw new Error("No se pudo encontrar un chiste.")
        }
        const data = await response.json();
        const setup = data.setup;
        const delivery = data.delivery;
        document.getElementById("setupChiste").innerHTML =setup;
        document.getElementById("deliveryChiste").innerHTML =delivery;
    }
    catch(error){
        console.error(error);
    }
}

async function getPerrito(){

    try{
        const response = await fetch("https://dog.ceo/api/breeds/image/random");

        if(!response.ok){
            throw new Error("No se pudo encontrar un perrito.");
        }

        const data = await response.json();
        const fotoPerrito = data.message;
        const perrito = document.getElementById("fotoPerrito");

        perrito.src = fotoPerrito;
        perrito.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}

// function validarButton(){
//     let password = document.querySelector("#password");
//     let user = document.querySelector("#user");
//     let button = document.querySelector("#botonIngresar");
//     if(user.value.length >= 6 && password.value.length >= 6){
//         button.classList.add("able");
//         password.classList.remove("disabled");

//     }else{
//         button.classList.add("disabled");
//         password.classList.remove("able");

//     }
// }