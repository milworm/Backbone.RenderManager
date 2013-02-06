/**
 * handles zombie views after rendering backbone
 */

define(function() {
	Backbone.RenderManager = new function() {
		_.extend(this, {

			/**
			 * @var {Array}
			 */
			views: [],

			/**
			 * simply adds view into rendermanager
			 * @param {Backbone.View} view
			 * @returns {undefined}
			 */
			register: function(view) {
				this.views.push(view);
			},

			/**
			 * unbinds all view that will be destroyed after inserting 
			 * new view
			 * @param {Backbone.View} view
			 * @returns {undefined}
			 */
			removeUnder: function(view) {
				
				var rootEl = $(view.el);

				for (var i = this.views.length - 1; i >= 0; i--) {
					var activeView = this.views[i],
						el = $(activeView.el);

					if(rootEl.get(0) == el.get(0)) { //is equal
						activeView.unbind();
						this.views.splice(this.views.indexOf(activeView), 1);
					} else if(rootEl.find(el).size() > 0) {
						activeView.unbind();
						this.views.splice(this.views.indexOf(activeView), 1);
					}
				};
			}
		});
	}
});
