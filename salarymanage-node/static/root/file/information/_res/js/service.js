var app = angular.module('informationServer',[]);
app.factory('informationSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        deleteContent:deleteContent,
        getOneById:getOneById,
        addContent:addContent,
        editContent:editContent,
        manageSubject:manageSubject,
        manageEntryBasic:manageEntryBasic,
        manageWorker:manageWorker,
        manageComputer:manageComputer,
        viewCompany:viewCompany,
        manageHouse:manageHouse,
        manageAge:manageAge,
        manageHot:manageHot,
        attachedNameWorker:attachedNameWorker
    };
    function menuPermission(data) {
        return $http.get('/information/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/information/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/information/count')
    }
    function deleteContent(data){
        return $http.get('/information/delete',{params:data})
    }
    function addContent(data){
        return $http.post('/information/add',data)
    }
    function getOneById(data) {
        return $http.get('/information/getOneById',{params:data})
    }
    function editContent(data) {
        return $http.post('/information/edit', data)
    }
    function viewCompany(data){
        return $http.get('/viewCompany/listFile',{params:data})
    }
   //管理层级
    function manageSubject(data){
        return $http.get('/manageSubject/manage',{params:data})
    }
   //entryBasic
    function manageEntryBasic(data){
        return $http.get('/manageEntryBasic/basic',{params:data})
    }
   //转正时间
    function manageWorker(data){
        return $http.get('/manageWorker/worker',{params:data})
    }
    //电脑补助
    function manageComputer(data){
        return $http.post('/manageComputer/computer',data)
    }
    function manageHouse(data){
        return $http.post('/manageHouse/house',data)
    }
    function manageAge(data){
        return $http.post('/manageAge/age',data)
    }
    function manageHot(data){
        return $http.post('/manageHot/hot',data)
    }
    //扣社保 attachedName
    function attachedNameWorker(data){
        return $http.get('/attachedNameWorker/attached',{params:data})
    }
});
