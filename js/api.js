var api = function() {
	this.config={
		
	}
	this.request = {
		categories: function() {
			return $.get(config.hostUri + "/categories");
		}
	}
}