(function() {

  'use strict';

  angular
    .module('catApp')
    .controller('TweetsCtrl', TweetsCtrl);

    TweetsCtrl.$inject = [];

    function TweetsCtrl() {
      var vm = this;
    }

})();
