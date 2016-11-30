app
// =========================================================================
// Show View and Delete Curso 
// =========================================================================
    .controller("CursoCtrl", function($scope, $state, $stateParams, registroService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'codename';
    var params = {};
    $scope.lista = [];
    $scope.curso = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        registroService.Curso.query(params, function(r) {
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
            registroService.Curso.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la categoría:" + JSON.stringify(d));
                toastr.success('Se eliminó el curso ' + d.nombre, 'Curso');
                $scope.list(params);
            }, function(err) {
                $log.log("Error in delete:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

})

// =========================================================================
// Create and Update Curso
// =========================================================================
.controller("CursoSaveCtrl", function($scope, $state, $stateParams, registroService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.curso = {};

    $scope.sel = function() {
        registroService.Curso.get({ id: $stateParams.id }, function(r) {
            $scope.Curso = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.curso.id) {
            registroService.Curso.update({ id: $scope.curso.id }, $scope.curso, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó el curso ' + r.nombre, 'Curso');
                $state.go('registro.registro.cursos');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            registroService.Curso.save($scope.curso, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó el curso ' + r.nombre, 'Curso');
                $state.go('registro.registro.cursos');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('registro.registro.cursos');
    };
});
