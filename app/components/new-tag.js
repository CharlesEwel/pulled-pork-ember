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
      this.set('addNewTag', false);
      this.sendAction('saveTag', params);
      this.set('tag', '');
    },
    cancel(){
      this.set('addNewTag', false);
      this.set('tag', '');
    }
  }
});
