"use strict";

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _chai = _interopRequireDefault(require("chai"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai.default.expect;

_chai.default.use(_chaiHttp.default);

var mealURL = '/api/v1/meals'; // Test Meal Controller

describe('/POST Post Meal', function () {
  it('Should return 200 for a sucessful meal added', function (done) {
    _chai.default.request(_index.default).post("".concat(mealURL)).send({
      //id: 1,
      name: 'Amala',
      size: '15g',
      price: '500'
    }).set('Content-Type', 'application/json').set('Accept', 'application/json').end(function (err, res) {
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status').equal('success');
      done();
    });
  });
});
describe('/PUT Update Meal', function () {
  it('Should return 200 if successful', function (done) {
    _chai.default.request(_index.default).put('/api/v1/meals/1').send({
      //id: 1,
      name: 'Moi-Moi',
      size: '25kg',
      price: '500'
    }).set('Content-Type', 'application/json').set('Accept', 'application/json').end(function (err, res) {
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status').equal('success');
      done();
    });
  });
});
describe('GET/ Get Meal', function () {
  it('should get all meals', function (done) {
    _chai.default.request(_index.default).get("".concat(mealURL)).end(function (err, res) {
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status').equal('success');
      done();
    });
  });
  it('should get meal by id', function (done) {
    _chai.default.request(_index.default).get('/api/v1/meals/1').end(function (err, res) {
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status').equal('success');
      done();
    });
  });
});
describe('/DELETE Delete a meal', function () {
  it('should delete a meal that the id exists', function (done) {
    _chai.default.request(_index.default).delete('/api/v1/meals/1').end(function (err, res) {
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status').equal('success');
      done();
    });
  });
});
//# sourceMappingURL=meal.spec.js.map