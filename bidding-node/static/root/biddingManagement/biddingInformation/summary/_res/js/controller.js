
var app = angular.module('summary', ['toastr','angularjs-dropdown-multiselect']);
app.controller('summaryCtrl', function($scope, infoSer,toastr){
    $scope.cities = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取地区
    infoSer.getCity().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
            // $scope.workOptions.push("汇总")
        } else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取地区
    infoSer.getbiddingType().then(function(response){
        if(response.data.code == 0){
            $scope.biddingType = response.data.data;
        } else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.getSummary ={onSelectionChanged(){
        infoSer.summaryInfo($scope.cities).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
                console.log($scope.summaryLists[0].biddingMap)
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }}
    // $scope.getSummary = function(cities){
    //     $scope.cities = cities;
    //     infoSer.summaryInfo($scope.cities).then(function(response){
    //         if(response.data.code == 0){
    //             $scope.summaryLists = response.data.data;
    //             // for(var i = 0;i<$scope.summaryLists.length;i++){
    //             //     var biddingMap = $scope.summaryLists[i].biddingMap;
    //             //     // console.log(biddingMap)
    //             //     for(var j = 0;j<biddingMap.length;j++){
    //             //         var counts1 = biddingMap[j].counts;
    //             //         var remark1 = biddingMap[j].remark;
    //             //         console.log(counts1)
    //             //         console.log(remark1
    //             //         )
    //             //     }
    //             // }
    //         }else{
    //             toastr.error( response.data.msg, '温馨提示');
    //         }
    //     })
    // }
});





