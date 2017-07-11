import angular from 'angular';
import 'angular-translate';
import moment from 'moment';

import './input-birthday.component';

class DevServerComponent {
  $onInit() {
    this.birthdate = new Date('1990-02-25').toISOString();
  }
}

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
}).component('devServer', {
  template: `
<input-birthday return-type="moment" ng-model="birthdate"></input-birthday>
<pre>{{ birthdate }}</pre>
<input-birthday return-type="moment" ng-model="birthdate2" init-today="true"></input-birthday>
<pre>{{ birthdate2 }}</pre>
<input-birthday return-type="moment" ng-model="$ctrl.birthdate"></input-birthday>
<pre>{{ $ctrl.birthdate }}</pre>
`,
  controller: DevServerComponent
});
