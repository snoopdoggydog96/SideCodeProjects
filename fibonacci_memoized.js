function memo(func){
    var cache = {};
    return function(){
	var key = JSON.stringify(arguments);
	if (cache[key]){
	    console.log(cache)
	    return cache[key];
	}
	else{
	    val = func.apply(null, arguments);
	    cache[key] = val;
	    return val;
	}
    }
}
var fib = memo(function(n) {
    if (n < 2){
	return 1;
    }else{
	//We'll console.log a loader every time we have to recurse
	console.log("loading...");
	return fib(n-2) + fib(n-1);
    }
});
