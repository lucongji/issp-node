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
            uri : config()['rurl'] + '/yearindexset/v1/setButtonPermission',
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
            uri : config()['rurl'] + '/yearindexset/v1/sonPermission',
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
            uri : config()['rurl'] + `/balancecardpermission/v1/list?limit=10&page=${argvs.page}`,
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
            uri : config()['rurl'] + '/balancecardpermission/v1/count',
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
            uri : config()['rurl'] + `/balancecardpermission/v1/getOneById/${argvs.id}`,
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
            uri : config()['rurl'] + '/balancecardpermission/v1/edit',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    //指标类型
    this.basicPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/indextypeset/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.basicList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/indextypeset/v1/list${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.basicCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/indextypeset/v1/count${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.basicDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/indextypeset/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.basicAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/indextypeset/v1/add',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.basicEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/indextypeset/v1/getOne/'+argvs.id,
            form : argvs,
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
            uri : config()['rurl'] + `/indextypeset/v1/edit`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //维度设置
    this.dimensionPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/dimensionset/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.dimensionList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/dimensionset/v1/list${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.dimensionCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/dimensionset/v1/count${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.dimensionDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/dimensionset/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.dimensionAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/dimensionset/v1/add',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.dimensionEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/dimensionset/v1/getOne/'+argvs.id,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.dimensionEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/dimensionset/v1/edit`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //考核方式设置
    this.assessPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/examwayset/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.assessList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/examwayset/v1/list${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.assessCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/examwayset/v1/count${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.assessDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/examwayset/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.assessAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/examwayset/v1/add',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.assessEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/examwayset/v1/getOne/'+argvs.id,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.assessEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/examwayset/v1/edit`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //指标名称设置
    this.namePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/indexnameset/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.nameList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/indexnameset/v1/list${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.nameCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/indexnameset/v1/count${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.nameDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/indexnameset/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.nameAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/indexnameset/v1/add',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.nameEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/indexnameset/v1/getOne/'+argvs.id,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.nameEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/indexnameset/v1/edit`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //年度指标设置
    this.yearPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/yearindexset/v1/setButtonPermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.yearList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/yearindexset/v1/list${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.yearCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/yearindexset/v1/count${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.yearDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/yearindexset/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.yearAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/yearindexset/v1/add',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.yearEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/yearindexset/v1/getOne/'+argvs.id,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.yearEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/yearindexset/v1/edit`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.findYear = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/yearindexset/v1/listYear`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.findName = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri: config()['rurl'] + '/indexnameset/v1/list?_includes=typeName',
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.findType = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri: config()['rurl'] + '/indextypeset/v1/list?_includes=typeName',
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.findDimension = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri: config()['rurl'] + '/dimensionset/v1/list?_includes=typeName',
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.yearImport = function(argvs){
        var options = {
            url: config()['rurl']+'/yearindexset/v1/leadExcel',
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
    //部门年度指标
    this.departPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/departyearindexset/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.departList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/departyearindexset/v1/list${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.departCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/departyearindexset/v1/count${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.departDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/departyearindexset/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.findDepart = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri: config()['rurl'] + '/departyearindexset/v1/listDepart',
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.findAssessment = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri: config()['rurl'] + '/examwayset/v1/listName',
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.departAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/departyearindexset/v1/add',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.departEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/departyearindexset/v1/getOne/'+argvs.id,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.departEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/departyearindexset/v1/edit`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.departImport = function(argvs){
        var options = {
            url: config()['rurl']+'/departyearindexset/v1/leadExcel',
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
    this.detailEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/yearindexset/v1/seperateYear',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //月度分解目标值
    this.detailMonth = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/departyearindexset/v1/seperateYear',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //部门月度指标
    this.monthsPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/departmonindexset/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.monthsList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/departmonindexset/v1/list${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.monthsCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/departmonindexset/v1/count${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.monthsDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/departmonindexset/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.monthsAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/departmonindexset/v1/add',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.monthsEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/departmonindexset/v1/getOne/'+argvs.id,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.monthsEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/departmonindexset/v1/edit`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.monthjImport = function(argvs){
        var options = {
            url: config()['rurl']+'/departmonindexset/v1/leadExcel',
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
    this.detailEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/yearindexset/v1/seperateYear',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.getListMonthName = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/departmonindexset/v1/listNow?limit=10&page=${argvs.page}`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.countNowInfo = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/departmonindexset/v1/countNow',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.jobsEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/departmonindexset/v1/seperateYear',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //岗位指标
    this.postPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/positionindexset/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.postsList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/positionindexset/v1/list${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.postsCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/positionindexset/v1/count${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.postsDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/positionindexset/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.postsAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/positionindexset/v1/add',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.postsEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/positionindexset/v1/getOne/'+argvs.id,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.postsEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/positionindexset/v1/edit`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.getListPositionName = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/positionindexset/v1/listNow?limit=10&page=${argvs.page}`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.countPositionInfo = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/positionindexset/v1/countNow',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.postindexImport = function(argvs){
        var options = {
            url: config()['rurl']+'/positionindexset/v1/leadExcel',
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
    //我的指标
    this.minesList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/positionindexset/v1/listSelf${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.minesCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/positionindexset/v1/countSelf${urlEncode(argvs,true)}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    this.minesDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/positionindexset/v1/deleteSelf/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.minestsAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/positionindexset/v1/addSelf',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.minesEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/positionindexset/v1/getOne/'+argvs.id,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.minessEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/positionindexset/v1/editSelf`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //指标库
    this.libraryPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/indexhouse/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    return this;
};