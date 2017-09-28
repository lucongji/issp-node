var app = angular.module('basicInfoServer',[]);
app.factory('basicInfoSer',function ($http) {
    return {
        listBasicInfo:listBasicInfo,
        countInfo:countInfo,
        addBasicInfo:addBasicInfo,
        editBasicInfo:editBasicInfo,
        findInfoId:findInfoId,
        deleteBasicInfo:deleteBasicInfo,
        menuPermission:menuPermission,
        areaInfo:areaInfo,
        nameInfo:nameInfo,
        otherSubject:otherSubject,
    };
    function listBasicInfo(data) {
        return $http.get('/listBasicInfo/list',{
            params: data
        })
    }
    //分页总条数
    function countInfo(){
        return $http.get('/countInfo/count')
    }
    //添加
    function addBasicInfo(data){
        return $http.post('/addBasicInfo/add',data)
    }
    //编辑
    function editBasicInfo(data){
        return $http.post('/editBasicInfo/edit',data)
    }
    //id查询
    function findInfoId(data){
        return $http.get('/findInfoId/info',{
            params:data
        })
    }
    //删除
    function deleteBasicInfo(data){
        return $http.get('/deleteBasicInfo/delete',{
            params: data
        })
    }
    //菜单权限
    function menuPermission(data) {
        return $http.get('/basicInfo/menu/'+data);
    }
   // 地区
    function areaInfo(){
        return $http.get('/areaInfo/area')
    }
    //项目名称
    function nameInfo(){
        return $http.get('/nameInfo/name')
    }
    function otherSubject(data){
        return $http.get('/otherSubject/name',{params:data})
    }
});
