import angular from 'angular';
import 'angular-translate';
import moment from 'moment';

import './input-birthday.component';

angular.module('dev-server', [
  'pascalprecht.translate',

  'angularjs-input-birthday'
]).config(['$translateProvider', $translateProvider => {
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
}]).run(() => {
  moment.locale('fr', {
    months: 'Janvier_Février_Mars_Avril_Mai_Juin_Juillet_Août_Septembre_Octobre_Novembre_Décembre'.split('_')
  });
});
