Backbone.RenderManager
======================

Client code:

require([
	"CoreView",
	"RenderManager"
], function(View) {
	return View.extend({
		el: "body",
		doRender: function() {
			$(this.el).html("some html goes here");
		}
	})
});
