var baseUrl = 'http://localhost:9000/';
var loginUrl = 'http://localhost:9001/auth_web/';
var iotecaUrl = 'http://localhost:9001/sysce_web/';


var clientId = 'E9EGIi8jUNCjj0wzdd86WmBVNC6h0uqUrE0Pl5Na';
var clientSecret = 'gbT9oRpaU0YEKWCYHMctogvXmUmDblPJgJRm8PfVxB5soG8iqdWoLVjElDJazHHOEbrbnSpaqc6es1YoHQNuPaMPYIvYjL3itv46bDcRsYFdJYxQXLW14x4Qgxoy9TWs';
var grantType = 'password';

var config = {

    baseUrl: baseUrl,
    loginUrl: loginUrl,
    iotecaUrl: iotecaUrl,

    clientId: clientId,
    clientSecret: clientSecret,
    grantType: grantType,

};

app.value('config', config);

app
    .run(function($rootScope, $state, $stateParams, $window, loginService) {
        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
        // to active whenever 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        /*******************************agregado**************************/
        console.log("run");

        if (loginService.authentication.isAuth === false) {
            $window.location = loginUrl;
        }
        /******************************************************************/

    })

.config(function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    //$httpProvider.interceptors.push('authInterceptorService');
})

.config(function($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
});
