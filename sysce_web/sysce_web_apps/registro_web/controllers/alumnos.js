app
// =========================================================================
// Show View and Delete Alumno 
// =========================================================================
    .controller("AlumnoCtrl", function($scope, $state, $stateParams, registroService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'nombre';
    var params = {};
    $scope.lista = [];
    $scope.alumno = {};

    $scope.list = function(params) {
        $scope.isLoading = true;
        registroService.Alumno.query(params, function(r) {
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
        if ($window.confirm("¿Estas Seguro de elimnar a ?"+alumno)) {
            registroService.Alumno.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó alumno:" + JSON.stringify(d));
                toastr.success('Se eliminó alumno ' + d.nombre, 'Alumno');
                $scope.list(params);
            }, function(err) {
                $log.log("Error in delete:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

})

// =========================================================================
// Create and Update Alumno
// =========================================================================
.controller("AlumnoSaveCtrl", function($scope, $state, $stateParams, registroService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.alumno = {};

    $scope.sel = function() {
        registroService.Alumno.get({ id: $stateParams.id }, function(r) {
            $scope.alumno = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.alumno.id) {
            registroService.Alumno.update({ id: $scope.alumno.id }, $scope.alumno, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó alumno ' + r.nombre, 'Alumno');
                $state.go('registro.registro.alumnos');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            registroService.Alumno.save($scope.alumno, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó alumno ' + r.nombre, 'Alumno');
                $state.go('registro.registro.alumnos');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('registro.registro.alumnos');


        
    };
});
