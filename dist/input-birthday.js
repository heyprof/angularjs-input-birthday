!function(t){var n={};function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:e})},a.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},a.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="",a(a.s=2)}([function(t,n){t.exports='<fieldset class="birthday-picker">\n  <label for="birthday-input-year"\n         class="sr-only">\n    {{ \'birthday-input.year-label\' | translate }}\n  </label>\n  <select id="birthday-input-year"\n          class="birth-year"\n          data-ng-model="$ctrl.year"\n          data-ng-change="$ctrl.update()"\n          data-ng-options="value for value in $ctrl.years">\n    <option value="">{{ \'birthday-input.years\' | translate }}</option>\n  </select>\n\n  <label for="birthday-input-month"\n         class="sr-only">\n    {{ \'birthday-input.month-label\' | translate }}\n  </label>\n  <select id="birthday-input-month"\n          class="birth-month"\n          data-ng-model="$ctrl.month"\n          data-ng-change="$ctrl.update()"\n          data-ng-options="key as value for (key, value) in $ctrl.months">\n    <option value="">{{ \'birthday-input.months\' | translate }}</option>\n  </select>\n\n  <label for="birthday-input-day"\n         class="sr-only"\n         data-ng-if="$ctrl.askDay">\n    {{ \'birthday-input.day-label\' | translate }}\n  </label>\n  <select id="birthday-input-day"\n          class="birth-day"\n          data-ng-if="$ctrl.askDay"\n          data-ng-model="$ctrl.day"\n          data-ng-change="$ctrl.update()"\n          data-ng-options="value for value in $ctrl.days"\n          data-ng-disabled="!$ctrl.month || !$ctrl.year">\n    <option value="">{{ \'birthday-input.days\' | translate }}</option>\n  </select>\n</fieldset>\n'},function(t,n){t.exports=moment},function(t,n,a){"use strict";var e,r=(e=a(1))&&e.__esModule?e:{default:e};function i(t,n){for(var a=0;a<n.length;a++){var e=n[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var o=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,a,e;return n=t,(a=[{key:"$onInit",value:function(){if(this.years=this.getLastYears(),this.months=r.default.months(),this.askDay=angular.isUndefined(this.askDay)||this.askDay,this.initToday=Boolean(this.initToday),this.ngModel=this.ngModel&&(0,r.default)(this.ngModel)||this.initToday&&(0,r.default)(new Date)||void 0,this.ngModel){var t=this.ngModel.year(),n=this.ngModel.month(),a=(0,r.default)(t+n,"YYYYMM").daysInMonth();this.days=this.range(a),this.year=t,this.month=String(this.ngModel.month()),this.day=parseInt(this.ngModel.format("DD"),0)}}},{key:"update",value:function(){var t=this.year&&String(this.year),n=this.month&&String(Number(this.month)+1),a=this.day&&String(this.day);if(t&&n&&(a||!this.askDay)){var e=(0,r.default)("".concat(t,"-").concat(n,"-").concat(a),"YYYY-MM-DD");this.returnFormat?this.ngModel=e.format(this.returnFormat):this.ngModel="moment"===this.returnType?e:e.toDate()}else if(this.year&&this.month){var i=(0,r.default)(t+n,"YYYYMM").daysInMonth();this.days=this.range(i),this.ngModel=void 0}else this.ngModel=void 0,this.days=[]}},{key:"range",value:function(t){return Array.apply(null,Array(t)).map(function(t,n){return++n})}},{key:"getLastYears",value:function(){for(var t=[],n=(0,r.default)().year(),a=0;a<130;a++)t.push(n--);return t}}])&&i(n.prototype,a),e&&i(n,e),t}();angular.module("angularjs-input-birthday",["pascalprecht.translate"]).component("inputBirthday",{template:a(0),controller:o,bindings:{returnType:"@",returnFormat:"@",initToday:"<",askDay:"<",ngModel:"=",yearLabel:"<"}})}]);