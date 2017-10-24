import {TFactory} from "../factories/TestFactory";
import {TService} from '../services/TestService';

export interface DataScope extends ng.IScope{
    rawJSON : string;
    employee : Array<any>;
}

export class HttpClass implements ng.IController {
    
    baseURL = "https://jsonplaceholder.typicode.com/users";


    

    constructor(
        private $scope : DataScope , 
        private $http : ng.IHttpService , 
        private $q  : ng.IQService , 
        private tFactory : TFactory , 
        private tService : TService){
        
       $scope.employee = new Array;

       $scope.rawJSON = "";
       this.fetchingData();
       
       console.log(tFactory.sayA());
       console.log(tFactory.sayB());
       tService.helloService();
       
       console.log(tService.returnService());

    }
    fetchingData(){
        this.loadDataFromServer((response)=>{
            let jsonArr = response.data;
            
            // let a : Array<any> = new Array;
            
            let arr = (<Array<any>>jsonArr);
            
            arr.forEach((items,index)=>{
                let emp = {
                    name : items.name , 
                    street : items.address.street , 
                    city : items.address.city
                };

                this.$scope.employee.push(emp);   

            });
        });
    }

    loadDataFromServer(callbackData : (response : any) => void){
        this.$http.get(this.baseURL).then((success)=>{
            callbackData(success);
        }).catch((error)=>{
            callbackData(error);
        });
    }
}