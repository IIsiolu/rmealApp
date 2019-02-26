"use strict";

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _chai = _interopRequireDefault(require("chai"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai.default.expect;

_chai.default.use(_chaiHttp.default);

describe('Test default route', function () {
  // Test for default route
  it('Should return 200 for the default route', function (done) {
    _chai.default.request(_index.default).get('/').end(function (err, res) {
      expect(res.status).to.equal(200);
      done();
    });
  }); // Test for getting undefined routes

  it('Should return 404 for routes not specified', function (done) {
    _chai.default.request(_index.default).get('/another/undefined/route').end(function (err, res) {
      expect(res.status).to.equal(404);
      done();
    });
  }); // Test for posting to undefined rouotes

  it('Undefined Routes Should Return 404', function (done) {
    _chai.default.request(_index.default).post('/another/undefined/route').send({
      random: 'random'
    }).end(function (err, res) {
      expect(res).to.have.status(404);
      done();
    });
  });
});
//# sourceMappingURL=index.spec.js.map