(function() {

  'use strict';

  angular
    .module('catApp')
    .directive('main', main);

  function main() {
    return {
      restrict: 'E',
      templateUrl: 'components/mainPage/main.view.html',
      controller: 'MainCtrl',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();
