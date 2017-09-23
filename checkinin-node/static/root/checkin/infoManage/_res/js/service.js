var app = angular.module('infoServer',[]);
app.factory('infoSer',function ($http) {
    return {
        menuPermission : menuPermission,
        infoList : infoList,
        countInfo : countInfo,
        addInfo : addInfo,
        findInfoId : findInfoId,
        editGetInfo : editGetInfo,
        deleteInfo : deleteInfo,
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/dormitoryinfo/guidePermission/'+data);
    }
    //分页查询列表
    function infoList(data) {
        return $http.get('/dormitoryinfo/list',{
            params: data
        })
    }
  //获取总记录数
    function countInfo(data){
        return $http.get('/dormitoryinfo/count',{
            params:data
        })
    }
    //添加
    function addInfo(data){
        return $http.post('/dormitoryinfo/add',data)
    }
    //id查询
    function findInfoId(data){
        return $http.get('/dormitoryinfo/dormitory',{
            params:data
        })
    }
    //编辑
    function editGetInfo(data){
        return $http.post('/dormitoryinfo/edit',data)
    }
    //删除
    function deleteInfo(data){
        return $http.get('/dormitoryinfo/delete',{
            params: data
        })
    }
});
