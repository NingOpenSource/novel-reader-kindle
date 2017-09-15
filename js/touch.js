function touchInit(canvas, onClickTop, onClickBottom, onClickLeft, onClickRight, onClickCenter) {
	console.log(canvas.width + ":" + canvas.height)
	var style = {
		fontColor: 'gray',
		backgroundColor: "#eeeeee",
		_fontColor: 'white',
		_backgroundColor: "gray",
	};
	var temp1 = canvas.width / 4;
	var temp2 = canvas.height / 4;
	var sideSize1 = 2;
	var sidesize2 = 1;
	var points = {
		top_left: [0, 0],
		top_right: [canvas.width, 0],
		bottom_left: [0, canvas.height],
		bottom_right: [canvas.width, canvas.height],
		_top_left: [temp1, temp2],
		_top_right: [canvas.width - temp1, temp2],
		_bottom_left: [temp1, canvas.height - temp2],
		_bottom_right: [canvas.width - temp1, canvas.height - temp2],
	}
	var draw = function(area, selected) {
		var ctx = canvas.getContext('2d');
		ctx.beginPath();
		for(var i in area) {
			var point = area[i];
			ctx.lineTo(point[0], point[1]);
		}
		ctx.closePath();
		ctx.stroke();
		if(selected) {
			ctx.fillStyle = style._backgroundColor;
		} else {
			ctx.fillStyle = style.backgroundColor;
		}
		ctx.fill();
		var cText = canvas.getContext('2d');
		var fontSize=30;
		cText.font ="small-caps "+fontSize+"px arial,sans-serif";
//		cText.fontSize="100px";
		if(selected) {
			cText.fillStyle = style._fontColor;
		} else {
			cText.fillStyle = style.fontColor;
		}
		var name;
		switch(area) {
			case areas.bottom:
				{
					name = "下一章";
					cText.fillText(name, points.top_right[0]/2.0-name.length*fontSize/2.0, canvas.height-(points._top_right[1]/2-fontSize/2.0),points.top_right[0]/2);
				}
				break;
			case areas.top:
				{
					name = "上一章";					
					cText.fillText(name, points.top_right[0]/2.0-name.length*fontSize/2.0, points._top_right[1]/2+fontSize/2,points.top_right[0]/2.0);

				}
				break;
			case areas.right:
				{
					name = "下一頁";
					cText.fillText(name, (canvas.width-canvas.width/8)-fontSize/2.0, canvas.height/2.0+fontSize/2.0,fontSize);

				}
				break;
			case areas.left:
				{
					name = "上一頁";
					cText.fillText(name, canvas.width/8-fontSize/2.0, canvas.height/2.0+fontSize/2.0,fontSize);

				}
				break;
			case areas.center:
				{
					name = "設置";
					cText.fillText(name, canvas.width/2-name.length*fontSize/2.0, canvas.height/2.0+fontSize/2.0,name.length*fontSize);
				}
				break;
		}
		
	}
	var areas = {
		top: [points.top_left, points.top_right, points._top_right, points._top_left],
		left: [points.top_left, points.bottom_left, points._bottom_left, points._top_left],
		right: [points.top_right, points.bottom_right, points._bottom_right, points._top_right],
		bottom: [points.bottom_left, points.bottom_right, points._bottom_right, points._bottom_left],
		center: [points._top_right, points._top_left, points._bottom_left, points._bottom_right],
	}
	/**
	 * 获取点击的区域位置
	 * @param {Object} x
	 * @param {Object} y
	 */
	var loadArea = function(x, y) {
		if(x > points._bottom_left[0] && x < points._bottom_right[0] && y > points._top_right[1] && y < points._bottom_right[1]) {
			return areas.center;
		} else {
			var f = canvas.height / (canvas.width / 1.0);
			if(y / (x / 1.0) < f) { //上或右
				if(y / ((canvas.width - x) / 1.0) > f) { //右
					return areas.right;
				} else { //上
					return areas.top;
				}
			} else { //左或下
				if((canvas.height - y) / (x / 1.0) > f) { //左
					return areas.left;
				} else { //下
					return areas.bottom;
				}
			}
		}
	}
	var tempArea;
//	canvas.addEventListener("mousedown", function(e) {
//		tempArea = loadArea(e.clientX, e.clientY);
//		draw(tempArea, true);
//	});
//	canvas.addEventListener("mouseup", function(e) {
//		draw(tempArea, false);
//	});
	canvas.addEventListener("click", function(e) {
		tempArea = loadArea(e.clientX, e.clientY);
		draw(tempArea, true);
		setTimeout(function(){
			draw(tempArea, false);
		},300);
		if(tempArea == areas.center) {
			console.log("click center area")
		} else
		if(tempArea == areas.left) {
			console.log("click left area")
		} else
		if(tempArea == areas.right) {
			console.log("click right area")
		} else
		if(tempArea == areas.top) {
			console.log("click top area")
		} else
		if(tempArea == areas.bottom) {
			console.log("click bottom area")
		}
	});
//	canvas.addEventListener("touchstart", function(e) {
//		alert("touch is starting")
//		tempArea = loadArea(e.touches[0].clientX, e.touches[0].clientY);
//		draw(tempArea, true);
//	});
//	canvas.addEventListener("touchmove", function(e) {
//	});
//	canvas.addEventListener("touchend", function(e) {
//		draw(tempArea, false);
//		if(tempArea == areas.center) {
//			console.log("click center area")
//		} else
//		if(tempArea == areas.left) {
//			console.log("click left area")
//		} else
//		if(tempArea == areas.right) {
//			console.log("click right area")
//		} else
//		if(tempArea == areas.top) {
//			console.log("click top area")
//		} else
//		if(tempArea == areas.bottom) {
//			console.log("click bottom area")
//		}
//	});
	draw(areas.top, false);
	draw(areas.bottom, false);
	draw(areas.left, false);
	draw(areas.right, false);
	draw(areas.center, false);
}