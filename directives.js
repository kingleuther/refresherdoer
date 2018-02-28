(function(){
  angular.module('myApp')
  .directive('dirEctives',dirEctives);
  dirEctives.$inject = [];

  function dirEctives(){
      var directive = {
          restrict : 'A',
          template:"<h2>CLICK ME I AM A DIRECTIVE</h2>",
          scope: {},   
          link:linkFunc,
          controller:MyController
      };
  
      return directive;
  
      function linkFunc(scope, elem, attr, ctrl){
          elem.on('click',function(event){
              ctrl.ctrlMethod();
          });
          elem.css({
            border: '1px dotted black',
            cursor: 'pointer'
           });
      }

      function MyController(){
        var vm = this;

        vm.ctrlMethod = ctrlMethod;

        function ctrlMethod(){
            window.open("http://localhost/angular/me.php", "width=500", "height=500");
        }
    }
  }
})();