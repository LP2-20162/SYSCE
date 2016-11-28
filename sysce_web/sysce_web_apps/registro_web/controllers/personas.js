app
// =========================================================================
// Show View and Delete Persona 
// =========================================================================
    .controller("PersonaCtrl", function($scope, $state, $stateParams, registroService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'nombre';
    var params = {};
    $scope.lista = [];
    $scope.persona = {};

    $scope.list = function(params) {
        $scope.isLoading = true;
        registroService.Persona.query(params, function(r) {
            $scope.lista = r.results;
            $scope.options = r.options;
            $scope.isLoading = false;
        }, function(err) {
            $log.log("Error in list:" + JSON.stringify(err));
            toastr.error(err.data.results.detail, err.status + ' ' + err.statusText);
        });
    };
    $scope.list(params);

    $scope.buscar = function() {
        params.page = 1;
        params.fields = $scope.fields;
        params.query = $scope.query;
        $scope.list(params);
    };

    $scope.onReorder = function(order) { //TODO
        $log.log('Order: ' + order);
    };

    $scope.delete = function(d) {
        if ($window.confirm("¿Estas Seguro de eliminar?")) {
            registroService.Persona.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó persona:" + JSON.stringify(d));
                toastr.success('Se eliminó persona ' + d.nombre, 'Persona');
                $scope.list(params);
            }, function(err) {
                $log.log("Error in delete:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

})

// =========================================================================
// Create and Update Persona
// =========================================================================
.controller("PersonaSaveCtrl", function($scope, $state, $stateParams, registroService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.persona = {};


    $scope.sel = function() {
        registroService.Persona.get({ id: $stateParams.id }, function(r) {
            $scope.persona = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.persona.id) {
            registroService.Persona.update({ id: $scope.persona.id }, $scope.persona, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó persona ' + r.nombre, 'Persona');
                $state.go('registro.registro.personas');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            registroService.Persona.save($scope.persona, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó persona ' + r.nombre, 'Persona');
                $state.go('registro.registro.personas');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('registro.registro.personas');


        
    };
});
