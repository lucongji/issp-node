var app = angular.module('settingServer',[]);
app.factory('settingSer',function ($http) {
    return {
        listSetting : listSetting,
        countSetting:countSetting,
        getpermit:getpermit,
        getListpermit:getListpermit,
        editSetting:editSetting
    };
    function listSetting(data) {
        return $http.get('/cuspermission/list',{params:data})
    }
    function countSetting() {
        return $http.get('/cuspermission/count')
    }
    function getpermit(data) {
        return $http.get('/cuspermission/getOneById',{params:data})
    }
    function getListpermit(data) {
        return $http.get('/cuspermission/listOperateById',{params:data})

    }
    function editSetting(data) {
        return $http.post('/cuspermission/edit',data)
    }
});
