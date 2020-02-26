var app = angular.module('my_mod', []);

app.controller('my_cont', function($scope) {
  $scope.products = [
    {name: "Samsung S6", price: 500, active: false},
    {name: "IPhone 5s", price: 600, active: false},
    {name: "Nokia 3", price: 300, active: false},
    {name: "Lenovo", price: 500, active: false},
    {name: "IPhone 7", price: 700, active: false},
  ];

  $scope.addToList = function(p){
    p.active = !p.active;
  }

  $scope.total = function() {
    var total = 0;

    angular.forEach($scope.products, function(p) {
      if(p.active==true){
        total = total + p.price;
      }
    });

    return total;
  }
});
