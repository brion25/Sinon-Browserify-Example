function myCtrl(factory){
    var self = this;
    self.loading = false;
    self.error = false;
    self.getPlunks = function(){
        self.loading = true;
        factory.getPlunks().then(
            function(response){
                self.plunks = response;
                self.loading=false;
                self.error = false;
            },function(error){
                console.log("Sorry Try Again Later");
                self.error = true;
                self.loading = false;
            }
        );
    }
    
    self.searchRepository = function(){
        factory.searchRepos(self.query).then(
            function(response){
                self.searchResult = response.data.items;
            },function(error){
                self.searchResult = [];
                console.log("Sorry...");
            });
    }
}

module.exports = myCtrl;