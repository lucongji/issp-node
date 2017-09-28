var app = angular.module('budget');
app.factory('budgetSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/budget/sonPermission');
    }
    function setPermission(){
        return $http.get('/budget/setButtonPermission');
    }
});