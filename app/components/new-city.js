import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    cityFormShow(){
      this.set('addNewCity', true);
    },
    saveCity(){
      var params = {
        city: this.get('city'),
        country: this.get('country'),
      };
      this.set('addNewCity', false);
      this.sendAction('saveCity', params);
      this.set('city', '');
      this.set('country', '');
    }
  }
});
