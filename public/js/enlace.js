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
var NombreSuavisante1 = document.getElementById('NombreSuavisante').innerHTML;
var MedidaSuavisante1 = document.getElementById('NombreUnidad').innerHTML;
var PrecioSuavisante1 = document.getElementById('PrecioSuavisante1litro').innerHTML;

//Definimos variables para los input
var aroma;
var CantidadSuavisante1 = document.getElementById('CantidadSuavisante1');
var listaPedido = document.getElementById('listaPedido');

//Variable global para almacenar el id del pedido
var idNoticia = "";

//Metodo para el select
function ShowSelected()
{
  var AromaSuavisante1 = document.getElementById("AromaSuavisante1litro");
  aroma = AromaSuavisante1.options[AromaSuavisante1.selectedIndex].text;
  
}

//Metodo para almacenar la informacion en la BD. Evento del boton guardar
function guardarPedido() {
  
    db.collection("DatosDeCompra").add({
        ValorUnitario: PrecioSuavisante1,
        Medida: MedidaSuavisante1,
        NombreProducto: NombreSuavisante1,
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

//Metodo para listar los pedidos almacenados en la BD
/*function listarPedidos() {
  db.collection("DatosDeCompra").get().then((querySnapshot) => {
      querySnapshot.forEach(async (doc) => {
          listaPedido.innerHTML += `
          <tr>
          <th scope="row">
            <div class="media align-items-center">
              <a href="#" class="avatar rounded-circle mr-3">
                <img alt="Image placeholder" src="../img/portfolio/JabonReyUnLitro.jpg">
              </a>
              <div class="media-body">
                <span class="mb-0 text-sm">${doc.data().NombreSuavisante1}</span>
              </div>
            </div>
          </th>
          <td>
             ${doc.data().MedidaSuavisante1}
          </td>
          <td>
            <span class="badge badge-dot mr-4">
              <i class="bg-warning"></i> ${doc.data().CantidadSuavisante1}
            </span>
          </td>
          <td>
             ${doc.data().PrecioSuavisante1}
          </td>
          <td>
            100
          </td>

          <td class="text-right">
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">
              <svg id="i-compose" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"
                fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M27 15 L27 30 2 30 2 5 17 5 M30 6 L26 2 9 19 7 25 13 23 Z M22 6 L26 10 Z M9 19 L13 23 Z" />
              </svg>
            </button>
            <button type="button" class="btn btn-danger">
              <svg id="i-trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"
                fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path
                  d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6" />
              </svg>
            </button>

          </td>
        </tr>
          `;
      });
  });
}*/



