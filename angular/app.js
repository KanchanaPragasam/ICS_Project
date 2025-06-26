var myapp = angular.module("mymod", []);
myapp.controller("firstcontroller", myctrl);

function myctrl ($scope){
	$scope.showresults = false;
    $scope.openings = [
        { 
			jobcode : "DPROC2",
			position : "Software Developer",
			technology : "Pro*C",
			experience : "2+ Years",
			requirement: "Should have excellent development experience in Pro*C language.",
			location : "Information Consultants Services, Montreal, QC, Canada"
        },
        { 
			jobcode : "DCCPP2",
			position : "Software Engineer",
			technology : "C & C++",
			experience : "2+ Years",
			requirement: "Should have excellent development experience in C & C++ language.",
			location : "Information Consultants Services, Montreal, QC, Canada"
        },
        { 
			jobcode : "DCJSW2",
			position : "Senior Software Engineer",
			technology : "Core Java, Swings, Structs",
			experience : "4+ Years",
			requirement: "Should have excellent development experience in Core Java, Java Swings, Structs.",
			location : "Information Consultants Services, Montreal, QC, Canada"
        },
        { 
			jobcode : "DHDPW5",
			position : "Software Developer",
			technology : "Hadoop (mapReduce, Hive, Spark, Kafka)",
			experience : "1+ Years",
			requirement: "Should have excellent development experience in mapReduce, Hive, Spark & Kafka. Should be willing to play the role of technical lead as well.",
			location : "Information Consultants Services, Montreal, QC, Canada"
        },		
             
    ];
	$scope.filterSearch = function(){
		$scope.showresults = true;
		if(angular.isUndefined($scope.item)){
			console.log('inside if');
			//console.log($scope.item);
			 //$scope.openings = "";
			 $scope.showvalues = false;			 
			 $scope.errmsg = true;			 
			 $scope.message = "Please select from the dropdown";

		} else {
			console.log('inside else');			
			$scope.showvalues = true;
			 $scope.errmsg = false;			
			console.log($scope.item);
			/*console.log('position');
			console.log($scope.item.position);
			console.log('technology');		
			console.log($scope.item.technology);
			console.log('experience');		
			console.log($scope.item.experience);
			console.log('location');			
			console.log($scope.item.location);*/
		}
		console.log('search button clicked');
		//console.log($scope.openings);

	};
	
	$scope.clearSearch = function(){
		$scope.item.pos = true;
		$scope.item.tech = true;
	}

	$scope.update = function(val){
		console.log('inside update');
		console.log(val);
	}

}



/*function twoctrl($scope, $timeout){
	$scope.twit_handle = "";
	
	$scope.$watch('twit_handle', function(oldval, newval){
		console.info('changed');
		console.log('oldval: ' + oldval);
		console.log('newval: ' + newval);
	})
	
	setTimeout(function(){
		$scope.$apply(function(){
			$scope.twit_handle = "praveeth";
			console.log('Scope changed');
			//$scope.$digest();
		})
	}, 3000)
}*/