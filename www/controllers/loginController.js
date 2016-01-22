app.controller('loginController', ['$scope', function ($scope) {
    
    // Initialize your app
    var myApp = new Framework7();

    // Export selectors engine
    var $$ = Dom7;


    $$('.back').on('click', function () {
        // myApp.alert('teste','Usuário e/ou senha incorretos');
        window.history.back();
    });

}]);