	var app = angular.module('rayApp', []);

    app.controller('storeController', function($scope) {

	// array to hold products that have been bought
	$scope.cartArray = [];

	// total buy cost
	$scope.total = 0;
	
	$scope.addItemToCart = function(product) {
		console.log("addItemToCart");

		if ($scope.cartArray.length === 0) {
			// if there are no products in the cart, add it to the array
			product.count = 1;
			$scope.cartArray.push(product);
		}
		else
		{
			var multiple = false;

			// if the product is already in the cart, increase it's quantity
			for (var i = 0; i < $scope.cartArray.length; i++) {
				if ($scope.cartArray[i].id === product.id) {
					$scope.cartArray[i].count += 1;
					multiple = true;
				}
			}

			// if the product is not in the cart, add it to the cart
			if (!multiple) {
				product.count = 1;
				$scope.cartArray.push(product);
			}
		}

		// adds the price of 1x product to the total
		$scope.total += parseFloat(product.price);
	}

	$scope.removeItemFromCart = function(product){
		console.log("removeItemCart");

		if(product.count > 1){
			product.count -= 1;
		}
		else if(product.count === 1){
			// remove the prodoct from the array if the quantity will be 0
			var index = $scope.cartArray.indexOf(product);
			$scope.cartArray.splice(index, 1);
		}

		// minuses the price of 1x product to the total
		$scope.total -= parseFloat(product.price);
	}

	// available items in the store
	$scope.productsData = [{
		id: 1,
		name: 'Granny Smith',
		price: 0.99,
		image: ''
	},{
		id: 2,
		name: 'Golden Delicious',
		price: 0.75,
		image: ''
	},{
		id: 3,
		name: 'Fuji',
		price: 1,
		image: ''
	},{
		id: 4,
		name: 'Red Delicious',
		price: 0.5,
		image: ''
	}];	
	
	});