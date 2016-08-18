import Ember from 'ember';

const contains = (params) => params[0].contains(params[1]);
export default Ember.Helper.helper(contains);
