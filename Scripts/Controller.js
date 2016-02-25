var app = angular.module("MyAPp", ['ngDialog']);


app.controller('ctrller',function($scope,$http,ngDialog){

    $scope.dominios = [
        {nombre:'Algorithms',
        subdominios:{nombre:'Warmup',nombre:'Implementation',nombre:'Strings'}
        },
        {nombre:'Data Structures',
        verDescripcion:function(){
            ngDialog.open({ template:'dialogDesc',
                          className: 'ngDialog-theme-plain'});
        }}
    ];
    
    $scope.gettear = function(){
        $http.get('/serviuCall').success(function(data){
            alert(data);
        }).error(function(error){
            alert('se produjo error');
        });
    }
    
     $scope.filtrarDominio = function(selectDominios){
       $scope.dominiosFiltrados =  $scope.dominios.filter(function(dom){
            return dom.nombre == $scope.selectDominios;
        });
    };
    
});
