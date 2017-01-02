
albasoftApp.controller('contactController',['$scope','$http', '$state',

    function ($scope, $http, $state) {

	    $scope.$parent.initMenuStyle();
        $scope.$parent.contact = 'linkItem current-menu-item';
		
		 $scope.stContact = {"background-image":"url(img/contact.jpg)",
		"background-repeat":"no-repeat",
		 "background-size": "100% 100%"};

		$scope.formData = {};
		$scope.contactManager = function () {
			$http({
				method : 'post',
				url : 'apropos/contact.php',
				data : {
					nom : $scope.formData.Nom,
					prenom : $scope.formData.Prenom,
					email : $scope.formData.Email,
					message : $scope.formData.Message
				}
			}).then(function (resonse) {
				console.log(data);
				if (data.data.status === "success") {

					$state.go('home');
				}

				if (data.data.status === "errors") {
					$scope.MessagesInfo = [];
					_.forEach(data.data.message, function(item) {
						console.log(item);
						$scope.MessagesInfo.push(item);
					});
					return;
				}
			},(function (resonse){
				$scope.MessagesInfo = [];
				_.forEach(data.data.message, function(item) {
					console.log(item);
					$scope.MessagesInfo.push(item);
				});
				return;
			}))
		}

}]);