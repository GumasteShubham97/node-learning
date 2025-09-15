const fs = require('fs');

const contenet = fs.readFileSync('notes.txt', 'utf-8');
console.log(contenet);

fs.writeFileSync('output.txt', contenet, 'utf-8');
console.log('File content written to output.txt');

//writefileSync is used to write data to a file and its overwrites the file if it already exists
// If the file does not exist, it creates a new file
// The 'utf-8' encoding is used to read and write the file in text format

fs.appendFileSync('output.txt', '\n\nAppended text', 'utf-8');
console.log('Text appended to output.txt');
//aappendFileSync is used to append data to a file
// If the file does not exist, it creates a new file    
// It appends the text to the end of the file without overwriting existing content

fs.mkdirSync('newDir/tyt/ee', { recursive: true });
console.log('Directory newDir created');
//mkdirSync is used to create a new directory
// The { recursive: true } option allows creating nested directories
// If the directory already exists, it does not throw an error


