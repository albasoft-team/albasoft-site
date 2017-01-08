
'use strict';

albasoftApp.controller('serviceController',['$scope','serviceFactory',

    function ($scope,serviceFactory) {
        console.log('ici');
	    $scope.$parent.initMenuStyle();
        $scope.$parent.service = 'linkItem current-menu-item';
		$scope.stService = {"background-image":"url(img/service.jpg)"};
        $scope.services = serviceFactory.getServices()
            .then(function (services) {
                $scope.services = services.data;
            }, function (msg) {

                alert(msg);
            });
    }]);
