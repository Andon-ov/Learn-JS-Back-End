const fs = require('fs');


const filename = './models/data.json';
const data = JSON.parse(fs.readFileSync(filename));

async function persist() {
    return new Promise((res, rej) => {
        fs.watchFile(filename, JSON.stringify(data), (err) => {
            if (err === null) {
                res();
            } else {
                rej(err);
            }
        });
    });
}

function getAll() {
    return data;
}

function getById(id) {
    return data.find(d => d.id === id);
}


module.exports = {
    getAll,
    getById
};