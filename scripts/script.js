function draw() {
	var canvas = document.getElementById("canvas");
	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");

		ctx.fillRect(25,25,100,100);
		ctx.clearRect(45,45,60,60);
		ctx.strokeRect(50,50,50,50);
	}

	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");
		
		ctx.beginPath();
		ctx.moveTo(45,250);
		ctx.lineTo(70,275);
		ctx.lineTo(70,225);
		ctx.fill();
	}

	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");

		ctx.beginPath();
		ctx.moveTo(5,249);
		ctx.lineTo(345,249);
		ctx.lineTo(345,251);
		ctx.lineTo(5,251)	
		ctx.fill();

		var ctxTwo = canvas.getContext("2d")
		ctxTwo.beginPath();
		ctxTwo.moveTo(305,250);
		ctxTwo.lineTo(280,275);
		ctxTwo.lineTo(280,225);
		ctx.closePath();
		ctxTwo.stroke();
	}

	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");

/*to draw arcs and cirlces, we use the arc() and arcTo() methods:

arc(x,y,radius,startAngle,endAngle,anticlockwiseBool)

arcTo(x1,y1,x2,y2,radius)*/

		ctx.beginPath();
		ctx.arc(75,350,50,0,Math.PI*2,true);
		ctx.moveTo(110,350);		
		ctx.arc(75,350,35,0,Math.PI,false);
		ctx.moveTo(65,330);
		ctx.arc(60,330,5,0,Math.PI*2,true);
		ctx.moveTo(95,330);
		ctx.arc(90,330,5,0,Math.PI*2,true);
		ctx.moveTo(70,355);
		ctx.lineTo(80,365);
		ctx.moveTo(70,365);
		ctx.lineTo(80,355);
		ctx.stroke();
	}

}

function drawTwo(){
	var canvasTwo = document.getElementById("canvasTwo");
	if (canvasTwo.getContext){
		var ctx = canvasTwo.getContext("2d");

		for(var i=0;i<13;i++){
			for (var j=0;j<10;j++){
				ctx.beginPath();
				var x = 15+j*50;
				var y = -5+i*50;
				var radius = 20;
				var startAngle = 0;
				var endAngle = Math.PI+(Math.PI*j)/2;
				var anticlockwise = i%2==0 ? false : true;
				ctx.arc(x,y,radius,startAngle,endAngle,anticlockwise);
				if (i==1||i==3||i==5||i>7){
					ctx.fill();
				} else {
					ctx.stroke();
				}
			}	
		}
	}
}

function drawNew(){
	var canvasNew = document.getElementById("canvasNew");
	if (canvasNew.getContext) {
		var ctx = canvasNew.getContext("2d");

		for (var j = 0;j < 100; j++){
			ctx.beginPath();
			var x = 5 + j*50;
			var y = 50;
			var radius = 10;
			var startAngle = 0;
			var endAngle = Math.PI+(Math.PI*j)/2;
			var anticlockwise = j % 2===0 ? false:true;
			ctx.arc(x,y,radius,startAngle,endAngle,anticlockwise);
			ctx.stroke();
		}

		for (var i = 0;i < 50; i++){
			ctx.beginPath();
			var x = 5 + i*20;
			var y = 200;
			var radius = 10*Math.sqrt(i);
			var startAngle = Math.PI;
			var endAngle = Math.PI*Math.sqrt(i);
			var anticlockwise = false;
			ctx.arc(x,y,radius,startAngle,endAngle,anticlockwise);
			if (i%2 === 0||i%3 === 0||i%7===0) {
				ctx.stroke();
			} else {
				ctx.fill();
			}
		}
	}
	
} 

function drawThree() {
	var bezier = document.getElementById("bezier");
	if (bezier.getContext){
		var ctx = bezier.getContext("2d");

/*

quadraticCurveTo(cp1x,cp1y,x,y) draws a quadratic bezier curve from the current pen position to the end point specified by x and y, using the control point specified by cp1x and cp1y

bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y) draws a cubic bezier curve from the current pen position to the end point specified by x and y, using the control points specified by (cp1x,cp1y) and (cp2x,cp2y)

*/

	ctx.beginPath();
	ctx.moveTo(75,25);
	ctx.quadraticCurveTo(25,25,25,62.5);
	ctx.quadraticCurveTo(25,100,50,100);
	ctx.quadraticCurveTo(50,120,30,125);
	ctx.quadraticCurveTo(60,120,65,100);
	ctx.quadraticCurveTo(125,100,125,62.5);
	ctx.quadraticCurveTo(125,25,75,25);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(235,40);
	ctx.bezierCurveTo(235,37,230,25,210,25);
	ctx.bezierCurveTo(180,25,180,62.5,180,62.5);	
	ctx.bezierCurveTo(180,80,200,102,235,120);
	ctx.bezierCurveTo(270,102,290,80,290,62.5);
	ctx.bezierCurveTo(290,62.5,290,25,260,25);
	ctx.bezierCurveTo(245,25,235,37,235,40);
	ctx.fill();

	ctx.beginPath();
	ctx.rect(25,150,140,40);
	ctx.stroke();
	}
}

/*
ulility function!!!!!
*/

function roundedRect(ctx,x,y,width,height,radius){
	ctx.beginPath();
	ctx.moveTo(x,y+radius);
	ctx.lineTo(x,y+height-radius);
	ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
	ctx.lineTo(x+width-radius,y+height);
	ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
	ctx.lineTo(x+width,y+radius);
	ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
	ctx.lineTo(x+radius,y);
	ctx.quadraticCurveTo(x,y,x,y+radius);
	ctx.stroke();
}

function gameChars(){
	var gameCan = document.getElementById("gameCan");
	if (gameCan.getContext){
		var ctx = gameCan.getContext("2d");

		roundedRect(ctx,12,12,185,185,15);
		roundedRect(ctx,19,19,171,171,9);
		roundedRect(ctx,53,53,49,33,10);
		roundedRect(ctx,53,119,49,16,6);
		roundedRect(ctx,135,53,49,33,10);
		roundedRect(ctx,135,119,25,49,10);
		

		ctx.beginPath();
		ctx.arc(37,37,13,Math.PI/7,-Math.PI/7,false);
		ctx.lineTo(31,37);
		ctx.fill();		

		for (var i=0;i<8;i++){
			ctx.fillRect(51+i*16,35,4,4);
		}
		
	for (var i=0;i<6;i++){
			ctx.fillRect(115,51+i*16,4,4);
		}

	for (var i=0;i<8;i++){
		ctx.fillRect(51+i*16,99,4,4);
	}

	ctx.beginPath();
	ctx.moveTo(83,116);
	ctx.lineTo(83,102);
	ctx.bezierCurveTo(83,94,89,88,97,88);
	ctx.bezierCurveTo(105,88,111,94,111,102);
	ctx.lineTo(111,116);
	ctx.lineTo(106.333,111.333);
	ctx.lineTo(101.666,116);
	ctx.lineTo(97,111.333);
	ctx.lineTo(92.333,116);
	ctx.lineTo(87.666,111.333);
	ctx.lineTo(83,116);
	ctx.fill();

	ctx.fillStyle = "white";
	ctx.beginPath();
	ctx.moveTo(91,96);
	ctx.bezierCurveTo(88,96,87,99,87,101);
	ctx.bezierCurveTo(87,103,88,106,91,106);
	ctx.bezierCurveTo(94,106,95,103,95,101);
	ctx.bezierCurveTo(95,99,94,96,91,96);
	ctx.moveTo(103,96);
	ctx.bezierCurveTo(100,96,99,99,99,101);
	ctx.bezierCurveTo(99,103,100,106,103,106);
	ctx.bezierCurveTo(106,106,107,103,107,101);
	ctx.bezierCurveTo(107,99,106,96,103,96);
	ctx.fill();

	ctx.fillStyle = "black";
	ctx.beginPath();
	ctx.arc(101,102,2,0,Math.PI*2,true);
	ctx.fill();

	ctx.beginPath();
	ctx.arc(89,102,2,0,Math.PI*2,true);
	ctx.fill();
	}
}

function tryApi(){
	var canvasTry = document.getElementById("canvasTry");
	if (canvasTry.getContext){
		var ctx = canvasTry.getContext("2d");
		
		var rectangle = new Path2D();
		rectangle.rect(10,10,50,50);
		ctx.stroke(rectangle);
	
		var circle = new Path2D;
		circle.moveTo(125,35);
		circle.arc(100,35,25,0,2*Math.PI);
		ctx.fill(circle);
	}
}

function gradColor(i,j) {
	var red = Math.floor(255-32.5*i);
	var blue = Math.floor(255-12.5*j);
	var green = 0;
	var color = "rgba(" + red + "," + green + "," + blue + "," + 0.5 + ")";
	return color;
}

function useFillStyle(){
	var useF = document.getElementById("useF");
	if (useF.getContext){
		var ctx = useF.getContext("2d");
		for (var i=0;i<6;i++){
			for (var j=0;j<6;j++){
				ctx.fillStyle = gradColor(i,j);
				ctx.rect(j*25,i*25,25,25);
			}
		}
		ctx.fillStyle = "#424242";
	
		for (var w=0;w<66;w++){
			for (var v=0;v<66;v++){
				ctx.strokeStyle = "rgb(0," + Math.floor(255-42.5*w) + "," + Math.floor(255-42.5*v) + ")";
				ctx.fillStyle = gradColor(w,v);
			ctx.beginPath();
			/*ctx.arc(22+v*35,22+w*55,30,0,Math.PI*2,true);*/
			ctx.rect(25*w,25*v,25,25);
			ctx.stroke();
			ctx.fill();
			}
		}	
	}
}

function useGlobA(){

/*in addition to drawing opaque shapes to the canvas, we can also draw semi-transparent (or translucent) shapes. This is done by either setting the globalAlpha property or by assigning a semi-transparent color to the stroke and/or fill style.

globalAlpha = transparencyValue --- applies the specified transparency value to all future shapes drawn on the canvas. The value must be between 0.0 (full transparent) to 1.0 (fully opaque). This value is 1.0 (fully opaque) by default.

the globalAlpha property can be userful if you want to draw a lot of shapes on the canvas with similar transparency, but otherwise it's generally more useful to set the transparency on the individual shapes when setting their colors.*/

	var useGlob = document.getElementById("useGlob");
	if (useGlob.getContext){
		var ctx = useGlob.getContext("2d");
		ctx.fillStyle = "#FD0";
		ctx.fillRect(20,20,175,175);
		ctx.fillStyle = "#6C0";
		ctx.fillRect(95,20,175,175);
		ctx.fillStyle = "#09F";
		ctx.fillRect(20,95,175,175);
		ctx.fillStyle = "#F30";
		ctx.fillRect(95,95,175,175);
		ctx.fillStyle = "#FFF";

		ctx.globalAlpha = 0.2;

		for (i=0;i<7;i++){
			ctx.beginPath();
			ctx.arc(95,95,27+27*i,0,Math.PI*2,true);
			ctx.fill();
		}
	}
}

function useLineS() {

/* 
	lineWidth = value (sets width of lines drawn in the future -- default is 1.0 units)
	lineCap = type (sets the appearance of the ends of lines. options: butt (squared), round (adds semicircle with r half the width of line), square (box is added with height of half the line width) default is butt)
	lineJoin = type (sets the appearance of the 'corners' where lines meet. options: round,bevel,miter)
	miterLimit = value (establishes a limit on the miter when two lines join at a sharp angle, to let you control how thick the junction becomes)
	getLineDash() (returns the current line dash pattern array containing an even number of non-negative numbers)
	setLineDash(segments) (sets the current line dash pattern)
	lineDashOffset = value (specifies where to start a dash array on a line)
*/

	var useLine = document.getElementById("useLine");
	if (useLine.getContext){
		var ctx = useLine.getContext("2d");
		for (var i = 0 ; i < 30; i++){
			ctx.lineWidth = 1 + i*0.65;
			ctx.beginPath();
			if (i<8) {
				ctx.moveTo(i*11,-5);
				ctx.lineTo(i*11,555);
				ctx.stroke();
			} else if (i>14&&i<19){
				ctx.moveTo(i*12,-5);
				ctx.lineTo(i*12,555);
				ctx.stroke();
			} else {
				ctx.moveTo(i*15,-5);
				ctx.lineTo(i*15,555);
				ctx.stroke();
			}
		}
	}
}
			
