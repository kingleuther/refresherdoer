(function(){
    angular.module('myApp')
    .component('compoGreeting',Compo());

    function Compo(){
        var component = {
            template: "<div class='row'>"+
                        "<div class='col-lg-12'>"+
                            "<h1><span>Hello World! Hello this is my Component</span><h1>"+
                        "</div>"+
                      "</div>"                
        };
        return component;
    }
})();
