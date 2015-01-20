function bubbleSort(arr, comparisons){
		var counter = 0;
		for (var i = 0; i < arr.length - 1; i++){
			var first = arr[i];
			var second = arr[i + 1];
			if (arr[i] > arr[i + 1]){
				arr[i] = second;
				arr[i + 1] = first;
				counter++;
			}
		}
		if (counter > 0){
			//console.log(counter);
			comparisons += 1;
			return bubbleSort(arr, comparisons);
		}
		else{
			return arr;
		}
}

function merge(arr1, arr2){
	var newArray = [];
	var numElements = arr1.length + arr2.length;
	while (numElements > 0){
		if (arr1[0] == undefined){
			newArray = newArray.concat(arr2);
			numElements = 0;
		}
		else if (arr2[0] == undefined){
			newArray = newArray.concat(arr1);
			numElements = 0;
		}
		else if (arr1[0] > arr2[0]){
			newArray.push(arr2.shift());
			numElements--;
		}
		else if (arr2[0] > arr1[0]){
			newArray.push(arr1.shift());
			numElements--;
		}
	}
	console.log(newArray);
	return newArray;
}

function mergeSort(arr){
	if (arr.length <= 1){
		return arr;
	}
	else{
		var left = [];
		var right = [];
		var midPoint = arr.length / 2;

		for (var x in arr){
			if (x < midPoint){
				left.push(arr[x]);
			}
			else if (x >= midPoint){
				right.push(arr[x]);
			}
		}
		left = mergeSort(left);
		right = mergeSort(right);
	}
	return merge(left, right);
}