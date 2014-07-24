var app = angular.module('CliqueApp', ['ngRoute']);

  app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/recipient-gift-card/:id', {
        controller: 'RecipientCtrl'
      })
      .when('/redemption', {
        template: 'layout/redemption.html'
      })
      // .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
  });

  app.controller('RecipientCtrl', function ($scope, api, $routeParams, $location){

    var cardId = ($location.path().substr($location.path().lastIndexOf('/')).substr(1));
    // var cardId = //angular param

    api.getCards(cardId)
    .then(function(data){
      $scope.message = data.occassion;
      console.log(data);
      $scope.from = "- " + data.giftBuyer;
    });

    $scope.change = function() {
      $location.path('/redemption');
      alert('clicked on button');
      console.log('fuck you');
    };

  });


  app.service('api', function($http) {

    return {
      getCards: function(id){
        // url to be queried
        var url = '/api/cards/';
        if (id) {
          url += id;
        }
        // query url for data
        var promise = $http.get(url)
        .then(function(response){
          return response.data;
        });
        return promise;
      }
    };

  });
  // .service('api')
  // .service('api', function($http){
    // var api = {
    //   getCards: function(){
    //     // url to be queried
    //     var url = '/api/cards';
    //     // query url for data
    //     var promise = $http.get(url)
    //     .then(function(response){
    //       return response.data;
    //     });
    //     return promise;
    //   }

  //   }

  // });

  // function RecipientCtrl($scope) {
  //   $scope.message = "Hey there";
  //   $scope.from = "Greg"

  //   api.getCards()
  //   .then(function(data){
  //     console.log(data)
  //   });

  // }

  // function RecipientService($http) {
    


  // }
