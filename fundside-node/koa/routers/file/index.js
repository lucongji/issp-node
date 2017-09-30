var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename,'../'))+'/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
var koaBody = require('koa-body');
var request = require('request-promise');
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var fileType = require(path.resolve('plugins/fileType.js'));
module.exports = function(){
    var router = new Router();
    router.get('/file/setButtonPermission', function*(){ //设置导航权限
        var $self = this;
        var navToken = {token:$self.cookies.get('token')};
        yield (server().settingNav(navToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/file/sonPermission', function*(){ //导航权限
        var $self = this;
        var navToken = {token:$self.cookies.get('token')};
        yield (server().siginNav(navToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
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
        var token = {token:$self.cookies.get('token')};
        yield (server().countSetting(token)
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
        getId.token = $self.cookies.get('token');
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
        listPermit.token = $self.cookies.get('token');
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
    }).get('/user/logout', function*(next){
        var url = this.request.query;
        this.cookies.set("absUrl",url.absurl);
        this.body = {
            code:0,
            msg:"重定向"
        };
    }).get('/apply/guidePermission/:guideAddrStatus', function*(){ //资金进入申请权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().applyPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/apply/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().applyList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/apply/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().applyTotal(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/apply/delete', function*(){
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.token = $self.cookies.get('token');
        yield (server().applyDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/apply/add', function*(){
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().applyAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/apply/edit', function*(){//编辑
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().applyEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/apply/getOneById', function*(){//获取id
        var $self = this;
        var findIdData = $self.request.query;
        findIdData.token = $self.cookies.get('token');
        yield (server().applyId(findIdData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/apply/audit', function*(){
        var $self = this;
        var findIdData = $self.request.query;
        findIdData.token = $self.cookies.get('token');
        yield (server().applyAudit(findIdData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/apply/getInvestor', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().applyInvestor(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/getInvestorContent/getInvestor', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().getInvestorContentstor(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/apply/ectSummaryInvestor', function*(){
        var $self = this;
        var getCollect = this.request.body;
        getCollect.token = this.cookies.get('token');
        yield (server().applyCollectInves(getCollect)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/apply/ectSummaryToFund', function*(){
        var $self = this;
        var getCollect = this.request.body;
        getCollect.token = this.cookies.get('token');
        yield (server().applyCollectFun(getCollect)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/apply/summaryTime', function*(){
        var $self = this;
        var getCollect = this.request.body;
        getCollect.token = this.cookies.get('token');
        yield (server().applyTime(getCollect)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/apply/uploadFile', koaBody({multipart:true}),function *(next) {//资金进入上传文件
        var $self = this;
        var uploadData = $self.request.body;
        uploadData.token = $self.cookies.get("token");
        yield (server().applyUploadFile(uploadData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/apply/listFile', function*(){ //资金进入查看附件
        var $self = this;
        var enData = $self.request.query;
        enData.token = $self.cookies.get('token');
        yield (server().applyListFile(enData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/apply/download', function*(){//资金进入下载文件
        var $self = this;
        var count = $self.request.query;
        var data = {
            path:count.path
        };
        yield (fetch(config()['rurl']+`/fundentry/v1/downloadFile${urlEncode(data,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then((res)=>{
            fileType(count,this);
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/apply/delFile', koaBody({multipart:true}), function*(){//资金进入删除文件
        var $self = this;
        var delData = $self.request.body;
        delData.token = $self.cookies.get('token');
        yield (server().applyDelFile(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/record/guidePermission/:guideAddrStatus', function*(){ //有误记录申请权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().recordPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/record/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().recordList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/record/count', function*(){
        var $self = this;
        var countData = $self.request.query;
        countData.token = this.cookies.get('token');
        yield (server().recordTotal(countData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/record/delete', function*(){
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.token = $self.cookies.get('token');
        yield (server().recordDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/record/getOneById', function*(){
        var $self = this;
        var findIdData = $self.request.query;
        findIdData.token = $self.cookies.get('token');
        yield (server().recordId(findIdData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/sure/guidePermission/:guideAddrStatus', function*(){ //已确认申请权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().surePermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/sure/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().sureList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/sure/count', function*(){
        var $self = this;
        var countData = $self.request.query;
        countData.token = this.cookies.get('token');
        yield (server().sureTotal(countData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/sure/delete', function*(){
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.token = $self.cookies.get('token');
        yield (server().sureDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/record/getOneById', function*(){
        var $self = this;
        var findIdData = $self.request.query;
        findIdData.token = $self.cookies.get('token');
        yield (server().sureId(findIdData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/respons/guidePermission/:guideAddrStatus', function*(){ //权责分配申请权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().responsPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/respons/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().responsList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/respons/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().responsTotal(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/respons/delete', function*(){
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.token = $self.cookies.get('token');
        yield (server().responsDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/respons/add', function*(){
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().responsAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/respons/edit', function*(){//编辑
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().responsEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/respons/getOneById', function*(){
        var $self = this;
        var findIdData = $self.request.query;
        findIdData.token = $self.cookies.get('token');
        yield (server().responsId(findIdData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/inform/guidePermission/:guideAddrStatus', function*(){ //招投信息列表
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().informPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/inform/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().informList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/inform/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().informTotal(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/inform/delete', function*(){
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.token = $self.cookies.get('token');
        yield (server().informDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/inform/add', function*(){
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().informAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/inform/edit', function*(){//编辑
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().informEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/inform/getOneById', function*(){
        var $self = this;
        var findIdData = $self.request.query;
        findIdData.token = $self.cookies.get('token');
        yield (server().informId(findIdData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/allInnerProject/name', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().informInner(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/listProject/list', function*(){
        var $self = this;
        var findIdData = $self.request.query;
        findIdData.token = $self.cookies.get('token');
        yield (server().informInner2(findIdData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/addApplyInv/apply', function*(){
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().applyInvesAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/investForm/guidePermission/:guideAddrStatus', function*(){ //投资形式列表
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().formPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/investForm/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().formList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/investForm/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().formTotal(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/investForm/delete', function*(){
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.token = $self.cookies.get('token');
        yield (server().formDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/investForm/add', function*(){
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().formAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/investForm/edit', function*(){//编辑
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().formEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/investForm/getOneById', function*(){
        var $self = this;
        var findIdData = $self.request.query;
        findIdData.token = $self.cookies.get('token');
        yield (server().formId(findIdData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/creditor/guidePermission/:guideAddrStatus', function*(){ //投资条件-债权投资
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().creditorPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/creditor/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().creditorList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/creditor/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().creditorTotal(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/creditor/delete', function*(){
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.token = $self.cookies.get('token');
        yield (server().creditorDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/creditor/add', function*(){
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().creditorAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/creditor/edit', function*(){//编辑
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().creditorEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/creditor/getOneById', function*(){
        var $self = this;
        var findIdData = $self.request.query;
        findIdData.token = $self.cookies.get('token');
        yield (server().creditorId(findIdData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/capital/uploadFile', koaBody({multipart:true}),function *(next) {//投资条件上传文件
        var $self = this;
        var uploadData = $self.request.body;
        uploadData.token = $self.cookies.get("token");
        yield (server().capitalUploadFile(uploadData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/creditor/listFile', function*(){ //投资条件查看附件
        var $self = this;
        var enData = $self.request.query;
        enData.token = $self.cookies.get('token');
        yield (server().creditorListFile(enData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/creditor/download', function*(){//投资条件下载文件
        var $self = this;
        var count = $self.request.query;
        var data = {
            path:count.path
        };
        yield (fetch(config()['rurl']+`/creditorsinvest/v1/downloadFile${urlEncode(data,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then((res)=>{
            fileType(count,this);
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/creditor/delFile', koaBody({multipart:true}), function*(){//投资条件删除文件
        var $self = this;
        var delData = $self.request.body;
        delData.token = $self.cookies.get('token');
        yield (server().creditorDelFile(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/stock/guidePermission/:guideAddrStatus', function*(){ //投资条件-股权投资
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().stockPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/stock/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().stockList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/stock/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().stockTotal(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/stock/delete', function*(){
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.token = $self.cookies.get('token');
        yield (server().stockDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/stock/add', function*(){
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().stockAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/stock/edit', function*(){//编辑
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().stockEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/stock/getOneById', function*(){
        var $self = this;
        var findIdData = $self.request.query;
        findIdData.token = $self.cookies.get('token');
        yield (server().stockId(findIdData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/stock/uploadFile', koaBody({multipart:true}),function *(next) {//投资条件上传文件
        var $self = this;
        var uploadData = $self.request.body;
        uploadData.token = $self.cookies.get("token");
        yield (server().stockUploadFile(uploadData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/stock/listFile', function*(){ //投资条件查看附件
        var $self = this;
        var enData = $self.request.query;
        enData.token = $self.cookies.get('token');
        yield (server().stockListFile(enData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/stock/download', function*(){//投资条件下载文件
        var $self = this;
        var count = $self.request.query;
        var data = {
            path:count.path
        };
        yield (fetch(config()['rurl']+`/creditorsinvest/v1/downloadFile${urlEncode(data,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then((res)=>{
            fileType(count,this);
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/stock/delFile', koaBody({multipart:true}), function*(){//投资条件删除文件
        var $self = this;
        var delData = $self.request.body;
        delData.token = $self.cookies.get('token');
        yield (server().stockDelFile(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/cash/guidePermission/:guideAddrStatus', function*(){ //投资条件-现金投资
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().cashPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/cash/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().cashList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/cash/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().cashTotal(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/cash/delete', function*(){
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.token = $self.cookies.get('token');
        yield (server().cashDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/cash/add', function*(){
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().cashAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/cash/edit', function*(){//编辑
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().cashEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/cash/getOneById', function*(){
        var $self = this;
        var findIdData = $self.request.query;
        findIdData.token = $self.cookies.get('token');
        yield (server().cashId(findIdData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/cash/uploadFile', koaBody({multipart:true}),function *(next) {//投资条件上传文件
        var $self = this;
        var uploadData = $self.request.body;
        uploadData.token = $self.cookies.get("token");
        yield (server().cashUploadFile(uploadData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/cash/listFile', function*(){ //投资条件查看附件
        var $self = this;
        var enData = $self.request.query;
        enData.token = $self.cookies.get('token');
        yield (server().cashListFile(enData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/cash/download', function*(){//投资条件下载文件
        var $self = this;
        var count = $self.request.query;
        var data = {
            path:count.path
        };
        yield (fetch(config()['rurl']+`/cashinvest/v1/downloadFile${urlEncode(data,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then((res)=>{
            fileType(count,this);
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/cash/delFile', koaBody({multipart:true}), function*(){//投资条件删除文件
        var $self = this;
        var delData = $self.request.body;
        delData.token = $self.cookies.get('token');
        yield (server().cashDelFile(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/investment/guidePermission/:guideAddrStatus', function*(){ //资金投资
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().investmentPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/investment/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().investmentList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/investment/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().investmentTotal(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/investment/delete', function*(){
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.token = $self.cookies.get('token');
        yield (server().investmentDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/investment/add', function*(){
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().investmentAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/investment/edit', function*(){//编辑
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().investmentEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/investment/getOneById', function*(){
        var $self = this;
        var findIdData = $self.request.query;
        findIdData.token = $self.cookies.get('token');
        yield (server().investmentId(findIdData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/transfer/guidePermission/:guideAddrStatus', function*(){ //投资转让
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().transferPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/transfer/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().transferList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/transfer/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().transferTotal(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/transfer/delete', function*(){
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.token = $self.cookies.get('token');
        yield (server().transferDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/transfer/add', function*(){
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().transferAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/transfer/edit', function*(){//编辑
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().transferEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/transfer/getOneById', function*(){
        var $self = this;
        var findIdData = $self.request.query;
        findIdData.token = $self.cookies.get('token');
        yield (server().transferId(findIdData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/transfer/uploadFile', koaBody({multipart:true}),function *(next) {
        var $self = this;
        var uploadData = $self.request.body;
        uploadData.token = $self.cookies.get("token");
        yield (server().transferUploadFile(uploadData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/transfer/listFile', function*(){
        var $self = this;
        var enData = $self.request.query;
        enData.token = $self.cookies.get('token');
        yield (server().transferListFile(enData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/transfer/download', function*(){
        var $self = this;
        var count = $self.request.query;
        var data = {
            path:count.path
        };
        yield (fetch(config()['rurl']+`/investtransfer/v1/downloadFile${urlEncode(data,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then((res)=>{
            fileType(count,this);
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/transfer/delFile', koaBody({multipart:true}), function*(){
        var $self = this;
        var delData = $self.request.body;
        delData.token = $self.cookies.get('token');
        yield (server().transferDelFile(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/profit/guidePermission/:guideAddrStatus', function*(){ //收益比例分配
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().profitPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/profit/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().profitList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/profit/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().profitTotal(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/profit/delete', function*(){
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.token = $self.cookies.get('token');
        yield (server().profitDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/profit/add', function*(){
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().profitAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/profit/edit', function*(){//编辑
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().profitEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/profit/getOneById', function*(){
        var $self = this;
        var findIdData = $self.request.query;
        findIdData.token = $self.cookies.get('token');
        yield (server().profitId(findIdData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/allotment/guidePermission/:guideAddrStatus', function*(){ //收益比例额
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().allotmentPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/allotment/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().allotmentList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/allotment/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().allotmentTotal(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/allotment/delete', function*(){
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.token = $self.cookies.get('token');
        yield (server().allotmentDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/allotment/add', function*(){
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().allotmentAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/allotment/edit', function*(){//编辑
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().allotmentEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/allotment/getOneById', function*(){
        var $self = this;
        var findIdData = $self.request.query;
        findIdData.token = $self.cookies.get('token');
        yield (server().allotmentId(findIdData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/sign/guidePermission/:guideAddrStatus', function*(){ //资金退出申请表
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().signPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/sign/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().signList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/sign/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().signTotal(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/sign/delete', function*(){
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.token = $self.cookies.get('token');
        yield (server().signDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/sign/add', function*(){
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().signAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/sign/edit', function*(){//编辑
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().signEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/sign/getOneById', function*(){
        var $self = this;
        var findIdData = $self.request.query;
        findIdData.token = $self.cookies.get('token');
        yield (server().signId(findIdData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/sign/auditContent', function*(){
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().signAudit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/records/guidePermission/:guideAddrStatus', function*(){ //有误记录
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().recordsPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/records/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().recordsList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/records/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().recordsTotal(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/records/delete', function*(){
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.token = $self.cookies.get('token');
        yield (server().recordsDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/recordss/guidePermission/:guideAddrStatus', function*(){ //确认记录
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().recordssPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/recordss/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().recordssList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/recordss/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().recordssTotal(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/recordss/delete', function*(){
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.token = $self.cookies.get('token');
        yield (server().recordssDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/custom/guidePermission/:guideAddrStatus', function*(){ //客户信息
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().customPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/custom/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().customList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/custom/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().customTotal(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/custom/delete', function*(){
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.token = $self.cookies.get('token');
        yield (server().customDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/custom/add', function*(){
        var $self = this;
        var addData = $self.request.body;
        addData.token = $self.cookies.get('token');
        yield (server().customAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/custom/edit', function*(){//编辑
        var $self = this;
        var editData = $self.request.body;
        editData.token = $self.cookies.get('token');
        yield (server().customEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/custom/getOneById', function*(){
        var $self = this;
        var findIdData = $self.request.query;
        findIdData.token = $self.cookies.get('token');
        yield (server().customId(findIdData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/customSum/guidePermission/:guideAddrStatus', function*(){ //客户信息汇总
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().customSumPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).post('/customSum/ectSummaryInvestor', function*(){
        var $self = this;
        var getCollect = this.request.body;
        getCollect.token = this.cookies.get('token');
        yield (server().customSumInves(getCollect)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/investment/allInnerProject', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().investmentInner(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/investment/listProject', function*(){
        var $self = this;
        var findIdData = $self.request.query;
        findIdData.token = $self.cookies.get('token');
        yield (server().investmentInner2(findIdData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/apply/getProject', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().applyProjectInves(token)
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
