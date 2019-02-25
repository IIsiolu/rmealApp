import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../index';


const { expect } = chai;

chai.use(chaiHttp);
const orderURL = '/api/v1/orders';

describe('/POST Add order', () => {
    it('Should return 200 for a sucessful order post', (done) => {
        chai.request(app)
        .post(`${orderURL}`)
        .send({
            //id: 1,
            name: 'OrderX',
            orderAmount: '500'
        })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('status').equal('success');
            done();
        });
    }).timeout(5000);
});

describe('/GET orders', () => {
    it('should get all orders', (done) => {
        chai.request(app)
        .get(`${orderURL}`)
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('status').equal('success');
            done();
        });
    }).timeout(5000);
});

describe('/PUT Order', () => {
    it('Should return 200 if successful', (done) => {
      chai.request(app)
        .put('/api/v1/orders/1')
        .send({
            //id: 1,
            name: 'OrderX',
            orderAmount: '500'
        })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status').equal('success');
          done();
        });
    }).timeout(5000);
});