app
// =========================================================================
// Show View and Delete docente 
// =========================================================================
    .controller("DocenteCtrl", function($scope, $state, $stateParams, registroService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'codename';
    var params = {};
    $scope.lista = [];
    $scope.docente = {};

    $scope.list = function(params) {
        $scope.isLoading = true;
        registroService.Docente.query(params, function(r) {
            $scope.lista = r;
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
        if ($window.confirm("¿Estas Seguro?")) {
            registroService.Docente.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó" + JSON.stringify(d));
                toastr.success('Se eliminó  ' + d.nombre, 'Docente');
                $scope.list(params);
            }, function(err) {
                $log.log("Error in delete:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

})

// =========================================================================
// Create and Update Docente
// =========================================================================
.controller("DocenteSaveCtrl", function($scope, $state, $stateParams, registroService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.docente = {};
   
  //Comienza Controller para Autocomplet
   // $scope.getData = function(){
     //   repositorioService.Persona.query(function(r){
       //     $scope.persona = r;
       // });
    $scope.buscarPersona = function(q){
        return registroService.Docente.query({query:q}, function(r){
            return r;
        });
    };

    $scope.selectPersona = function(item){
        $scope.docente.docente.persona= item.id;
    };

  //Aqui termina autocomplet


    $scope.sel = function() {
        registroService.Docente.get({ id: $stateParams.id }, function(r) {
            $scope.docente = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.docente.id) {
            registroService.Docente.update({ id: $scope.docente.id }, $scope.docente, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó ' + r.docente, 'Docente');
                $state.go('registro.registro.docentes');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            registroService.Docente.save($scope.docente, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó '+ r.docente, 'Docente');
                $state.go('registro.registro.docentes');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('registro.registro.docentes');


        
    };
});
