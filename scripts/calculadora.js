function zerar(){
	var input = document.getElementById("res");
	input.value = "R$0,00";
	document.getElementById("res").innerHTML = input;
}

function calcular(){
	var origem = document.getElementById("origem").value;
	var destino = document.getElementById("destino").value;
	var diesel = 3.61;
	var custos = 4;
	var caminhoneiro = 2;
	var km = 0;
	var frete = 0;

	if(origem == "São Paulo" && destino == "São Paulo"){
		km = 70.7;
	}else{
		if (origem == "São Paulo" && destino == "Campinas" || origem == "Campinas" && destino == "São Paulo") {
			km = 100;
		}else{
			if (origem == "São Paulo" && destino == "Rio de Janeiro" || origem == "Rio de Janeiro" && destino == "São Paulo") {
				km = 450;
			}
		}
	}
	if (origem == "Rio de Janeiro" && destino == "Campinas" || origem == "Campinas" && destino == "Rio de Janeiro") {
			km = 522;
		}else{
			if (origem == "Rio de Janeiro" && destino == "Rio de Janeiro") {
				km = 80;
			}
		}
		
	if (origem == "Campinas" && destino == "Campinas") {
			km = 56.8;
	}

	frete = (km*diesel)+(km*custos)+(km*caminhoneiro);

	var valorFrete = document.getElementById("res");
	valorFrete.value = frete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
	document.getElementById("res").innerHTML = valorFrete;	 
}