app
// =========================================================================
// Show View and Delete Colegio 
// =========================================================================
    .controller("ColegioCtrl", function($scope, $state, $stateParams, registroService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'name,codename';
    var params = {};
    $scope.lista = [];
    $scope.colegio= {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        registroService.Colegio.query(params, function(r) {
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
            registroService.Colegio.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la colegio:" + JSON.stringify(d));
                toastr.success('Se eliminó el colegio ' + d.nombre, 'Colegio');
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
.controller("ColegioSaveCtrl", function($scope, $state, $stateParams, registroService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.colegio = {};

    $scope.sel = function() {
        registroService.Colegio.get({ id: $stateParams.id }, function(r) {
            $scope.Colegio = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.colegio.id) {
            registroService.Colegio.update({ id: $scope.colegio.id }, $scope.colegio, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó el colegio ' + r.nombre, 'Colegio');
                $state.go('registro.registro.colegio');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            registroService.Colegio.save($scope.colegio, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó el colegio ' + r.nombre, 'Colegio');
                $state.go('registro.registro.colegio');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('registro.registro.colegio');
    };
});
