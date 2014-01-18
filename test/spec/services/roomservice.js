'use strict';

describe('Service: Roomservice', function () {

  // load the service's module
  beforeEach(module('snapmeetingApp'));

  // instantiate service
  var Roomservice;
  beforeEach(inject(function (_Roomservice_) {
    Roomservice = _Roomservice_;
  }));

  it('should do something', function () {
    expect(!!Roomservice).toBe(true);
  });

});
