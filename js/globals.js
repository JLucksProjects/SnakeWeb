var SNAKE = [];						//Array da snake
var SPEED = 5;						//Speed da snake
var FREQ = 1; 						//Frequência do alvo
var NTARGET = 1;					//Número de alvos
var TCURRENT = 0;					//Tipo do alvo
var HIGHSCORE = 0;					//Pontuação
var TOL = 5;						//Tolerância
var TTARGET = [1,5,10,50];			//Tipos de alvos
/*Tipos
	0 - Head up
	1 - Head right
	2 - Head left
	3 - Head down
	4 - Body hori
	5 - Body vert
	6 - Body up-right/left-down
	7 - Body right-down/up-left
	8 - Body right-up/down-left
	9 - Body down-right/left-up
	10 - Tail up
	11 - Tail right
	12 - Tail left
	13 - Tail down
	14 - Target
*/				