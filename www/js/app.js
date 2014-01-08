function MainCtrl($scope,$rootScope,$http,$window){
	console.log("Entered the controller");
	//var storage=$window.localStorage;
	$scope.checkLocation = function(){

		navigator.geolocation.getCurrentPosition($scope.onSuccess, 
				$scope.onError, 
				{ 	enableHighAccuracy : false, 
					maximumAge : 3000,
					timeout : 60000,
					frequency: 5000
				});
	}

	$scope.onSuccess = function(position) {
		console.log("Got to onSuccess");
		var lat_lower = 28.09905;
		var lat_upper = 28.97912;
		var long_upper = 77.55404
		var long_lower = 76.79255;
		$scope.latitude = position.coords.latitude;
		$scope.longitude = position.coords.longitude;
		$scope.accuracy = position.coords.accuracy;

		if($scope.latitude >= lat_lower && $scope.latitude<=lat_upper && $scope.longitude <=long_upper && $scope.longitude>=long_lower)
		{
			$scope.msg="In NCR, mate!";
		}
		else
		{
			$scope.msg="Not in NCR. Sorry!";
		}
	}

	$scope.onError = function(error) {
		console.log("got to on error");
    	alert('code: '    + error.code    + '\n' +
        	  'message: ' + error.message + '\n');
	}
}