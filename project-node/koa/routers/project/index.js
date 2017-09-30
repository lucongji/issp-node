var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename,'../'))+'/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
module.exports = function(){
    var router = new Router();
     //列表
    router.get('/project/listProjectSituationCap/list', function*(){
        var $self = this;
       var page = this.request.query;
        page.token = this.cookies.get('token');
        yield (server().ProjectBaseinfoList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countProjectBaseInfo/count', function*(){
        var $self = this;
        var countData = this.request.query;
        countData.token = this.cookies.get('token');
        yield (server().countProject(countData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/project/deleteProjectSit/delete', function*(){  //项目情况删除
        var $self = this;
        var delData = this.request.body;
        delData.token = this.cookies.get('token');
        yield (server().projectSitDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/project/addProjectSituation/add', function*(){  //项目情况添加
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        var $self = this;
        yield (server().projectSituationAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/project/editProjectSituation/edit', function*(){
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        var $self = this;
        yield (server().projectSituationEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/project/getOneById', function*(){
        var $self = this;
         var EditId = this.request.body;
         EditId.token = this.cookies.get('token');
        yield (server().projectEditById(EditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/project/listImplementation/list', function*(){
        var $self = this;
        var page = this.request.query;
        page.token = this.cookies.get('token');
        yield (server().implementationBaseinfoList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countImplementation/count', function*(){
        var $self = this;
        var page = this.request.query;
        page.token = this.cookies.get('token');
        yield (server().implementationCount(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/project/deleteImplementation/delete', function*(){
        var $self = this;
        var delData2 =this.request.query;
        delData2.token = this.cookies.get('token');
        yield (server().implementationDelete(delData2)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/project/addProjectCarry/add', function*(){  //项目实施添加
        var addData2 = this.request.body;
        addData2.token = this.cookies.get('token');
        var $self = this;
        yield (server().projectCarryAdd(addData2)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/project/editImplementationProject/edit', function*(){
        var $self = this;
        var editImplementation = this.request.body;
        editImplementation.token = this.cookies.get('token');
        yield (server().implementationProjectEdit(editImplementation)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/project/getImplementationOneById', function*(){
        var $self = this;
        var implementationId = this.request.query;
        implementationId.token = this.cookies.get('token');
        yield (server().implementationEditById(implementationId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/project/listProjectAcceptance/list', function*(){  //验收情况列表
        var $self = this;
        var page = this.request.query;
        page.token = this.cookies.get('token');
        yield (server().projectAcceptanceList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countProjectAcceptance/count', function*(){ //验收情况分页
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().projectAcceptanceCount(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/project/addProjectAcceptance/add', function*(){
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        var $self = this;
        yield (server().projectAcceptanceAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/project/deleteProjectAcceptance/delete', function*(){  //项目情况删除
        var delData = this.request.body;
        delData.token = this.cookies.get('token');
        var $self = this;
        yield (server().acceptanceDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/project/editProjectAcceptance/edit', function*(){
        var editAcceptanceProject = this.request.body;
        editAcceptanceProject.token = this.cookies.get('token');
        var $self = this;
        yield (server().projectAcceptanceEdit(editAcceptanceProject)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/project/getAcceptanceById', function*(){
        var acceptanceId = this.request.query;
        var $self = this;
        acceptanceId.token = this.cookies.get('token');
        yield (server().acceptanceEditById(acceptanceId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/project/listSettlement/list', function*(){ //项目结算跟进列表
        var $self = this;
        var page = this.request.query;
        page.token = this.cookies.get('token');
        yield (server().settlementList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countSettlement/count', function*(){ //项目结算跟进分页
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().projectAcceptanceCount(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/project/addSettlement/add', function*(){ //项目结算跟进添加
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        var $self = this;
        yield (server().settlementAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/project/deleteSettlement/delete', function*(){
        var $self = this;
        var delData2 =this.request.query;
        delData2.token = this.cookies.get('token');
        yield (server().sttlementDelete(delData2)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/project/editSettlement/edit', function*(){
        var editSettlementProject = this.request.body;
        editSettlementProject.token = this.cookies.get('token');
        var $self = this;
        yield (server().projectSettlementEdit(editSettlementProject)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/project/getSettlementById', function*(){
        var settlementId = this.request.query;
        var $self = this;
        settlementId.token = this.cookies.get('token');
        yield (server().settlementEditById(settlementId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/project/listAudit/list', function*(){ //项目实施审核
        var $self = this;
        var page = this.request.query;
        page.token = this.cookies.get('token');
        yield (server().auditList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countAudit/count', function*(){ //分页
        var $self = this;
        var page = this.request.query;
        page.token = this.cookies.get('token');
        yield (server().projectAuditCount(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/project/addAudit/add', function*(){ //添加
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        var $self = this;
        yield (server().auditAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/project/deleteAudit/delete', function*(){
        var $self = this;
        var delAudit =this.request.query;
        delAudit.token = this.cookies.get('token');
        yield (server().auditDelete(delAudit)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).post('/project/editAudit/edit', function*(){
        var editAuditProject = this.request.body;
        editAuditProject.token = this.cookies.get('token');
        var $self = this;
        yield (server().projectAuditEdit(editAuditProject)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/project/getAuditById', function*(){
        var auditId = this.request.query;
        var $self = this;
        auditId.token = this.cookies.get('token');
        yield (server().auditEditById(auditId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                if(error.error && error.error.code && error.error.code == 'ETIMEDOUT'){
                    $self.body = {'msg' : '请求错误！', errno : 3};
                    $self.status = 408;
                }
            }));
    }).get('/summarySettlement/summary', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().getCollectSummary(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/user/logout', function*(next){
            var url = this.request.query;
            this.cookies.set("absUrl",url.absurl);
            this.body = {
                code:0,
                msg:"重定向"
            };
        }).get('/listSetting', function*(){
        var $self = this;
        var setting = this.request.query;
        setting.token = $self.cookies.get('token');
        yield (server().listSetting(setting)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countSetting', function*(){
        var $self = this;
        yield (server().countSetting()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/getpermit', function*(){
        var $self = this;
        var getId = $self.request.query;
        yield (server().getpermit(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/getListpermit', function*(){
        var $self = this;
        var listPermit = $self.request.query;
        yield (server().getListpermit(listPermit)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/editSetting', function*(){
        var $self = this;
        var editSet = $self.request.body;
        editSet.token = $self.cookies.get("token");
        yield (server().editSetting(editSet)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    })
    return router;
};
