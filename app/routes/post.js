import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      post: this.store.findRecord('post', params.post_id),
      tags: this.store.findAll('tag')
    });
  },
  actions: {
    addTag(tag, post) {
      tag.get('posts').addObject(post);
      post.get('tags').addObject(tag);
      post.save().then(function() {
        return tag.save();
      });
      this.transitionTo('post', post.id);
    },
    removeTag(tag, post) {
      tag.get('posts').removeObject(post);
      post.get('tags').removeObject(tag);
      post.save().then(function() {
        return tag.save();
      });
      this.transitionTo('post', post.id);
    }
  }
});
