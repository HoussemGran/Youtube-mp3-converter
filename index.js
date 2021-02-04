const open = require("open");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('paste a valid youtube url?\n', url => {
    
    const myurl = url.slice(32,url.indexOf('&'));
    console.log("please wait a moment ...");

    JSDOM.fromURL(`https://www.yt-download.org/public/api/button/mp3/${myurl}`).then(dom => {
    
    const ahref = dom.window.document.querySelectorAll('a');
    const url = ahref[0].href;
    open(url)
        
}).catch(err=>{
    console.log(err)
})

    readline.close();
  });
