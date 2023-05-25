function agregarItem() {

    const item = document.querySelector('#articulo');
    const valor = document.querySelector('#valor');
    var lista = document.querySelector('#lista');
    var nuevoItem = document.createElement("li");
    nuevoItem.setAttribute("class", "impar")
    var nuevoItem2 = document.createElement("li");
    nuevoItem2.setAttribute("class", "par")


    if (item.value != "" && ((valor.value > 0 && !document.getElementById('aceptacero').checked) || (valor.value >= 0 && document.getElementById('aceptacero').checked))) {
        document.getElementById("messageerror").value = "";
        vcantidad = parseInt(document.getElementById("cantidad").value)
        var elemento = document.createTextNode(item.value + " (" + new Intl.NumberFormat('en-US', { style: "currency", "currency": "COP" }).format(valor.value) + ")");
// colocar color a la lista
        if (vcantidad % 2 == 0) {
            nuevoItem.appendChild(elemento);
            lista.appendChild(nuevoItem);
        } else {
            nuevoItem2.appendChild(elemento);
            lista.appendChild(nuevoItem2);
        }
        sumar();
        document.getElementById("articulo").value = "";
        document.getElementById("valor").value = "0";
    } else {
        if (item.value == "") {
            document.getElementById("messageerror").value = "Digite el item a adicionar";
        } else if (valor.value == "" || valor.value == 0) {
            document.getElementById("messageerror").value = "Digite el valor del articulo";
        }
    }

    // validar si esta repetido
    var array = arrayFromList('lista'); 
    array.forEach((element) => {
        console.log(element);
        console.log(elemento);
        if (element == elemento){
            console.log("repetido")
        }
      })
 

    function sumar() {
        vtotal = parseInt(document.getElementById("valor").value) + parseInt(document.getElementById("total").value);
        document.getElementById("total").value = vtotal;
        document.getElementById("totalformated").value = new Intl.NumberFormat('en-US', { style: "currency", "currency": "COP" }).format(vtotal);
        contar();
    }
    function contar() {
        vcantidad = parseInt(document.getElementById("cantidad").value) + 1;
        document.getElementById("cantidad").value = vcantidad;
    }

    function arrayFromList(id) {
        var dataElement = [...document.querySelectorAll(`#${id} li`)].map(element => element.innerText);     
        return dataElement;
    }

}