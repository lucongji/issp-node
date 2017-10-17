var app = angular.module('acceptServer',[]);
app.factory('acceptSer',function ($http) {
    return {
        acceptList : acceptList,
        AcceptSearch : AcceptSearch,
        AcceptAdd:AcceptAdd,
        AcceptEdit:AcceptEdit,
        getAcceptId:getAcceptId,
        getAcceptTotal:getAcceptTotal,
        AcceptDelete:AcceptDelete,
        acceptPermission:acceptPermission,
        getUser:getUser,
        AcceptNotification:AcceptNotification,
    };
    //菜单权限
    function acceptPermission(data) {
        return $http.get('/biddingaccept/biddingaccept/'+data);
    }
    function acceptList(data) {
        return $http.get('/biddingaccept/list',{
            params: data
        })
    }
    //搜索
    function AcceptSearch(data) {
        return $http.get('/biddingaccept/search',{
            params: data
        })
    }

    //添加
    function AcceptAdd(data){
        return $http.post('/biddingaccept/add',data)
    }
    //编辑
    function AcceptEdit(data){
        return $http.post('/biddingaccept/edit',data)
    }
    //通报
    function AcceptNotification(data){
        return $http.post('/biddingaccept/notification',data)
    }
    //id查询
    function getAcceptId(data){
        return $http.get('/biddingaccept/info',{
            params:data
        })
    }
    //分页总条数
    function getAcceptTotal(data){
        return $http.get('/biddingaccept/count',{params:data})
    }
    //删除
    function AcceptDelete(data){
        return $http.get('/biddingaccept/delete',{
            params: data
        })
    }

    //获取问题提出人
    function getUser(data){

        return $http.get('/biddingaccept/getUser',{
            params: data

        })
    }

});
