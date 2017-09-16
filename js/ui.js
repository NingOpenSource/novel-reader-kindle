var ui = {
	/**
	 * 初始化导航栏
	 * @param {Element} ele
	 */
	initNavBar: function(ele) {
		ele.innerHTML = "";
		for(var i in navPages) {
			var navPage = navPages[i];
			navPage.render.addEventListener("click", function(e) {
				//				alert("click it!");"
				$(".bt_icon_selected").removeClass("bt_icon_selected");
				$(e.target).addClass("bt_icon_selected");
			});
			if(document.getElementsByClassName("bt_icon_selected").length == 0) {
				$(navPage.render).addClass("bt_icon_selected");
			}
			ele.appendChild(navPage.render);
		}

	}
}
/**
 * 导航页面适配器
 * @param {Object} _onCreate
 * @param {Object} _onResume
 * @param {Object} _onPause
 * @param {Object} _onDestory
 */
var NavPageAdapter = function(_onCreate, _onResume, _onPause, _onDestory, _render) {
	this.onCreate = _onCreate;
	this.onResume = _onResume;
	this.onPause = _onPause;
	this.onDestory = _onDestory;
	this.render = _render;
}

var NavPage = function(_name, _icon, _adapter) {
	this.name = _name;
	this.icon = _icon;
	this.adapter = _adapter;
	var ele = document.createElement("img");
	$(ele).addClass("bt_icon");
	ele.src = _icon;
	this.render = ele;
}
var navPages = [
	new NavPage("书架", "img/bt_bookcase.png", new NavPageAdapter(

	)),
	new NavPage("主页", "img/bt_home.png", new NavPageAdapter(

	)),
	new NavPage("排行榜", "img/bt_rank.png", new NavPageAdapter(

	)),
	new NavPage("分类", "img/bt_categories.png", new NavPageAdapter(

	)),
	new NavPage("搜索", "img/bt_search.png", new NavPageAdapter(

	)),
	new NavPage("设置", "img/bt_setting.png", new NavPageAdapter(

	)),
];