  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDMO40FNuUQl-sfTsORBdc9HWEKe9lHnN0",
    authDomain: "procaq-ec743.firebaseapp.com",
    databaseURL: "https://procaq-ec743.firebaseio.com",
    projectId: "procaq-ec743",
    storageBucket: "procaq-ec743.appspot.com",
    messagingSenderId: "327502230754",
    appId: "1:327502230754:web:33e337f375ccdceb441abb",
    measurementId: "G-2EZJQK0832"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Variable para acceder a metodos de firestore
var db = firebase.firestore();

//                                   PAGINA PRODUCTOS:

//Definimos variables para los label
var NombreSuavisante1 = document.getElementById('NombreSuavisante');
var PrecioSuavisante1;

//Definimos la variable para el select de medidas y aromas
var medida;
var aroma;

//Definimos la variable para el input de cantidad
var CantidadSuavisante1 = document.getElementById('CantidadSuavisante1');

//Metodos para los select de unidad y aroma
function ShowSelected1()
{
  var MedidaSuavisante1 = document.getElementById("MedidaSuavisante");
  medida = MedidaSuavisante1.options[MedidaSuavisante1.selectedIndex].text;
  
  if (medida == "Un litro" ){
    
    PrecioSuavisante1=3500;
    alert("que pasó");
  }else if (medida == "Dos litros" ){
    PrecioSuavisante1=13500;
  }else if (medida== "(Galon)" ){
    PrecioSuavisante1=20500;
  }else if (medida == "(Garrafa)" ){
    PrecioSuavisante1=50000;
  }else if (medida == "(Medio litro)" ){
    PrecioSuavisante1=2500;
  }
}

function ShowSelected2()
{
  var AromaSuavisante1 = document.getElementById("AromaSuavisante1litro");
  aroma = AromaSuavisante1.options[AromaSuavisante1.selectedIndex].text;
  
}

//Metodo para almacenar la informacion en la BD. Evento del boton guardar
function guardarPedido() {
  
    db.collection("DatosDeCompra").add({
        ValorUnitario: PrecioSuavisante1,
        Medida: medida,
        NombreProducto: NombreSuavisante1.innerHTML,
        Aroma: aroma,
        Cantidad: CantidadSuavisante1.value
    })

        .then(function (docRef) {
            console.log("Pedido hecho: ", docRef.id);
            
        })
        .catch(function (error) {
            console.error("Error: ", error);
        });

}





