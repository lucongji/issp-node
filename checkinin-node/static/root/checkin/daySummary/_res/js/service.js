var app = angular.module('daySummaryServer',[]);
app.factory('daySummarySer',function ($http) {
    return {
        menuPermission : menuPermission,
        daySummaryList : daySummaryList,
        countDay : countDay,
        addDay : addDay,
        findDayId : findDayId,
        editGetDay : editGetDay,
        deleteDaySummary : deleteDaySummary,
        auditDays : auditDays,
        tableList : tableList,
        getDayCollect : getDayCollect,
        listNamePro : listNamePro,
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/staydays/guidePermission/'+data);
    }
    //分页查询列表
    function daySummaryList(data) {
        return $http.get('/staydays/list',{
            params: data
        })
    }
    //分页查询列表
    function tableList(data) {
        return $http.get('/staydays/collect',{
            params: data
        })
    }
  //获取总记录数
    function countDay(data){
        return $http.get('/staydays/count',{
            params:data
        })
    }
    //添加
    function addDay(data){
        return $http.post('/staydays/add',data)
    }
    //id查询
    function findDayId(data){
        return $http.get('/staydays/days',{
            params:data
        })
    }
    //编辑
    function editGetDay(data){
        return $http.post('/staydays/edit',data)
    }
    //删除
    function deleteDaySummary(data){
        return $http.get('/staydays/delete',{
            params: data
        })
    }
    //审核
    function auditDays(data){
        return $http.post('/staydays/audit',data)
    }
    //汇总
    function getDayCollect(data){
        return $http.get('/staydays/collect?names='+data.join(','))
    }
    //名字
    function  listNamePro() {
        return $http.get('/staydays/name')
    }

});
