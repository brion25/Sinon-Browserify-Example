var chai = require("chai"),
    q = require("./Mocks/q"),
    http = require("./Mocks/http"),
    fake = require("./Mocks/fakeResponses");

expect = chai.expect;

describe("My Factory...",function(){
    var factory;
    
    beforeEach(function(){
        var currentFactory = require("./../app/factory.js");
        
        factory = new currentFactory(http, q);
    });
    
    it("should return my plunks properly",function(){
        var myPlunks = factory.getPlunks();
        var succeed = function(response){
            expect(response.data).to.equal(fake.getPlunks.data);
        };
        myPlunks.success(succeed);
        expect(myPlunks.success.called).to.be.true;
        expect(myPlunks.success.calledWith(succeed)).to.be.true;
    });
    
    it("should return a list of Repositories properly",function(){
        var repos = factory.searchRepos("angular");
        var succeed = function(response){
            expect(response.data).to.equal(fake.searchResults.data);
        };
        repos.success(succeed);
        expect(repos.success.called).to.be.true;
        expect(repos.success.calledWith(succeed)).to.be.true;
    });
})