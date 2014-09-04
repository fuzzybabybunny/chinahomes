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

Router.onBeforeAction('loading');

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
