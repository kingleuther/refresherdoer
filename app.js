(function(){
    angular.module('myApp',[])
    .controller('MainController',MainController);
    MainController.$inject = ['Factory'];

    function MainController(Factory,sampleComponent){
        var vm = this;

        vm.bool = false;
        vm.showAlert = showAlert;
        vm.setBool = setBool;
        vm.students = Factory.showStudents();

        vm.tasks = [
            {task:'1',desc:'Bind the input with a paragraph tag'},
            {task:'2',desc:'Loop an array of objects. You can just use a dummy data'},
            {task:'3',desc:'Show a sample div if a certain variable is true.'},
            {task:'4',desc:'Show an alert on button click'},
            {task:'5',desc:'Make a simple usage sample of ng-select'},
            {task:'6',desc:'Make a simple factory.'},
            {task:'7',desc:'Make a simple component.'},
            {task:'8',desc:'Make a simple directive (it is up to you what you’ll make)'}
        ];

        function showAlert(){
            alert("Pogi si Leuther");
        }

        function setBool(){
            vm.bool = !vm.bool?true:false
        }
    }
})();

