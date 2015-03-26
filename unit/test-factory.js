var chai = require("chai"),
    sinon = require("sinon"),
    expect = chai.expect;

describe("My Factory...",function(){
    var factory,
        fakeResponse = {
            data : [
                {
                    description : "Test Description 1",
                    created_at : "2014-05-06T00:15:30.000Z"
                },
                {
                    description : "Test Description 2",
                    created_at : "2014-05-06T00:36:30.000Z"
                },
                {
                    description : "Test Description 3",
                    created_at : "2014-05-06T02:15:30.000Z"
                }
            ]
        },
        http = {
            get:sinon.stub().returns({
                then:function(success,error){
                    success(fakeResponse);
                }
            })
        },
        q = {
            defer : function(){
                var value,
                    isOk = false;
                
                var resolve = function (response){
                    isOk = true;
                    value = response;
                }
                
                var reject = function (error){
                    isOk = false;
                    value = undefined;
                }
                
                var then = function(success,error){
                    if(isOk){
                        return success(value);
                    }else{
                        return error(value);
                    }
                }
                
                var promise = {
                    then : then
                }
                
                return {
                    resolve : resolve,
                    reject : reject,
                    promise : promise
                }
            }
        };
    
    beforeEach(function(){
        var currentFactory = require("./../app/factory.js");
        
        factory = new currentFactory(http, q);
    });
    
    it("should return my plunks properly",function(){
        var myPlunks = factory.getPlunks();
        myPlunks.then(function(response){
            expect(response).to.equal(fakeResponse.data);
        });
    })
})