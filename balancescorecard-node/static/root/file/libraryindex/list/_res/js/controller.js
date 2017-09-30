var app = angular.module('libraryindexList', ['ng-pagination','toastr']);
app.controller('libraryindexListCtrl',function($scope,libraryindexSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
    libraryindexSer.listContent().then(function(response){
        if(response.data.code==0) {
            $scope.firstLists = response.data.data;
            }
        })
    //点击更多详细
    $scope.moreList1 = function(event){
        angular.forEach($scope.firstLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList1 = false
            }
        });
        event._moreList1 = !event._moreList1;
      };
    $scope.moreList2 = function(event){
        angular.forEach($scope.firstLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList2 = false
            }
        });
        event._moreList2 = !event._moreList2;
    };
    $scope.moreList3 = function(event){
        angular.forEach($scope.firstLists.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList3 = false
            }
        });
        console.log(event.id)
        event._moreList3 = !event._moreList3;

    };
    });
