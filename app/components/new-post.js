import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  selectedLocation: 'Portland',
  actions: {
    articleFormShow(){
      this.set('addNewPost', true);
    },
    updateValue(selectedLocation) {
      this.set('selectedLocation', selectedLocation)
    },
    savePost(){
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        image: this.get('image'),
        date: this.get('date'),
        location: this.get('selectedLocation')
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
      this.set('title', '');
      this.set('author', '');
      this.set('content', '');
      this.set('image', '');
      this.set('date', '');
    },
    cancel(){
      this.set('addNewPost', false);
      this.set('title', '');
      this.set('author', '');
      this.set('content', '');
      this.set('image', '');
      this.set('date', '');
    }
  }
});
