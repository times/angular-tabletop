'use strict';

/**
 * @ngdoc service
 * @name times.tabletop
 * @description
 * # Tabletop
 * Provider allowing easy config and return of Tabletop data in Angular.
 */
angular.module('times.tabletop', [])
  .provider('Tabletop', function () {
    var tabletopResponse;

    var tabletopOptions = {
      callback: function(data, Tabletop) {
        tabletopResponse.resolve([data, Tabletop]);
      }
    };

    // Public API for configuration
    this.setTabletopOptions = function (opts) {
      tabletopOptions = angular.extend(tabletopOptions, opts);
    };

    // Method for instantiating
    this.$get = function ($q) {
      tabletopResponse = $q.defer();
      window.Tabletop.init(tabletopOptions);
      return tabletopResponse.promise;
    };
  });
