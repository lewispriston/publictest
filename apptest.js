const { expect } = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
// let server = require('../app');
//Our parent block
describe('Podcast', () => {
    describe('/GET media', () => {
        it('it should GET all the podcast', (done) => {
            // chai.request(server)
            //     .get('/media')
            //     .end((err, res) => {
            //         (1).should.be(1);
            //     });
            expect(true).to.be.false;
            expect(false).to.be.false;
            expect(true).to.be.true;
            done();
        });
    });
});