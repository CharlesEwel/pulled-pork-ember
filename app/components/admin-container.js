import Ember from 'ember';

export default Ember.Component.extend({
  adminPortalHidden: true,
  actions: {
    showAdminPortal(){
      this.set('adminPortalHidden', false);
    },
    hideAdminPortal(){
      this.set('adminPortalHidden', true);
    },
    editPost(post, params) {
      this.sendAction('editPost', post, params);
    },
    savePost(params) {
      this.sendAction('savePost', params);
    },
    deletePost(params) {
      this.sendAction('deletePost', params);
    },
    saveCity(params) {
      this.sendAction('saveCity', params);
    },
  }
});
