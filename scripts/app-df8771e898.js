!function(){"use strict";angular.module("nelsonworks",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function e(e){var n=this,t=500;n.header="Michael Nelson",angular.element(window).scroll(function(){var n=angular.element(this).scrollTop();n>t&&angular.element(".banner-content").hasClass("banner-transition")&&angular.element(".banner-content").addClass("change-bg"),t>n&&angular.element(".banner-content").removeClass("change-bg");var l=document.querySelectorAll(".parallax"),a=.5;[].slice.call(l).forEach(function(n){var t,l;t=e.pageYOffset,l="50%"+t*a*-1+"px",n.style.backgroundPosition=l})})}e.$inject=["$window"],angular.module("nelsonworks").controller("MainController",e)}(),function(){"use strict";function e(){function e(){}e()}angular.module("nelsonworks").controller("BlogController",e)}(),function(){"use strict";function e(e,n,t){e.debug("runBlock end"),n.$state=t}e.$inject=["$log","$rootScope","$state"],angular.module("nelsonworks").run(e)}(),function(){"use strict";function e(e,n){e.state("index",{"abstract":!0,url:"",templateUrl:"app/layout/content.html"}).state("index.main",{url:"/main",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"vm"}).state("index.blog",{url:"/blog",templateUrl:"app/blog/blog.html",controller:"BlogController",controllerAs:"vm"}).state("index.contact",{url:"/contact",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"vm"}),n.otherwise("/main")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("nelsonworks").config(e)}(),function(){"use strict";angular.module("nelsonworks").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,n){e.debugEnabled(!0),n.allowHtml=!0,n.timeOut=3e3,n.positionClass="toast-top-right",n.preventDuplicates=!0,n.progressBar=!0}e.$inject=["$logProvider","toastrConfig"],angular.module("nelsonworks").config(e)}(),angular.module("nelsonworks").run(["$templateCache",function(e){e.put("app/blog/blog.html",'<div class=container-fluid><div class=row><div class="col-lg-offset-2 col-lg-8 text-fancy text-xl p-h-lg"><div class="col-lg-4 text-center"><p>Technology</p></div><div class="col-lg-4 text-center"><p>Fitness</p></div><div class="col-lg-4 text-center"><p>Lifestyle</p></div></div></div><div class=row><div class="col-lg-12 text-center text-fancy text-l"><p>Coming soon..</p></div></div></div>'),e.put("app/layout/content.html","<div><!-- Navigation bar --><div ng-include=\"'app/layout/navbar.html'\"></div><div ui-view></div><!-- Footer --><div ng-include=\"'app/layout/footer.html'\"></div></div>"),e.put("app/layout/footer.html",'<div class="panel-footer text-center">Michael Nelson © 2017</div>'),e.put("app/layout/navbar.html",'<div class="navbar navbar-default navbar-fixed-top"><div class=container><div class=navbar-header><a class=navbar-brand href=#><span class=text-fancy>Nelson</span></a></div><ul class="nav navbar-nav"><li class=one ng-class="{active: $state.includes(\'index.main\')}"><a ui-sref=index.main><b>Home</b></a></li><li class=two ng-class="{active: $state.includes(\'index.blog\')}"><a ui-sref=index.blog><b>Blog</b></a></li><!--<li class="three" ng-class="{active: $state.includes(\'index.contact\')}"><a ui-sref="index.contact"><b>Contact</b></a>--><!--</li>--><hr></ul></div></div>'),e.put("app/main/main.html",'<div class="sugar-plum parallax"><div id=headerBackground class="banner-content banner-transition"></div></div><div class="text-center title"><p>{{vm.header}}</p><h3>Software Developer</h3></div><div class="main-content container-fluid p-b-xxlg"><div class=row><div class="col-lg-offset-2 col-lg-8"><div class=col-lg-5><img class="img-circle img-responsive profile-img center-block" src=/nelson/assets/images/Skyline_of_Edinburgh.png></div><div class=col-lg-7><div class=profile-text><span class=text-md>I\'m a Full Stack Software Engineer originally from the west coast of Scotland, currently living in Edinburgh. When I\'m not working on personal project\'s I\'m either building my fitness, watching Game Of Thrones, or enjoying the beautiful city center.</span></div></div></div></div><div class=row><div class="col-lg-offset-2 col-lg-8 text-fancy text-xl p-h-lg"><div class="col-lg-4 text-center"><p>Technology</p></div><div class="col-lg-4 text-center"><p>Fitness</p></div><div class="col-lg-4 text-center"><p>Lifestyle</p></div></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-df8771e898.js.map