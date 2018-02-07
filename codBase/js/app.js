var calculadora = {
	init : function (){
		this.queBoton("tecla");
		
		//boton on/c deja el display en 0
		document.getElementById("on").addEventListener("click", function(){document.getElementById("display").textContent = 0})
		
		//asignacion de valores segun el boton que se toca
		document.getElementById("0").addEventListener("click",function(){ numeroElegido = "0"; calculadora.imprimir()})
		document.getElementById("1").addEventListener("click",function(){ numeroElegido = "1"; calculadora.imprimir()})
		document.getElementById("2").addEventListener("click",function(){ numeroElegido = "2"; calculadora.imprimir()})
		document.getElementById("3").addEventListener("click",function(){ numeroElegido = "3"; calculadora.imprimir()})
		document.getElementById("4").addEventListener("click",function(){ numeroElegido = "4"; calculadora.imprimir()})
		document.getElementById("5").addEventListener("click",function(){ numeroElegido = "5"; calculadora.imprimir()})
		document.getElementById("6").addEventListener("click",function(){ numeroElegido = "6"; calculadora.imprimir()})
		document.getElementById("7").addEventListener("click",function(){ numeroElegido = "7"; calculadora.imprimir()})
		document.getElementById("8").addEventListener("click",function(){ numeroElegido = "8"; calculadora.imprimir()})
		document.getElementById("9").addEventListener("click",function(){ numeroElegido = "9"; calculadora.imprimir()})	
				//Boton punto pone el decimal en el display
		document.getElementById("punto").addEventListener("click", function(){calculadora.puntoDecimal(); calculadora.ochoDigitos()});
		
		//poner valor negativo a el valor en pantalla
		document.getElementById("sign").addEventListener("click", function(){calculadora.negativo(); calculadora.ochoDigitos()});
		
		//botones operaciones
		document.getElementById("mas").addEventListener("click", function(){calculadora.suma()})
		document.getElementById("menos").addEventListener("click", function(){calculadora.resta()})
		document.getElementById("por").addEventListener("click", function(){calculadora.multiplicar()})
		document.getElementById("dividido").addEventListener("click", function(){calculadora.dividir()})
		
		//boton igual
		document.getElementById("igual").addEventListener("click", function(){calculadora.igual()})
		
	},
	queBoton : function(selector){  //defino que boton se toca
		var tecla = document.getElementsByClassName(selector);
		for(var i=0;i<tecla.length; i++){
			tecla[i].onmousedown = this.achicar;
			tecla[i].onmouseup = this.volverAtamaño;
		}
	},
	achicar: function(event){ 
		calculadora.achicarBoton(event.target);
	},
	volverAtamaño: function(event){ 
		calculadora.volverBoton(event.target);
	},
	achicarBoton: function(elemento){ //achico el boton que se toca
  		if(elemento.parentElement.className == "col1"){
			elemento.style.width = "75px";
  			elemento.style.height = "61px";
		}else if(elemento.id == "mas"){
			elemento.style.width = "88%";
  			elemento.style.height = "97%";
		}else{
			elemento.style.width = "75px";
  			elemento.style.height = "61px";
		}
	},
	volverBoton: function(elemento){ //vuelve a su tamaño el boton que se achico
		if(elemento.parentElement.className == "col1"){
			elemento.style.width = "29%";
  			elemento.style.height = "62.91px";
		}else if(elemento.id =="mas"){
			elemento.style.width = "90%";
  			elemento.style.height = "100%";
		}else{	
			elemento.style.width = "22%";
  			elemento.style.height = "62.91px";
		}
	},
	imprimir: function(){  //se imprime en el display los numeros que se tocan
		var pantalla = document.getElementById("display").textContent;		

		if(pantalla == 0){
		 	if (numeroElegido == 0){
				pantalla = 0;
			}else{
				pantalla = numeroElegido;
			}
		}else{
			pantalla = pantalla + numeroElegido;
		}

		
		if(pantalla.length < 9 ){//acorto los digitos a 8
			document.getElementById("display").innerHTML = pantalla;
			valorCompleto = pantalla;
		}else if(pantalla.length == 8){
			document.getElementById("display").innerHTML = valorCompleto;	
		}
		
	
		
	},
	puntoDecimal: function(){//pongo punto decimal
		var pantalla = document.getElementById("display").textContent;
		var puntoExistente = false;
		
		for(var i=0; i<pantalla.length; i++){
  			if (pantalla.charAt(i) == "."){
			   puntoExistente = true;
			}
		}
		
		if(puntoExistente == false){
			pantalla = pantalla + ".";
			document.getElementById("display").textContent = pantalla;
		}		
	},
	negativo: function(){// pongo valor negativo
		var pantalla = document.getElementById("display").textContent;
		var signoMenos = false;
		
		for(var i=0; i<pantalla.length; i++){
			if (pantalla.charAt(i) == "-"){
				signoMenos = true;
			}
		}

		if (signoMenos == false){
			pantalla = "-" + pantalla;
		}else if (signoMenos == true){
			pantalla = pantalla.slice(1, pantalla.length)
		}
		
		document.getElementById("display").textContent = pantalla;
	},
	suma: function(){ //eleccion suma
		valor1 = parseFloat(document.getElementById("display").textContent);
		operacion = 1;
		
		document.getElementById("display").innerHTML = 0;
		
	},
	resta: function(){  //eleccion resta
		valor1 = parseFloat(document.getElementById("display").textContent);
		operacion = 2;
		
		document.getElementById("display").innerHTML = 0;
		
	},
	multiplicar: function(){  //eleccion multiplicar
		valor1 = parseFloat(document.getElementById("display").textContent);
		operacion = 3;
		
		document.getElementById("display").innerHTML = 0;
		
	},
	dividir: function(){  //eleccion division
		valor1 = parseFloat(document.getElementById("display").textContent);
		operacion = 4;
		
		document.getElementById("display").innerHTML = 0;
		
	},
	igual: function(){ //dirigimos la operacion hacia la cuenta que hallamos elegido
		var valor2 = parseFloat(document.getElementById("display").textContent);
	
		switch(operacion){
			case 1:
				calculadora.hacerSuma(valor1, valor2)
				break;
			case 2:
				calculadora.hacerResta(valor1, valor2)
				break
			case 3:
				calculadora.hacerMultiplicacion(valor1, valor2)
				break
			case 4:
				calculadora.hacerDivision(valor1, valor2)
				break
			default:
				break
		}
	},
	hacerSuma: function(a,b){ //hacemos la suma
		resultado = 0;
		
		resultado = a + b;
		
		calculadora.achicarResultado(resultado);
	},
	hacerResta: function(a,b){ //hacemos la resta
		resultado = 0;
		
		resultado = a - b;
		
		calculadora.achicarResultado(resultado);	
	},
	hacerMultiplicacion: function(a,b){  //hacemos la multiplicaicon
		resultado = 0;
		
		resultado = a * b;
		
		calculadora.achicarResultado(resultado);
	},
	hacerDivision: function (a,b){  // hacemos la division
		resultado = 0;
		
		resultado = a / b;
		
		calculadora.achicarResultado(resultado);
	},
	achicarResultado: function(valorFinal){  //achicamos el resultado a 8 digitos
		valorFinal = String(valorFinal)
		
		if(valorFinal.length > 9){
			valorFinal = valorFinal.slice(0,8);
		}
		document.getElementById("display").innerHTML = valorFinal;
			
	}
	
}

calculadora.init();// inicializamos el objeto calculadora