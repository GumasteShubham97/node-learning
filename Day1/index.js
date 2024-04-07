const fs = require('fs');
const http = require('http');
const url = require('url');


/////////////////////////////
//Files
////////////////////////////

//Blocking Synchronous way
/* const textIn= fs.readFileSync('./txtFiles/abc.txt','utf-8');
console.log(textIn);

const textOut = `This is what we know about nodejs : ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txtFiles/output.txt',textOut);
console.log('File Written'); */

//Non-Blocking 

/* fs.readFile('./txtFiles/abcNotes.txt','utf-8',(err,data1)=>{
    console.log(data1);
    fs.readFile(`./txtFiles/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile(`./txtFiles/append.txt`,'utf-8',(err,data3)=>{
            console.log(data3);
            fs.writeFile(`./txtFiles/final.txt`, `${data2}\n${data3}\nCreated on ${Date.now()}`,'utf-8', (err)=>{
                console.log(`File Written Successfully.....`);
            })
        })
    });
});
console.log(`Will Read File!`); */

////////////////////////////////////////
///////////Server
/////////////////////////////////////////



fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
    const productData = JSON.parse(data);
    // console.log(productData);
    // res.writeHead(200, {
    //     'Content-type': 'application/json'
    // });
    // res.end(data)
});

const server = http.createServer((req, res) => {
    //console.log(req);
    //console.log(req.url);
    const pathName = req.url
    if (pathName === '/' || pathName == '/overview') {
        res.end(`This is overview`)
    } else if (pathName == '/product') {
        res.end(`This is product`)
    } else if (pathName === '/api') {
        
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end(`<h1>Page Not Found!</h1>`)
    }
    //res.end('Hello From the sever')
});

server.listen(4040, '127.0.0.1', () => {
    console.log(`Server Stared listing on port 4040`);
})