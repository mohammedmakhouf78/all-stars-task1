const FS = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const Node = new JSDOM('').window.Node;
const puppeteer = require('puppeteer');



async function getTranslation(text) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://translate.google.com/?sl=en&tl=hi&text=' + text + '&op=translate', { waitUntil: 'load', timeout: 0 })

    await page.waitForSelector('#yDmH0d > c-wiz > div > div.WFnNle > c-wiz > div.OlSOob > c-wiz > div.ccvoYb.EjH7wc > div.AxqVh > div.OPPzxe > c-wiz.sciAJc > div > div.usGWQd > div > div.lRu31 > span.HwtZe > span > span', { visible: true })

    let element = await page.$('#yDmH0d > c-wiz > div > div.WFnNle > c-wiz > div.OlSOob > c-wiz > div.ccvoYb.EjH7wc > div.AxqVh > div.OPPzxe > c-wiz.sciAJc > div > div.usGWQd > div > div.lRu31 > span.HwtZe > span > span')

    let value = await page.evaluate(el => el.innerText, element)

    await browser.close();

    return value;
}



// getTranslation("this car is mine").then(function (res) {
//     console.log(res);
// })







const Path = require("path");
let Files = [];

function ThroughDirectory(Directory) {
    FS.readdirSync(Directory).forEach(File => {
        const Absolute = Path.join(Directory, File);
        if (FS.statSync(Absolute).isDirectory()) return ThroughDirectory(Absolute);
        else {
            if (Absolute.split('.').pop() == "html") {
                Files.push(Absolute)
            }
            return;
        }
    });
}

ThroughDirectory("./www.classcentral.com");










// const path = "./test.html"


let html = FS.readFileSync(Files[0], "utf-8");
const dom = new JSDOM(html);


let childNodes = []

function getAllChildNodes(element){
    element.childNodes.forEach(childNode => {
        if (childNode.nodeName == "SCRIPT" || childNode.nodeName == "STYLE") {
            return;
        }
    
        if (
            childNode.nodeType == Node.TEXT_NODE &&
            childNode.nodeName !== "SCRIPT" &&
            childNode.nodeName !== "STYLE" &&
            childNode.nodeValue.replace(/\u00a0/g, "x").trim().length != 0
        ) {
            childNodes.push(childNode)
        }
        else {
            getAllChildNodes(childNode)
        }
    });
}
getAllChildNodes(dom.window.document.querySelector('html'))


translateAll()

async function translatePlease(childNodes){
    let count = 0;
    for (const childNode of childNodes) {
        await sleep(4000)
        childNode.textContent = await getTranslation(childNode.textContent)
        console.log(`translated ${++count} ${childNode.textContent}`);
    }
}

async function translateAll(){
    await translatePlease(childNodes)
    let serializedHTML = dom.serialize()

    console.log("done with translating all the file: " + Files[0]);

    FS.writeFileSync(Files[0], serializedHTML)

    console.log("Success");
}



function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
  }

// async function translateElements(element) {
//     await Promise.all(Array.from(element.childNodes).map((childNode) => {
//         setTimeout(async () => {
//             if (childNode.nodeName == "SCRIPT") {
//                 return;
//             }
    
//             if (
//                 childNode.nodeType == Node.TEXT_NODE &&
//                 childNode.nodeName !== "SCRIPT" &&
//                 childNode.nodeValue.replace(/\u00a0/g, "x").trim().length != 0
//             ) {
    
    
//                 let res = await getTranslation(childNode.textContent)
//                 childNode.textContent = res
//                 console.log(childNode.textContent);
//             }
//             else {
//                 await translateElements(childNode)
//             }
//         }, 2000);
//     }))

// }

// async function asdfsad() {
//     translateElements(dom.window.document.querySelector('html'));
//     let serializedHTML = dom.serialize()

//     console.log(serializedHTML);

//     // FS.writeFileSync('test2.html', serializedHTML)
// }


// asdfsad()













// const path = "./www.classcentral.com"
// const Path = require("path");
// const FS = require("fs");
// let Files = [];

// function ThroughDirectory(Directory) {
//     FS.readdirSync(Directory).forEach(File => {
//         const Absolute = Path.join(Directory, File);
//         if (FS.statSync(Absolute).isDirectory()) return ThroughDirectory(Absolute);
//         else {
//             if (Absolute.split('.').pop() == "html") {
//                 Files.push(Absolute)
//             }
//             return;
//         }
//     });
// }

// ThroughDirectory(path);

// console.log(Files);