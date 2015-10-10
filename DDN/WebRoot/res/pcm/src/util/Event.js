var Pcm = Pcm || {};
Pcm.util = Pcm.util || {};
(function() {

	Pcm.util.Event = {
		/**
		 * http://www.jb51.net/article/40449.htm
		 * 支持绑定单一监听
		 * @param element
		 * @param type
		 * @param handler
		 */
		addListener : function(element, type, handler) {
			if (element.addEventListener) {
				element.addEventListener(type, handler, false);
			} else if (element.attachEvent) {
				element.attachEvent("on" + type, handler);
			} else {
				element["on" + type] = handler;
			}
		}
	};
	Pcm.event = Pcm.util.Event;
	
})();