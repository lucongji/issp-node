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
    }).get('/payment/guidePermission/:guideAddrStatus', function*(){//回款
            var $self = this;
            var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
            yield (server().payPermission(page)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
        }).get('/payment/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().payList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/payment/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().payCount(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/payment/delete', function*(){
        var $self = this;
        var delData = $self.request.query;
        delData.token = this.cookies.get('token');
        yield (server().payDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/payment/add', function*(){
        var $self = this;
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        yield (server().payAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/payment/getOneById', function*(){
        var $self = this;
        var editId = $self.request.query;
        editId.token = $self.cookies.get('token');
        yield (server().payEditById(editId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/payment/edit', function*(){
        var $self = this;
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        yield (server().payEdit(editData)
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
    }).get('/payment/templateExport', function*(){//回款导入模板下载
        var $self = this;
        var fileName = '回款导入模板.xlsx';
        yield (fetch(config()['rurl']+`/back/v1/templateExport`, {
            method : 'GET',
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/payment/import', koaBody({multipart:true}),function *(next) {//回款展示导入
        var $self = this;
        var fileData = $self.request.body;
        fileData.token = $self.cookies.get("token");
        yield (server().payImport(fileData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/shareholder/guidePermission/:guideAddrStatus', function*(){//收到股东款
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().sharePermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/shareholder/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().shareList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/shareholder/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().shareCount(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/shareholder/delete', function*(){
        var $self = this;
        var delData = $self.request.query;
        delData.token = this.cookies.get('token');
        yield (server().shareDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/shareholder/add', function*(){
        var $self = this;
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        yield (server().shareAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/shareholder/getOneById', function*(){
        var $self = this;
        var editId = $self.request.query;
        editId.token = $self.cookies.get('token');
        yield (server().shareEditById(editId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/shareholder/edit', function*(){
        var $self = this;
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        yield (server().shareEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/shareholder/templateExport', function*(){//收到股东款模板下载
        var $self = this;
        var fileName = '收到股东款导入模板.xlsx';
        yield (fetch(config()['rurl']+`/stockmoney/v1/templateExport`, {
            method : 'GET',
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/shareholder/import', koaBody({multipart:true}),function *(next) {//收到股东款导入
        var $self = this;
        var fileData = $self.request.body;
        fileData.token = $self.cookies.get("token");
        yield (server().shareImport(fileData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/firstSubject/count', function*(){ //一级科目
        var $self = this;
        var token = {token:$self.cookies.get('token')};
        yield (server().listFirstSubject(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/secondSubject/count', function*(){ //二级科目
        var $self = this;
        var fileData = $self.request.query;
        fileData.token = $self.cookies.get("token");
        yield (server().listSecondSubject(fileData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/thirdSubject/count', function*(){ //三级科目
        var $self = this;
        var fileData = $self.request.query;
        fileData.token = $self.cookies.get("token");
        yield (server().listThirdSubject(fileData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/collectWorks/collect', function*(){ //汇总
        var $self = this;
        var fileData = $self.request.body;
        fileData.token = $self.cookies.get("token");
        yield (server().collectSubject(fileData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/other/guidePermission/:guideAddrStatus', function*(){//其他收入
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().otherPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/other/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().otherList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/other/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().otherCount(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/other/delete', function*(){
        var $self = this;
        var delData = $self.request.query;
        delData.token = this.cookies.get('token');
        yield (server().otherDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/other/add', function*(){
        var $self = this;
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        yield (server().otherAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/other/getOneById', function*(){
        var $self = this;
        var editId = $self.request.query;
        editId.token = $self.cookies.get('token');
        yield (server().otherEditById(editId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/other/edit', function*(){
        var $self = this;
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        yield (server().otherEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/other/templateExport', function*(){//其他收入模板下载
        var $self = this;
        var fileName = '其他收入导入模板.xlsx';
        yield (fetch(config()['rurl']+`/otherincome/v1/templateExport`, {
            method : 'GET',
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/other/import', koaBody({multipart:true}),function *(next) {//其他收入导入
        var $self = this;
        var fileData = $self.request.body;
        fileData.token = $self.cookies.get("token");
        yield (server().otherImport(fileData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/firstSubject/other', function*(){ //一级科目
        var $self = this;
        var token = {token:$self.cookies.get('token')};
        yield (server().firOtherSubject(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/secondSubject/other', function*(){ //二级科目
        var $self = this;
        var fileData = $self.request.query;
        fileData.token = $self.cookies.get("token");
        yield (server().secOtherSubject(fileData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/thirdSubject/other', function*(){ //三级科目
        var $self = this;
        var fileData = $self.request.query;
        fileData.token = $self.cookies.get("token");
        yield (server().thirOtherSubject(fileData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/collectWorks/other', function*(){ //汇总
        var $self = this;
        var fileData = $self.request.body;
        fileData.token = $self.cookies.get("token");
        yield (server().otherCollect(fileData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/finance/guidePermission/:guideAddrStatus', function*(){//财务收入
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().financePermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).post('/collectWorks/finance', function*(){ //汇总
        var $self = this;
        var fileData = $self.request.body;
        fileData.token = $self.cookies.get("token");
        yield (server().financeCollect(fileData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/do/guidePermission/:guideAddrStatus', function*(){//营业费用
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().doPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/do/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().doList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/do/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().doCount(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/do/delete', function*(){
        var $self = this;
        var delData = $self.request.query;
        delData.token = this.cookies.get('token');
        yield (server().doDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/do/add', function*(){
        var $self = this;
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        yield (server().doAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/do/getOneById', function*(){
        var $self = this;
        var editId = $self.request.query;
        editId.token = $self.cookies.get('token');
        yield (server().doEditById(editId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/do/edit', function*(){
        var $self = this;
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        yield (server().doEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/do/templateExport', function*(){//营业费用模板下载
        var $self = this;
        var fileName = '营业费用导入模板.xlsx';
        yield (fetch(config()['rurl']+`/operatexpenses/v1/templateExport`, {
            method : 'GET',
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/do/import', koaBody({multipart:true}),function *(next) {//营业费用导入
        var $self = this;
        var fileData = $self.request.body;
        fileData.token = $self.cookies.get("token");
        yield (server().doImport(fileData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/collectWorks/dobusiness', function*(){ //汇总
        var $self = this;
        var fileData = $self.request.body;
        fileData.token = $self.cookies.get("token");
        yield (server().doCollect(fileData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/allType/type', function*(){
        var $self = this;
        var editId = $self.request.query;
        editId.token = $self.cookies.get('token');
        yield (server().typeByAll(editId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/payholder/guidePermission/:guideAddrStatus', function*(){//支付给股东
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().payholderPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/payholder/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().payholderList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/payholder/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().payholderCount(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/payholder/delete', function*(){
        var $self = this;
        var delData = $self.request.query;
        delData.token = this.cookies.get('token');
        yield (server().payholderDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/payholder/add', function*(){
        var $self = this;
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        yield (server().payholderAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/payholder/getOneById', function*(){
        var $self = this;
        var editId = $self.request.query;
        editId.token = $self.cookies.get('token');
        yield (server().payholderEditById(editId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/payholder/edit', function*(){
        var $self = this;
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        yield (server().payholderEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/payholder/templateExport', function*(){//支付给股东模板下载
        var $self = this;
        var fileName = '支付给股东导入模板.xlsx';
        yield (fetch(config()['rurl']+`/paystock/v1/templateExport`, {
            method : 'GET',
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/payholder/import', koaBody({multipart:true}),function *(next) {
        var $self = this;
        var fileData = $self.request.body;
        fileData.token = $self.cookies.get("token");
        yield (server().payholderImport(fileData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/collectWorks/payholder', function*(){ //汇总
        var $self = this;
        var fileData = $self.request.body;
        fileData.token = $self.cookies.get("token");
        yield (server().payholderCollect(fileData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/firstSubject/payholder', function*(){ //一级科目
        var $self = this;
        var token = {token:$self.cookies.get('token')};
        yield (server().payholderFirst(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/secondSubject/payholder', function*(){ //二级科目
        var $self = this;
        var fileData = $self.request.query;
        fileData.token = $self.cookies.get("token");
        yield (server().payholderSecond(fileData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/thirdSubject/payholder', function*(){ //三级科目
        var $self = this;
        var fileData = $self.request.query;
        fileData.token = $self.cookies.get("token");
        yield (server().payholderThird(fileData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/payother/guidePermission/:guideAddrStatus', function*(){//其他支出
            var $self = this;
            var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
            yield (server().payotherPermission(page)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
        }).get('/payother/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().payotherList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/payother/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().payotherCount(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/payother/delete', function*(){
        var $self = this;
        var delData = $self.request.query;
        delData.token = this.cookies.get('token');
        yield (server().payotherDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/payother/add', function*(){
        var $self = this;
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        yield (server().payotherAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/payother/getOneById', function*(){
        var $self = this;
        var editId = $self.request.query;
        editId.token = $self.cookies.get('token');
        yield (server().payotherEditById(editId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/payother/edit', function*(){
        var $self = this;
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        yield (server().payotherEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/payother/templateExport', function*(){//其他支出模板下载
        var $self = this;
        var fileName = '其他支出导入模板.xlsx';
        yield (fetch(config()['rurl']+`/otherspend/v1/templateExport`, {
            method : 'GET',
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/payother/import', koaBody({multipart:true}),function *(next) {
        var $self = this;
        var fileData = $self.request.body;
        fileData.token = $self.cookies.get("token");
        yield (server().payotherImport(fileData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/collectWorks/payother', function*(){ //汇总
        var $self = this;
        var fileData = $self.request.body;
        fileData.token = $self.cookies.get("token");
        yield (server().payotherCollect(fileData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/firstSubject/payother', function*(){ //一级科目
        var $self = this;
        var token = {token:$self.cookies.get('token')};
        yield (server().payotherFirst(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/secondSubject/payother', function*(){ //二级科目
        var $self = this;
        var fileData = $self.request.query;
        fileData.token = $self.cookies.get("token");
        yield (server().payotherSecond(fileData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/thirdSubject/payother', function*(){ //三级科目
        var $self = this;
        var fileData = $self.request.query;
        fileData.token = $self.cookies.get("token");
        yield (server().payotherThird(fileData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/payfinance/guidePermission/:guideAddrStatus', function*(){//财务支出
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().payfinancePermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).post('/collectWorks/payfinance', function*(){ //汇总
        var $self = this;
        var fileData = $self.request.body;
        fileData.token = $self.cookies.get("token");
        yield (server().payfinanceCollect(fileData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/initBalance/guidePermission/:guideAddrStatus', function*(){//期初余额
            var $self = this;
            var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
            yield (server().initBalancePermission(page)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
        }).get('/initBalance/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().initBalanceList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/initBalance/count', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().initBalanceCount(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/initBalance/delete', function*(){
        var $self = this;
        var delData = $self.request.query;
        delData.token = this.cookies.get('token');
        yield (server().initBalanceDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/initBalance/add', function*(){
        var $self = this;
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        yield (server().initBalanceeAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/initBalance/getOneById', function*(){
        var $self = this;
        var editId = $self.request.query;
        editId.token = $self.cookies.get('token');
        yield (server().initBalanceEditById(editId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/initBalance/edit', function*(){
        var $self = this;
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        yield (server().initBalanceEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/accountBalance/guidePermission/:guideAddrStatus', function*(){//帐上余额
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().accountPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).post('/collectWorks/accountBalance', function*(){ //汇总
        var $self = this;
        var fileData = $self.request.body;
        fileData.token = $self.cookies.get("token");
        yield (server().collectBalance(fileData)
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
