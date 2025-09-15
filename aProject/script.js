const fs = require('node:fs');

//Task: Read the content from nodtes.txt

console.log('Reading content from notes.txt...');

// const content = fs.readFileSync('notes.txt', 'utf-8');
// console.log(content);
// sync operation known as blocking operation
// readFileSync is used to read the content of a file synchronously
// It blocks the execution until the file is read


console.log('Ending content to notes.txt...');



//Async operation known as non-blocking operation
fs.readFile('notes.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

console.log('Ending asynvcontent to notes.txt...');

