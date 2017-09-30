var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
module.exports = function(){
    //设置导航权限
    this.settingNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/applyandexamination/v1/setButtonPermission',
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //导航权限
    this.siginNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/applyandexamination/v1/sonPermission',
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.listSetting = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.countSetting = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/cuspermission/v1/count',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.getpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/getOneById/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.getListpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/listOperateById/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.editSetting = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/cuspermission/v1/edit',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //比例分配
    this.portionPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/proportion/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.portionList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/proportion/v1/list?limit=10&page='+argvs.page,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.portionCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/proportion/v1/count',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.portionDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/proportion/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.portionAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/proportion/v1/add',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.portionEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/proportion/v1/getOneById/'+argvs.id,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.portionEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/proportion/v1/edit`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //资金准备
    this.preparePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/fundprepare/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.prepareList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundprepare/v1/list?limit=10&page='+argvs.page,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.prepareCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundprepare/v1/count',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.prepareDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/fundprepare/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.prepareAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/fundprepare/v1/add',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.prepareEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundprepare/v1/getOneById/'+argvs.id,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.prepareEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/fundprepare/v1/edit`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
   //一级科目
    this.subFirst = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundprepare/v1/findFirstSubject',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.subSecond = function(argvs){
        console.log(argvs.firstSubject);
       var options = {
            method : 'GET',
            timeout : 3000,
            //uri : config()['rurl'] + '/fundprepare/v1/findSecondSubject?firstSubject='+encodeURIComponent(argvs.firstSubject),
            uri : config()['rurl'] + `/fundprepare/v1/findSecondSubject?firstSubject=`+argvs.firstSubject,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.detailfun = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundprepare/v1/listDetail/'+argvs.id,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.collectWe = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundprepare/v1/weekCollect',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.collectMo = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundprepare/v1/monthCollect',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.collectYe = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundprepare/v1/yearCollect',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.collectPr = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundprepare/v1/projectCollect',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.detailEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundprepare/v1/listDetail/'+argvs.id,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.detailEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/fundprepare/v1/editProportion',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.collectAn = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/fundprepare/v1/analysis',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.applyPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/applyandexamination/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.applyList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/applyandexamination/v1/list?limit=10&page='+argvs.page,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.applyCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/applyandexamination/v1/count',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.applyDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/applyandexamination/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.applyAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/applyandexamination/v1/add',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.applyEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/applyandexamination/v1/getOneById/'+argvs.id,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.applyAuEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/applyandexamination/v1/audit',
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.applyEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/applyandexamination/v1/edit`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.applyRecById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/applyandexamination/v1/record/`+argvs.id,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    return this;
};