function myFactory(http,q){
    return {
        getPlunks : function(){
            var defer = q.defer();
            http.get("http://api.plnkr.co/users/brion25/plunks")
                .success(function(response){
                    defer.resolve(response);
                })
                .error(function(error){
                    defer.reject(error);
                });
            return defer.promise;
        }
    }
}

module.exports = myFactory;