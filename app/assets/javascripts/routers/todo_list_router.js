CI.Routers.TodoList = Backbone.Router.extend({
    routes : {
        "index" : "listIndex"
    },

    listIndex : function() {
        $('#content').empty();
        var index = new CI.Views.Index({
            el : '#content'
        });
    } 
});