//FUNCIONES DE LOGEO:
$scope.comprobarOperadorLogeado = function(ifNoneRedirectLogin)
{
    logeado = false;
    token = $scope.getJWT();
    console.log("comprobando operador logeado JWT:" + token);
    console.log("URL::" + $scope.urlWS);

    if(token != null && token != "null")
    {

        $.ajax(
        {
            url: $scope.urlWS +"/operador/dameOperadorLogeado",
            type:'POST',
            async: false,
            headers: 
            {
                "Authorization":"Bearer " + token
            },
            beforeSend: function (xhr) 
            {
                $scope.cargando = true;
            },
            error: function (jqXHR, textStatus, errorThrown) 
            {
    //            window.location.href = $scope.urlLogin; 
                console.log("debo ir a login");
               // $scope.redireccionamiento("login")
            },
            success: function (resultado, textStatus, jqXHR) 
            {
                url = window.location.href;
                console.log("OPERADOR LOGEADO OK: " + JSON.stringify(resultado) + " -> URL: " +url );
                if(resultado != null && resultado != "undefined")
                {
                    $scope.usrLogeado = resultado;
                    $scope.$evalAsync();

                    if(url.indexOf("login.html") > -1)
                    {
                        $scope.redireccionamiento("index.html")
                    }
                }
                else
                {
                    if(ifNoneRedirectLogin)
                    {
                        console.log("debo ir a login 2");
                        // $scope.redireccionamiento('login')
                    }
                }
            }
        });
    }
    else{
        if(ifNoneRedirectLogin)
        {
            console.log("debo ir a login 3");
            $scope.redireccionamiento('login')
        }
    }
    return logeado;
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

                        //$scope.snack('ERROR AL INGRESAR!')
                },
                success: function (resultado, textStatus, jqXHR) 
                {
                        if (resultado != null)
                        {
                            console.log("res: " + resultado);
                            $scope.setJWT(resultado);

                            // $scope.redireccionamiento('agenda');
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
$scope.getJWT = function ()
{
    $scope.jwt = localStorage.getItem('jwtToken');
    console.log("GETTING jwt from localstorage:" + $scope.jwt);;
    $scope.$evalAsync();

    return $scope.jwt;
}
$scope.setJWT = function (valor)
{
    $scope.jwt = localStorage.setItem('jwtToken', valor);
    $scope.$evalAsync();
    console.log("SETTING jwt in localstorage:" + valor);;
}

