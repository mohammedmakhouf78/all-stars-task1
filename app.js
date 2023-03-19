const FS = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const Node = new JSDOM('').window.Node;
const puppeteer = require('puppeteer');



async function getTranslation(text) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://translate.google.com/?sl=en&tl=ar&text=' + text + '&op=translate', { waitUntil: 'load', timeout: 0 })

    await page.waitForSelector('#yDmH0d > c-wiz > div > div.WFnNle > c-wiz > div.OlSOob > c-wiz > div.ccvoYb.EjH7wc > div.AxqVh > div.OPPzxe > c-wiz.sciAJc > div > div.usGWQd > div > div.lRu31 > span.HwtZe > span > span', { visible: true })

    let element = await page.$('#yDmH0d > c-wiz > div > div.WFnNle > c-wiz > div.OlSOob > c-wiz > div.ccvoYb.EjH7wc > div.AxqVh > div.OPPzxe > c-wiz.sciAJc > div > div.usGWQd > div > div.lRu31 > span.HwtZe > span > span')

    let value = await page.evaluate(el => el.innerText, element)

    await browser.close();

    return value;
}



// getTranslation("this car is mine").then(function (res) {
//     console.log(res);
// })

















const path = "./test.html"


let html = FS.readFileSync(path, "utf-8");
const dom = new JSDOM(html);



async function translateElements(element) {
    await Promise.all(Array.from(element.childNodes).map(async (childNode) => {
        if (childNode.nodeName == "SCRIPT") {
            return;
        }

        if (
            childNode.nodeType == Node.TEXT_NODE &&
            childNode.nodeName !== "SCRIPT" &&
            childNode.nodeValue.replace(/\u00a0/g, "x").trim().length != 0
        ) {


            let res = await getTranslation(childNode.textContent)
            childNode.textContent = res
            console.log(childNode.textContent);
        }
        else {
            await translateElements(childNode)
        }
    }))

}

async function asdfsad() {
    await translateElements(dom.window.document.querySelector('html'));
    let serializedHTML = dom.serialize()

    console.log(serializedHTML);

    FS.writeFileSync('test2.html', serializedHTML)
}


asdfsad()














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