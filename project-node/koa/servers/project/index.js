var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
module.exports = function(){
   //项目情况列表
    this.ProjectBaseinfoList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + `/projectsituation/v1/listProjectSituation${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //项目情况分页
    this.countProject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + `/projectsituation/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //项目情况删除
    this.projectSitDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectsituation/v1/delete/'+argvs.id,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //项目情况添加
    this.projectSituationAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectsituation/v1/add',
            form:argvs,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //项目情况编辑
    this.projectSituationEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectsituation/v1/edit',
            form : argvs,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //项目情况编辑id
    this.projectEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectsituation/v1/getOneById/'+argvs.id,
            form : argvs,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //项目实施情况列表
    this.implementationBaseinfoList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + `/projectcarry/v1/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
   //实施情况总数
    this.implementationCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + `/projectcarry/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //实施情况删除
    this.implementationDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectcarry/v1/delete/'+argvs.id,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
   //实施情况添加
    this.projectCarryAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectcarry/v1/add',
            form:argvs,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //实施情况编辑
    this.implementationProjectEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectcarry/v1/edit',
            form : argvs,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //实施情况编辑id
    this.implementationEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectcarry/v1/getOneById/'+argvs.id,
            form : argvs,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //验收情况列表
    this.projectAcceptanceList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectacceptance/v1/list?limit=10&page='+argvs.page,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //项目验收情况分页
    this.projectAcceptanceCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectacceptance/v1/count',
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //项目验收情况添加
    this.projectAcceptanceAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectacceptance/v1/add',
            form:argvs,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
   //项目验收情况删除
    this.acceptanceDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectacceptance/v1/delete/'+argvs.id,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //项目验收情况编辑
    this.projectAcceptanceEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectacceptance/v1/edit',
            form : argvs,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //项目验收情况编辑id
    this.acceptanceEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectacceptance/v1/getOneById/'+argvs.id,
            form : argvs,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //项目结算跟进列表
    this.settlementList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectsettlementfollow/v1/list?limit=10&page='+argvs.page,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //项目结算跟进分页
    this.projectAcceptanceCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectsettlementfollow/v1/count',
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //项目结算跟进添加
    this.settlementAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectsettlementfollow/v1/add',
            form:argvs,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //项目结算跟进删除
    this.sttlementDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectsettlementfollow/v1/delete/'+argvs.id,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.projectSettlementEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectsettlementfollow/v1/edit',
            form : argvs,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.settlementEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectsettlementfollow/v1/getOneById/'+argvs.id,
            form : argvs,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //项目实施列表
    this.auditList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + `/projectcarryaudit/v1/listProjectCarryAudit${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //项目实施分页
    this.projectAuditCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + `/projectcarryaudit/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    //项目实施添加
    this.auditAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectcarryaudit/v1/add',
            form:argvs,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.auditDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectcarryaudit/v1/delete/'+argvs.id,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.projectAuditEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectcarryaudit/v1/edit',
            form : argvs,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.settlementEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectsettlementfollow/v1/getOneById/'+argvs.id,
            form : argvs,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.auditEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectcarryaudit/v1/getOneById/'+argvs.id,
            form : argvs,
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.getCollectSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/projectsettlementfollow/v1/collectSettle',
            headers:{
                userToken:argvs.token
            },
        };
        return request(options);
    };
    this.logout = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['user']['rurl'] + `/v1/sign-out/${argvs.token}`,
            form:argvs,
        headers:{
            userToken:argvs.token
        },
        };
        return request(options);
    };
    this.listSetting = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + `/cuspermission/v1/list?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.countSetting = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/cuspermission/v1/count',
        };
        return request(options);
    };
    this.getpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + `/cuspermission/v1/getOneById/${argvs.id}`,
        };
        return request(options);
    };
    this.getListpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['project']['rurl'] + `/cuspermission/v1/listOperateById/${argvs.id}`,
        };
        return request(options);
    };
    this.editSetting = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['project']['rurl'] + '/cuspermission/v1/edit',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    return this;
};