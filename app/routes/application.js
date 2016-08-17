import Ember from 'ember';

export default Ember.Route.extend({
  locationModel() {
    return this.store.findAll('location');
  }
});
