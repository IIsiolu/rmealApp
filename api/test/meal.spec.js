import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../index';


const { expect } = chai;

chai.use(chaiHttp);
const mealURL = '/api/v1/meals';

// Test Meal Controller
describe('/POST Post Meal', () => {
    it('Should return 200 for a sucessful meal added', (done) => {
      chai.request(app)
        .post(`${mealURL}`)
        .send({
          //id: 1,
          name: 'Amala',
          size: '15g',
          price: '500'
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
  
describe('/PUT Update Meal', () => {
    it('Should return 200 if successful', (done) => {
      chai.request(app)
        .put('/api/v1/meals/1')
        .send({
          //id: 1,
          name: 'Moi-Moi',
          size: '25kg',
          price: '500'
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

describe('GET/ Get Meal', () => {
    it('should get all meals', (done) => {
        chai.request(app)
        .get(`${mealURL}`)
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('status').equal('success');
            done();
        });
    });

    it('should get meal by id', (done) => {
        chai.request(app)
        .get('/api/v1/meals/1')
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('status').equal('success');
            done();
        });
    });
});

describe('/DELETE Delete a meal', () => {
    it('should delete a meal that the id exists', (done) => {
      chai.request(app)
        .delete('/api/v1/meals/1')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status').equal('success');
          done();
        });
    });
});