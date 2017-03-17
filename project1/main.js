var TinuaFashionApp =  angular.module('TinuaFashionApp', ['ui.router']);
                  TinuaFashionApp.controller( 'titleCtrl', function($scope){
				 $scope.title = "Fashion House";
				 
				  });
	 TinuaFashionApp.config(function($stateProvider) {

                $stateProvider.state('signinForm', {
                	url:'/signinForm',
                    templateUrl: '/template/signinForm.html'
                  
                });
				
				$stateProvider.state('signIn', {
                	url:'/signIn',
                    templateUrl: '/template/signIn.html',
                    controller: 'SignInCtrl'
                });

                $stateProvider.state('createAccount', {
                	url:'/createAccount',
                    templateUrl: '/template/createAccount.html'
					controller:'CreateAccountCtrl'
                });
				
				 $stateProvider.state('shop', {
                	url:'/shop',
                    templateUrl: '/template/shop.html'
                });
				
				 $stateProvider.state('brand', {
                	url:'/brand',
                    templateUrl: '/template/brand.html'
                });	
				
	 });
         	 
		TinuaFashionApp.controller( 'SignInCtrl', function($scope,$location){
				 $scope.submit = function(){
					 var uemail = $scope.userEmail;
					 var password = $scope.password;
					 if($scope.uemail == 'admin' && scope.password == 'admin'){
						 $location.path('/dashbord');
					 }
					 
				 };
				 
				  });
          				  
		 TinuaFashionApp.factory('userFactory',function(){
			     var user = [
				 { title: 'Mr' firstName: 'Abu', lastName: 'Taher', userEmail: 'taher@gmail.com', userTel: '0755446', password: 'admin'},
				 { title: 'Mrs' firstName: 'Zara', lastName: 'islam', userEmail: 'rayqa@yahoo.com', userTel: '12345', password: '123456'},
				  { title: 'Dr' firstName: 'Ria', lastName: 'Islam', userEmail: 'liza@gmail.com', userTel: '12345', password: '98765'},
				{ title: 'Mss' firstName: 'Raha', lastName: 'Uddin', userEmail: 'hure@yahoo.co.uk', userTel: '3567888', password: '34567'}
				
				 ];
				 
				 var factory = {};
				 factory.getUser = function (){
					 return user;
				 };
				 factory.postUser = function(user){
					 
				 };
				 return factory;
			 
		 });
		 
         TinuaFashionApp.controller( 'CreateAccountCtrl', function($scope,userFactory){
			             $scope.user = [];
						 init();
						  function init{
							  $scope.user = userFactory.getUser();
						  }
			      $scope.createAccount = function(){
					 $scope.user.push(
					        $scope.newUser.title,
					       $scope.newUser.firstName,
						   $scope.newUser.lirstName,
						   $scope.newUser.userEmail,
						   $scope.newUser.userTel,
						   $scope.newUser.password,
				  }) ;
				  };
			     
		 });
 