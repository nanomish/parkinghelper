'use strict';

angular.module('logaApp.auth', ['logaApp.constants', 'logaApp.util', 'ngCookies', 'ngRoute'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
