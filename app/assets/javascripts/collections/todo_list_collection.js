CI.Collections.TodoLists = Backbone.Collection.extend({

    model : CI.Models.TodoList,

    url : "/api/lists",

    parse : function(response) {
        return response.lists;
    },
});