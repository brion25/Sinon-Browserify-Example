var sinon = require("sinon"),
    fake = require("./fakeResponses"),
    http = {
        get:sinon.stub().returns({
            success:function(funct){
                funct(fake.getPlunks);
                return {
                    error : sinon.stub().returns({})
                }
            }
        })
    };

module.exports = http;