app

    .factory("registroService", function($resource, configRegistro) {
    var url = configRegistro.registroUrl;
    return {

        Curso: $resource(url + "cursos/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },


        }),
        Colegio: $resource(url + "colegios/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            

        }),
        CargoEscolar: $resource(url + "cargosescolares/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            

        }),
        Autor: $resource(url + "autors/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "query": {
                method: 'GET',
                isArray: false,
                transformResponse: function(r) {
                    var results = [];
                    var options = {};
                    results = angular.fromJson(r).results ? angular.fromJson(r).results : angular.fromJson(r);
                    options = angular.fromJson(r).options ? angular.fromJson(r).options : {
                        "count": 1,
                        "pages": 1,
                        "page": 1,
                        "range": "all",
                        "previous": null,
                        "page_size": 1,
                        "next": null
                    };
                    return { results: results, options: options };
                }
            }

        }),


    };
});
