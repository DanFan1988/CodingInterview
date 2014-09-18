CI.Views.Index = Backbone.View.extend({
    template : JST['list/index'],

    events : {
        "click #add-list" : "_addList"
    },

    initialize : function() {
        var view = this;
        view.collection = new CI.Collections.TodoLists();
        view.collection.fetch().done(function() {
            view.render();
        });
        view.listenTo(view.collection, "add", view._renderLists);
    },

    render : function() {
        this.$el.html(this.template());
        this._renderLists();
        return this;
    },

    _renderLists : function() {
        var view = this;
        view.$("#lists").empty();
        this.collection.each(function(todoList) {
            var listView = new CI.Views.Show({
                model : todoList
            });
            view.$("#lists").append(listView.render().$el);
        });
    },

    _addList : function(e) {
        e.preventDefault();
        var listTitle = this.$("[name='title']").val();
        this.collection.create({
            title : listTitle
        });
    }

});