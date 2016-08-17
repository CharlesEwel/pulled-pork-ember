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
        date: this.get('date')
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
