import * as angular from 'angular';
import {HttpClass} from "./controllers/HttpServiceController";
import {TFactory} from "./factories/TestFactory";
import {TService} from "./services/TestService";

let app = angular.module('mainApp',[]);

app.controller('httpController',HttpClass);

app.factory('tFactory',()=>{
    return new TFactory();
});

app.service('tService' ,TService);



