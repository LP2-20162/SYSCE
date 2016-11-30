app
// =========================================================================
// Show View and Delete Colegio 
// =========================================================================
    .controller("CargaAcademicaCtrl", function($scope, $state, $stateParams, registroService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'codename';
    var params = {};
    $scope.lista = [];
    $scope.cargaacademica= {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        registroService.CargaAcademica.query(params, function(r) {
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
            registroService.CargaAcademica.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la cargoAcademica:" + JSON.stringify(d));
                toastr.success('Se eliminó el cargaAcademica ' + d.nombre, 'CargaAcademica');
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
.controller("CargaAcademicaSaveCtrl", function($scope, $state, $stateParams, registroService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.cargaacademica = {};
    $scope.salon = [];
    $scope.curso = [];


    $scope.getData = function(){
        registroService.Salon.query(function(r){
            $scope.salones = r;
        });

        registroService.Curso.query(function(r){
            $scope.cursos = r;
        });
    };



    $scope.sel = function() {
        registroService.CargaAcademica.get({ id: $stateParams.id }, function(r) {
            $scope.CargaAcademica = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.cargaacademica.id) {
            registroService.CargaAcademica.update({ id: $scope.cargaademica.id }, $scope.cargaacademica, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó el cargaAcademica ' + r.salon, 'CargaAcademica');
                $state.go('registro.registro.cargaacademica');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            registroService.CargaAcademica.save($scope.cargoescolar, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó el cargaAcademica ' + r.salon, 'CargaAcademicar');
                $state.go('registro.registro.cargaacademica');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('registro.registro.cargaacademicas');
    };
});
