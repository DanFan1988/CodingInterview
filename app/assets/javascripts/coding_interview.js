window.CI = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new CI.Routers.TodoList();
    Backbone.history.start();
  }
};
