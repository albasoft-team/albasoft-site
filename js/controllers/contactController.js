
albasoftApp.controller('contactController',['$scope','$http', '$state',

    function ($scope, $http, $state) {

	    $scope.$parent.initMenuStyle();
        $scope.$parent.contact = 'linkItem current-menu-item';
		
		 $scope.stContact = {"background-image":"url(img/bandeau-contact1.jpg)",
		"background-repeat":"no-repeat",
		 "background-size": "100% 100%"};

		$scope.formData = {};
		$scope.MessagesInfo = [];
		$scope.contactManager = function () {
			$scope.MessagesInfo.splice(0,$scope.MessagesInfo.length);
			$http({
				method : 'post',
				url : 'apropos/contact.php',
				data : {
					nom : $scope.formData.Nom,
					prenom : $scope.formData.Prenom,
					email : $scope.formData.Email,
					message : $scope.formData.Message
				}
			}).then(function (data, status, headers, config) {
				console.log(data);
				if (data.message !== '') {
					$state.go('home');
				}else {
						$scope.MessagesInfo.push(data.message);
					return;
				}
			},(function (resonse){
				$scope.MessagesInfo = [];
				_.forEach(resonse.message, function(item) {
					console.log(item);
					$scope.MessagesInfo.push(item);
				});
				return;
			}))
		}

}]);