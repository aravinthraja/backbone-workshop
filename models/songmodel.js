var songModel  = Backbone.Model.extend({ 

  defaults    :   {
                    "id"      : "",
                    "songid"  : "",
                    "name"    : "",
                    "lang"    : "en"
                  },

  idAttribute :   "id",

  urlRoot     :   "https://jsonplaceholder.typicode.com/albums",

  initialize  :   function()
                  {
                      console.log("i am new Model");
                  },
  validate    :   function(attrs, options) 
                  {
                    if (attrs.name.length == 0 ) 
                    {
                      return "Song Must Have Name";
                    }
                  }
  // ValidateError && isValid
});