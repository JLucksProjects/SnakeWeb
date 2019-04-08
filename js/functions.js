var Snake = (function(){
	var my = {};			//Variaveis e funções públicas
	//Insere um ponto no array de pontos
	my.insert = function(x,y,tipo){
		var ponto = {};
		ponto.coord = {};
		ponto.coord.x = x;
		ponto.coord.y = y;
		ponto.coord.tipo = tipo;
		SNAKE.push(ponto);
	};

	//Remove o ponto do array de pontos ---> Falta verificar se o ponto é livre
	my.delete = function(id){
		SNAKE.splice(id,1);
	};

	my.move = function(direction){
		switch(direction){
			case "up":
				break;
			case "down":
				break;
			case "left":
				break;
			case "right":
				break;
			default:
				console.log("ERRO: Direção não permitida.");
		}
	};

	return my;			//Retorna as variaveis e metodos públicos
}());

//Module Pattern
var FUNCTIONS = (function(){
	var my = {};					//Variaveis e funções públicas

	//Retorna a posição do mouse em coordenadas do canvas
	my.getMousePos = function (canvas, evt) {
        var rect = canvas.getBoundingClientRect();				//Posição relativa do canvas na tela
        return {
          x: evt.clientX - rect.left,					//Normaliza o eixo x
          y: evt.clientY - rect.top						//Normaliza o eixo y
        };
	};

	//Verificação de Ponto
	my.pickPonto = function(id,x,y){
		var xp = PONTO[id].coord.x;
		var yp = PONTO[id].coord.y;
		if(x - TOL <= xp && x + TOL >= xp)			//Verifica se o x do ponto esta na "caixa" criada pela tolerancia
			if(y - TOL <= yp && y + TOL >= yp)		//Verifica se o y do ponto esta na "caixa" criada pela tolerancia
				return true;
		return false;
	};

	//Verificação de Ponto
	my.pickPontoA = function(x,y,xp,yp){
		if(x - TOL <= xp && x + TOL >= xp)			//Verifica se o x do ponto esta na "caixa" criada pela tolerancia
			if(y - TOL <= yp && y + TOL >= yp)		//Verifica se o y do ponto esta na "caixa" criada pela tolerancia
				return true;
		return false;
	};

	//Códifica passando as cordenadas de cada ponto para Esquerda/Direita/Cima/Baixo 
	my.pickCode = function(x, y, xmin, xmax, ymin, ymax, cod){
		cod[0] = x < xmin;			//Esquerda
		cod[1] = x > xmax;			//Direita
		cod[2] = y < ymin;			//Cima
		cod[3] = y > ymax;			//Baixo
	};

	return my;						//Retorna o que é público
}());