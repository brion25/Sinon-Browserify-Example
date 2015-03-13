"use-strict";

require('./core-services.js');

angular.module("myPlunks",[])
    .factory("myFactory",["$http","$q",require("./factory.js")])
    .controller("myPlunksCtrl",["myFactory",require("./ctrl.js")]);