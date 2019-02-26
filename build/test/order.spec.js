"use strict";

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _chai = _interopRequireDefault(require("chai"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai.default.expect;

_chai.default.use(_chaiHttp.default);

var orderURL = '/api/v1/orders';
describe('/POST Add order', function () {
  it('Should return 200 for a sucessful order post', function (done) {
    _chai.default.request(_index.default).post("".concat(orderURL)).send({
      //id: 1,
      name: 'OrderX',
      orderAmount: '500'
    }).set('Content-Type', 'application/json').set('Accept', 'application/json').end(function (err, res) {
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status').equal('success');
      done();
    });
  });
});
describe('/GET orders', function () {
  it('should get all orders', function (done) {
    _chai.default.request(_index.default).get("".concat(orderURL)).end(function (err, res) {
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status').equal('success');
      done();
    });
  });
});
describe('/PUT Order', function () {
  it('Should return 200 if successful', function (done) {
    _chai.default.request(_index.default).put('/api/v1/orders/1').send({
      //id: 1,
      name: 'OrderX',
      orderAmount: '500'
    }).set('Content-Type', 'application/json').set('Accept', 'application/json').end(function (err, res) {
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status').equal('success');
      done();
    });
  });
});
//# sourceMappingURL=order.spec.js.map