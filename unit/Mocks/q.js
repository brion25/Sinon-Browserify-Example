var sinon = require("sinon"),
    q = {
    defer : function(){
        var value,
            isOk = false;

        var resolve = sinon.stub().returns(function (response){
            isOk = true;
            value = response;
        });

        var reject = sinon.stub().returns(function (error){
            isOk = false;
            value = undefined;
        });

        var final = sinon.stub().returns(function(func){
            if(funct){
                funct();
            }
        });
        
        var error = sinon.stub().returns(function(funct){
            if(!isOk){
                if(funct){
                    funct(value);
                }
            }
            return {finally : final};
        });

        var success = sinon.stub().returns(function(funct){
            if(isOk){
                if(funct){
                    funct(value);
                }
            }
            return {error : error};
        });
        
        var promise = {
            success : success
        }

        return {
            resolve : resolve,
            reject : reject,
            promise : promise
        }
    }
};

module.exports = q;