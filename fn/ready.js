$(document).ready(function()
{
      // 1 - LISTENER DE RESIZE EVENT:
      $scope.xl = false;
      $scope.lg = false;
      $scope.md = false;
      $scope.sm = false;
      $scope.xs = true;

      console.log("JQuery ready");
      $scope.resize();

      $(window).on('resize', function()
      {
            $scope.resize();
      });

      document.addEventListener('scroll', function(e)
      {
            var top  = window.pageYOffset || document.documentElement.scrollTop;
            // console.log("SCROLEANDOsss122.."+ JSON.stringify(top))

            tengoClasePuesta = $("#cont-menu").hasClass("transparency-menu")

            if(top > 550)
            {
                  
                  if( !tengoClasePuesta )
                  {
                        console.log("AGREGANDO TRANSPARENCY A MENU");
                        $("#cont-menu").addClass("transparency-menu");
                  }
            }
            else
            {
                  if( tengoClasePuesta )
                  {
                        console.log("QUITANDO TRANSPARENCY A MENU");
                        $("#cont-menu").removeClass("transparency-menu");
                  }
            }
      }, true);
});   

$scope.SIZEANT = 0;
$scope.SIZEX = "LG";
$scope.resize = function()
{
      var win = $(window); //this = window
      ancho = win.innerWidth();
      // console.log("RESIZE: " + ancho);
      
      if(ancho < $scope.anchoMinimoWEB)
      {
            console.log("ANCHO MINIMO :" + $scope.anchoMinimoWEB + " | " + ancho);
      }
      
      if (ancho > 1200) 
      {
            $scope.xl = true;
            $scope.lg = false;
            $scope.md = false;
            $scope.sm = false;
            $scope.xs = false;
            $scope.SIZEANT = $scope.SIZEX;
            $scope.SIZEX = "XL";

            $scope.$evalAsync();

            if($scope.verbose)
            {
                  console.log("ENTRE XL! " + $scope.SIZEX);
            }
      }
      else if(ancho < 1200 && ancho > 992)
      {
            $scope.xl = false;
            $scope.lg = true;
            $scope.md = false;
            $scope.sm = false;
            $scope.xs = false;
            $scope.SIZEANT = $scope.SIZEX;
            $scope.SIZEX = "LG";

            $scope.$evalAsync();

            if($scope.verbose)
            {
                  console.log("ENTRE LG! " + $scope.SIZEX);
            }
      }
      else if(ancho < 992 && ancho > 768)
      {
            $scope.xl = false;
            $scope.lg = false;
            $scope.md = true;
            $scope.sm = false;
            $scope.xs = false;
            $scope.SIZEANT = $scope.SIZEX;
            $scope.SIZEX = "MD";

            $scope.$evalAsync();

            if($scope.verbose)
            {
                  console.log("ENTRE MD! "  + $scope.SIZEX);
            }
      }
      else if(ancho < 768 && ancho > 576)
      {
            $scope.xl = false;
            $scope.lg = false;
            $scope.md = false;
            $scope.sm = true;
            $scope.xs = false;
            $scope.SIZEANT = $scope.SIZEX;
            $scope.SIZEX = "SM";

            $scope.$evalAsync();

            if($scope.verbose)
            {
                  console.log("ENTRE SM! "  + $scope.SIZEX);
            }
      }
      else if ( ancho < 576)
      {
            $scope.xl = false;
            $scope.lg = false;
            $scope.md = false;
            $scope.sm = false;
            $scope.xs = true;
            $scope.SIZEANT = $scope.SIZEX;
            $scope.SIZEX = "XS";

            $scope.$evalAsync();

            if($scope.verbose)
            {
                  console.log("ENTRE XS! " + $scope.SIZEX);
            }
      }
      
      
      if($scope.xs || $scope.sm || $scope.md)
      {
            $scope.mostrarBusqueda = false;
      }
            
      $scope.ancho = ancho;
      $scope.$evalAsync();

      if($scope.SIZEANT != $scope.SIZEX)
      {
            console.log("RESIZE ancho:" + ancho + " | TAMANO: " + $scope.SIZEX );
      }
      
}


