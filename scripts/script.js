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
