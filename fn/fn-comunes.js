
$scope.debugMode = false;
$scope.verbose = false;


$scope.MODO_LOCAL = true;
$scope.urlWS = "";
$scope.url_DEV = "http://192.168.0.107:8999/";
$scope.url_PROD = "https://wiz.viewdevs.com.ar/";

$scope.year = new Date().getFullYear();

if ($scope.MODO_LOCAL)
{
      console.log("MODO DEV LOCAL");
      $scope.urlWS = $scope.url_DEV;
      $scope.$evalAsync();
}
else
{
      console.log("MODO PROD");
      $scope.urlWS = $scope.url_PROD;
      $scope.$evalAsync();
}






$scope.ponerParametroEnURL = function(nombreParametro, valorParametro, reload)
{
    console.log("ponerParametroEnURL");
    
    url = window.location.href;
    console.log("URL:" + url);
    
    valorAnterior = $scope.dameValorDelParametroFromURL(nombreParametro);
    posI = url.indexOf(nombreParametro + "=" );
    subURL = url.substr(posI,url.length);
    console.log("subURL:" + subURL);
    posF = posI + subURL.indexOf("&");
    posSignoPregunta = url.indexOf("?");
    
    if(posF == -1)
    {
        posF = url.length;
    }
    if(posF < posI)
    {
        posF = url.length;
    }
    posSignoPregunta = url.indexOf("?");
    if(posSignoPregunta == -1)
    {
        url = url + "?";
    }
    
    console.log("valor anterior: " + valorAnterior + " POSI =" + posI +  " | POSF = " + posF);
    if( valorAnterior != -1 )
    {
        // YA TENGO EL PARAMETRO EN URL:
        preUrl = url.substr(0,(posI-1));
        postUrl = url.substring(posF, url.length);
        url =  preUrl + postUrl;
        console.log("preUrl (" + 0 + "," + (posI-1) + ") :" + preUrl);
        console.log("postUrl (" + posF + "," + url.length + "):" + postUrl);
        console.log("URL CORTADA: " + url);
        
        if(valorParametro != -1)
        {
            url += "&" + nombreParametro + "=" + valorParametro;
        }
    }
    else
    {
        // TODAVIA NO TENGO ESE PARAMETRO EN URL:
        if(valorParametro != -1)
        {
            url +=  "&" + nombreParametro + "=" + valorParametro;
        }
    }
    
    window.history.pushState("object or string", "Title", url);
    if(reload)
    {
      $scope.scrollearSuaveA("carrusel");
      
      setTimeout(function()
      {
            location.reload();

      },1500)
    }
}
$scope.dameValorDelParametroFromURL = function(nombreParametro)
{
      var url_string = window.location.href;
      var url = new URL(url_string);
      var parametro = url.searchParams.get(nombreParametro);

      if(parametro == null || parametro.length == 0)
      {
            parametro = -1;
      }
      return parametro;
}

$scope.openNewTab = function(direccion)
{
      window.open(direccion,'_blank');
}
$scope.ir = function(direccion)
{
      $scope.openNewTab(direccion);
}
$scope.redirect = function(direccion)
{
      $scope.openNewTab(direccion);
}
$scope.redireccionamiento = function(direccion)
{
      window.location.href=direccion;
}
$scope.redireccionamientoNewTab = function(direccion)
{
      $scope.openNewTab(direccion);
}
$scope.redirectSameTab = function(direccion)
{
      window.open(direccion);
}
$scope.endsWith = function(valorBuscado, cadena)
{
      rta = false;

      str = "" + cadena;

      largoCadena = str.length;
      largoValorBuscado = valorBuscado.length;

      posInicial = largoCadena - largoValorBuscado;
      posFinal = largoCadena;
      subStr = str.substring(posInicial , posFinal);

      if(JSON.stringify(subStr) === JSON.stringify(valorBuscado))
      {
            rta = true;
      }

      console.log("(" + cadena + ").ENDWITH -> buscado: " + valorBuscado +" | encontrado : " + subStr +  " = " + rta);

      return rta;
}










$scope.propsSummernote = {
      height: 180,
      fontSizes: 
      [
            '8', 
            '9', 
            '10',
            '11',
            '12',
            '14',
            '18',
            '24',
            '36',
            '48'
      ],
      popover:
      {
            image: [],
            link: [],
            air: []
      },
      toolbar:
      [
            ['style', ['style']],
            ['font', ['bold', 'italic', 'underline', 'clear']],
            ['fontname', ['fontname']],
            ['color', ['color']],
            ['insert', ['link', 'picture', 'hr']],
            ['view', ['fullscreen', 'codeview']]
      ],
};


$scope.capitalize = function(cadena)
{
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}


