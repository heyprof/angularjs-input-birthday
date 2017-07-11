(() => {
  'use strict';

  angular.module('app', [
    'pascalprecht.translate',
    'angularjs-input-birthday'])
    .config(['$translateProvider', $translateProvider => {
      $translateProvider.preferredLanguage('fr');
      $translateProvider.translations('fr', {
        'birthday-input': {
          'year-label': 'Choose year',
          'month-label': 'Choose month',
          'day-label': 'Choose day',
          years: 'Years',
          months: 'Months',
          days: 'Days'
        }
      });
    }])
    .controller('MainCtrl', $scope => {
      $scope.birthdate = new Date('1990-02-25');
    });
})();
