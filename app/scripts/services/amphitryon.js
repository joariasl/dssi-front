'use strict';

/**
 * @ngdoc service
 * @name dssiFrontApp.Amphitryon
 * @description
 * # Amphitryon
 * Factory in the dssiFrontApp.
 */
angular.module('dssiFrontApp')
  .factory('Amphitryon', function ($resource, urls) {
    var service = $resource(urls.BASE_API + '/amphitryons/:id', null,
    {
      'update': { method:'PUT' },
      'query' : {method: 'GET', isArray:true, transformResponse : function(data, headers) {
        var jsonData = angular.fromJson(data);
        if(angular.isArray(jsonData)){
          return jsonData;
        } else {
          headers()['total'] = jsonData.total;
          headers()['per_page'] = jsonData.per_page;
          headers()['current_page'] = jsonData.current_page;
          headers()['last_page'] = jsonData.last_page;
          headers()['next_page_url'] = jsonData.next_page_url;
          headers()['prev_page_url'] = jsonData.prev_page_url;
          headers()['from'] = jsonData.from;
          headers()['to'] = jsonData.to;

          return jsonData.data;
        }
      }}
    });

    return service;
  });
