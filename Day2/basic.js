const http = require('http');
const fs = require('fs');

// Create a server object
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/message' && method === 'POST'){
        fs.writeFileSync('message.text','Dummy');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><body>Welcome NodeJs Program</body></head>');
    res.write('<body><h1>My First NodeJs Program</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);


// let nums = [0, 0, 1, 1, 2, 3, 3]
// var removeDuplicates = function(nums) {
//     let temp=0;
//     for(let i=1;i<=nums.length;i++){
//         if(nums[i] !== nums[temp]){
//             temp++;
//             nums[temp]=nums[i]
//         }
//     }
//     return temp;
// };

// removeDuplicates(nums)