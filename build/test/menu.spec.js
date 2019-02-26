"use strict";

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _chai = _interopRequireDefault(require("chai"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai.default.expect;

_chai.default.use(_chaiHttp.default);

var menuURL = '/api/v1/menu'; // Test menu controller

describe('/POST Add menu', function () {
  it('Should return 200 for a sucessful menu post', function (done) {
    _chai.default.request(_index.default).post("".concat(menuURL)).send({
      //id: 3,
      name: 'MenuX',
      period: 'Breakfast'
    }).set('Content-Type', 'application/json').set('Accept', 'application/json').end(function (err, res) {
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status').equal('success');
      done();
    });
  });
});
describe('/GET Get Menu', function () {
  it('should get all menu', function (done) {
    _chai.default.request(_index.default).get("".concat(menuURL)).end(function (err, res) {
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status').equal('success');
      done();
    });
  });
});
//# sourceMappingURL=menu.spec.js.map