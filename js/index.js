var app=angular.module('app',['controller','ngRoute','ngSanitize','service','filter','directive']);
app.config(['$routeProvider',function ($r) {
   $r.when('/',{
       templateUrl:"tpls/index-list.html",
       controller:'index'
   }).when('/show/:id',{
       templateUrl:"tpls/show.html",
       controller:'show'
   }).when('/theme/:id',{
       templateUrl:"tpls/index-list.html",
       controller:'list'
   })
}]);