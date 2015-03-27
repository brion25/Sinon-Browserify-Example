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
        },
        searchRepos : function(query){
            var defer = q.defer();
            http.get("https://api.github.com/search/repositories?q="+query)
                .success(function(response){
                    defer.resolve(response);
                })
                .error(function(error){
                    console.log(error);
                    defer.reject(error);
                });
            return defer.promise;
        }
    }
}

module.exports = myFactory;