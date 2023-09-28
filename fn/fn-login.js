//FUNCIONES DE LOGEO:
$scope.operadorLogeado = null;

$scope.comprobarOperadorLogeado = function(ifNoneRedirectLogin)
{
    logeado = false;
    $scope.cargandoLogeado = true;
    token = $scope.getJWT();
    console.log("2 - COMPROBAR OPERADOR LOGEADO JWT : [" + token + "]");
    
    if(token != null && token != "null")
    {
        
        $.ajax(
            {
                url: $scope.urlWS +"/operador/dameOperadorLogeado",
                type:'POST',
                async: true,
                headers: 
            {
                "Authorization":"Bearer " + token
            },
            beforeSend: function (xhr) 
            {
                $scope.cargandoLogeado = true;
            },
            error: function (jqXHR, textStatus, errorThrown) 
            {
    //            window.location.href = $scope.urlLogin; 
                $scope.setJWT(null);
                $scope.redireccionamiento("index.html")
                // console.log("debo ir a login");
            },
            success: function (resultado, textStatus, jqXHR) 
            {
                $scope.cargandoLogeado = false;
                $scope.$evalAsync();
                
                url = window.location.href;
                console.log("OPERADOR LOGEADO OK: " + JSON.stringify(resultado) + " -> URL: " + url );
                if(resultado != null && resultado != "undefined")
                {
                    $scope.usrLogeado = resultado;
                    $scope.operadorLogeado = resultado;
                    logeado = resultado;
                    $scope.$evalAsync();

                    maxLargoURL = url.length;
                    lastSimbol = url.substring( (maxLargoURL - 1) , maxLargoURL);
                    console.log("url:" + url);

                    if(url.indexOf("login.html") > -1 || url.indexOf("index.html") > -1 || lastSimbol == "/")
                    {
                        console.log("DEBO REDIRECCIONAR A HOME");
                        $scope.redireccionamiento("home.html")
                    }
                }
            }
        });
    }
    else
    {
        $scope.usrLogeado = null;
        $scope.operadorLogeado = null;
        $scope.$evalAsync();

        console.log("3 - DEBO LOGEARME PARA TENER UN TOKEN : [" + token + "]");

        if(ifNoneRedirectLogin)
        {
            console.log("debo ir a login  por que no tengo token");

            $scope.redireccionamiento('index.html')
            //TODO:$scope.redireccionamiento('login.html')
        }
    }
    return logeado;
}
$scope.getJWT = function ()
{
    $scope.jwt = localStorage.getItem('jwtToken');
    $scope.token = localStorage.getItem('jwtToken');
    console.log("1 - GETTING JWT FROM LOCALSTORAGE : [" + $scope.token + "] -> OP : "+ $scope.operadorLogeado );;
    
    if($scope.jwt == null || $scope.jwt == "null" || $scope.token == null)
    {
        url = $scope.getLastSlashURL();
        $scope.operadorLogeado = null;

        if(url != "index.html")
        {
            console.log("DEBO REDIRECCIONAR A INDEX!");
            $scope.redireccionamiento("index.html")
        }
    }
    $scope.$evalAsync();

    return $scope.jwt;
}
$scope.setJWT = function (valor)
{
    console.log("SETEANDO JWT [LOCAL - STORAGE]:" + valor);
    localStorage.setItem('jwtToken', valor);
    $scope.jwt = valor
    $scope.token = valor;
    $scope.$evalAsync();


    $scope.comprobarOperadorLogeado();
}
$scope.logearse = function ()
{
    console.log("logearse:" + $scope.urlWS);
    $.ajax(
            {
                url: $scope.urlWS + "operador/logearse",
                type: 'POST',
                data:
                {
                        "email": $scope.email,
                        "pass": $scope.pass,
                },
                beforeSend: function (xhr) 
                {
                        $scope.ingresando = true;
                },
                error: function (jqXHR, textStatus, errorThrown)
                {
                        $scope.ingresando = false;
                        $scope.$evalAsync();
                
                        strError = "ERROR AL LOGEARSE : ";
                        if(jqXHR.status == 0)
                        {
                            strError += "Timeout (" + jqXHR.status  + ")";
                        }

                        alert(strError)
                        //$scope.snack('ERROR AL INGRESAR!')
                },
                success: function (resultado, textStatus, jqXHR) 
                {
                    console.log("RES LOGEARSE: JWT :  " + resultado);
                    $scope.setJWT(resultado);

                    if (resultado != null)
                    {
                        
                    }
                    else
                    {
                        $scope.ingresando = false;
                        $scope.$evalAsync();
                    }
                }

            });

}
    
$scope.exit = function()
{
    $scope.setJWT(null);
    //localStorage.setItem('jwtToken', null);
    $scope.comprobarOperadorLogeado(true);
}


$scope.getLastSlashURL = function()
{
    url = window.location.href;
    rta = url;
    posLastSlash = url.lastIndexOf("/");   

    if(posLastSlash != -1)
    {
        lastPart = url.substring( (posLastSlash + 1) , url.length);
        rta = lastPart;
        console.log("URL ACTUAL: " + rta );
        // console.log("URL (" + posLastSlash +") : " + url + " -> "+  rta );
    }
    return rta;
}


