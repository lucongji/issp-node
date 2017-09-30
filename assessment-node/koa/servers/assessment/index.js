var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){

    this.basicInfoList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/baseinfo/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取总条数
    this.getBasicInfoTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/baseinfo/v1/count',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 添加
    this.basicInfoAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/baseinfo/v1/add`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 编辑
    this.basicInfoEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/baseinfo/v1/edit`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    //删除
    this.basicInfoDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/baseinfo/v1/delete/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取ID
    this.findBasicInfoId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/baseinfo/v1/find/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    this.demandList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/demandcost/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取总条数
    this.getCountDemandTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/demandcost/v1/count',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 添加
    this.demandAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/demandcost/v1/add`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 编辑
    this.demandEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/demandcost/v1/edit`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    //删除
    this.demandDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/demandcost/v1/delete/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取ID
    this.findDemandById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/demandcost/v1/find/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
//查询所有项目
    this.projectsAllDemandById = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/demandcost/v1/porjects?_includes=project,id',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
/*劳动成本*/
    this.labourList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/labourcost/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取总条数
    this.getCountLabourTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/labourcost/v1/count',
            headers : {
                userToken:argvs.token
            }

        };
        return request(options);
    };
    // 添加
    this.labourAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/labourcost/v1/add`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 编辑
    this.labourEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/labourcost/v1/edit`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    //删除
    this.labourDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/labourcost/v1/delete/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取ID
    this.findLabourById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/labourcost/v1/find/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.projectsAllLabourById = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/labourcost/v1/porjects?_includes=project,id',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    /*劳动成本*/
    /*其他成本*/
    this.otherList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/anothercost/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取总条数
    this.getCountotherTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/anothercost/v1/count',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 添加
    this.otherAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/anothercost/v1/add`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 编辑
    this.otherEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/anothercost/v1/edit`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    //删除
    this.otherDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/anothercost/v1/delete/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取ID
    this.findOtherById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/anothercost/v1/find/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.projectsAllOtherById = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/anothercost/v1/porjects?_includes=project,id',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    /*其他成本*/
    /*项目费用*/
    this.costList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/projectcost/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取总条数
    this.getCountToCostTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/projectcost/v1/count',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 添加
    this.costAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/projectcost/v1/add`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 编辑
    this.costEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/projectcost/v1/edit`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    //删除
    this.costDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/projectcost/v1/delete/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取ID
    this.findCostById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/projectcost/v1/find/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.projectsAllCostById = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/projectcost/v1/porjects?_includes=project,id',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    /*项目费用*/
    /*项目利润率*/
    this.profitList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/projectprofitAct/v1/profitPageList`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    /*项目利润率*/
    /*项目成长能力*/
    this.growList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/abilitygrowup/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取总条数
    this.getCountToGrowTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/abilitygrowup/v1/count',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 添加
    this.growAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/abilitygrowup/v1/add`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 编辑
    this.growEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/abilitygrowup/v1/edit`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    //删除
    this.growDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/abilitygrowup/v1/delete/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取ID
    this.findGrowById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/abilitygrowup/v1/find/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.projectsAllGrowById = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/abilitygrowup/v1/porjects?_includes=project,id',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    /*项目成长能力*/
    /*市场反应和创新能力*/
    this.informationList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/marketsesponse/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取总条数
    this.getCountToInformationTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/marketsesponse/v1/count',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 添加
    this.informationAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/marketsesponse/v1/add`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 编辑
    this.informationEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/marketsesponse/v1/edit`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    //删除
    this.informationDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/marketsesponse/v1/delete/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取ID
    this.findInformationById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/marketsesponse/v1/find/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.projectsAllInformationById = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/marketsesponse/v1/porjects?_includes=project,id',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    /*市场反应和创新能力*/
    /*项目问题受理和处理*/
    this.handList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/problemdispose/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取总条数
    this.getCountToHandTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/problemdispose/v1/count',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 添加
    this.handAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/problemdispose/v1/add`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 编辑
    this.handEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/problemdispose/v1/edit`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    //删除
    this.HandDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/problemdispose/v1/delete/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取ID
    this.findHandById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/problemdispose/v1/find/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.projectsAllHandById = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/problemdispose/v1/porjects?_includes=project,id',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //定性指标
    this.qualitativeEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/problemdispose/v1/qualitative`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //定量指标
    this.rationEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/problemdispose/v1/ration`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    /*项目问题受理和处理*/
    /*输出评估结果---项目金额*/
    this.moneyList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/businessevaluate/projectamount/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取总条数
    this.getCountToMoneyTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/businessevaluate/projectamount/v1/count',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.moneyDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/businessevaluate/projectamount/v1/delete/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 添加
    this.moneyAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/businessevaluate/projectamount/v1/add`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 编辑
    this.moneyEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/businessevaluate/projectamount/v1/edit`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取ID
    this.findMoneyById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/businessevaluate/projectamount/v1/find/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.projectsAllMoneyById = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/businessevaluate/projectamount/v1/porjects?_includes=project,id',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.typeListById = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + `/businessevaluate/projectamount/v1/findbyinfo/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //项目成长能力列表
    this.proGrowList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/outabilitygrowup/v1/list`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //项目利润率列表
    this.rateList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/outprojectprofitAct/v1/profitscope`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //市场反应和能力创新
    this.newList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/outproblemdispose/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取总条数
    this.getCountToNewTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/outproblemdispose/v1/count',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //客户关系
    this.relationshipList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/outmarketsesponse/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取总条数
    this.getCountToRelationshipTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/outmarketsesponse/v1/count',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    /*输出评估结果---项目金额*/
    /*内部评估*/
    this.frontLineList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/frontline/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取总条数
    this.getCountToFrontLineTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/frontline/v1/count',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 添加
    this.frontLineAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/frontline/v1/add`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 编辑
    this.frontLineEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/frontline/v1/edit`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    //删除
    this.frontLineDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/frontline/v1/delete/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取ID
    this.findFrontLineById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/frontline/v1/find/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.projectsAllFrontLineById = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/frontline/v1/porjects?_includes=project,id',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };


    this.chargeList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/business/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取总条数
    this.getCountToChargeTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/business/v1/count',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 添加
    this.chargeAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/business/v1/add`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 编辑
    this.chargeEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/business/v1/edit`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    //删除
    this.chargeDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/business/v1/delete/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取ID
    this.findChargeById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/business/v1/find/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.projectsAllChargeById = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/business/v1/porjects?_includes=project,id',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
//项目负责人
    this.projectList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/projectprincipal/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取总条数
    this.getCountToProjectTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/projectprincipal/v1/count',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 添加
    this.projectAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/projectprincipal/v1/add`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 编辑
    this.projectEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/projectprincipal/v1/edit`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    //删除
    this.projectDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/projectprincipal/v1/delete/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取ID
    this.findProjectById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/projectprincipal/v1/find/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.projectsAllProjectById = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/projectprincipal/v1/porjects?_includes=project,id',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    /*内部评估*/
    /*商务评估结果汇总*/
    this.resultList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/collect/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取总条数
    this.getCountToResultTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/collect/v1/count',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //冻结
    this.resultCongeal = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/collect/v1/freeze/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
//解冻
    this.resultThaw = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/collect/v1/unfreeze/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    // 添加
    this.resultAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/collect/v1/add`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.projectsAllResultById = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/collect/v1/porjects?_includes=project,id',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };

    //删除
    this.resultDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/collect/v1/delete/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    // 编辑
    this.resultEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/collect/v1/edit`,
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //获取ID
    this.findResultById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/collect/v1/find/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //查询所有地区
    this.projectsAllAreaById = function (argvs) {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['rurl'] + '/collect/v1/areas?_includes=area',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //汇总
    this.resultSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/collect/v1/total?project='+encodeURIComponent(argvs.proData)+'&area='+encodeURIComponent(argvs.proArea),
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    /*商务评估结果汇总*/
    this.logout = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['user'] + `/v1/sign-out/${argvs.token}`,
            form:argvs
        };
        return request(options);
    };
    this.listSetting = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/list?limit=10&page=${argvs.page}`,
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
    this.getpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/getOneById/${argvs.id}`,
        };
        return request(options);
    };
    this.getListpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/listOperateById/${argvs.id}`,
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
            uri : config()['rurl'] + '/baseinfo/v1/setButtonPermission',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //导航权限
    this.siginNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/baseinfo/v1/sonPermission',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //项目基本信息权限
    this.baseInfoPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/baseinfo/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //需求成本
    this.demandPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/demandcost/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    }
    //劳动成本
    this.labourPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/labourcost/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //其他
    this.otherPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/anothercost/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //项目费用
    this.costPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/projectcost/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //项目利润率
    this.profitPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/projectprofitAct/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //项目成长能力
    this.growPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/abilitygrowup/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //项目基本信息
    this.informationPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/marketsesponse/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //项目问题受理
    this.handlePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/problemdispose/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //项目金额
    this.moneyPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/businessevaluate/projectamount/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //项目成长能力
    this.progrowPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/outabilitygrowup/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //项目利润率
    this.ratePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/outprojectprofitAct/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //市场反应和创新能力
    this.newPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/outproblemdispose/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //客户关系指标
    this.relationshipPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/outmarketsesponse/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //汇总
    this.resultPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/collect/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //新加的
    this.getarea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/baseinfo/v1/find/area`,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.getname = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/baseinfo/v1/find/marketProject`,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.getpayment = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/baseinfo/v1/find/money?projectName=`+argvs.projectName,
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    return this;
}