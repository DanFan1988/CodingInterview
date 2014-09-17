CI.Models.List = Backbone.Model.extend({
  parse: function(data){
    var items = data.items
    data.items = new CI.Collections.Items(items);
    
    return data
  }
});