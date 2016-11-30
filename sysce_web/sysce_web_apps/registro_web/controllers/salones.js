app
// =========================================================================
// Show View and Delete Salon 
// =========================================================================
    .controller("SalonCtrl", function($scope, $state, $stateParams, registroService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'codename';
    var params = {};
    $scope.lista = [];
    $scope.salon = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        registroService.Salon.query(params, function(r) {
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
            registroService.Salon.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó correctamente" + JSON.stringify(d));
                toastr.success('Se eliminó el Salon ' + d.nivel+d.grado+d.seccion, 'Salon');
                $scope.list(params);
            }, function(err) {
                $log.log("Error in delete:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

})

// =========================================================================
// Create and Update Salon
// =========================================================================
.controller("SalonSaveCtrl", function($scope, $state, $stateParams, registroService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.salon = {};

    $scope.sel = function() {
        registroService.Salon.get({ id: $stateParams.id }, function(r) {
            $scope.salon = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.salon.id) {
            registroService.Salon.update({ id: $scope.salon.id }, $scope.salon, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó el Salon ' + r.nivel+ r.grado+ r.seccion, 'Salon');
                $state.go('registro.registro.salones');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            registroService.Salon.save($scope.salon, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se agrego Nivel :' + r.nivel+ 'Grado : '+r.grado+ 'Seccion : '+r.seccion, 'Correctamente');
                $state.go('registro.registro.salones');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('registro.registro.salones');
    };
});
