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
         	 
		
          				  
