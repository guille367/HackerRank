var app = angular.module("MyAPp",[]);


app.controller('ctrller',['$scope',function($scope){
   
    $scope.dominios = [
        {nombre:'Algorithms',
        subdominios:{nombre:'Warmup',nombre:'Implementation',nombre:'Strings'}
        },
        {nombre:'Data Structures'}
    ];
    
     $scope.filtrarDominio = function(e){
       $scope.dominiosFiltrados =  e.dominios.filter(function(dom){
            return dom.nombre == $scope.doms;
        });
    }
    
}]);
