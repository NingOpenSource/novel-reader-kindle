var api = function(succ,err) {
	this.config={
		hostUri:"https://novel.juhe.im",
		hostUriRes:"http://statics.zhuishushenqi.com/"
	}
	this.request = {
		categories: function() {
			return $.get(config.hostUri + "/categories");
		}
	}
}