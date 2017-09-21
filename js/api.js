var api = function(_call) {
	var config = {
		hostUri: "https://novel.juhe.im",
		hostUriRes: "http://statics.zhuishushenqi.com/"
	}
	this.request = {
		categories: function() {
			$.get(config.hostUri + "/categories", _call);
		},
		search: function(keyword) {
			$.get(config.hostUri + "/search?keyword=" + keyword, _call);
		},
	}
	return this.request;
}