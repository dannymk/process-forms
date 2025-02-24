// Load the Express web server from the library
const express = require('express');
// Create a running instance of the express server
const app = express();

// Read the html file and send it to the browser using the network
app.use(express.static('website-starts-here'));

//      DON'T Modify anything above unless you know what you are doing
// ============= Your code should only be between these lines ====================

app.get('/process-form-from-website', (request,response) => {
    let { name } = request.query;

	 if ( name ){
		 response.send(`Hello ${name}`);
	 }else{
		 response.send(`<p style="background-color: red;padding: 2em">Hey!, you did not give me a name.  Notice the URL with the name parameter and the syntax (..?name=...)</p>`);
	 }

});

// ============= Your code should only be between these lines ====================
//      DON'T Modify anything below unless you know what you are doing

// Listen on port 8080.  You should be able to connect to: http://localhost:8080
app.listen(8080, () => {
	console.log(`Server listening at:   http://localhost:8080`);
	console.log("You should also be able to see the actual server action by visiting: http://localhost:8080/process-form-from-website \n give it a name so you can see what happens: http://localhost:8080/process-form-from-website?name=YourName");
});
