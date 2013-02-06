/**
 * @author Ruslan Prytula
 * Base class for all application's views
 */

define(function() {

	return Backbone.View.extend({

		/**
		 * function clears(removes all listeners) for all views 
		 * that are currently lies under this.el
		 * @returns {undefined}
		 */
		beforeRender: function() {
			Backbone.RenderManager.removeUnder(this);
		},

		/**
		 * @returns {undefined}
		 */
		render: function() {
			this.beforeRender.apply(this, arguments);
			this.doRender.apply(this, arguments);
			this.afterRender.apply(this, arguments);
		},

		/**
		 * should be overriden in subclasses
		 * @returns {undefined}
		 */
		doRender: function() {},

		/**
		 * registers current view in renderManager
		 */
		afterRender: function() {
			Backbone.RenderManager.register(this);
		},

		unbind: function() {
			this.undelegateEvents();
		}
	});
});
