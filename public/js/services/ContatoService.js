(function() {
    'use strict';

    angular.module('ntalk').factory('Contato', recurso);

    function recurso($resource) {
        return $resource('/api/contatos/:id');
    }
})();