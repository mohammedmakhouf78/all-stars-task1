const FS = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const Node = new JSDOM('').window.Node;



const path = "./test.html"


let html = FS.readFileSync(path, "utf-8");
const dom = new JSDOM(html);

run(dom.window.document.querySelector('html'));

function run(element) {
    element.childNodes.forEach(childNode => {
        if (childNode.nodeName == "SCRIPT") {
            return;
        }

        if (
            childNode.nodeType == Node.TEXT_NODE &&
            childNode.nodeName !== "SCRIPT" &&
            childNode.nodeValue.replace(/\u00a0/g, "x").trim().length != 0
        ) {


            childNode.textContent = "ahmed"

        }
        else {
            run(childNode)
        }
    });
}

let serializedHTML = dom.serialize()


FS.writeFileSync('test2.html', serializedHTML)














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