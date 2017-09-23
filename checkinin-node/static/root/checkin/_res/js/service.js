var app = angular.module('checkinServer',[]);
app.factory('checkinSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/dormitoryinfo/sonPermission');
    }
    function setPermission(){
        return $http.get('/dormitoryinfo/setButtonPermission');
    }
});