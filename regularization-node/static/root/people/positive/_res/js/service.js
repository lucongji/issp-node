var app = angular.module('positServer',[]);
app.factory('positSer',function ($http) {
    return {
        positPermission,positPermission,
        positCount:positCount,
        positList:positList,
        positId:positId,
        positAdd:positAdd,
        positFollow:positFollow,
        positWelfare:positWelfare,
        positPlanning:positPlanning,
        positBudget:positBudget,
        positModule:positModule,
        positProjects:positProjects,
        positManager:positManager,
        positInterview:positInterview,
        getAllPerson:getAllPerson
    };

    //功能导航权限
    function positPermission(data){
        return $http.get('/positPermission/permission/'+data);
    }
    //id查询
    function positId(data){
        return $http.get('/positId/Id',{
            params:data
        })
    }
    //分页总条数
    function positCount(){
        return $http.get('/positCount/count')
    }
    function positList(data) {
        return $http.get('/positList/list',{
            params: data
        })
    }
    //添加
    function positAdd(data){
        return $http.post('/positAdd/add',data)
    }
    //跟进
    function positFollow(data){
        return $http.post('/positFollow/Follow',data)
    }
    //福利模块考察填写
    function positWelfare(data){
        return $http.post('/positWelfare/Welfare',data)
    }
    //规划模块考察填写
    function positPlanning(data){
        return $http.post('/positPlanning/Planning',data)
    }
    //预算模块考察填写
    function positBudget(data){
        return $http.post('/positBudget/Budget',data)
    }
    //模块负责人审核
    function positModule(data){
        return $http.post('/positModule/Module',data)
    }
    //项目经理审核
    function positProjects(data){
        return $http.post('/positProjects/Projects',data)
    }
    //总经理审核
    function positManager(data){
        return $http.post('/positManager/Manager',data)
    }
    //面谈记录填写
    function positInterview(data){
        return $http.post('/positInterview/Interview',data)
    }


    //获取所有用户
    function getAllPerson(data){
        return $http.get('/employAllGetPerson/allGetPerson',{
            params:data
        })
    }
});
