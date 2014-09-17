CI.Views.ListIndex = Backbone.View.extend({
  template: JST['list/index'],
  
  events: {
    "click #create-list": "createList"
  },

  render: function(){
    this.renderLayout();
    this.renderLists();
  },
  
  renderLayout: function() {
    var renderedContent = this.template({
      lists: this.collection
    })
    this.$el.html(renderedContent);
    return this;
  },
  
  renderItems: function() {
    var listContainer = $("#list-container")
    this.collect
  },
  
  createList: function(e) {
    e.preventDefault();
    e.stopPropagation();

    this.collection.create({title: "new title"}, {parse: true})
  }
});