Twittor.NewPostController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newPost = this.store.createRecord('post', {
        body: this.get('body'),
        date: this.get('date')
      });

      newPost.save();
      this.transitionToRoute('posts');
    }
  }
});
