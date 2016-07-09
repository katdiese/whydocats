(function() {

  'use strict';

  angular
    .module('catApp')
    .config(appConfig);

  appConfig.$inject = ['$routeProvider'];

  function appConfig($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<main></main>'
      })
      .otherwise({redirectTo: '/'});
  }

})();
