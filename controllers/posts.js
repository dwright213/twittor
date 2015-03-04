Twittor.PostsController = Ember.ArrayController.extend({
  sortProperties: ['body'],
  actions: {
    sortByDate: function(){
      this.set('sortProperties', ['date']);
    },

    sortByBody: function(){
      this.set('sortProperties', ['body']);
    }
  }


});
