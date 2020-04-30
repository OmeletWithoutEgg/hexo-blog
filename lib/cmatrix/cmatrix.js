! function init() {
	console.log("Cmatrix");
	var width = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var height = () => window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	const rowN = 100, colN = 100;

	function RandomChar() {
		if(!this.intToChar) {
			this.intToChar = Array(800).fill(' ');
			for(let i = 33; i < 127; i++) this.intToChar.push(String.fromCharCode(i));
		}
		return this.intToChar[Math.floor(Math.random() * this.intToChar.length)];
	}

	canvas.width = width();
	canvas.height = height();
	canvas.style.cssText = "position:fixed; top:0; left:0; z-index: -1; opacity: 100%"
	document.getElementsByTagName("body")[0].appendChild(canvas);

	ctx.rotate(Math.PI/2);
	ctx.lineWidth=3;
	ctx.font='20px consolas';

	function draw() {
		if(!this.str) {
			this.str = [];
			for(let i = 0; i < rowN; i++) {
				this.str[i] = "";
				for(let j = 0; j < colN; j++) this.str[i] += RandomChar();
			}
		}
		for(let i = 0; i < rowN; i++) {
			ctx.fillStyle='#1d1f21';
			ctx.fillText(str[i], 0, -20*i);
			str[i] = RandomChar() + str[i].slice(0, -1);
			ctx.fillStyle='green';
			ctx.fillText(str[i], 0, -20*i);
		}
		// console.log(str[0]);
	}

	$('#cmatrix-toggle').click(function () {
		if(!this.running) {
			draw();
			this.running = setInterval(draw, 200);
			$(this).text('Animation Off');
		} else {
			this.destroy();
			$(this).text('Animation On');
		}
	});
	$('#cmatrix-toggle').click();
}();