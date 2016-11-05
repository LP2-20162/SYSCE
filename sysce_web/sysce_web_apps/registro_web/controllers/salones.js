app
// =========================================================================
// Show View and Delete Salon 
// =========================================================================
    .controller("SalonCtrl", function($scope, $state, $stateParams, registroService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'name,codename';
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
                $log.log("Se eliminó el Salon" + JSON.stringify(d));
                toastr.success('Se eliminó el Salon ' + d.nombre, 'Salon');
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
            $scope.Salon = r;
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
                toastr.success('Se editó el Salon ' + r.nombre, 'Salon');
                $state.go('registro.registro.salones');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            registroService.Salon.save($scope.curso, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó el Salon ' + r.nombre, 'Salon');
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
