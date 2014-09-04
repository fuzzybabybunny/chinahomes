/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase',
  waitOn: function(){
    return [
      Meteor.subscribe('listings'),
      Meteor.subscribe('listingImages')
    ]
  }
});

Router.map(function(){
  /*
    Example:
      this.route('home', {path: '/'});
  */

  this.route('Index', {
  	path: '/'
  });

  this.route('test', {
    path: '/test'
  });
  
  
});

var requireLogin = function(){
  if(! Meteor.user()){
    if(Meteor.loggingIn()){
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
    this.stop();
  }
}

Router.onBeforeAction('loading');

Router.onBeforeAction(function(){ 
  clearErrors() ;
});