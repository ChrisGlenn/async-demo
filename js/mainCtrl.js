var app = angular.module('chatroom');

app.controller('mainCtrl', function($scope, myService){
  
  $scope.shuffle = function() {
    myService.getData().then(function(results) {
      $scope.cards = results.data.cards;
    })
  }
  
})
