var CalculatorService = angular.module('CalculatorService', [])
.service('Calculator', function () {
    this.square = function (a) { return a*a};

});

    var api = angular.module('RequestService', []).service('Request',requestService);

    requestService.$inject = ['$http','$q', '$ionicLoading'];
    function requestService($http,$q, $ionicLoading)
    {
        var base_url = "http://web-s7.com/";

        return {
            get: function (url) {
                var deferred = $q.defer();
                $http({
                    method: "get",
                    url: base_url + url
                }).success(function (data) {
                    deferred.resolve(data);
                }).error(function (err) {
                    deferred.reject(err);
                });
                return deferred.promise;
            },
            post: function (url,data) {
                var deferred = $q.defer();
                $http({
                    method: "post",
                    url: base_url + url,
                    transformRequest: function(obj) {
                        var str = [];
                        for(var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    },
                    data: data,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).success(function (data) {
                    deferred.resolve(data);
                    $ionicLoading.hide();
                }).error(function (data) {
                    deferred.reject(data);
                    $ionicLoading.hide();
                });
                return deferred.promise;
            }
        }
    }
