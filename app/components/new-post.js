import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    articleFormShow(){
      this.set('addNewPost', true);
    },
    savePost(){
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        image: this.get('image'),
        date: this.get('date'),
        location: this.get('location')
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
      this.set('title', '');
      this.set('author', '');
      this.set('content', '');
      this.set('image', '');
      this.set('date', '');
      this.set('location', '');
    }
  }
});
