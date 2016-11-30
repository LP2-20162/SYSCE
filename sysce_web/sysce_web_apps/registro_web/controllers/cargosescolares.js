app
// =========================================================================
// Show View and Delete Colegio 
// =========================================================================
    .controller("CargoEscolarCtrl", function($scope, $state, $stateParams, registroService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'codename';
    var params = {};
    $scope.lista = [];
    $scope.cargoescolar= {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        registroService.CargoEscolar.query(params, function(r) {
            $scope.lista = r;
            //$scope.options = r.options;
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
        if ($window.confirm("¿Estas seguro de eliminar?")) {
            registroService.CargoEscolar.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la cargoescolar:" + JSON.stringify(d));
                toastr.success('Se eliminó el cargoescolar ' + d.nombre, 'CargoEscolar');
                $scope.list(params);
            }, function(err) {
                $log.log("Error in delete:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

})

// =========================================================================
// Create and Update Colegio
// =========================================================================
.controller("CargoEscolarSaveCtrl", function($scope, $state, $stateParams, registroService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.cargoescolar = {};

    $scope.sel = function() {
        registroService.CargoEscolar.get({ id: $stateParams.id }, function(r) {
            $scope.cargoescolar = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.cargoescolar.id) {
            registroService.CargoEscolar.update({ id: $scope.cargoescolar.id }, $scope.cargoescolar, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó el cargoescolar ' + r.nombre, 'CargoEscolar');
                $state.go('registro.registro.cargoescolar');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            registroService.CargoEscolar.save($scope.cargoescolar, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó ' + r.nombre, 'CargoEscolar');
                $state.go('registro.registro.cargoescolar');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('registro.registro.cargoescolares');
    };
});
