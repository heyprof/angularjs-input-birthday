describe('Module: angularjs-input-birthday -', () => {
  let $componentController;

  beforeEach(angular.mock.module('angularjs-input-birthday'));
  beforeEach(angular.mock.inject(_$componentController_ => {
    $componentController = _$componentController_;
  }));

  describe('Component: inputTags -', () => {
    let ctrl;

    beforeEach(() => {
      ctrl = $componentController('inputBirthday', {
        $element: angular.element('<div></div>')
      }, {});
    });

    it('should have default params', () => {
      ctrl.$onInit();
      expect(ctrl.askDay).toBeTruthy();
      expect(ctrl.initToday).toBeFalsy();
    });

    it('should define a basic ngModel', () => {
      ctrl.$onInit();
      expect(ctrl.ngModel).toBeUndefined();
    });
  });
});
