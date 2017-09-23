var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
module.exports = function(){

    //入住离宿设置导航权限
    this.settingNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/dormitoryinfo/v1/setButtonPermission',//2017-08-01 模块设置导航权限
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //入住离宿下拉导航权限
    this.dropDownNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/dormitoryinfo/v1/sonPermission',//2017-08-01
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //住宿申请菜单功能权限
    this.guidePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/dormitoryinfo/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-07-28
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
   //住宿申请列表
    this.getApplyList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/stayapply/v1/list${urlEncode(argvs,true)}`,// 2017-07-28
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取住宿申请总条数
    this.getApplyTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/stayapply/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 住宿申请添加
    this.applyAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/stayapply/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //住宿申请ID
    this.findAppId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/stayapply/v1/apply/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //住宿申请编辑
    this.disApplyEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/stayapply/v1/edit',
            headers:{
                userToken:argvs.userToken
            },
            form:argvs
        };
        return request(options);
    };
    //住宿申请审核
    this.disApplyAudit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/stayapply/v1/audit`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs
        };
        return request(options);
    };
    //删除住宿申请
    this.disApplyDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/stayapply/v1/delete/${argvs.id}`,    //2017-08-01
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //离宿申请菜单功能权限
    this.guideDeparture = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/hostapply/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-08-02
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //离宿申请列表
    this.getDepartureList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/hostapply/v1/list${urlEncode(argvs,true)}`,// 2017-07-31
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取离宿申请总条数
    this.getDepartureTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/hostapply/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 离宿申请添加
    this.departureAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/hostapply/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //离宿申请ID
    this.findDepId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/hostapply/v1/host/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //离宿申请编辑
    this.departureEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/hostapply/v1/edit',
            headers:{
                userToken:argvs.userToken
            },
            form:argvs
        };
        return request(options);
    };
    //删除离宿申请
    this.departureDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/hostapply/v1/delete/${argvs.id}`,    //2017-08-02
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 离宿申请审核
    this.auditDepartures = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/hostapply/v1/audit/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs
        };
        return request(options);
    };
    //住宿天数设置导航权限
    this.guideDay = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/staydays/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-08-02 天数汇总模块设置导航权限
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //住宿天数列表
    this.getDayList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/staydays/v1/list${urlEncode(argvs,true)}`,// 2017-08-02
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取离宿申请总条数
    this.getDayTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/staydays/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 住宿天数添加
    this.dayAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/staydays/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //住宿天数ID查询
    this.findSummaryId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/staydays/v1/days/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //住宿天数获取名字
    this.getNames = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/staydays/v1/name`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //住宿天数编辑
    this.dayEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/staydays/v1/edit',
            headers:{
                userToken:argvs.userToken
            },
            form:argvs
        };
        return request(options);
    };
    //删除住宿天数
    this.dayDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/staydays/v1/delete/${argvs.id}`,    //2017-08-02
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 住宿天数审核
    this.auditGetDay = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/staydays/v1/audit/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            },
            form:argvs
        };
        return request(options);
    };
    //汇总表列表
    this.getCollectLists = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/staydays/v1/collect?names=${encodeURIComponent(argvs.names)}`,// 2017-08-03
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //宿舍信息设置导航权限
    this.guideInfo = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/dormitoryinfo/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-08-02
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //宿舍信息列表
    this.getInfoLists = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/dormitoryinfo/v1/list${urlEncode(argvs,true)}`,// 2017-08-02
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //获取宿舍信息总条数
    this.getInfoTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/dormitoryinfo/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 宿舍信息添加
    this.infoAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/dormitoryinfo/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //宿舍信息ID查询
    this.findInfoId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/dormitoryinfo/v1/dormitory/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //宿舍信息编辑
    this.infoEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/dormitoryinfo/v1/edit',
            headers:{
                userToken:argvs.userToken
            },
            form:argvs
        };
        return request(options);
    };
    //删除宿舍信息
    this.infoDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/dormitoryinfo/v1/delete/${argvs.id}`,    //2017-08-02
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //权限设置
    this.listSetting = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    this.countSetting = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/cuspermission/v1/count',
        };
        return request(options);
    };
    this.getPermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/getOneById/${argvs.id}`,
        };
        return request(options);
    };
    this.getpermitList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/listOperateById/${argvs.id}`,
        };
        return request(options);
    };
    this.editSettings = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/cuspermission/v1/edit',
            headers:{
                userToken:argvs.userToken
            },
            form:argvs
        };
        return request(options);
    };
    return this;
};