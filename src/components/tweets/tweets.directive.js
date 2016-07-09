(function() {

  'use strict';

  angular
    .module('catApp')
    .directive('tweets', tweets);

  function tweets() {
    return {
      restrict: 'E',
      templateUrl: 'components/tweets/tweets.view.html',
      controller: 'TweetsCtrl',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();
