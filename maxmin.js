function maxMinAvg(arr){
	var max = min = sum = avg = null;
	for (var i = 0; i < arr.length; i++){
		arr[i] += sum;
		if (arr[i] > max){
			max = arr[i]
		}else if (arr[i] < min){
			min = arr[i]
		}
	}
	avg = sum/arr.length
	return "The minimum is "+ min +", the maximum is "+max+", and the average is "+avg;
}

console.log(maxMinAvg([1, -2, 9, 4]))