(function() {

  'use strict';

  angular
    .module('catApp')
    .directive('pics', pics);

  function pics() {
    return {
      restrict: 'E',
      templateUrl: 'components/pics/pics.view.html',
      controller: 'PicsCtrl',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();
