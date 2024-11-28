const http = require('http');

const server = http.createServer( (req, res) => {
    //console.log(req);

    if(req.url === '/'){
        res.end("Welcome back to home");
        return;
    }

    if(req.url === '/about'){
        res.end("Welcome back to ABOUT");
        return;
    }
    
    res.end(`<h1>Oops!</h1>
        <p>The page u r looking for is not available yet the moment.</p>
        <a href="/">Back home</a>`);
});

server.listen(8000, () => {
    console.log('Server is running on port 8000...');
});