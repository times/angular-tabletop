# angular-tabletop
## An AngularJS provider allowing easy use of Tabletop.js via promises
### 2014 Ændrew Rininsland

#### Installation

1. `bower install angular-tabletop --save`
1. Add 'Tabletop' to your module dependencies:
  ```
  angular
    .module('myApp', [
      'Tabletop'
    ])
  ```
1. Configure at runtime:
  ```
  ...
  .config(function(TabletopProvider) {
    TabletopProvider.setTabletopOptions({
        key: '', // Your key here.
        simpleSheet: true // Any Tabletop option except 'callback' works.
      });
  });
  ```
1. This will return a promise, which you can resolve at will in your controller.
1. Optionally, you can resolve Tabletop before the controller loads using `ui-router`:
  ```
  angular
  .module('myApp', [
    'Tabletop'
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider, TabletopProvider) {
    // Tabletop setup...
    TabletopProvider.setTabletopOptions({
      key: 'https://docs.google.com/spreadsheets/d/1RVnUq3oMwt9aLROzgDJDbPlacjzWkOnx8pzzvX4Lcw4/pubhtml',
    });

    $urlRouterProvider.otherwise('/');

    // Now set up the states
    $stateProvider
      .state('map', {
        url: '/',
        templateUrl: 'partials/map.html',
        resolve: {
          tabletopData: 'Tabletop'
        },
        controller: function($scope, tabletopData) {
          $scope.data = tabletopData; // This will be a resolved promise!
        }
      });
  });

  ```
