import Ember from 'ember';

export default Ember.Component.extend({
  editPostForm: false,
  selectedLocation: 0,
  actions: {
    editPostForm() {
      this.set('editPostForm', true);
    },
    updateValue(selectedLocation) {
      this.set('selectedLocation', selectedLocation);
    },
    editPost(post) {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        author: this.get('author'),
        image: this.get('image'),
        date: this.get('date'),
        location: this.get('location-list').objectAt(this.get('selectedLocation'))
      };
      this.set('editPostForm', false);
      this.sendAction('editPost', post, params);
      this.set('title', '');
      this.set('author', '');
      this.set('content', '');
      this.set('image', '');
      this.set('date', '');
    },
    cancel(){
      this.set('editPostForm', false);
      this.set('title', '');
      this.set('author', '');
      this.set('content', '');
      this.set('image', '');
      this.set('date', '');
    }
  }
});
