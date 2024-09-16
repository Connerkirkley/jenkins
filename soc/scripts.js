const http = require('http');
const fs = require('fs');



const puzzles = [fs.readFileSync('./html/puzzle1.html', 'utf8'),fs.readFileSync('./html/puzzle2.html', 'utf8'),fs.readFileSync('./html/puzzle3.html', 'utf8'),fs.readFileSync('./html/puzzle4.html', 'utf8'),fs.readFileSync('./html/puzzle5.html', 'utf8'),fs.readFileSync('./html/puzzle6.html', 'utf8'),fs.readFileSync('./html/puzzle7.html', 'utf8'),fs.readFileSync('./html/puzzle8.html', 'utf8'),fs.readFileSync('./html/puzzle9.html', 'utf8'),fs.readFileSync('./html/puzzle10.html', 'utf8'),fs.readFileSync('./html/final.html', 'utf8'),fs.readFileSync('./html/wrong.html', 'utf8'),fs.readFileSync('./html/index.html', 'utf8'),]

console.log(puzzles);

const server = http.createServer((req, res) => {
    
    if(req.url === '/'){
        res.end(puzzles[12])
    }
    else if(req.url === '/start'){
        res.end(puzzles[0])
    }
    else if(req.url === '/gigaByte'){
        res.end(puzzles[1])
    }
    else if(req.url === '/blueLight'){
        res.end(puzzles[2])
    }
    else if(req.url === '/377'){
        res.end(puzzles[3])
    }
    else if(req.url === '/everything'){
        res.end(puzzles[4])
    }
    else if(req.url === '/answer'){
        res.end(puzzles[5])
    }
    else if(req.url === '/c2NpZW5jZQ=='){
        res.end(puzzles[6])
    }
    else if(req.url === '/antOnARubberRope'){
        res.end(puzzles[7])
    }
    else if(req.url === '/screen'){
        res.end(puzzles[8])
    }
    else if(req.url === '/10'){
        res.end(puzzles[9])
    }
    else if(req.url === '/gt7nsZbr1'){
        res.end(puzzles[10])
    }
    else{
        res.end(puzzles[11])
    }
})

server.listen(5000)







