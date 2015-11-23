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
		ctxTwo.fill();
	}

	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");

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

