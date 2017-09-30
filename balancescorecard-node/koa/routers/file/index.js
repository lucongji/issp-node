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
    }).get('/basic/guidePermission/:guideAddrStatus', function*(){//指标类型
            var $self = this;
            var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
            yield (server().basicPermission(page)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
        }).get('/basic/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().basicList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/basic/count', function*(){
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().basicCount(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/basic/delete', function*(){
        var $self = this;
        var delData = $self.request.query;
        delData.token = this.cookies.get('token');
        yield (server().basicDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/basic/add', function*(){
        var $self = this;
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        yield (server().basicAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/basic/getOneById', function*(){
        var $self = this;
        var editId = $self.request.query;
        editId.token = $self.cookies.get('token');
        yield (server().basicEditById(editId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/basic/edit', function*(){
        var $self = this;
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        yield (server().basicEdit(editData)
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
    }).get('/dimension/guidePermission/:guideAddrStatus', function*(){//维度设置
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().dimensionPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/dimension/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().dimensionList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dimension/count', function*(){
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().dimensionCount(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dimension/delete', function*(){
        var $self = this;
        var delData = $self.request.query;
        delData.token = this.cookies.get('token');
        yield (server().dimensionDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/dimension/add', function*(){
        var $self = this;
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        yield (server().dimensionAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/dimension/getOneById', function*(){
        var $self = this;
        var editId = $self.request.query;
        editId.token = $self.cookies.get('token');
        yield (server().dimensionEditById(editId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/dimension/edit', function*(){
        var $self = this;
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        yield (server().dimensionEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/assessment/guidePermission/:guideAddrStatus', function*(){//考核方式设置
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().assessPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/assessment/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().assessList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/assessment/count', function*(){
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().assessCount(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/assessment/delete', function*(){
        var $self = this;
        var delData = $self.request.query;
        delData.token = this.cookies.get('token');
        yield (server().assessDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/assessment/add', function*(){
        var $self = this;
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        yield (server().assessAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/assessment/getOneById', function*(){
        var $self = this;
        var editId = $self.request.query;
        editId.token = $self.cookies.get('token');
        yield (server().assessEditById(editId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/assessment/edit', function*(){
        var $self = this;
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        yield (server().assessEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/name/guidePermission/:guideAddrStatus', function*(){//指标名称设置
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().namePermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/name/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().nameList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/name/count', function*(){
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().nameCount(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/name/delete', function*(){
        var $self = this;
        var delData = $self.request.query;
        delData.token = this.cookies.get('token');
        yield (server().nameDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/name/add', function*(){
        var $self = this;
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        yield (server().nameAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/name/getOneById', function*(){
        var $self = this;
        var editId = $self.request.query;
        editId.token = $self.cookies.get('token');
        yield (server().nameEditById(editId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/name/edit', function*(){
        var $self = this;
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        yield (server().nameEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    })
        .get('/yearindex/guidePermission/:guideAddrStatus', function*(){//年度指标设置
            var $self = this;
            var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
            yield (server().yearPermission(page)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
        }).get('/yearindex/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().yearList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/yearindex/count', function*(){
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().yearCount(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/yearindex/delete', function*(){
        var $self = this;
        var delData = $self.request.query;
        delData.token = this.cookies.get('token');
        yield (server().yearDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/yearindex/add', function*(){
        var $self = this;
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        yield (server().yearAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/yearindex/getOneById', function*(){
        var $self = this;
        var editId = $self.request.query;
        editId.token = $self.cookies.get('token');
        yield (server().yearEditById(editId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/yearindex/edit', function*(){
        var $self = this;
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        yield (server().yearEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/allYears/year', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().findYear(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/allName/name', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().findName(token)
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
        var token={token:$self.cookies.get('token')};
        yield (server().findType(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/allDimension/dimension', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().findDimension(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/yearindex/templateExport', function*(){
        var $self = this;
        var fileName = '年度指标导入模板.xlsx';
        yield (fetch(config()['rurl']+`/yearindexset/v1/templateExport`, {
            method : 'GET',
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/yearindex/import', koaBody({multipart:true}),function *(next) {//导入
        var $self = this;
        var fileData = $self.request.body;
        fileData.token = $self.cookies.get("token");
        yield (server().yearImport(fileData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/yearindex/exportFile', function*(){
        var $self = this;
        var count = $self.request.query;
        var fileName ='年度指标'+'.xlsx';
        yield (fetch(config()['rurl']+`/yearindexset/v1/exportExcel${urlEncode(count,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }) .get('/departindex/guidePermission/:guideAddrStatus', function*(){//部门年度指标设置
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().departPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/departindex/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().departList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/departindex/count', function*(){
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().departCount(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/departindex/delete', function*(){
        var $self = this;
        var delData = $self.request.query;
        delData.token = this.cookies.get('token');
        yield (server().departDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/allDepartments/depart', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().findDepart(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/allAssessment/assessment', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().findAssessment(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/departindex/add', function*(){
        var $self = this;
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        yield (server().departAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/departindex/getOneById', function*(){
        var $self = this;
        var editId = $self.request.query;
        editId.token = $self.cookies.get('token');
        yield (server().departEditById(editId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/departindex/edit', function*(){
        var $self = this;
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        yield (server().departEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/departindex/templateExport', function*(){
        var $self = this;
        var fileName = '部门年度指标导入模板.xlsx';
        yield (fetch(config()['rurl']+`/departyearindexset/v1/templateExport`, {
            method : 'GET',
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/departindex/import', koaBody({multipart:true}),function *(next) {//导入
        var $self = this;
        var fileData = $self.request.body;
        fileData.token = $self.cookies.get("token");
        yield (server().departImport(fileData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/editDetailSelf/depart', function*(){
        var $self = this;
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        yield (server().detailEdit(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/editMonthSelf/month', function*(){
        var $self = this;
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        yield (server().detailMonth(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/departindex/exportFile', function*(){  //部门年度指标
        var $self = this;
        var count = $self.request.query;
        var fileName ='部门年度指标'+'.xlsx';
        yield (fetch(config()['rurl']+`/departyearindexset/v1/exportExcel${urlEncode(count,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    })
        .get('/monthindex/guidePermission/:guideAddrStatus', function*(){//部门月度指标设置
            var $self = this;
            var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
            yield (server().monthsPermission(page)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
        }).get('/monthindex/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().monthsList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/monthindex/count', function*(){
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().monthsCount(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/monthindex/delete', function*(){
        var $self = this;
        var delData = $self.request.query;
        delData.token = this.cookies.get('token');
        yield (server().monthsDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/monthindex/add', function*(){
        var $self = this;
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        yield (server().monthsAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/monthindex/getOneById', function*(){
        var $self = this;
        var editId = $self.request.query;
        editId.token = $self.cookies.get('token');
        yield (server().monthsEditById(editId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/monthindex/edit', function*(){
        var $self = this;
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        yield (server().monthsEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/allAssessment/nowMonth', function*(){
        var $self = this;
        var listData = $self.request.query;
        listData.token = this.cookies.get('token');
        yield (server().getListMonthName(listData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/allndexsetCount/nowCount', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().countNowInfo(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/editPostSelf/jobs', function*(){
        var $self = this;
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        yield (server().jobsEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/monthindex/templateExport', function*(){
        var $self = this;
        var fileName = '部门月度指标导入模板.xlsx';
        yield (fetch(config()['rurl']+`/departmonindexset/v1/templateExport`, {
            method : 'GET',
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/monthindex/import', koaBody({multipart:true}),function *(next) {//导入
        var $self = this;
        var fileData = $self.request.body;
        fileData.token = $self.cookies.get("token");
        yield (server().monthjImport(fileData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/monthindex/exportFile', function*(){  //部门月度指标
        var $self = this;
        var count = $self.request.query;
        var fileName ='部门月度指标'+'.xlsx';
        yield (fetch(config()['rurl']+`/departmonindexset/v1/exportExcel${urlEncode(count,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }) .get('/postindex/guidePermission/:guideAddrStatus', function*(){//岗位指标设置
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().postPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/postindex/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().postsList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/postindex/count', function*(){
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().postsCount(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/postindex/delete', function*(){
        var $self = this;
        var delData = $self.request.query;
        delData.token = this.cookies.get('token');
        yield (server().postsDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/postindex/add', function*(){
        var $self = this;
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        yield (server().postsAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/postindex/getOneById', function*(){
        var $self = this;
        var editId = $self.request.query;
        editId.token = $self.cookies.get('token');
        yield (server().postsEditById(editId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/postindex/edit', function*(){
        var $self = this;
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        yield (server().postsEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/allpostindexset/monthNow', function*(){
        var $self = this;
        var listData = $self.request.query;
        listData.token = this.cookies.get('token');
        yield (server().getListPositionName(listData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/allpostindexCount/countNow', function*(){
        var $self = this;
        var token={token:$self.cookies.get('token')};
        yield (server().countPositionInfo(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/postindex/templateExport', function*(){
        var $self = this;
        var fileName = '岗位指标导入模板.xlsx';
        yield (fetch(config()['rurl']+`/positionindexset/v1/templateExport`, {
            method : 'GET',
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).post('/postindex/import', koaBody({multipart:true}),function *(next) {//导入
        var $self = this;
        var fileData = $self.request.body;
        fileData.token = $self.cookies.get("token");
        yield (server().postindexImport(fileData)
            .then((parsedBody) =>{
                $self.body = parsedBody;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/postindex/exportFile', function*(){  //岗位指标指标
        var $self = this;
        var count = $self.request.query;
        var fileName ='岗位指标'+'.xlsx';
        yield (fetch(config()['rurl']+`/positionindexset/v1/positionReport${urlEncode(count,true)}`, {
            method : 'GET',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/mineindex/list', function*(){
        var $self = this;
        var page = $self.request.query;
        page.token = this.cookies.get('token');
        yield (server().minesList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/mineindex/count', function*(){
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().minesCount(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/mineindex/delete', function*(){
        var $self = this;
        var delData = $self.request.query;
        delData.token = this.cookies.get('token');
        yield (server().minesDelete(delData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/mineindex/add', function*(){
        var $self = this;
        var addData = this.request.body;
        addData.token = this.cookies.get('token');
        yield (server().minestsAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/mineindex/getOneById', function*(){
        var $self = this;
        var editId = $self.request.query;
        editId.token = $self.cookies.get('token');
        yield (server().minesEditById(editId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/mineindex/edit', function*(){
        var $self = this;
        var editData = this.request.body;
        editData.token = this.cookies.get('token');
        yield (server().minessEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/export/exportFile', function*(){  //年度报告导出
        var $self = this;
        var count = $self.request.query;
        var fileName ='年度报告'+'.xlsx';
        yield (fetch(config()['rurl']+`/indexhouse/v1/yearReport${urlEncode(count,true)}`, {
            method : 'POST',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/libraryindex/guidePermission/:guideAddrStatus', function*(){
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,token:$self.cookies.get('token')};
        yield (server().libraryPermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/departExport/exportFile', function*(){  //部门年度报告导出
        var $self = this;
        var count = $self.request.query;
        var fileName ='部门年度报告'+'.xlsx';
        yield (fetch(config()['rurl']+`/indexhouse/v1/departYearReport${urlEncode(count,true)}`, {
            method : 'POST',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/departMonExport/exportFile', function*(){  //部门月度报告导出
        var $self = this;
        var count = $self.request.query;
        var fileName ='部门月度报告'+'.xlsx';
        yield (fetch(config()['rurl']+`/indexhouse/v1/departMonReport${urlEncode(count,true)}`, {
            method : 'POST',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/departPosExport/exportFile', function*(){  //岗位报告导出
        var $self = this;
        var count = $self.request.query;
        var fileName ='岗位报告'+'.xlsx';
        yield (fetch(config()['rurl']+`/indexhouse/v1/positionReport${urlEncode(count,true)}`, {
            method : 'POST',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/departPerExport/exportFile', function*(){  //个人报告导出
        var $self = this;
        var count = $self.request.query;
        var fileName ='个人报告'+'.xlsx';
        yield (fetch(config()['rurl']+`/indexhouse/v1/personReport${urlEncode(count,true)}`, {
            method : 'POST',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/departPerExport/exportFile', function*(){  //维度报告导出
        var $self = this;
        var count = $self.request.query;
        var fileName ='维度报告'+'.xlsx';
        yield (fetch(config()['rurl']+`/indexhouse/v1/deminsionReport${urlEncode(count,true)}`, {
            method : 'POST',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/departTypeExport/exportFile', function*(){  //指标类型报告导出
        var $self = this;
        var count = $self.request.query;
        var fileName ='指标类型报告'+'.xlsx';
        yield (fetch(config()['rurl']+`/indexhouse/v1/indexTypeReport${urlEncode(count,true)}`, {
            method : 'POST',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    }).get('/departDimExport/exportFile', function*(){  //部门维度报告导出
        var $self = this;
        var count = $self.request.query;
        var fileName ='部门维度报告'+'.xlsx';
        yield (fetch(config()['rurl']+`/indexhouse/v1/deminsionReport${urlEncode(count,true)}`, {
            method : 'POST',
            headers : {'userToken' : $self.cookies.get('token')}
        }).then(function(res){
            $self.set('content-type', 'application/vnd.ms-excel;charset=utf-8');
            $self.set('Content-Disposition', 'attachment;  filename='+encodeURI(fileName));
            return res.buffer();
        }).then(function(data){
            $self.body = data;
        }));
    })
    return router;
};
