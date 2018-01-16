var PlayListView = Backbone.View.extend({

 initialize: function(option) {
    console.log(option.model);
    console.log(this.model);
    this.model.on("change",this.render,this);
  },
  render: function() {
    var _this = this;
    this.model.each(function(song){
    	console.log(song);
		var view = new songView({model:song});
  		_this.$el.append(view.render().el);
  	});
  	return this
  }
});