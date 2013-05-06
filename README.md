Backbone.RenderManager
======================
```javascript
require([
	"CoreView",
	"RenderManager"
], function(View) {
	var v1 = View.extend({
		el: "body",
		events: {
			"click .first-button": function() {
				alert("View 'v1' click handler");
			}
		},
		doRender: function() {
			$(this.el).html('<input type="button" class="first-button" value="Click me" /> some html 1 goes here');
		}
	});

	var v2 = View.extend({
		el: "body",
		events: {
			"click .first-button": function() {
				alert("View 'v2' click handler");
			}
		},
		doRender: function() {
			$(this.el).html('<input type="button" class="first-button" value="Click me" />some html 2 goes here');
		}
	});

		(new v1).render();

		setTimeout(function() {
			(new v2).render(); //renders second view and automatically removes View "v1" and unbinds events
		}, 5000);
	});
```
