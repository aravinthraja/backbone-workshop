var songCollection = Backbone.Collection.extend({
    model: songModel,
    url : "https://jsonplaceholder.typicode.com/albums"
});