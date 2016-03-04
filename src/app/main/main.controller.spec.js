describe('controllers', () => {
  let vm;

  beforeEach(angular.mock.module('lifesworkRedux'));

  beforeEach(inject(($controller) => {
    vm = $controller('MainController');
  }));

  it('should be defined', () => {
    expect(vm).toBeDefined();
  });
});
