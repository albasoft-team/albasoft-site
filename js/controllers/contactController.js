
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

		//$scope.map = { center: { latitude: 14.721760679027714, longitude: -17.3529052734375 }, zoom: 6 };
		// //Initialisation des variables
			$scope.map = {
				center: {
					latitude: 14.0880562, //Position initial de la carte
					longitude: -14.3249034
				},
				zoom: 6
			};
        //
			$scope.markers = [{
				coord: {
					latitude: 14.721760679027714, //Coordonnées où placer le point
					longitude: -17.3529052734375
				},
				email: "netapsys@netapsys.fr", //Propriété métier, pour les afficher à l'utilisateur lorsqu'il sélectionne le point par exemple
				icon: "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png", //Icone personnalisée
				id: 412,
				show : true
			}];
			// $scope.clickMarker = function(marker) {
			// 	alert(marker.email); //Affichera l'email du point sur lequel on a cliqué
			// };

}]);