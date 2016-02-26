var app = angular.module("MyAPp", ['ngDialog']);


app.controller('ctrller',function($scope,$http,ngDialog){
    
 $http.get('/serviuCall').success(function(data){
        var arrDom = [];
     
        for(var i in data.Dominios){
            arrDom.push(data.Dominios[i])
        }
     
        $scope.dominios = arrDom    ;
        }).error(function(error){
            alert('se produjo error');
        });
    
    $scope.gettear = function(){
        $http.get('/serviuCall').success(function(data){
            alert(data);
        }).error(function(error){
            alert('se produjo error');
        });
    }
    
     $scope.filtrarDominio = function(){
       var dominioFiltrado =  $scope.dominios.filter(function(dom){
            return dom.Nombre == $scope.selectDominios;
        });
         
         var subDoms = [];
         
         for(subd in dominioFiltrado[0].Subdominios)
            subDoms.push(dominioFiltrado[0].Subdominios[subd]);
                        
        
         $scope.subDominiosFiltrados = subDoms;
    };
    
    $scope.filtrarSubDominios = function(){
        var subdSeleccionado = $scope.subDominiosFiltrados.filter(function(e){ return e.Nombre == $scope.selectSubDominios })
        
        var ejerciciosSubd = [];
        
        for(ej in subdSeleccionado[0].Ejercicios)
            ejerciciosSubd.push(subdSeleccionado[0].Ejercicios[ej]);
        
        for(ej in ejerciciosSubd){
            ejerciciosSubd[ej].Funcion = new Function( ejerciciosSubd[ej].Funcion);
        }
        
        $scope.Ejercicios = ejerciciosSubd;
    }
    
});
