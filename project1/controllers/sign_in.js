TinuaFashionApp.controller( 'SignInCtrl', function($scope,$location){
				 $scope.submit = function(){
					 var uemail = $scope.userEmail;
					 var password = $scope.password;
					 if($scope.uemail == 'admin' && scope.password == 'admin'){
						 $location.path('/dashbord');
					 }
					 
				 };
				 
				  });