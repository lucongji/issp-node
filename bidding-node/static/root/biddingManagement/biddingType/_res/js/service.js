var app = angular.module('typeServer',[]);
app.factory('typeSer',function ($http) {
    return {
        typeList : typeList,
        addtype:addtype,
        edittype:edittype,
        findtypeId:findtypeId,
        counttype:counttype,
        deletetype:deletetype,
        typePermission:typePermission,
    };
    function typeList(data) {
        return $http.get('/biddingtype/list',{
            params: data

        })
    }

    //添加
    function addtype(data){
        return $http.post('/biddingtype/add',data)
    }
    //编辑
    function edittype(data){
        return $http.post('/biddingtype/edit',data)
    }
    //id查询
    function findtypeId(data){
        return $http.get('/biddingtype/typeId',{
            params:data
        })
    }
    //分页总条数
    function counttype(){
        return $http.get('/biddingtype/count')
    }
    //删除
    function deletetype(data){

        return $http.get('/biddingtype/delete',{
            params: data

        })
    }
    //----------------------------
    //功能导航权限
    function typePermission(data){

        return $http.get('/typePermission/permission/'+data);
    }


});
