CI.Views.Item = Backbone.View.extend({
    tagName : "li",

    template : JST['item'],

    render : function() {
        this.$el.html(this.template({
            list : this.model
        }));
        return this;
    }

});