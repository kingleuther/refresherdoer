<html ng-app="myApp">
    <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
        <title>
            My App
        </title>
    </head>
    
    <body ng-controller="MainController as mc">
        <div class="row">
            <div class="col-lg-2">
                <label for="for-usr">Enter your name :</label>
                <input type="text" ng-model="name" class="form-control" placeholder="Enter your name">
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
            <h1>Hello <span ng-bind="name"></span></h1>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-5">
                <li ng-repeat="tasks in mc.tasks">
                <span my-draggable>{{tasks.task}} - {{tasks.desc}} 
                </li>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-5">
                <button class="btn btn-primary" ng-click="mc.setBool()">TEST ME</button>
            </div>
        </div>
        <div class="row" ng-if="mc.bool == true">
            <div class="col-lg-5">
                <div>SHOW ME</div>
            </div>
        </div>          
        <br>        
        <div class="row">
            <div class="col-lg-5">
                <button class="btn btn-primary" ng-click="mc.showAlert()">Click Me</button>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-lg-12">
                <select ng-model="selectTask" ng-options="tasks.desc as tasks.desc for tasks in mc.tasks">
                    <option value="" selected hidden>Select an option</option>
                </select>
                <h1><span ng-bind="selectTask"></span></h1>
            </div>
        </div>
        <h2>My Factory of Students</h2>
        <div class="row">
            <div class="col-lg-5">
                <li ng-repeat="students in mc.students">
                    {{students.name}} - {{students.grade}}
                </li>
            </div>
        </div>
        <compo-greeting> </compo-greeting> 
        <span dir-Ectives></span>                   
    </body>
    
</html>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular.js"></script>
<script src="app.js"></script>
<script src="directives.js"></script> 
<script src="factory.js"></script>  
<script src="component.js"></script>
      