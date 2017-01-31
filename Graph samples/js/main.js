$(function() {

	console.log('Apples');

	var canvas = document.getElementById("canvas");
	if (canvas == null || !canvas.getContext) {
	    return;
	}
	var ctx = canvas.getContext("2d");

	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "rgb(212, 120, 92)";

	for (var i = 0; i <= 1000; i++) {
	    var x = i * 3;
	    var y = Math.cos(5.2 * x + 0.1);
	    ctx.lineTo(0.1 + x, 25 - y * 24);
	}
	ctx.stroke();


	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "rgb(212, 120, 92)";

	for (var i = 0; i <= 1000; i++) {
	    var x = i * 3;
	    var y = Math.cos(5.2455 * x + 0.3) - 4;
	    ctx.lineTo(0.1 + x, 25 - y * 24);
	}
	ctx.stroke();


	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "rgb(212, 120, 92)";

	for (var i = 0; i <= 1000; i++) {
	    var x = i * 3;
	    var y = Math.cos(12.5 * x - 1.3) - 5;
	    ctx.lineTo(0.6 + x, 27 - y * 40);
	}
	ctx.stroke();

	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "rgb(212, 120, 92)";

	for (var i = 0; i <= 1000; i++) {
	    var x = i * 1;
	    var y = Math.sin(9 * x - 2.5) - 8;
	    ctx.lineTo(0.1 + x, 27 - y * 40);
	}
	ctx.stroke();

	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "rgb(212, 120, 92)";

	for (var i = 0; i <= 1000; i++) {
	    var x = i * 1;
	    var y = Math.sin(16 * x - 2.5) - 11;
	    ctx.lineTo(0.1 + x, 27 - y * 40);
	}
	ctx.stroke();

	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "rgb(212, 120, 92)";

	for (var i = 0; i <= 1000; i++) {
	    var x = i * 1;
	    var y = Math.sin(21 * x - 2.5) - 14;
	    ctx.lineTo(0.1 + x, 27 - y * 40);
	}
	ctx.stroke();

	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "rgb(212, 120, 92)";

	for (var i = 0; i <= 1000; i++) {
	    var x = i * 1;
	    var y = Math.sin((34 * x + 1.3) * 2.5) - 17;
	    ctx.lineTo(0.1 + x, 27 - y * 40);
	}
	ctx.stroke();

});