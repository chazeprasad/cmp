describe('Unit: AppService', function() {

  let http;
  let service;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    // mock the service
    angular.mock.inject(($httpBackend, appService) => {
      http = $httpBackend;
      service = appService;
    });
  });

  it('should exist', function() {
    expect(service).toBeDefined();
  });

});
