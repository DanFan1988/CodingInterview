CI.Views.Show = Backbone.View.extend({
    tagName : "li",

    template : JST['list/show'],

    events : {
        "click .destroy-list-item" : "_removeList"
    },

    render : function() {
        this.$el.html(this.template({
            list : this.model
        }));
        return this;
    },

    _removeList : function(e) {
        e.preventDefault();
        this.model.destroy();
    }

});