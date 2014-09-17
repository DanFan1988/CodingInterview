CI.Collections.Lists = Backbone.Collection.extend({
  url: "/api/lists",
  model: CI.Models.List,
  
  parse: function(data) {
    return data.lists;
  }
})

