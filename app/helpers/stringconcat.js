import Ember from 'ember';

export function stringconcat(params) {
  let a = params[0],
      b = params[1],
      c = a + b;

  return c;
}

export default Ember.Helper.helper(stringconcat);
