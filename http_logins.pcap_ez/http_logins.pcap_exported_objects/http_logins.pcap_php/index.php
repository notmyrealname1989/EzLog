<!DOCTYPE html>
<!-- Pi-hole: A black hole for Internet advertisements
*  (c) 2017 Pi-hole, LLC (https://pi-hole.net)
*  Network-wide ad blocking via your own hardware.
*
*  This file is copyright under the latest version of the EUPL.
*  Please see LICENSE file for your rights under this license. -->
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Security-Policy" content="default-src 'self' https://api.github.com; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline'">
    <title>Pi-hole Admin Console</title>
    <!-- Usually browsers proactively perform domain name resolution on links that the user may choose to follow. We disable DNS prefetching here -->
    <meta http-equiv="x-dns-prefetch-control" content="off">
    <meta http-equiv="cache-control" content="max-age=60,private">
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon" />
    <meta name="theme-color" content="#367fa9">
    <link rel="apple-touch-icon" sizes="180x180" href="img/favicon.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="img/logo.svg">
    <link rel="icon" type="image/png" sizes="96x96" href="img/logo.svg">
    <meta name="msapplication-TileColor" content="#367fa9">
    <meta name="msapplication-TileImage" content="img/logo.svg">
    <meta name="apple-mobile-web-app-capable" content="yes">

    <link href="style/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="style/vendor/font-awesome-5.6.3/css/all.min.css" rel="stylesheet" type="text/css" />
    <link href="style/vendor/ionicons-2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css" />
    <link href="style/vendor/dataTables.bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="style/vendor/daterangepicker.css" rel="stylesheet" type="text/css" />

    <link href="style/vendor/AdminLTE.min.css" rel="stylesheet" type="text/css" />
    <link href="style/vendor/skin-blue.min.css" rel="stylesheet" type="text/css" />
    <link href="style/pi-hole.css" rel="stylesheet" type="text/css" />
    <link rel="icon" type="image/png" sizes="160x160" href="img/logo.svg" />

    <!--[if lt IE 9]>
    <script src="scripts/vendor/html5shiv.min.js"></script>
    <script src="scripts/vendor/respond.min.js"></script>
    <![endif]-->
</head>
<body class="skin-blue sidebar-mini layout-boxed">
<!-- JS Warning -->
<div>
    <link rel="stylesheet" type="text/css" href="style/vendor/js-warn.css">
    <input type="checkbox" id="js-hide" />
    <div class="js-warn" id="js-warn-exit"><h1>Javascript Is Disabled</h1><p>Javascript seems to be disabled. This will break some site features.</p>
        <p>To enable Javascript click <a href="http://www.enable-javascript.com/" target="_blank">here</a></p><label for="js-hide">Close</label></div>
</div>
<!-- /JS Warning -->
<div id='token' hidden>Knjf2Vv6rjfTX4OnLJBs3d5a6mhDAmM9kpXPts+EwvM=</div><script src="scripts/pi-hole/js/header.js"></script>

<script src="scripts/vendor/jquery.min.js"></script>
<script src="scripts/vendor/jquery-ui.min.js"></script>
<script src="style/vendor/bootstrap/js/bootstrap.min.js"></script>
<script src="scripts/vendor/app.min.js"></script>

<script src="scripts/vendor/jquery.dataTables.min.js"></script>
<script src="scripts/vendor/dataTables.bootstrap.min.js"></script>
<script src="scripts/vendor/Chart.bundle.min.js"></script>

<!-- Send token to JS -->
<div id="token" hidden>Knjf2Vv6rjfTX4OnLJBs3d5a6mhDAmM9kpXPts+EwvM=</div>
<div id="enableTimer" hidden></div>
<div class="wrapper">
    <header class="main-header">
        <!-- Logo -->
        <a href="http://pi-hole.net" class="logo" target="_blank">
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <span class="logo-mini">P<b>h</b></span>
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg">Pi-<b>hole</b></span>
        </a>
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top" role="navigation">
            <!-- Sidebar toggle button-->
            <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                <span class="sr-only">Toggle navigation</span>
            </a>
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <li><a style="pointer-events:none;"><samp>debian</samp></a></li>
                    <li class="dropdown user user-menu">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                            <img src="img/logo.svg" class="user-image" style="border-radius: initial" sizes="160x160" alt="Pi-hole logo" />
                            <span class="hidden-xs">Pi-hole</span>
                        </a>
                        <ul class="dropdown-menu" style="right:0">
                            <!-- User image -->
                            <li class="user-header">
                                <img src="img/logo.svg" sizes="160x160" alt="User Image" style="border-color:transparent" />
                                <p>
                                    Open Source Ad Blocker
                                    <small>Designed For Raspberry Pi</small>
                                </p>
                            </li>
                            <!-- Menu Body -->
                            <li class="user-body">
                                <div class="col-xs-4 text-center">
                                    <a class="btn-link" href="https://github.com/pi-hole" target="_blank">GitHub</a>
                                </div>
                                <div class="col-xs-4 text-center">
                                    <a class="btn-link" href="https://pi-hole.net" target="_blank">Website</a>
                                </div>
                                <div class="col-xs-4 text-center">
                                    <a class="btn-link" href="https://github.com/pi-hole/pi-hole/releases" target="_blank">Updates</a>
                                </div>
                                <div class="col-xs-12 text-center" id="sessiontimer">
                                    <b>Session is valid for <span id="sessiontimercounter">1440</span></b>
                                </div>
                            </li>
                            <!-- Menu Footer -->
                            <li class="user-footer">
                                <!-- Version Infos -->
                                                                <!-- PayPal -->
                                <div class="text-center">
                                    <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=3J2L3Z4DHW9UY" target="_blank" style="background:none">
                                        <img src="img/donate.gif" alt="Donate">
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <!-- Sidebar user panel -->
            <div class="user-panel">
                <div class="pull-left image">
                    <img src="img/logo.svg" class="img-responsive" alt="Pi-hole logo" style="display: table; table-layout: fixed; height: 67px;" />
                </div>
                <div class="pull-left info">
                    <p>Status</p>
                        <a id="status"><i class="fa fa-circle" style="color:#7FFF00"></i> Active</a>                    <br/>
                    <a title="Detected 1 cores"><i class="fa fa-circle" style="color:#7FFF00"></i> Load:&nbsp;&nbsp;0.1&nbsp;&nbsp;0.12&nbsp;&nbsp;0.08</a>                    <br/>
                    <a><i class="fa fa-circle" style="color:#7FFF00"></i> Memory usage:&nbsp;&nbsp;52.6&thinsp;%</a>                </div>
            </div>
            <!-- sidebar menu: : style can be found in sidebar.less -->
                        <ul class="sidebar-menu">
                <li class="header">MAIN NAVIGATION</li>
                <!-- Home Page -->
                <li class="active">
                    <a href="index.php">
                        <i class="fa fa-home"></i> <span>Dashboard</span>
                    </a>
                </li>
                                <!-- Query Log -->
                <li>
                    <a href="queries.php">
                        <i class="fa fa-file-alt"></i> <span>Query Log</span>
                    </a>
                </li>
                <li class="treeview">
                  <a href="#">
                    <span class="pull-right-container">
                      <i class="fa fa-angle-down pull-right" style="padding-right: 5px;"></i>
                    </span>
                    <i class="fa fa-clock"></i> <span>Long term data</span>
                  </a>
                  <ul class="treeview-menu">
                    <li>
                        <a href="db_graph.php">
                            <i class="fa fa-file-alt"></i> <span>Graphics</span>
                        </a>
                    </li>
                    <li>
                        <a href="db_queries.php">
                            <i class="fa fa-file-alt"></i> <span>Query Log</span>
                        </a>
                    </li>
                    <li>
                        <a href="db_lists.php">
                            <i class="fa fa-file-alt"></i> <span>Top Lists</span>
                        </a>
                    </li>
                  </ul>
                </li>
                <!-- Whitelist -->
                <li>
                    <a href="list.php?l=white">
                        <i class="fa fa-check-circle "></i> <span>Whitelist</span>
                    </a>
                </li>
                <!-- Blacklist -->
                <li>
                    <a href="list.php?l=black">
                        <i class="fa fa-ban"></i> <span>Blacklist</span>
                    </a>
                </li>
                <!-- Toggle -->

                <li id="pihole-disable" class="treeview">
                  <a href="#">
                    <span class="pull-right-container">
                      <i class="fa fa-angle-down pull-right" style="padding-right: 5px;"></i>
                    </span>
                    <i class="fa fa-stop"></i> <span>Disable&nbsp;&nbsp;&nbsp;<span id="flip-status-disable"></span></span>
                  </a>
                  <ul class="treeview-menu">
                    <li>
                        <a href="#" id="pihole-disable-permanently">
                            <i class="fa fa-stop"></i> <span>Permanently</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" id="pihole-disable-10s">
                            <i class="fa fa-clock"></i> <span>For 10 seconds</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" id="pihole-disable-30s">
                            <i class="fa fa-clock"></i> <span>For 30 seconds</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" id="pihole-disable-5m">
                            <i class="fa fas fa-clock"></i> <span>For 5 minutes</span>
                        </a>
                    </li>
                    <li>
                      <a href="#" id="pihole-disable-cst" data-toggle="modal" data-target="#customDisableModal">
                            <i class="fa fa-clock"></i> <span>Custom time</span>
                      </a>
                    </li>
                  </ul>
                    <!-- <a href="#" id="flip-status"><i class="fa fa-stop"></i> <span>Disable</span></a> -->
                </li>
                <li id="pihole-enable" class="treeview" hidden="true">
                    <a href="#"><i class="fa fa-play"></i> <span id="enableLabel">Enable&nbsp;&nbsp;&nbsp;<span id="flip-status-enable"></span></span></a>
                </li>
                <!-- Tools -->
                <li class="treeview ">
                  <a href="#">
                    <span class="pull-right-container">
                      <i class="fa fa-angle-down pull-right" style="padding-right: 5px;"></i>
                    </span>
                    <i class="fa fa-folder"></i> <span>Tools</span>
                  </a>
                  <ul class="treeview-menu">
                    <!-- Run gravity.sh -->
                    <li>
                        <a href="gravity.php">
                            <i class="fa fa-arrow-circle-down"></i> <span>Update Gravity</span>
                        </a>
                    </li>
                    <!-- Query Lists -->
                    <li>
                        <a href="queryads.php">
                            <i class="fa fa-search"></i> <span>Query Lists</span>
                        </a>
                    </li>
                    <!-- Audit log -->
                    <li>
                        <a href="auditlog.php">
                            <i class="fa fa-balance-scale"></i> <span>Audit log</span>
                        </a>
                    </li>
                    <!-- Tail pihole.log -->
                    <li>
                        <a href="taillog.php">
                            <i class="fa fa-list-ul"></i> <span>Tail pihole.log</span>
                        </a>
                    </li>
                    <!-- Tail pihole-FTL.log -->
                    <li>
                        <a href="taillog-FTL.php">
                            <i class="fa fa-list-ul"></i> <span>Tail pihole-FTL.log</span>
                        </a>
                    </li>
                    <!-- Generate debug log -->
                    <li>
                        <a href="debug.php">
                            <i class="fa fa-ambulance"></i> <span>Generate debug log</span>
                        </a>
                    </li>
                  </ul>
                </li>
                <!-- Network -->
                <li>
                    <a href="network.php">
                        <i class="fa fa-network-wired"></i> <span>Network</span>
                    </a>
                </li>
                <!-- Settings -->
                <li>
                    <a href="settings.php">
                        <i class="fa fa-cogs"></i> <span>Settings</span>
                    </a>
                </li>
                <!-- Logout -->
                                <li>
                    <a href="?logout">
                        <i class="fa fa-user-times"></i> <span>Logout</span>
                    </a>
                </li>
                                                <!-- Login -->
                                <!-- Donate -->
                <li>
                    <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3J2L3Z4DHW9UY" target="_blank">
                        <i class="fa-paypal-icon fab fa-paypal"></i> <span>Donate</span>
                    </a>
                </li>
                                <!-- Help -->
                <li>
                    <a href="help.php">
                        <i class="fa fa-question-circle"></i> <span>Help</span>
                    </a>
                </li>
                            </ul>
        </section>
        <!-- /.sidebar -->
    </aside>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Main content -->
        <section class="content">
<!-- Small boxes (Stat box) -->
<div class="row">
    <div class="col-lg-3 col-sm-6">
        <!-- small box -->
        <div class="small-box bg-green" id="total_queries" title="only A + AAAA queries">
            <div class="inner">
                <p>Total queries (<span id="unique_clients">-</span> clients)</p>
                <h3 class="statistic"><span id="dns_queries_today">---</span></h3>
            </div>
            <div class="icon">
                <i class="ion ion-earth"></i>
            </div>
        </div>
    </div>
    <!-- ./col -->
    <div class="col-lg-3 col-sm-6">
        <!-- small box -->
        <div class="small-box bg-aqua">
            <div class="inner">
                <p>Queries Blocked</p>
                <h3 class="statistic"><span id="ads_blocked_today">---</span></h3>
            </div>
            <div class="icon">
                <i class="ion ion-android-hand"></i>
            </div>
        </div>
    </div>
    <!-- ./col -->
    <div class="col-lg-3 col-sm-6">
        <!-- small box -->
        <div class="small-box bg-yellow">
            <div class="inner">
                <p>Percent Blocked</p>
                <h3 class="statistic"><span id="ads_percentage_today">---</span></h3>
            </div>
            <div class="icon">
                <i class="ion ion-pie-graph"></i>
            </div>
        </div>
    </div>
    <!-- ./col -->
    <div class="col-lg-3 col-sm-6">
        <!-- small box -->
        <div class="small-box bg-red" title="Blocking list updated 02:06 ago">
            <div class="inner">
                <p>Domains on Blocklist</p>
                <h3 class="statistic"><span id="domains_being_blocked">---</span></h3>
            </div>
            <div class="icon">
                <i class="ion ion-ios-list"></i>
            </div>
        </div>
    </div>
    <!-- ./col -->
</div>

<div class="row">
    <div class="col-md-12">
    <div class="box" id="queries-over-time">
        <div class="box-header with-border">
          <h3 class="box-title">Queries over last 24 hours</h3>
        </div>
        <div class="box-body">
          <div class="chart">
            <canvas id="queryOverTimeChart" width="800" height="140"></canvas>
          </div>
        </div>
        <div class="overlay">
          <i class="fa fa-refresh fa-spin"></i>
        </div>
        <!-- /.box-body -->
      </div>
    </div>
</div>

<div class="row">
    <div class="col-md-12">
    <div class="box" id="clients">
        <div class="box-header with-border">
          <h3 class="box-title">Clients (over time)</h3>
        </div>
        <div class="box-body">
          <div class="chart">
            <canvas id="clientsChart" width="800" height="140" class="extratooltipcanvas"></canvas>
          </div>
        </div>
        <div class="overlay">
          <i class="fa fa-refresh fa-spin"></i>
        </div>
        <!-- /.box-body -->
      </div>
    </div>
</div>

<div class="row">
    <div class="col-md-12 col-lg-6">
    <div class="box" id="query-types-pie">
        <div class="box-header with-border">
          <h3 class="box-title">Query Types</h3>
        </div>
        <div class="box-body">
          <div class="float-left" style="width:50%">
            <canvas id="queryTypePieChart" width="120" height="120"></canvas>
          </div>
          <div class="float-left" style="width:50%">
            <div id="query-types-legend" class="chart-legend"></div>
          </div>
        </div>
        <div class="overlay">
          <i class="fa fa-refresh fa-spin"></i>
        </div>
        <!-- /.box-body -->
      </div>
    </div>
    <div class="col-md-12 col-lg-6">
    <div class="box" id="forward-destinations-pie">
        <div class="box-header with-border">
          <h3 class="box-title">Queries answered by</h3>
        </div>
        <div class="box-body">
          <div class="float-left" style="width:50%">
            <canvas id="forwardDestinationPieChart" width="120" height="120" class="extratooltipcanvas"></canvas>
          </div>
          <div class="float-left" style="width:50%">
            <div id="forward-destinations-legend" class="chart-legend" class="extratooltipcanvas"></div>
          </div>
        </div>
        <div class="overlay">
          <i class="fa fa-refresh fa-spin"></i>
        </div>
        <!-- /.box-body -->
      </div>
    </div>
</div>

<div class="row">
    <div class="col-md-6">
      <div class="box" id="domain-frequency">
        <div class="box-header with-border">
          <h3 class="box-title">Top Permitted Domains</h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
            <div class="table-responsive">
                <table class="table table-bordered">
                  <tbody>
                    <tr>
                    <th>Domain</th>
                    <th>Hits</th>
                    <th>Frequency</th>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>
        <div class="overlay">
          <i class="fa fa-refresh fa-spin"></i>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
    </div>
    <!-- /.col -->
    <div class="col-md-6">
      <div class="box" id="ad-frequency">
        <div class="box-header with-border">
          <h3 class="box-title">Top Blocked Domains</h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
            <div class="table-responsive">
                <table class="table table-bordered">
                  <tbody>
                    <tr>
                    <th>Domain</th>
                    <th>Hits</th>
                    <th>Frequency</th>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>
        <div class="overlay">
          <i class="fa fa-refresh fa-spin"></i>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
    </div>
</div>
<div class="row">
    <!-- /.col -->
    <div class="col-md-6">
      <div class="box" id="client-frequency">
        <div class="box-header with-border">
          <h3 class="box-title">Top Clients (total)</h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
            <div class="table-responsive">
                <table class="table table-bordered">
                  <tbody>
                    <tr>
                    <th>Client</th>
                    <th>Requests</th>
                    <th>Frequency</th>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>
        <div class="overlay">
          <i class="fa fa-refresh fa-spin"></i>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
    </div>
    <!-- /.col -->
    <!-- /.col -->
    <div class="col-md-6">
      <div class="box" id="client-frequency-blocked">
        <div class="box-header with-border">
          <h3 class="box-title">Top Clients (blocked only)</h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
            <div class="table-responsive">
                <table class="table table-bordered">
                  <tbody>
                    <tr>
                    <th>Client</th>
                    <th>Requests</th>
                    <th>Frequency</th>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>
        <div class="overlay">
          <i class="fa fa-refresh fa-spin"></i>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
    </div>
    <!-- /.col -->
</div>
<!-- /.row -->

<script src="scripts/pi-hole/js/index.js"></script>


        </section>
        <!-- /.content -->
    </div>
    <!-- Modal for custom disable time -->
    <div class="modal fade" id="customDisableModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Custom disable timeout</h4>
                </div>
                <div class="modal-body">
                    <div class="input-group">
                        <input id="customTimeout" class="form-control" type="number" value="60">
                            <div class="input-group-btn" data-toggle="buttons">
                                <label class="btn btn-default">
                                    <input type="radio"/> Secs
                                </label>
                                <label id="btnMins" class="btn btn-default active">
                                    <input type="radio"  /> Mins
                                </label>
                            </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button  id="pihole-disable-custom" type="button" class="btn btn-primary" data-dismiss="modal">Submit</button>
                </div>
            </div>
        </div>
    </div>
    <!-- /.content-wrapper -->
    <footer class="main-footer">
	<!-- Version Infos -->
        <div class="pull-right hidden-xs hidden-sm">
            <b>Pi-hole Version </b> v4.3.1            <b>Web Interface Version </b>v4.3            <b>FTL Version </b> v4.3.1        </div>
        <div style="display: inline-block"><strong><a href="https://pi-hole.net/donate" target="_blank"><i class="fa fa-heart"></i> Donate</a></strong> if you found this useful.</div>
    </footer>
</div>
<!-- ./wrapper -->
<script src="scripts/pi-hole/js/footer.js"></script>
</body>
</html>
