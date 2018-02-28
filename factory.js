(function(){
    'use strict';

    angular
    .module('myApp')
    .factory('Factory', Factory);

    function Factory(){
        var students = [
            {name:'rej',grade:'70'},
            {name:'abel',grade:'75'},
            {name:'au',grade:'80'},
            {name:'jam',grade:'70'}
        ];
        
        function showStudents(){
            return students;
        }
        var factory = {
              showStudents: showStudents        
        };

        return factory;

    }

})();
