CI.Models.TodoList = Backbone.Model.extend({
    defaults : {
        title : "",
    },

    urlRoot : "/api/lists",

    parse : function(data) {
        data.items = new CI.Collections.TodoListsItems(data.items);
        return data;
    }

});