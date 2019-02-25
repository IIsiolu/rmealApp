import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../index';


const { expect } = chai;

chai.use(chaiHttp);
const menuURL = '/api/v1/menu';

// Test menu controller
describe('/POST Add menu', () => {
    it('Should return 200 for a sucessful menu post', (done) => {
      chai.request(app)
        .post(`${menuURL}`)
        .send({
            //id: 3,
            name: 'MenuX',
            period: 'Breakfast'
        })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status').equal('success');
          done();
        });
    });
});


describe('/GET Get Menu', () => {
    it('should get all menu', (done) => {
        chai.request(app)
        .get(`${menuURL}`)
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('status').equal('success');
            done();
        });
    });
});