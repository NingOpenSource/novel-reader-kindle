var ui = {
	/**
	 * 初始化导航栏
	 * @param {Element} eleNavNar
	 * @param {Element} eleContentLayout
	 */
	initNavBar: function(eleNavNar, eleContentLayout) {
		eleNavNar.innerHTML = "";
		var tempNavPage = null;
		var togglePageController = function(navPage) {
			if($(navPage.render).hasClass("bt_icon_selected")) {
				return;
			}
			$(".bt_icon_selected").removeClass("bt_icon_selected");
			$(navPage.render).addClass("bt_icon_selected");
			if(tempNavPage != null) {
				tempNavPage.adapter.onPause(navPage.adapter);
			} else {
				
			}
			if(navPage.adapter.render.innerHTML==""){
				navPage.adapter.onCreate(navPage.adapter);
			}
			tempNavPage=navPage;
			eleContentLayout.innerHTML="";
			eleContentLayout.appendChild(navPage.adapter.render);
			navPage.adapter.onResume(navPage.adapter);
		}
		var initClick=function(navPage){
			navPage.render.addEventListener("click", function(e) {
				togglePageController(navPage);
			});
		}
		for(var i in navPages) {
			var navPage = navPages[i];
			initClick(navPage);
			if(document.getElementsByClassName("bt_icon_selected").length == 0) {
				togglePageController(navPage);
			}
			eleNavNar.appendChild(navPage.render);
		}
	},
}
/**
 * 导航页面适配器
 * @param {{onCreate, onResume, onPause, onDestory, render}} config
 */
var NavPageAdapter = function(_config) {
	this.onCreate = _config.onCreate;
	this.onResume = _config.onResume;
	this.onPause = _config.onPause;
	this.onDestory = _config.onDestory;
	this.render = _config.render;
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
	new NavPage("书架", "img/bt_bookcase.png", new NavPageAdapter({
		onCreate: function(adapter) {

		},
		onResume: function(adapter) {

		},
		onPause: function(adapter) {

		},
		onDestory: function(adapter) {

		},
		render: document.createElement("div"),
	})),
	new NavPage("主页", "img/bt_home.png", new NavPageAdapter({
		onCreate: function(adapter) {

		},
		onResume: function(adapter) {

		},
		onPause: function(adapter) {

		},
		onDestory: function(adapter) {

		},
		render: document.createElement("div"),
	})),
	new NavPage("排行榜", "img/bt_rank.png", new NavPageAdapter({
		onCreate: function(adapter) {

		},
		onResume: function(adapter) {

		},
		onPause: function(adapter) {

		},
		onDestory: function(adapter) {

		},
		render: document.createElement("div"),
	})),
	new NavPage("分类", "img/bt_categories.png", new NavPageAdapter({
		onCreate: function(adapter) {

		},
		onResume: function(adapter) {

		},
		onPause: function(adapter) {

		},
		onDestory: function(adapter) {

		},
		render: document.createElement("div"),
	})),
	new NavPage("搜索", "img/bt_search.png", new NavPageAdapter({
		onCreate: function(adapter) {

		},
		onResume: function(adapter) {

		},
		onPause: function(adapter) {

		},
		onDestory: function(adapter) {

		},
		render: document.createElement("div"),
	})),
	new NavPage("设置", "img/bt_setting.png", new NavPageAdapter({
		onCreate: function(adapter) {
			adapter.render.appendChild($('<a href="#")>字体类型</a><br>')[0]);
			adapter.render.appendChild($('<a href="#")>字体大小</a><br>')[0]);
			adapter.render.appendChild($('<a href="#")>字体颜色</a><br>')[0]);
			adapter.render.appendChild($('<a href="#")>北京颜色</a><br>')[0]);
			adapter.render.appendChild($('<a href="#")>清空缓存（初始化app）</a><br>')[0]);
		},
		onResume: function(adapter) {

		},
		onPause: function(adapter) {

		},
		onDestory: function(adapter) {
	
		},
		render: document.createElement("div"),
	})),
];