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
            uri : config()['rurl'] + '/salarybasic/v1/setButtonPermission',
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
            uri : config()['rurl'] + '/salarybasic/v1/sonPermission',
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
     /*设置*/
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
    /*基本信息设置*/
    this.basicPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/salarybasic/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.basicList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/salarybasic/v1/page/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.basicTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/salarybasic/v1/count`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.basicDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/salarybasic/v1/delete/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.basicAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/salarybasic/v1/add`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.basicEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/salarybasic/v1/edit`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.basicId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/salarybasic/v1/find/one/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.basicImport = function(argvs){
        var options = {
            url: config()['rurl']+'/salarybasic/v1/leadExcel',
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //资料导入
    this.informationImport = function(argvs){
        var options = {
            url: config()['rurl']+'/salaryinformation/v1/leadExcel',
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.basicArea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/salarybasic/v1/findArea`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.basicDepart = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/salarybasic/v1/thawOpinion/find`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.basichierarchy = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/salarybasic/v1/find/status`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.basicposition = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/salarybasic/v1/find/position`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    /*资料*/
    this.informPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/salaryinformation/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.informList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/salaryinformation/v1/page/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.informTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/salaryinformation/v1/count`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.informDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/salaryinformation/v1/delete/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.informationUploadFile = function(argvs){
        var options = {
            url: config()['rurl']+`/salaryinformation/v1/upload/${argvs.fields.id}`,
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.informationEnclosure = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/salaryinformation/v1/files/${argvs.id}`,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.informationFile = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/salaryinformation/v1/delfile`,
            headers:{
                userToken:argvs.token
            },
            form:argvs.fields
        };
        return request(options);
    };
    this.managementSubject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/salaryinformation/v1/find/level/${argvs.id}`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.basicSubject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/salaryinformation/v1/find/entryBasic/${argvs.id}`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.workerSubject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/salaryinformation/v1/find/positiveDate?employeeId=${argvs.id}`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.computerSubject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/salaryinformation/v1/find/computer?payStartTime='+argvs.payStartTime+'&payEndTime='+argvs.payEndTime,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.houseSubject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/salaryinformation/v1/find/house${urlEncode(argvs,true)}`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.ageSubject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/salaryinformation/v1/find/age${urlEncode(argvs,true)}`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.hotSubject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/salaryinformation/v1/find/hot${urlEncode(argvs,true)}`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.attachedSubject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/salaryinformation/v1/find/attached${urlEncode(argvs,true)}`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.informationAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/salaryinformation/v1/add',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.informationEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/salaryinformation/v1/edit',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.informationEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/salaryinformation/v1/find/one/'+argvs.id,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    return this;
};