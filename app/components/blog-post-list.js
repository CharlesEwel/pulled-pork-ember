import Ember from 'ember';

export default Ember.Component.extend({
  displayLength: 5,
  filterBy: 'all', // default filter none
  filterDefinition: Ember.computed('filterBy', function() {
    return [ this.get('filterBy') ];
  }),
  actions: {
    showAll(){
      this.set('displayLength', 99);
    },
    showRecent(){
      this.set('displayLength', 5);
    }
  }
});
