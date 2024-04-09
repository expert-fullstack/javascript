<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Home::layout</title>
    <meta name="description" content="Ela Admin - HTML5 Admin Template">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="apple-touch-icon" href="https://i.imgur.com/QRAUqs9.png">
    <link rel="shortcut icon" href="https://i.imgur.com/QRAUqs9.png">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.0/css/flag-icon.min.css">
    <link rel="stylesheet" href="/assets/adminassets/css/cs-skin-elastic.css">
    <link rel="stylesheet" href="/assets/admin/assets/css/style.css">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>
    <style>
      /** ====================
   * Lista de Comentarios
   =======================*/
  .comments-container {
    margin: 60px auto 15px;
    width: 768px;
  }
  
  .comments-container h1 {
    font-size: 36px;
    color: #283035;
    font-weight: 400;
  }
  
  .comments-container h1 a {
    font-size: 18px;
    font-weight: 700;
  }
  
  .comments-list {
    margin-top: 30px;
    position: relative;
  }
  
  /**
   * Lineas / Detalles
   -----------------------*/
  .comments-list:before {
    content: "";
    width: 2px;
    height: 100%;
    background: #c7cacb;
    position: absolute;
    left: 32px;
    top: 0;
  }
  
  .comments-list:after {
    content: "";
    position: absolute;
    background: #c7cacb;
    bottom: 0;
    left: 27px;
    width: 7px;
    height: 7px;
    border: 3px solid #dee1e3;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  
  .reply-list:before,
  .reply-list:after {
    display: none;
  }
  .reply-list li:before {
    content: "";
    width: 60px;
    height: 2px;
    background: #c7cacb;
    position: absolute;
    top: 25px;
    left: -55px;
  }
  
  .comments-list li {
    margin-bottom: 15px;
    display: block;
    position: relative;
  }
  
  .comments-list li:after {
    content: "";
    display: block;
    clear: both;
    height: 0;
    width: 0;
  }
  
  .reply-list {
    padding-left: 88px;
    clear: both;
    margin-top: 15px;
  }
  
  .comments-list .comment-box {
      width: calc(100% - 79px) !important;
      /* display: flex; */
  }
  
  .comments-list .comment-box {  
      background:#e9ecef;
    
      margin-bottom: 58px;
      padding-bottom: 20px;
  }
  /**
   * Avatar
   ---------------------------*/
  .comments-list .comment-avatar {
    width: 65px;
    height: 65px;
    position: relative;
    z-index: 99;
    float: left;
    border: 3px solid #fff;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
  
  .comments-list .comment-avatar img {
    width: 100%;
    height: 100%;
  }
  
  .reply-list .comment-avatar {
    width: 50px;
    height: 50px;
  }
  
  .comment-main-level:after {
    content: "";
    width: 0;
    height: 0;
    display: block;
    clear: both;
  }
  /**
   * Caja del Comentario
   ---------------------------*/
  .comments-list .comment-box {
    width: 680px;
    float: right;
    position: relative;
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  }
  
  .comments-list .comment-box:before,
  .comments-list .comment-box:after {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    display: block;
    border-width: 10px 12px 10px 0;
    border-style: solid;
    border-color: transparent #fcfcfc;
    top: 8px;
    left: -11px;
  }
  
  .comments-list .comment-box:before {
    border-width: 11px 13px 11px 0;
    border-color: transparent rgba(0, 0, 0, 0.05);
    left: -12px;
  }
  
  .reply-list .comment-box {
    width: 610px;
  }
  .comment-box .comment-head {
    background: #fcfcfc;
    padding: 10px 12px;
    border-bottom: 1px solid #e5e5e5;
    overflow: hidden;
    -webkit-border-radius: 4px 4px 0 0;
    -moz-border-radius: 4px 4px 0 0;
    border-radius: 4px 4px 0 0;
  }
  
  .comment-box .comment-head i {
    float: right;
    margin-left: 14px;
    position: relative;
    top: 2px;
    color: #a6a6a6;
    cursor: pointer;
    -webkit-transition: color 0.3s ease;
    -o-transition: color 0.3s ease;
    transition: color 0.3s ease;
  }
  
  .comment-box .comment-head i:hover {
    color: #03658c;
  }
  
  .comment-box .comment-name {
    color: #283035;
    font-size: 14px;
    font-weight: 700;
    float: left;
    margin-right: 10px;
  }
  
  .comment-box .comment-name a {
    color: #283035;
  }
  
  .comment-box .comment-head span {
    float: left;
    color: #999;
    font-size: 13px;
    position: relative;
    top: 1px;
  }
  
  .comment-box .comment-content {
    
    padding: 12px;
    font-size: 15px;
    color: #595959;
    -webkit-border-radius: 0 0 4px 4px;
    -moz-border-radius: 0 0 4px 4px;
    border-radius: 0 0 4px 4px;
  }
  
  .comment-box .comment-name.by-author,
  .comment-box .comment-name.by-author a {
    color: #03658c;
  }
  .comment-box .comment-name.by-author:after {
    content: "author";
    background: #03658c;
    color: #fff;
    font-size: 12px;
    padding: 3px 5px;
    font-weight: 700;
    margin-left: 10px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }
   
  /** =====================
   * Responsive
   ========================*/
  @media only screen and (max-width: 766px) {
    .comments-container {
      width: 480px;
    }
  
    .comments-list .comment-box {
      width: 390px; 
    }
  
    .reply-list .comment-box {
      width: 320px;
    }
  }
  
  .commentContainer {
      position: relative;
  }
  
  .commentLoader {
      position: absolute;
      z-index: 999;
      background: #ffffff59;
      width: 100%;
      height: 100%;
  }
  
  </style>
 @livewireStyles
 <style>
    .login-content {
        padding: 20px;
        background: #fff;
        margin: 50px 0;
    }
 </style>
    <!-- <script type="text/javascript" src="https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js"></script> -->
</head>
<body class="bg-dark">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="{{route('user.blogs.index')}}">Blogs</a>
            </li>
            @if(auth()->check())
              <li class="nav-item">
                <a class="nav-link" href="{{route('logout')}}">Logout</a>
              </li>
            @else
              <li class="nav-item">
                <a class="nav-link" href="{{route('login')}}">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="{{route('register')}}">Register</a>
              </li> 
            @endif
          </ul>
        </div>
      </nav>
    @yield('content')
    
    @livewireScripts 
    <script src="https://cdn.jsdelivr.net/npm/jquery@2.2.4/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.4/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-match-height@0.7.2/dist/jquery.matchHeight.min.js"></script>
    <script src="/assets/admin/assets/js/main.js"></script>
</body>
</html>