var app = angular.module('staffServer',[]);
app.factory('staffSer',function ($http) {
    return {
        listStaff : listStaff,
        countStaff:countStaff,
        menuPermission:menuPermission,
    };
    function listStaff(data) {
        return $http.get('/listStaff/list',{
            params:data
        })
    }
    function countStaff(){
        return $http.get('/countStaff/count')
    }
    function menuPermission(data) {
        return $http.get('/management/guidePermission/'+data);
    }
});
