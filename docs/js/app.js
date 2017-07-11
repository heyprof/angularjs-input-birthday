(() => {
  'use strict';

  angular.module('app', ['angularjs-input-birthday'])
    .controller('MainCtrl', $scope => {
      $scope.birthdate = new Date();
    });
})();
