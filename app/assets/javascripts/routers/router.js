CI.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "listIndex",
  },

  listIndex: function(){
    var router = this;
    var lists = new CI.Collections.Lists();
    lists.fetch({
      success: function(data) {
        var view = new CI.Views.ListIndex({
          collection: lists
        });
        router._swapView(view)
      }
    })

  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})