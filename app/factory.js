function myFactory(http,q){
    return {
        getPlunks : function(){
            var defer = q.defer();
            http.get("http://api.plnkr.co/users/brion25/plunks").then(
                function(response){
                    defer.resolve(response.data);
                },function(error){
                    defer.reject(error);
                }
            );
            return defer.promise;
        }
    }
}

module.exports = myFactory;