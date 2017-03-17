(function() {
    'use strict';

	angular
		.module('TinuaFashionApp', ['ui.router']).config(function($stateProvider) {

                $stateProvider.state('signin', {
                	url:'/signin',
                    templateUrl: '/template/sign_in.html',
                    controller: 'SignInCtrl'
                });
                
                $stateProvider.state('signup', {
                	url:'/signup',
                    templateUrl: '/template/creat_an_account.html',
                    controller: 'SignUpCtrl'
                });

                $stateProvider.state('signupForm', {
                	url:'/signupForm',
                    templateUrl: '/template/sign_in_form.html'
                });
			
		});
})();