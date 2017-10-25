var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
module.exports = function(){
    this.detailList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/list${urlEncode(argvs,true)}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.detailLists = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/collect/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取总条数
    this.getDetailTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/count${urlEncode(argvs,true)}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 添加
    this.detailAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/add`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.idByDetailAll = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/contractor/v1/list?_includes=id,name',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 编辑
    this.detailEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/edit`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.editTimeEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/editTime`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //删除
    this.detailDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/delete/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取ID
    this.findDetailId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/receivable/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //汇总
    this.detailSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/collectArea?areas=${encodeURIComponent(argvs)}`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //查询所有地区
    this.detailAllAreaById = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/receivablesubsidiary/v1/area',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.detailsSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/collectAreaDetail?areas=${encodeURIComponent(argvs)}`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //项目名称汇总
    this.detailsProSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/collectName?innerNames=${encodeURIComponent(argvs)}`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.detailAllProById = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/receivablesubsidiary/v1/name',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.proSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/collectNameDetail?innerNames=${encodeURIComponent(argvs)}`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.detailsGenerialSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/collectContractor?contractors=${encodeURIComponent(argvs)}`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.generalProById = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/receivablesubsidiary/v1/contractor',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.generalsSummary = function(argvs){
     var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/collectContractorDetail?contractors=${encodeURIComponent(argvs)}`,
            form:argvs,
         headers : {
             userToken:argvs.token
         }
        };
        return request(options);
    };
    //d
    this.contractorList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractor/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.getContractorTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/contractor/v1/count',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.contractorAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/contractor/v1/add`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.contractorEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/contractor/v1/edit`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取ID
    this.findContractorfoId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractor/v1/contractor/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.contractorDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/contractor/v1/delete/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.groupListName = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/receivablesubsidiary/v1/progress?group='+encodeURIComponent(argvs.params.group)+
            '&progress='+encodeURIComponent(argvs.params.progress)+'&id='+argvs.params.id,
            headers : {
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

    //设置导航权限
    this.settingNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/contractor/v1/setButtonPermission',
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
            uri : config()['rurl'] + '/contractor/v1/sonPermission',
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
//回款明细菜单权限
    this.detailPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.auditTimeId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/auditTime?auditTime=${encodeURIComponent(argvs.auditTime)}`,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.auditTimeId2 = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/planTime?planTime=${encodeURIComponent(argvs.planTime)}`,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.auditTimeId3 = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/countTime?countTime=${encodeURIComponent(argvs.countTime)}`,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.auditTimeId4 = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/billTime?billTime=${encodeURIComponent(argvs.billTime)}`,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.detailImport = function(argvs){
        var options = {
            url: config()['rurl']+'/receivablesubsidiary/v1/importExcel',
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
    //回款明细所有地区名称
    this.areaByName = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/receivablesubsidiary/v1/area',
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //承包商权限
    this.contractorPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/contractor/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.contrastSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/receivablesubsidiary/v1/collectCompare'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.token
            },
        };
        return request(options);
    };
    this.targetArea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/receivablesubsidiary/v1/findArea`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //---------------------------回款进度---------------------------
    //菜单权限
    this.progPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/backprogress/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //条件汇总
    this.progSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/backprogress/v1/backCollect'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.token
            },
        };
        return request(options);
    };
    this.progList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/backprogress/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.progCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/backprogress/v1/count',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //导入
    this.progAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/backprogress/v1/importExcel`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.progEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/backprogress/v1/edit`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        console.log(argvs)
        return request(options);
    };
    //获取ID
    this.progId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/backprogress/v1/back/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.progDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/backprogress/v1/delete/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //导入
    this.progLead = function(argvs){
        console.log(argvs.files)
        var options = {
            url: config()['rurl']+'/backprogress/v1/importExcel',
            method: 'POST',
            formData: {
                files: uploadFile(argvs.files.files)
            },
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //------------------主营业务收入--------------------
    //菜单权限
    this.revenPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/mainincome/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //条件汇总
    this.revenSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/backprogress/v1/collect'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.token
            },
        };
        return request(options);
    };
    this.revenList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/mainincome/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.revenCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/mainincome/v1/count',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.revenEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/mainincome/v1/edit`,
            // uri : config()['rurl'] + `/mainincome/v1/edit`+urlEncode(argvs,true),
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        // console.log(argvs)
        return request(options);
    };
    //获取ID
    this.revenId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/mainincome/v1/main/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.revenDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/mainincome/v1/delete/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //添加
    this.revenAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/mainincome/v1/add`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //-------------------------------------------------
    //外包单位
    this.getUnit = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/backprogress/v1/contractors',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //地区
    this.getArea = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/backprogress/v1/areas',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //类型
    this.getType = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/backprogress/v1/types',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //专业
    this.getMajors = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/backprogress/v1/majors',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //运营商名称
    this.getOperator = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/backprogress/v1/operatorNames',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //派工情况
    this.getTasking = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/backprogress/v1/taskCases',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //实际完工状态
    this.getState = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/backprogress/v1/completeStatus',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    return this;
};