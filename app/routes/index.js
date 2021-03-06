import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
    posts: this.store.findAll('post'),
    locations: this.store.findAll('location'),
    tags: this.store.findAll('tag')
    });
  },
  actions:{
    savePost(params) {
      var newPost = this.store.createRecord('post', params);
      var location = params.location;
      location.get('posts').addObject(newPost);
      newPost.save().then(function() {
        return location.save();
      });
      this.transitionTo('index');
    },
    editPost(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined && params[key]!=="") {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },
    deletePost(post) {
      if (confirm('Are you sure you want to delete this post?')) {
        post.destroyRecord();
        this.transitionTo('index');
      }
    },
    saveCity(params) {
      var newCity = this.store.createRecord('location', params);
      newCity.save();
      this.transitionTo('index');
    },
    saveTag(params) {
      var newTag = this.store.createRecord('tag', params);
      newTag.save();
      this.transitionTo('index');
    }
  }
});
