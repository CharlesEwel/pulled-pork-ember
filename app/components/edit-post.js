import Ember from 'ember';

export default Ember.Component.extend({
  editPostForm: false,
  actions: {
  editPostForm() {
    this.set('editPostForm', true);
  },
  editPost(post) {
    var params = {
      title: this.get('title'),
      content: this.get('content'),
      author: this.get('author'),
      image: this.get('image'),
      date: this.get('date'),
      location: this.get('location');
    };
    this.set('editPostForm', false);
    this.sendAction('editPost', post, params);
    this.set('title', '');
    this.set('author', '');
    this.set('content', '');
    this.set('image', '');
    this.set('date', '');
    this.set('location', '');
  }
}
});
