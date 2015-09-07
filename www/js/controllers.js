var controler = angular.module('starter.controllers', ['RequestService']);

controler.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
});

controler.controller('PlaylistsCtrl', function($scope, Request) {

  Request.post("test.php", {action: 'playlists', channelId: 'UCd8tHv1A1VsTL7WS9yQ3eGg'}).then(function (response) {
    $scope.playlists = angular.fromJson(response);
    console.log(response);
  });

});

controler.controller('PlaylistCtrl', function($scope, $stateParams, Request) {

  Request.post("test.php", {action: 'playlistDetail', channelPlaylistId: $stateParams.playlistId}).then(function (response) {
    $scope.playlistDetail = angular.fromJson(response);;
    console.log($scope.playlistDetail);
  });

  Request.post("test.php", {action: 'playlistVideos', channelPlaylistId: $stateParams.playlistId}).then(function (response) {
    $scope.playlistVideos = angular.fromJson(response);
    console.log($scope.playlistVideos);
  });

  console.log($scope);

});

controler.controller('VideoCtrl', function($scope, $stateParams, Request) {

  $scope.videoId   = $stateParams.videoId;
  Request.post("test.php", {action: 'video', videoId: $stateParams.videoId}).then(function (response) {
    $scope.videos = angular.fromJson(response);
    console.log(response);
  });

});


