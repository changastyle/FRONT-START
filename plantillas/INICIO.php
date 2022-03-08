<?php
      require 'INCLUIDOR.php';
      

      if(!isset($_SESSION)) { 
            session_start();
      }


      if(isset($_SESSION['STEP']))
      { 
            $step = $_SESSION['STEP'];
            
            // echo "STEP:" . $step ."<br>";
            
            if($step == 1)
            {
                  $step = 2;
                  compilar("{{rutaEntradaParam}}",false);
                  // echo "ENTRE 1 PONGO EN 2";
                  $_SESSION['STEP'] = (int) $step;
                  // sleep(1);
                  header("Refresh:0");
            }
            else if ($step == 2)
            {
                  $step = 3;
                  compilar("{{rutaEntradaParam}}",false);
                  // echo "ENTRE 2 PONGO EN 3";
                  $_SESSION['STEP'] = (int) $step;
                  header("Refresh:0");
                  // header("Location: http://localhost/FRONT-START/index.php".$step);
            }
            else if ($step == 3)
            {
                  $step = 1;
                  compilar("{{rutaEntradaParam}}",false);
                  // echo "ENTRE 3 PONGO EN 1";
                  $_SESSION['STEP'] = (int) $step;
                  // sleep(3);
                  // header("Refresh:0");
                  // header("Location: http://localhost/FRONT-START/index.php".$step);
            }
      }
?>

<head>



      <!-- COLOR BARRA : -->
      <meta content="width=device-width, user-scalable=no" name="viewport">
      <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
      <!--<meta name="theme-color" content="#F38F1F">-->
      <!--<meta name="theme-color" content="#2c3e50">-->

      <!-- FAVICON : -->
      <!--<link rel="icon" href="http://www.viewdevs.com:8081/upload/ecpa/iconos/favicon.png" />-->

      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
      <!--<link rel="stylesheet" href='../res/frameworks/animate.css'>-->
      <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css" rel="stylesheet" />
      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-sanitize.js"></script>
      <script async defer src="https://apis.google.com/js/platform.js"></script>

      <!-- ESTILOS COMPARTIDOS: -->
      <script crossorigin="anonymous" src="https://kit.fontawesome.com/01ed377a67.js"></script>
      <!--<link rel="stylesheet" href="static/colores.css">
      <link rel="stylesheet" href="../res/css/snackbar.css">-->

      <!-- FONTS:-->
      <!--<link rel="stylesheet" href='../res/fonts/fuentes.css'>-->
      <!--font-family: 'Barlow Condensed', sans-serif;-->
      <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Raleway:400,600,700" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Barlow+Condensed&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
            rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500;1,700&display=swap"
            rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,400;0,700;0,900;1,400;1,700;1,900&display=swap"
            rel="stylesheet">

      <!-- SUMMERNOTE: -->
      <link href="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote.css" rel="stylesheet">
      <script src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote.js"></script>

      <!-- FONT AWESOME:-->
      <script src="https://kit.fontawesome.com/01ed377a67.js" crossorigin="anonymous"></script>

      <!-- API LOGIN GOOGLE:-->
      <meta content="924821078553-ojcpq3g7s3perd5llrbfjjr5cc1oi0ig.apps.googleusercontent.com"
            name="google-signin-client_id">
      <script async defer src="https://apis.google.com/js/platform.js"></script>


      <!-- SEO : -->
      <!--<meta name="abstract" content="Negocio en Bariloche">
      <META NAME="keywords" CONTENT="Negocio, tienda , tienda online, PYME , compras , productos , empresa, empresas">
      <META  NAME="description" CONTENT="Tienda online en la cuidad de San Carlos de Bariloche ">-->
      <!-- FIN SEO -->


      <!-- SELECT CON BUSQUEDA: -->
      <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.7/css/select2.min.css" rel="stylesheet" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.7/js/select2.min.js"></script>


      <!-- MAPA LEAFLET:  -->
      <link crossorigin="" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
            integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
            rel="stylesheet" />
      <!-- <script crossorigin=""
            integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
            src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"></script>
      <link href="http://code.ionicframework.com/ionicons/1.5.2/css/ionicons.min.css" rel="stylesheet"> -->






</head>