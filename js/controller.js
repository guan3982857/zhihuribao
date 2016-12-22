var ctrl=angular.module('controller',[]);
ctrl.controller('theme',function ($scope,$http) {
    $http({
        method:'get',
        url:'php/api.php?url=http://news-at.zhihu.com/api/4/themes',
        responseType:'json'
    }).then(function (res) {
        $scope.list=res.data.others
    })
});
ctrl.controller('list',function ($scope,$http,$routeParams) {
    $http({
        method:'get',
        url:'php/api.php?url=http://news-at.zhihu.com/api/4/theme/'+$routeParams.id,
        responseType:'json'
    }).then(function (res) {
        $scope.list=res.data.stories;
    })
});
ctrl.controller('index',function ($scope,$http) {
    $http({
        method:'get',
        url:'php/api.php?url=http://news-at.zhihu.com/api/4/news/latest',
        responseType:'json'
    }).then(function (res) {
        $scope.list=res.data.stories;
    })
});
ctrl.controller('show',function ($scope,$http,$routeParams) {
    $http({
        method:'get',
        url:'php/api.php?url=http://news-at.zhihu.com/api/4/news/'+$routeParams.id,
        responseType:'json'
    }).then(function (res) {
        $scope.list=res.data;
        // console.log(res)
    })
});
