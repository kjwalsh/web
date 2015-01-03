var http= require('http');
var s = http.createServer(function(req, res){
	 res.writeHead(200, {'content-type' : 'text/plain'});  
	 res.write("Well\n");
	 
	 setTimeout(function() { res.end("world\n");  }, 6000);
	 res.end("bye"); 
	 
});

s.listen(8000);

setTimeout(function(){ 
	console.log("world");
 }, 2000)
 
console.log("hello"); 