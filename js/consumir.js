const urlApex =  "https://gedc07c6509dfcc-db.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client"

function peticionGet() {

    $.ajax({
        url: urlApex,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            let numreg = data.count
            let productos = data.items
            console.log(numreg)
            console.log(productos)
            console.log("*************");
            for (i = 0; i < numreg; i++) {
                console.log("Producto " + (i + 1))
                console.log("Codigo " + productos[i].cdprodt)
                console.log("Nombre " + productos[i].nmbproduct)
                console.log("Precio " + productos[i].precios)
                console.log("Inventario " + productos[i].inventario)

            }
        },
        error: function() {

        },
        complete: function() {

        }

    });
}
function peticionPost(cdprodt, nmbproduct, precios, inventario) {

//En JavaScrip asi se crea un objeto con datasend
    const dataSend = {
//Esto para indentificar cada uno Clave-Valor para no confundir
        cdprodt : cdprodt,
        nomprod : nmbproduct,
        precios : precios,
        inventario : inventario
    }
//Para convertirlo en un Objeto formato JSON para poder enviarlo al servidor
    const json = JSON.stringify(dataSend);

//LLamamos la peticion ajax.
    $.ajax({
//Metodo para hacer una peticion post
        method: 'POST',
//Url donde vamos a consumir url 
        url: urlApex,
//La data es el objeto convertido a tipo json
        data: json,
//contentType q envia app tipo json
        contentType: "application/json",

        complete: function(response){
            if(response.status==555){
                alert("Registro ya Existe!")
            }else if(response.status==201){
                alert("Guardado con exito!")
            }
            console.log(response.status)
        }
    });

    console.log(json)
}

//Funcion PUT
function peticionPut(cdprod, nmbproduct, precios, inventario) {

    const dataSend = {
        codprod : cdprod,
        nomprod : nmbproduct,
        valor : precios,
        cantidad : inventario
    }
    const json = JSON.stringify(dataSend);
    $.ajax({
        method: 'PUT',
        url: urlApex,
        data: json,
        contentType: "application/json",
        complete: function(response) {
            if(response.status==201){
                alert("Actualizado con exito!")

            }
            console.log(response.status)
        }
    });

    console.log(json)
}

//Funcion DELETE
function peticionDELETE(cdprod) {

    const dataSend = {
        codprod : cdprod,
        
    }
    const json = JSON.stringify(dataSend);
    $.ajax({
        method: 'DELETE',
        url: urlApex,
        data: json,
        contentType: "application/json",
        complete: function(response) {
            if(response.status==204){
                alert("Eliminado con exito!")

            }
            console.log(response.status)
        }
    });

    console.log(json)
}
