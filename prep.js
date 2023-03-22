const FS = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const Node = new JSDOM('').window.Node;
const puppeteer = require('puppeteer');
const Path = require("path");



String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};



run()

function run(){
    let files = [
        // "www.classcentral.com/subject/biology.html",
        // "www.classcentral.com/subject/blockchain.html",
        // "www.classcentral.com/subject/business-intelligence.html",
        // "www.classcentral.com/subject/business-software.html",
        // "www.classcentral.com/subject/business.html",
        // "www.classcentral.com/subject/calculus.html",
        // "www.classcentral.com/subject/career-development.html",
        // "www.classcentral.com/subject/chemical-engineering.html",
        // "www.classcentral.com/subject/chemistry.html",
        // "www.classcentral.com/subject/civil-engineering.html",


        // "www.classcentral.com/subject/cme.html",
        // "www.classcentral.com/subject/communication-skills.html",
        // "www.classcentral.com/subject/computer-graphics.html",
        // "www.classcentral.com/subject/course-development.html",
        // "www.classcentral.com/subject/cryptography.html",
        // "www.classcentral.com/subject/customer-service.html",
        // "www.classcentral.com/subject/data-analysis.html",
        // "www.classcentral.com/subject/data-mining.html",
        // "www.classcentral.com/subject/data-science.html",
        // "www.classcentral.com/subject/data-visualization.html",
        // "www.classcentral.com/subject/deep-learning.html",
        // "www.classcentral.com/subject/design-and-creativity.html",
        // "www.classcentral.com/subject/devops.html",
        // "www.classcentral.com/subject/digital-forensics.html",
        // "www.classcentral.com/subject/digital-media.html",
        // "www.classcentral.com/subject/earth-science.html",
        // "www.classcentral.com/subject/education.html",
        // "www.classcentral.com/subject/electrical-engineering.html",
        // "www.classcentral.com/subject/energy-systems.html",
        // "www.classcentral.com/subject/engineering.html",
        // "www.classcentral.com/subject/entrepreneurship.html",
        // "www.classcentral.com/subject/environmental-science.html",
        // "www.classcentral.com/subject/esl.html",
        // "www.classcentral.com/subject/ethical-hacking.html",
        // "www.classcentral.com/subject/food.html",


        // "www.classcentral.com/subject/foundations-of-mathematics.html",
        // "www.classcentral.com/subject/game-development.html",
        // "www.classcentral.com/subject/geometry.html",
        // "www.classcentral.com/subject/gis.html",
        // "www.classcentral.com/subject/governance.html",
        // "www.classcentral.com/subject/grammar-writing.html",
        // "www.classcentral.com/subject/group-theory.html",
        // "www.classcentral.com/subject/hci.html",
        // "www.classcentral.com/subject/health-care.html",
        // "www.classcentral.com/subject/higher-education.html",
        // "www.classcentral.com/subject/history.html",
        // "www.classcentral.com/subject/human-resources.html",
        // "www.classcentral.com/subject/humanities.html",
        // "www.classcentral.com/subject/industry-specific.html",
        // "www.classcentral.com/subject/information-technology.html",
        // "www.classcentral.com/subject/infosec-certifications.html",
        // "www.classcentral.com/subject/journalism.html",
        // "www.classcentral.com/subject/k12.html",
        // "www.classcentral.com/subject/language-learning.html",
        // "www.classcentral.com/subject/law.html",
        // "www.classcentral.com/subject/linear-programming.html",
        // "www.classcentral.com/subject/linguistics.html",
        // "www.classcentral.com/subject/machine-learning.html",


        "www.classcentral.com/subject/malware-analysis.html",
        "www.classcentral.com/subject/management-and-leadership.html",
        "www.classcentral.com/subject/manufacturing.html",
        "www.classcentral.com/subject/marketing.html",
        "www.classcentral.com/subject/mathematical-logic.html",
        "www.classcentral.com/subject/maths.html",
        "www.classcentral.com/subject/mechanical-engineering.html",
        "www.classcentral.com/subject/meteorology.html",
        "www.classcentral.com/subject/mobile-development.html",
        "www.classcentral.com/subject/music.html",
        "www.classcentral.com/subject/nanotechnology.html",
        "www.classcentral.com/subject/network-security.html",
        "www.classcentral.com/subject/nonprofit.html",
        "www.classcentral.com/subject/number-theory.html",
        "www.classcentral.com/subject/nursing.html",
        "www.classcentral.com/subject/nutrition-and-wellness.html",
        "www.classcentral.com/subject/operations-management.html",
        "www.classcentral.com/subject/osint.html",
        "www.classcentral.com/subject/pedagogy.html",
        "www.classcentral.com/subject/pentesting.html",
        "www.classcentral.com/subject/personal-development.html",
        "www.classcentral.com/subject/physics.html",
        "www.classcentral.com/subject/precalculus.html",
        "www.classcentral.com/subject/presentation-skills.html",
        "www.classcentral.com/subject/programming-and-software-development.html",
        "www.classcentral.com/subject/programming-languages.html",
        "www.classcentral.com/subject/project-management.html",
        "www.classcentral.com/subject/psychology.html",
        "www.classcentral.com/subject/quantum-computing.html",
        "www.classcentral.com/subject/reading.html",
        "www.classcentral.com/subject/red-team.html",
        "www.classcentral.com/subject/religion.html",
        "www.classcentral.com/subject/resilience.html",
        "www.classcentral.com/subject/risk-management.html",
        "www.classcentral.com/subject/sales.html",
        "www.classcentral.com/subject/set-theory.html",
        "www.classcentral.com/subject/social-sciences.html",
        "www.classcentral.com/subject/sociology.html",
        "www.classcentral.com/subject/software-development.html",
        "www.classcentral.com/subject/sports.html",
        "www.classcentral.com/subject/sustainability.html",
        "www.classcentral.com/subject/teacher-development.html",
        "www.classcentral.com/subject/test-prep.html",
        "www.classcentral.com/subject/trigonometry.html",
        "www.classcentral.com/subject/urban-planning.html",
        "www.classcentral.com/subject/veterinary-science.html",
        "www.classcentral.com/subject/web-development.html",
    ]

    for (const fileName of files)
    {
        let html = FS.readFileSync(fileName, "utf-8");

        html = html.replace('src="/images/promobar/celebrate.svg"',
            'src="../images/promobar/celebrate.svg"')

            .replace('src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"',
            'src="../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"')

            .replace('src="/webpack/analytics.2edefc668ab4db842c41.js"',
            'src="../webpack/analytics.2edefc668ab4db842c41.js"')

            .replace('//www.google-analytics.com/analytics.js',
            '../../www.google-analytics.com/analytics.js')

            .replaceAll('/fonts/source-sans-pro-hinted',
            '../fonts/source-sans-pro-unhinted',)

            .replace('//in.getclicky.com/100717250ns.gif',
            '../../in.getclicky.com/100717250ns.gif')

            .replace('//static.getclicky.com/js',
            '../../static.getclicky.com/js.js')

            .replace('/favicon-32x32.png',
            '../favicon-32x32.png')

            .replace('/favicon-16x16.png',
            '../favicon-16x16.png')

            .replace('</footer>',
            `
                </footer>

                <script src="../webpack/messages-intl-icu-en-yml.64477e124174f9d771be.js"></script>
                <script src="../webpack/2074.c4642c0407922b16e0d1.js"></script>
                <script src="../webpack/Auth.1f03c0fa42fb94d83a15.js"></script>
                <script src="../webpack/MarkComplete.e9560adcebc4ad54e6bf.js"></script>
                <script src="../webpack/UserActions.30ee83ef27eafec0be61.js"></script>
                <script src="../webpack/4826.ea570b7100e8c5e53e11.js"></script>
                <script src="../webpack/Misc.a66f8a686e276f997313.js"></script>
                <script src="../webpack/Pagination.fd8539ea70965c8542c8.js"></script>
                <script src="../webpack/Filters.781a45b928bd1af34c1a.js"></script>
                <script src="../webpack/CatalogIframes.e92a992e0057084c87f3.js"></script>
                <script src="../webpack/CatalogCuratedContent.d46ca8deb825bb5facd8.js"></script>
                <script src="../../in.getclicky.com/getclicky.js"></script>
            `)

        FS.writeFileSync(fileName, html)
        
        console.log("done with Preperaing all the file: " + fileName);
    }
}


