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
            uri : config()['rurl'] + '/back/v1/setButtonPermission',
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
            uri : config()['rurl'] + '/back/v1/sonPermission',
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
    //回款
    this.payPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/back/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.payList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/back/v1/list?limit=10&page='+argvs.page,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.payCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/back/v1/count',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.payDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/back/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.payAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/back/v1/add',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.payEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/back/v1/back/'+argvs.id,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.payEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/back/v1/edit`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.payImport = function(argvs){
        var options = {
            url: config()['rurl']+'/back/v1/importExcel',
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
    //收到股东款
    this.sharePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/stockmoney/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.shareList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/stockmoney/v1/list?limit=10&page='+argvs.page,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.shareCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/stockmoney/v1/count',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.shareDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/stockmoney/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.shareAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/stockmoney/v1/add',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.shareEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/stockmoney/v1/stock/'+argvs.id,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.shareEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/stockmoney/v1/edit`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.shareImport = function(argvs){
        var options = {
            url: config()['rurl']+'/stockmoney/v1/importExcel',
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
    //一级科目
    this.listFirstSubject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/stockmoney/v1/listFirstSubject`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
//二级科目
    this.listSecondSubject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/stockmoney/v1/listSubByFirst?firstSub=${encodeURIComponent(argvs.firstSub)}`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //三级科目
    this.listThirdSubject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/stockmoney/v1/listTubByFirst?firstSub=${encodeURIComponent(argvs.firstSub)}&secondSub=${encodeURIComponent(argvs.secondSub)}`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //汇总
    this.collectSubject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/stockmoney/v1/collect?startTime=${encodeURIComponent(argvs.startTime)}&endTime=${encodeURIComponent(argvs.endTime)}`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //其他收入
    this.otherPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/otherincome/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.otherList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/otherincome/v1/list?limit=10&page='+argvs.page,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.otherCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/otherincome/v1/count',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.otherDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/otherincome/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.otherAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/otherincome/v1/add',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.otherEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/otherincome/v1/other/'+argvs.id,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.otherEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/otherincome/v1/edit`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.otherImport = function(argvs){
        var options = {
            url: config()['rurl']+'/otherincome/v1/importExcel',
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
    //一级科目
    this.firOtherSubject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/otherincome/v1/listFirstSubject`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
//二级科目
    this.secOtherSubject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/otherincome/v1/listSubByFirst?firstSub=${encodeURIComponent(argvs.firstSub)}`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //三级科目
    this.thirOtherSubject = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/otherincome/v1/listTubByFirst?firstSub=${encodeURIComponent(argvs.firstSub)}&secondSub=${encodeURIComponent(argvs.secondSub)}`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //汇总
    this.otherCollect = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/otherincome/v1/collect?startTime=${encodeURIComponent(argvs.startTime)}&endTime=${encodeURIComponent(argvs.endTime)}`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    <!--财务收入-->
    this.financePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/accountincome/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.financeCollect = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/accountincome/v1/collect?startTime=${encodeURIComponent(argvs.startTime)}&endTime=${encodeURIComponent(argvs.endTime)}`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    <!--营业费用-->
    this.doPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/operatexpenses/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.doList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/operatexpenses/v1/list?limit=10&page='+argvs.page,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.doCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/operatexpenses/v1/count',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.doDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/operatexpenses/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.doAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/operatexpenses/v1/add',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.doEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/operatexpenses/v1/back/'+argvs.id,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.doEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/operatexpenses/v1/edit`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.doImport = function(argvs){
        var options = {
            url: config()['rurl']+'/operatexpenses/v1/importExcel',
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
    this.doCollect = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/operatexpenses/v1/collect?startTime=${encodeURIComponent(argvs.startTime)}&endTime=${encodeURIComponent(argvs.endTime)}`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.typeByAll = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/operatexpenses/v1/listType',
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    <!--支付给股东-->
    this.payholderPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/paystock/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.payholderList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/paystock/v1/list?limit=10&page='+argvs.page,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.payholderCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/paystock/v1/count',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.payholderDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/paystock/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.payholderAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/paystock/v1/add',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.payholderEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/paystock/v1/payStock/'+argvs.id,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.payholderEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/paystock/v1/edit`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.payholderImport = function(argvs){
        var options = {
            url: config()['rurl']+'/paystock/v1/importExcel',
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
    this.payholderCollect = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/paystock/v1/collect?startTime=${encodeURIComponent(argvs.startTime)}&endTime=${encodeURIComponent(argvs.endTime)}`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //一级科目
    this.payholderFirst = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/paystock/v1/listFirstSubject`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
//二级科目
    this.payholderSecond = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/paystock/v1/listSubByFirst?firstSub=${encodeURIComponent(argvs.firstSub)}`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //三级科目
    this.payholderThird = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/paystock/v1/listTubByFirst?firstSub=${encodeURIComponent(argvs.firstSub)}&secondSub=${encodeURIComponent(argvs.secondSub)}`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    <!--其他支出-->
    this.payotherPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/otherspend/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.payotherList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/otherspend/v1/list?limit=10&page='+argvs.page,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.payotherCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/otherspend/v1/count',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.payotherDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/otherspend/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.payotherAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/otherspend/v1/add',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.payotherEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/otherspend/v1/back/'+argvs.id,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.payotherEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/otherspend/v1/edit`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.payotherImport = function(argvs){
        var options = {
            url: config()['rurl']+'/otherspend/v1/importExcel',
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
    this.payotherCollect = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/otherspend/v1/collect?startTime=${encodeURIComponent(argvs.startTime)}&endTime=${encodeURIComponent(argvs.endTime)}`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //一级科目
    this.payotherFirst = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/otherspend/v1/listFirstSubject`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
//二级科目
    this.payotherSecond = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/otherspend/v1/listSubByFirst?firstSub=${encodeURIComponent(argvs.firstSub)}`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //三级科目
    this.payotherThird = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/otherspend/v1/listTubByFirst?firstSub=${encodeURIComponent(argvs.firstSub)}&secondSub=${encodeURIComponent(argvs.secondSub)}`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    <!--财务支出-->
    this.payfinancePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/accountspend/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.payfinanceCollect = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/accountspend/v1/collect?startTime=${encodeURIComponent(argvs.startTime)}&endTime=${encodeURIComponent(argvs.endTime)}`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    <!--期初余额-->
    this.initBalancePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/beginbalance/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.initBalanceList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/beginbalance/v1/list?limit=10&page='+argvs.page,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.initBalanceCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/beginbalance/v1/count',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.initBalanceDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/beginbalance/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.initBalanceeAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/beginbalance/v1/add',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.initBalanceEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/beginbalance/v1/payStock/'+argvs.id,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.initBalanceEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/beginbalance/v1/edit`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    <!--帐上余额-->
    this.accountPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/accountbalance/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.collectBalance = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/accountbalance/v1/collect?startTime=${encodeURIComponent(argvs.startTime)}&endTime=${encodeURIComponent(argvs.endTime)}`,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    return this;
};