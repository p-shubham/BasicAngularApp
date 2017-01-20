var app = angular.module("app",['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
  $routeProvider
  .when('/main',{
    templateUrl: 'main.html',
    controller: 'MainCtrl'
  })
  .when('/about',{
    templateUrl: 'about.html',
    controller: 'MainCtrl'
  })
  .when('/services',{
    templateUrl: 'services.html',
    controller: 'ServicesCtrl'
  })
  .when('/contact',{
    templateUrl: 'contact.html',
    controller: 'ContactCtrl'
  })
  .otherwise({redirectTo:'/main'})
}]);

app.controller('MainCtrl',['$scope',function($scope){
  console.log($scope);
}]);

app.controller('ServicesCtrl',['$scope','$http',function($scope,$http){
  $http.get('services.json').then(function(response){
    $scope.services = response.data;
    console.log(response.data);
  })
}]);

app.controller('ContactCtrl',['$scope',function($scope){
  console.log($scope);
}]);
