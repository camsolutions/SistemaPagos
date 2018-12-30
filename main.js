   const db = firebase.firestore();
var LOGIN;
var USER;	
var CONTADOR;

function login() {
	USER = document.getElementById('id').value;
	var docRef = db.collection("LOGIN").doc(USER);

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("USUARIO VERIFICADO", doc.data());
        LOGIN = true;
       
        registrar();
    } else {
        // doc.data() will be undefined in this case
        console.log("ERROR AL ENCONTRAR CLIENTE");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

}
function registrar() {
	console.log("hi");
	var monto = document.getElementById('monto').value;
	var numero = document.getElementById('numero').value;
	var banco = document.getElementById('banco').value;
	var concepto = document.getElementById('concepto').value;
	var array = [numero, monto, banco, concepto];
	if (LOGIN == true) { 
	db.collection(USER).add({
    monto: monto,
    numero: numero,
    concepto: concepto,
    banco: banco

})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    alert("Pago registrado!");
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
 }

	
}
// Limpiado de Registros
function mantenimiento() {

		  db.collection("cities").doc("DC").delete().then(function() {
          console.log("Document successfully deleted!");
          }).catch(function(error) {
          console.error("Error removing document: ", error);
          });

}
// Consultar Datos
function consulta() {
var Datos;
var	USER = document.getElementById('id').value;
	db.collection(USER).get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
	        console.log(doc.id, " => ", doc.data());
	        Datos = doc.data();
	        console.log(Datos);

	var a,p,th,tbody,tr1,td1,texto1,td2,texto2,td3,texto3,td4,texto4,td5,texto5;    
	a=0;
	a = a + 1;
	tbody = document.getElementById("tbody");
	tr1 =document.createElement("tr");
	td1 = document.createElement("td");
	th= document.createElement("th");
	texto1 = document.createTextNode(doc.id);
	th.appendChild(texto1);
	tr1.appendChild(td1);
	td1.appendChild(th);
	tbody.appendChild(tr1); 
	td2 = document.createElement("td");
	p =document.createElement("p");
	texto2=  document.createTextNode(Datos.numero);
	p.appendChild(texto2); 
	td2.appendChild(p);
	tr1.appendChild(td2);
	td3 = document.createElement("td");
	texto3=  document.createTextNode(Datos.monto); 
	td3.appendChild(texto3);
	tr1.appendChild(td3);
	td4 = document.createElement("td");
	texto4=  document.createTextNode(Datos.concepto); 
	td4.appendChild(texto4);
	tr1.appendChild(td4);
	td5 = document.createElement("td");
	texto5=  document.createTextNode(Datos.banco); 
	td5.appendChild(texto5);
	tr1.appendChild(td5);   

	    });
	});


	


	 
	

return USER;
	
	   
}