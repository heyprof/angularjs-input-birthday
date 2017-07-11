## Install

- npm: `npm install --save angularjs-input-birthday`
- bower: `bower install --save angularjs-input-birthday`

## Demo

### Init empty

<input-birthday data-ng-model="birthdate"></input-birthday>
<pre data-ng-bind="birthdate"></pre>

### Init with a date

<div ng-controller="InitSampleCtrl as $ctrl">
  <input-birthday data-ng-model="$ctrl.birthdate"></input-birthday>
  <pre data-ng-bind="$ctrl.birthdate"></pre>
</div>

### Init with default today date

<input-birthday data-ng-model="$ctrl.birthdate" init-today="true"></input-birthday>
<pre data-ng-bind="$ctrl.birthdate"></pre>

## Usage

Add module to your app:

```javascript
angular.module('app', ['angularjs-input-birthday']);
```

And the component where you want in this app:

```html
<input-birthday data-ng-model="birthdate"></input-birthday>
```

Data will be returned as Js Date Object or Moment date depending on params

## LICENCE MIT

The MIT License (MIT)

Copyright (c) 2017 HeyProf!

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
