import Ember from 'ember';

const leq = (params) => params[0]-params[1] <= params[2];
export default Ember.Helper.helper(leq);
