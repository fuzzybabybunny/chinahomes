/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});

Router.onBeforeAction('loading');

Router.map(function(){
  /*
    Example:
      this.route('home', {path: '/'});
  */

  this.route('Index', {
  	path: '/',
    waitOn: function(){
      return [
        Meteor.subscribe('listings'),
        Meteor.subscribe('listingImages')
      ]
    }
  });

  this.route('test', {
    path: '/test',
    waitOn: function(){
      return Meteor.subscribe('listings');
    }
  });
  
  
});
