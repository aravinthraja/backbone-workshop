var songView = Backbone.View.extend({
  tagName : "li",
  className : "text-big",
  attributes :{
   "data-url"  : "123"
  },
  events  : {
    
    "keypress .box" : "print"
  },
  initialize: function(option) {
    console.log(option.model);
    console.log(this.model);
    this.model.on("change",this.render,this);
  },
  alert : function(){
    alert("hi");
  },
  print : function(event){
    console.log($(event.currentTarget).val());
  },
  render: function() {
    this.$el.html(_.template( $("#songNameTemplate").html())(this.model.toJSON()));
    return this;
  }
});