import Ember from 'ember';

export default Ember.Component.extend({
  addNewTag: false,
  actions: {
    tagFormShow(){
      this.set('addNewTag', true);
    },
    saveTag(){
      var params = {
        name: this.get('name'),
      };
      if (params.name !== undefined) {
        this.set('addNewTag', false);
        this.sendAction('saveTag', params);
        this.set('name', '');
      } else {
        alert('Please fill out all fields.');
      }
    },
    cancel(){
      this.set('addNewTag', false);
      this.set('name', '');
    }
  }
});
