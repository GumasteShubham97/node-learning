const fs = require("fs");
const http = require("http");
const url = require("url");
const slugify = require("slugify");

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

/* const data = fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
    const productData = JSON.parse(data);
    // console.log(productData);
    // res.writeHead(200, {
    //     'Content-type': 'application/json'
    // });
    // res.end(data)
}); */

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const tempCards = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);
const dataObject = JSON.parse(data);
const replaceTemplate = require("./modules/replaceTemplate");
const { toUnicode } = require("punycode");

const slugs = dataObject.map((ele) =>
  slugify(ele.productName, { lower: true })
);
console.log(slugs);
console.log(slugify("Fresh Avocados", { lower: true }));

const server = http.createServer((req, res) => {
  // request url
  //console.log(req);
  //console.log(`Request URL is :- ${req.url}`);
  //console.log(url.parse(req.url, true));
  //const pathname = req.url

  const { query, pathname } = url.parse(req.url, true);

  //Overview Page
  if (pathname === "/" || pathname == "/overview") {
    //res.end(`This is overview`)
    res.writeHead(200, { "content-type": "text/html" });

    const cardsHtml = dataObject
      .map((ele) => replaceTemplate(tempCards, ele))
      .join("");
    const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);
    res.end(output);

    //console.log(cardsHtml);
    //res.end(tempOverview);

    //product page
  } else if (pathname === "/product") {
    //console.log(query);
    //res.end(`This is product`)

    res.writeHead(200, { "content-type": "text/html" });
    const product = dataObject[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);

    //API
  } else if (pathname === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end(`<h1>Page Not Found!</h1>`);
  }
  //res.end('Hello From the sever')
});

server.listen(4040, "127.0.0.1", () => {
  console.log(`Server Stared listing on port 4040`);
});
