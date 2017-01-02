'use strict';

var albasoftApp = angular.module('albasoftApp', ['ui.router','ngTouch','ngAnimate','anim-in-out']);

albasoftApp.config(function ($stateProvider, $urlRouterProvider,$locationProvider) {

    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
           url : '/',
            templateUrl : 'templates/content.html',
            controller : 'homeController'
        })
        .state('nos-services', {
            url : '/nos-services',
            templateUrl : 'templates/nos-services.html',
            controller : 'serviceController'
        })
        .state('a-propos', {
            url : '/a-propos',
            templateUrl : 'templates/a-propos.html',
            controller : 'apropoController'
        })
        .state('temoignages', {
            url : '/temoignages',
            templateUrl : 'templates/temoignages.html',
            controller : 'temoignageController'
        })
        .state('contact', {
            url : '/contact',
            templateUrl : 'templates/contact.html',
            controller : 'contactController'
        })
        .state('acceuil', {
            url : '/',
            templateUrl : 'templates/content.html',
            controller : 'homeController'
        });

 })
/*.run(['$rootScope', '$state', '$stateParams', function ($rootScope,$state,$stateParams) {
    $rootScope.controllerName = "homeController";
    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams){
            console.log('testApp#run#stateChangeStart; from:', fromState.name, ' to:', toState.name);
            switch (toState.name)
            {
                case 'home.nos-services' :
                    $rootScope.controllerName = 'serviceController';
                    break;
                case 'home.a-propos' :
                    $rootScope.controllerName = 'apropoController';
                    break;
                case 'home.temoignages' :
                    $rootScope.controllerName = 'temoignageController';
                    break;
                case 'home.contact' :
                    $rootScope.controllerName = 'contactController';
                    break;
                default :
                    $rootScope.controllerName = 'homeController';
                    break;
            };
        });
}]);*/