import './input-birthday.style.scss';

/**
 * AngularJS 1.5+ Component using moment for Birthday input component
 * params: {
   *   String:returnType: if 'moment', return a moment object, Javascript Date instead. default: Javascript
   *   String:returnFormat: force a return type string with the given format (see momentjs code to see how)
   *   Boolean:askDay: Display the day input. default: true
   *   {returnType}:ngModel: One way binding returning the selected date
   * }
 */
class BirthdayInputComponent {
  $onInit() {
    this.years = this.getLastYears();
    this.months = moment.months();
    this.askDay = angular.isUndefined(this.askDay) || this.askDay;

    this.ngModel = moment(this.ngModel || new Date());

    const year = this.ngModel.year();
    const month = this.ngModel.month();
    const nbDays = moment(year + month, 'YYYYMM').daysInMonth();
    this.days = this.range(nbDays);

    this.year = year;
    this.month = String(this.ngModel.month());
    this.day = parseInt(this.ngModel.format('DD'), 0);
  }

  update() {
    const year = this.year && String(this.year);
    const month = this.month && String(Number(this.month) + 1);
    const day = this.day && String(this.day);

    if (year && month && (day || !this.askDay)) {
      const birthdayDate = moment(year + '-' + month + '-' + day, 'YYYY-MM-DD');
      if (this.returnFormat) {
        this.ngModel = birthdayDate.format(this.returnFormat);
      } else {
        this.ngModel = this.returnType === 'moment' ? birthdayDate : birthdayDate.toDate();
      }
    } else if (this.year && this.month) {
      const nbDays = moment(year + month, 'YYYYMM').daysInMonth();
      this.days = this.range(nbDays);
      this.ngModel = undefined;
    } else {
      this.ngModel = undefined;
      this.days = [];
    }
  }

  range(many) {
    return Array.apply(null, Array(many)).map((_, i) => ++i);
  }

  getLastYears() {
    const years = [];
    let currentYear = moment().year();
    for (let i = 0; i < 130; i++) {
      years.push(currentYear--);
    }
    return years;
  }
}

angular.module('angularjs-input-birthday', [
  'pascalprecht.translate'
]).component('inputBirthday', {
  template: require('./input-birthday.template.html'),
  controller: BirthdayInputComponent,
  bindings: {
    returnType: '@',
    returnFormat: '@',
    askDay: '<',
    ngModel: '=',
    yearLabel: '<'
  }
});
