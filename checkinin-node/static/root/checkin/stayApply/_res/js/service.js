var app = angular.module('stayApplyServer',[]);
app.factory('stayApplySer',function ($http) {
    return {
        menuPermission : menuPermission,
        applyList : applyList,
        countApply : countApply,
        addApply : addApply,
        findApplyId : findApplyId,
        editGetApply : editGetApply,
        deleteApply : deleteApply,
        auditApplys : auditApplys,
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/dormitoryinfo/guidePermission/'+data);
    }
    //分页查询列表
    function applyList(data) {
        return $http.get('/stayapply/list',{
            params: data
        })
    }
  //获取总记录数
    function countApply(data){
        return $http.get('/stayapply/count',{
            params:data
        })
    }
    //添加
    function addApply(data){
        return $http.post('/stayapply/add',data)
    }
    //id查询
    function findApplyId(data){
        return $http.get('/stayapply/apply',{
            params:data
        })
    }
    //编辑
    function editGetApply(data){
        return $http.post('/stayapply/edit',data)
    }
    //删除
    function deleteApply(data){
        return $http.get('/stayapply/delete',{
            params: data
        })
    }
    //审核
    function auditApplys(data){
        return $http.post('/stayapply/audit',data)
    }
});
