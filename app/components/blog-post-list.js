import Ember from 'ember';

export default Ember.Component.extend({
  displayLength: 5,
  actions: {
    showAll(){
      this.set('displayLength', 99);
    },
    showRecent(){
      this.set('displayLength', 5);
    }
  }
});
