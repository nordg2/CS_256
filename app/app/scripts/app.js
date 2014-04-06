'use strict';

angular
  .module('appApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/registration', {
        templateUrl: 'views/registration.html',
        controller: 'RegistrationCtrl'
      })
      .when('/forgotpassword', {
        templateUrl: 'views/forgotpassword.html',
        controller: 'ForgotpasswordCtrl'
      })
      .when('/widgets', {
        templateUrl: 'views/widgets.html',
        controller: 'WidgetsCtrl'
      })
      .when('/widgets2', {
        templateUrl: 'views/widgets2.html',
        controller: 'Widgets2Ctrl'
      })
      .when('/lecturelist', {
        templateUrl: 'views/lecturelist.html',
        controller: 'LecturelistCtrl'
      })
      .when('/lecturevideo', {
        templateUrl: 'views/lecturevideo.html',
        controller: 'LecturevideoCtrl'
      })
      .when('/lecturequestion', {
        templateUrl: 'views/lecturequestion.html',
        controller: 'LecturequestionCtrl'
      })
      .when('/lecturequestion', {
        templateUrl: 'views/lecturequestion.html',
        controller: 'LecturequestionCtrl'
      })
      .when('/lecturequestions', {
        templateUrl: 'views/lecturequestions.html',
        controller: 'LecturequestionsCtrl'
      })
      .when('/lecturequestions', {
        templateUrl: 'views/lecturequestions.html',
        controller: 'LecturequestionsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
