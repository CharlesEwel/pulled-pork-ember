import Ember from 'ember';

export default Ember.Component.extend({
  editPostForm: false,
  actions: {
  editPostForm() {
    this.set('editPostForm', true);
  },
  edit(post) {
    var params = {
      title: this.get('title'),
      content: this.get('content'),
      author: this.get('author'),
      image: this.get('image'),
      date: this.get('date')
    };
    this.set('editPostForm', false);
    this.sendAction('edit', post, params);
  }
}
});
