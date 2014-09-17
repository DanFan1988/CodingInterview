window.CI = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new CI.Routers.Router({
      $rootEl: $("#content")
    })
    Backbone.history.start();
  }
};
