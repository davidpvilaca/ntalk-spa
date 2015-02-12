angular.module('ntalk').factory('Contato', function($resource){
    return $resource('/api/contatos/:id');
});