(() => {
  'use strict';

  angular.module('app', ['angularjs-input-birthday'])
    .controller('InitSampleCtrl', $scope => {
      $scope.birthdate = new Date('1990-02-25');
    });
})();
