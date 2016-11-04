﻿var baseUrl = 'http://localhost:9000/';
var loginUrl = 'http://localhost:9001/auth_web/';

var config = {
    baseUrl: baseUrl,
    loginUrl: loginUrl,
};

app.value('config', config);

app
    .config(function($httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
        $httpProvider.interceptors.push('authInterceptorService');
    })

.run(function($rootScope, $state, $stateParams, $window, authService) {
    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    /*******************************agregado**************************/
    //console.log("run");

    authService.fillAuthData();
    if (authService.authentication.isAuth === false) {
        //$window.location = loginUrl;
    }
    /******************************************************************/

})


.config(function($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
})

/*
angular.module('app').config(function($mdDateLocaleProvider) {
    $mdDateLocaleProvider.formatDate = function(date) {
       return moment(date).format('YYYY-MM-DD');
    };
});

*/
.config(function($mdDateLocaleProvider) {
    $mdDateLocaleProvider.shortDays = [
        'Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'
    ];

    $mdDateLocaleProvider.formatDate = function(date) {
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        return day + '/' + (monthIndex + 1) + '/' + year;
    };
})

.config(
    function($mdIconProvider, $$mdSvgRegistry) {
        // Add default icons from angular material para versiones no estables mayores a v1.0.9
        // la version v1.0.9 no necesita hacer esto
        $mdIconProvider
            .icon('md-close', $$mdSvgRegistry.mdClose)
            .icon('md-menu', $$mdSvgRegistry.mdMenu)
            .icon('md-toggle-arrow', $$mdSvgRegistry.mdToggleArrow);
    }
);



app.constant('ROUTERS_T', [{
    "estado.nombre.1": {
        "url": "/url",
        "data": {
            "section": "Menu name",
            "page": "Menu item name"
        },
        "templateUrl": "appname_web_apps/appname_web/views/model/index.html"
    }

}, {
    "estado.nombre.2": {
        "url": "/url2",
        "data": {
            "section": "Menu name2",
            "page": "Menu item name2"
        },
        "templateUrl": "appname_web_apps/appname_web/views/model2/index.html"
    }

}]);


app.constant('ROUTERS', [{
    "estado.nombre": {
        "url": "/url",
        "data": {
            "section": "Menu name",
            "page": "Menu item name"
        },
        "templateUrl": "appname_web_apps/appname_web/views/model/index.html"
    },

}, {
    "registro": {
        "url": "/registro",
        "views": {
            "": {
                "templateUrl": "app/views/layout.html"
            },
            "aside": {
                "templateUrl": "app/views/aside.html"
            },
            "content": {
                "templateUrl": "app/views/content.html"
            }
        }
    },
    "registro.registro": {
        "url": "/registro",
        "template": "<div ui-view ></div>"
    }
}, {
    "registro.registro.curso": {
        "url": "/curso",
        "data": {
            "section": "Registro",
            "page": "Cursos"
        },
        "templateUrl": "sysce_web_apps/registro_web/views/cursos/index.html"
    },
    "registro.registro.cursosNew": {
        "url": "/cursos/new",
        "data": {
            "section": "Registro",
            "page": "Cursos"
        },
        "templateUrl": "sysce_web_apps/registro_web/views/cursos/form.html"
    },
    "registro.registro.cursosEdit": {
        "url": "/cursos/:id/edit",
        "data": {
            "section": "Registro",
            "page": "Cursos"
        },
        "templateUrl": "sysce_web_apps/registro_web/views/cursos/form.html"
    }
},{
    "registro.registro.colegio": {
        "url": "/colegio",
        "data": {
            "section": "Registro",
            "page": "Colegio"
        },
        "templateUrl": "sysce_web_apps/registro_web/views/colegios/index.html"
    },
    "registro.registro.colegiosNew": {
        "url": "/colegios/new",
        "data": {
            "section": "Registro",
            "page": "Colegio"
        },
        "templateUrl": "sysce_web_apps/registro_web/views/colegios/form.html"
    },
    "registro.registro.colegiosEdit": {
        "url": "/colegios/:id/edit",
        "data": {
            "section": "Registro",
            "page": "Colegio"
        },
        "templateUrl": "sysce_web_apps/registro_web/views/colegios/form.html"
    }
}, {
    "registro.registro.cargoescolar": {
        "url": "/cargoescolar",
        "data": {
            "section": "Registro",
            "page": "CargoEscolar"
        },
        "templateUrl": "sysce_web_apps/registro_web/views/cargoescolar/index.html"
    },
    "registro.registro.cargosescolaresNew": {
        "url": "//new",
        "data": {
            "section": "Registro",
            "page": "CargoEscolar"
        },
        "templateUrl": "sysce_web_apps/registro_web/views/cargoescolar/form.html"
    },
    "registro.registro.cargosescolaresEdit": {
        "url": "/cargosescolares/:id/edit",
        "data": {
            "section": "Registro",
            "page": "CargoEscolar"
        },
        "templateUrl": "sysce_web_apps/registro_web/views/cargoescolar/form.html"
    }
},{
    
    "registro.registro.autores": {
        "url": "/autores",
        "data": {
            "section": "Catálogo",
            "page": "Autores"
        },
        "templateUrl": "sysce_web_apps/registro_web/views/autores/index.html"
    },
    "registro.registro.autoresNew": {
        "url": "/autores/new",
        "data": {
            "section": "Catálogo",
            "page": "Autores"
        },
        "templateUrl": "sysce_web_apps/registro_web/views/autores/form.html"
    },
    "registro.registro.autoresEdit": {
        "url": "/autores/:id/edit",
        "data": {
            "section": "Catálogo",
            "page": "Autores"
        },
        "templateUrl": "sysce_web_apps/registro_web/views/autores/form.html"
    }

}]);
