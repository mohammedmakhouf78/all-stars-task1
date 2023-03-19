const FS = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const Node = new JSDOM('').window.Node;
const puppeteer = require('puppeteer');


let words = {
    
}


async function getTranslation(text) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    text = text.trim()

    if(words.hasOwnProperty(text)){
        return words[text]
    }

    if(text == 'classcentral.com')
    {
        return text;
    }

    var regExp = /[a-zA-Z]/g;
                
    if( !regExp.test(text))
    {
        return text;
    }

    await page.goto('https://translate.google.com/?sl=en&tl=hi&text=' + text + '&op=translate', { waitUntil: 'load', timeout: 0 })

    await page.waitForSelector('#yDmH0d > c-wiz > div > div.WFnNle > c-wiz > div.OlSOob > c-wiz > div.ccvoYb.EjH7wc > div.AxqVh > div.OPPzxe > c-wiz.sciAJc > div > div.usGWQd > div > div.lRu31 > span.HwtZe > span > span', { visible: true })

    let element = await page.$('#yDmH0d > c-wiz > div > div.WFnNle > c-wiz > div.OlSOob > c-wiz > div.ccvoYb.EjH7wc > div.AxqVh > div.OPPzxe > c-wiz.sciAJc > div > div.usGWQd > div > div.lRu31 > span.HwtZe > span > span')

    let value = await page.evaluate(el => el.innerText, element)

    await browser.close();

    words[text] = value
    return value;
}



// getTranslation("this car is mine").then(function (res) {
//     console.log(res);
// })







const Path = require("path");
let Files = [
    // "www.classcentral.com/about/careers.html",
    // "www.classcentral.com/about/privacy-policy.html",
    // "www.classcentral.com/about.html",
    // "www.classcentral.com/cdn-cgi/l/email-protection.html",
    // "www.classcentral.com/collection/ivy-league-moocs/index.html",
    // "www.classcentral.com/collection/ivy-league-moocs.html",
    // "www.classcentral.com/collection/sustainability-online-courses.html",
    "www.classcentral.com/collection/top-free-online-courses.html",
    "www.classcentral.com/collections.html",
    "www.classcentral.com/contact.html",
    "www.classcentral.com/coordinator/index.html",
    "www.classcentral.com/course/edx-mining-massive-datasets-2406.html",
    "www.classcentral.com/course/information-systems-audit-17979.html",
    "www.classcentral.com/course/medicalneuro-384.html",
    "www.classcentral.com/delete-item/index.html",
    "www.classcentral.com/enrollee-list/update-item-progress/index.html",
    "www.classcentral.com/help/moocs.html",
    "www.classcentral.com/help.html",
    "www.classcentral.com/index.html",
    "www.classcentral.com/institution/amazon.html",
    "www.classcentral.com/institution/amazon4658.html",
    "www.classcentral.com/institution/british-council.html",
    "www.classcentral.com/institution/google.html",
    "www.classcentral.com/institution/google4658.html",
    "www.classcentral.com/institution/ibm.html",
    "www.classcentral.com/institution/ibm4658.html",
    "www.classcentral.com/institution/linuxfoundation.html",
    "www.classcentral.com/institution/linuxfoundation4658.html",
    "www.classcentral.com/institution/microsoft.html",
    "www.classcentral.com/institution/microsoft4658.html",
    "www.classcentral.com/institution/salesforce.html",
    "www.classcentral.com/institution/salesforce4658.html",
    "www.classcentral.com/institution/smithsonian.html",
    "www.classcentral.com/institutions.html",
    "www.classcentral.com/lists.html",
    "www.classcentral.com/login.html",
    "www.classcentral.com/maestro/course-reviews/index.html",
    "www.classcentral.com/mooc-course-report/march-2023.html",
    "www.classcentral.com/move-item/index.html",
    "www.classcentral.com/new-online-courses/february-2023.html",
    "www.classcentral.com/new-online-courses/february-20234658.html",
    "www.classcentral.com/provider/coursera.html",
    "www.classcentral.com/provider/coursera4658.html",
    "www.classcentral.com/provider/edx.html",
    "www.classcentral.com/provider/edx4658.html",
    "www.classcentral.com/provider/futurelearn.html",
    "www.classcentral.com/provider/futurelearn4658.html",
    "www.classcentral.com/provider/linkedin-learning.html",
    "www.classcentral.com/provider/linkedin-learning4658.html",
    "www.classcentral.com/provider/skillshare.html",
    "www.classcentral.com/provider/skillshare4658.html",
    "www.classcentral.com/provider/swayam.html",
    "www.classcentral.com/provider/swayam4658.html",
    "www.classcentral.com/provider/udacity.html",
    "www.classcentral.com/provider/udacity4658.html",
    "www.classcentral.com/provider/udemy.html",
    "www.classcentral.com/provider/udemy4658.html",
    "www.classcentral.com/provider/unccelearn.html",
    "www.classcentral.com/providers.html",
    "www.classcentral.com/rankings.html",
    "www.classcentral.com/report/100-most-popular-online-courses-2021/index.html",
    "www.classcentral.com/report/2022-year-in-review/index.html",
    "www.classcentral.com/report/author/dhawal/index.html",
    "www.classcentral.com/report/author/heba/index.html",
    "www.classcentral.com/report/author/manoel/index.html",
    "www.classcentral.com/report/author/page/2/index.html",
    "www.classcentral.com/report/best-bookkeeping-courses/index.html",
    "www.classcentral.com/report/best-crystal-programming-courses/index.html",
    "www.classcentral.com/report/best-css-layout-courses/index.html",
    "www.classcentral.com/report/best-data-science-courses/index.html",
    "www.classcentral.com/report/best-free-online-courses-2021/index.html",
    "www.classcentral.com/report/best-free-online-courses-2022/index.html",
    "www.classcentral.com/report/best-user-experience-courses/index.html",
    "www.classcentral.com/report/category/best-courses/index.html",
    "www.classcentral.com/report/category/best-courses/page/2/index.html",
    "www.classcentral.com/report/class-central-ddos-attack/index.html",
    "www.classcentral.com/report/coursera-economics/index.html",
    "www.classcentral.com/report/coursera-free-online-courses/index.html",
    "www.classcentral.com/report/coursera-google-new-deal/index.html",
    "www.classcentral.com/report/coursera-top-courses/index.html",
    "www.classcentral.com/report/cs50-free-certificate/index.html",
    "www.classcentral.com/report/edx-top-courses/index.html",
    "www.classcentral.com/report/emoocs-2023-cfp/index.html",
    "www.classcentral.com/report/feed/index.html",
    "www.classcentral.com/report/free-certificates/index.html",
    "www.classcentral.com/report/free-google-certifications/index.html",
    "www.classcentral.com/report/futurelearn-price-hike-ceo-exit/index.html",
    "www.classcentral.com/report/google-free-certificates/index.html",
    "www.classcentral.com/report/index.html",
    "www.classcentral.com/report/index02ea.html",
    "www.classcentral.com/report/index04e8.html",
    "www.classcentral.com/report/index0967.html",
    "www.classcentral.com/report/index0ebe.html",
    "www.classcentral.com/report/index127b.html",
    "www.classcentral.com/report/index12cf.html",
    "www.classcentral.com/report/index1a28.html",
    "www.classcentral.com/report/index2250.html",
    "www.classcentral.com/report/index296e.html",
    "www.classcentral.com/report/index29c3.html",
    "www.classcentral.com/report/index3476.html",
    "www.classcentral.com/report/index3575.html",
    "www.classcentral.com/report/index4337.html",
    "www.classcentral.com/report/index4541.html",
    "www.classcentral.com/report/index47b3.html",
    "www.classcentral.com/report/index4821.html",
    "www.classcentral.com/report/index4928.html",
    "www.classcentral.com/report/index4aa4.html",
    "www.classcentral.com/report/index590a.html",
    "www.classcentral.com/report/index5a49.html",
    "www.classcentral.com/report/index5a97.html",
    "www.classcentral.com/report/index5cd6.html",
    "www.classcentral.com/report/index5f7b.html",
    "www.classcentral.com/report/index6b6e.html",
    "www.classcentral.com/report/index702e.html",
    "www.classcentral.com/report/index70a0.html",
    "www.classcentral.com/report/index7b9d.html",
    "www.classcentral.com/report/index8ee0.html",
    "www.classcentral.com/report/index9a39.html",
    "www.classcentral.com/report/indexa750.html",
    "www.classcentral.com/report/indexacb4.html",
    "www.classcentral.com/report/indexb51a.html",
    "www.classcentral.com/report/indexbd64.html",
    "www.classcentral.com/report/indexc39c.html",
    "www.classcentral.com/report/indexc9a6.html",
    "www.classcentral.com/report/indexd15c.html",
    "www.classcentral.com/report/indexe891.html",
    "www.classcentral.com/report/indexfbe4.html",
    "www.classcentral.com/report/india-online-degrees/index.html",
    "www.classcentral.com/report/learning-with-moocs-2023/index.html",
    "www.classcentral.com/report/linkedin-learning-free-learning-paths/index.html",
    "www.classcentral.com/report/list-of-mooc-based-microcredentials/index.html",
    "www.classcentral.com/report/masterclass-layoffs-round-three/index.html",
    "www.classcentral.com/report/mooc-based-masters-degree/index.html",
    "www.classcentral.com/report/most-cited-mooc-research/index.html",
    "www.classcentral.com/report/most-popular-courses-2022/index.html",
    "www.classcentral.com/report/most-popular-courses-2023/index.html",
    "www.classcentral.com/report/most-popular-march-2023/index.html",
    "www.classcentral.com/report/most-popular-online-courses/index.html",
    "www.classcentral.com/report/online-learning-deals/index.html",
    "www.classcentral.com/report/open-university-insiders-perspective/index.html",
    "www.classcentral.com/report/review-primeros-auxilios-psicologicos/index.html",
    "www.classcentral.com/report/review-psychological-first-aid/index.html",
    "www.classcentral.com/report/udemy-layoffs/index.html",
    "www.classcentral.com/report/udemy-top-courses/index.html",
    "www.classcentral.com/report/wp-json/index.html",
    "www.classcentral.com/report/writing-free-online-courses/index.html",
    "www.classcentral.com/report/xmlrpc0db0.html",
    "www.classcentral.com/s/index.html",
    "www.classcentral.com/signup.html",
    "www.classcentral.com/starting-this-month.html",
    "www.classcentral.com/starting-this-month4658.html",
    "www.classcentral.com/subject/accounting.html",
    "www.classcentral.com/subject/accounting4658.html",
    "www.classcentral.com/subject/aerospace-engineering.html",
    "www.classcentral.com/subject/aerospace-engineering4658.html",
    "www.classcentral.com/subject/agriculture.html",
    "www.classcentral.com/subject/ai.html",
    "www.classcentral.com/subject/ai4658.html",
    "www.classcentral.com/subject/algebra.html",
    "www.classcentral.com/subject/algebra4658.html",
    "www.classcentral.com/subject/algorithms-and-data-structures.html",
    "www.classcentral.com/subject/algorithms-and-data-structures4658.html",
    "www.classcentral.com/subject/anatomy.html",
    "www.classcentral.com/subject/anatomy4658.html",
    "www.classcentral.com/subject/anthropology.html",
    "www.classcentral.com/subject/applied-science.html",
    "www.classcentral.com/subject/archaeology.html",
    "www.classcentral.com/subject/art-and-design.html",
    "www.classcentral.com/subject/art-and-design4658.html",
    "www.classcentral.com/subject/astronomy.html",
    "www.classcentral.com/subject/astronomy4658.html",
    "www.classcentral.com/subject/big-data.html",
    "www.classcentral.com/subject/big-data4658.html",
    "www.classcentral.com/subject/bim.html",
    "www.classcentral.com/subject/bioinformatics.html",
    "www.classcentral.com/subject/biology.html",
    "www.classcentral.com/subject/blockchain.html",
    "www.classcentral.com/subject/blue-team.html",
    "www.classcentral.com/subject/business-intelligence.html",
    "www.classcentral.com/subject/business-software.html",
    "www.classcentral.com/subject/business.html",
    "www.classcentral.com/subject/cad.html",
    "www.classcentral.com/subject/cad4658.html",
    "www.classcentral.com/subject/calculus.html",
    "www.classcentral.com/subject/career-development.html",
    "www.classcentral.com/subject/chemical-engineering.html",
    "www.classcentral.com/subject/chemistry.html",
    "www.classcentral.com/subject/childhood-development.html",
    "www.classcentral.com/subject/childhood-development4658.html",
    "www.classcentral.com/subject/civil-engineering.html",
    "www.classcentral.com/subject/cloud-computing.html",
    "www.classcentral.com/subject/cloud-computing4658.html",
    "www.classcentral.com/subject/cme.html",
    "www.classcentral.com/subject/combinatorics.html",
    "www.classcentral.com/subject/communication-skills.html",
    "www.classcentral.com/subject/computer-graphics.html",
    "www.classcentral.com/subject/computer-networking.html",
    "www.classcentral.com/subject/computer-networking4658.html",
    "www.classcentral.com/subject/course-development.html",
    "www.classcentral.com/subject/crisis-management.html",
    "www.classcentral.com/subject/cryptography.html",
    "www.classcentral.com/subject/cs.html",
    "www.classcentral.com/subject/cs4658.html",
    "www.classcentral.com/subject/csr.html",
    "www.classcentral.com/subject/culture.html",
    "www.classcentral.com/subject/culture4658.html",
    "www.classcentral.com/subject/customer-service.html",
    "www.classcentral.com/subject/cybersecurity.html",
    "www.classcentral.com/subject/cybersecurity4658.html",
    "www.classcentral.com/subject/data-analysis.html",
    "www.classcentral.com/subject/data-mining.html",
    "www.classcentral.com/subject/data-science.html",
    "www.classcentral.com/subject/data-visualization.html",
    "www.classcentral.com/subject/databases.html",
    "www.classcentral.com/subject/databases4658.html",
    "www.classcentral.com/subject/deep-learning.html",
    "www.classcentral.com/subject/design-and-creativity.html",
    "www.classcentral.com/subject/design-thinking.html",
    "www.classcentral.com/subject/design-thinking4658.html",
    "www.classcentral.com/subject/devops.html",
    "www.classcentral.com/subject/devsecops.html",
    "www.classcentral.com/subject/digital-forensics.html",
    "www.classcentral.com/subject/digital-media.html",
    "www.classcentral.com/subject/discrete-mathematics.html",
    "www.classcentral.com/subject/disease-and-disorders.html",
    "www.classcentral.com/subject/disease-and-disorders4658.html",
    "www.classcentral.com/subject/distributed-systems.html",
    "www.classcentral.com/subject/earth-science.html",
    "www.classcentral.com/subject/economics.html",
    "www.classcentral.com/subject/economics4658.html",
    "www.classcentral.com/subject/education.html",
    "www.classcentral.com/subject/electrical-engineering.html",
    "www.classcentral.com/subject/energy-systems.html",
    "www.classcentral.com/subject/engineering.html",
    "www.classcentral.com/subject/entrepreneurship.html",
    "www.classcentral.com/subject/environmental-science.html",
    "www.classcentral.com/subject/esl.html",
    "www.classcentral.com/subject/ethical-hacking.html",
    "www.classcentral.com/subject/ethics.html",
    "www.classcentral.com/subject/ethics4658.html",
    "www.classcentral.com/subject/finance.html",
    "www.classcentral.com/subject/finance4658.html",
    "www.classcentral.com/subject/food.html",
    "www.classcentral.com/subject/forensic-science.html",
    "www.classcentral.com/subject/foundations-of-mathematics.html",
    "www.classcentral.com/subject/game-development.html",
    "www.classcentral.com/subject/geometry.html",
    "www.classcentral.com/subject/gis.html",
    "www.classcentral.com/subject/governance.html",
    "www.classcentral.com/subject/grammar-writing.html",
    "www.classcentral.com/subject/graph-theory.html",
    "www.classcentral.com/subject/group-theory.html",
    "www.classcentral.com/subject/hci.html",
    "www.classcentral.com/subject/health-care.html",
    "www.classcentral.com/subject/health.html",
    "www.classcentral.com/subject/health4658.html",
    "www.classcentral.com/subject/higher-education.html",
    "www.classcentral.com/subject/history.html",
    "www.classcentral.com/subject/human-resources.html",
    "www.classcentral.com/subject/human-rights.html",
    "www.classcentral.com/subject/human-rights4658.html",
    "www.classcentral.com/subject/humanities.html",
    "www.classcentral.com/subject/industry-specific.html",
    "www.classcentral.com/subject/information-technology.html",
    "www.classcentral.com/subject/infosec-certifications.html",
    "www.classcentral.com/subject/infosec.html",
    "www.classcentral.com/subject/infosec4658.html",
    "www.classcentral.com/subject/innovation.html",
    "www.classcentral.com/subject/innovation4658.html",
    "www.classcentral.com/subject/internet-of-things.html",
    "www.classcentral.com/subject/internet-of-things4658.html",
    "www.classcentral.com/subject/it-certifications.html",
    "www.classcentral.com/subject/it-certifications4658.html",
    "www.classcentral.com/subject/journalism.html",
    "www.classcentral.com/subject/jupyter.html",
    "www.classcentral.com/subject/k12.html",
    "www.classcentral.com/subject/language-learning.html",
    "www.classcentral.com/subject/law.html",
    "www.classcentral.com/subject/library-science.html",
    "www.classcentral.com/subject/linear-programming.html",
    "www.classcentral.com/subject/linguistics.html",
    "www.classcentral.com/subject/literature.html",
    "www.classcentral.com/subject/literature4658.html",
    "www.classcentral.com/subject/machine-learning.html",
    "www.classcentral.com/subject/malware-analysis.html",
    "www.classcentral.com/subject/management-and-leadership.html",
    "www.classcentral.com/subject/manufacturing.html",
    "www.classcentral.com/subject/marketing.html",
    "www.classcentral.com/subject/materials-science.html",
    "www.classcentral.com/subject/materials-science4658.html",
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
    "www.classcentral.com/subject/online-education.html",
    "www.classcentral.com/subject/online-education4658.html",
    "www.classcentral.com/subject/operating-systems.html",
    "www.classcentral.com/subject/operations-management.html",
    "www.classcentral.com/subject/osint.html",
    "www.classcentral.com/subject/pedagogy.html",
    "www.classcentral.com/subject/pentesting.html",
    "www.classcentral.com/subject/personal-development.html",
    "www.classcentral.com/subject/philosophy.html",
    "www.classcentral.com/subject/philosophy4658.html",
    "www.classcentral.com/subject/physics.html",
    "www.classcentral.com/subject/political-science.html",
    "www.classcentral.com/subject/political-science4658.html",
    "www.classcentral.com/subject/precalculus.html",
    "www.classcentral.com/subject/presentation-skills.html",
    "www.classcentral.com/subject/programming-and-software-development.html",
    "www.classcentral.com/subject/programming-languages.html",
    "www.classcentral.com/subject/project-management.html",
    "www.classcentral.com/subject/psychology.html",
    "www.classcentral.com/subject/public-health.html",
    "www.classcentral.com/subject/public-health4658.html",
    "www.classcentral.com/subject/quantum-computing.html",
    "www.classcentral.com/subject/reading.html",
    "www.classcentral.com/subject/red-team.html",
    "www.classcentral.com/subject/religion.html",
    "www.classcentral.com/subject/resilience.html",
    "www.classcentral.com/subject/reverse-engineering.html",
    "www.classcentral.com/subject/risk-management.html",
    "www.classcentral.com/subject/robotics.html",
    "www.classcentral.com/subject/robotics4658.html",
    "www.classcentral.com/subject/sales.html",
    "www.classcentral.com/subject/science.html",
    "www.classcentral.com/subject/science4658.html",
    "www.classcentral.com/subject/self-improvement.html",
    "www.classcentral.com/subject/self-improvement4658.html",
    "www.classcentral.com/subject/set-theory.html",
    "www.classcentral.com/subject/social-sciences.html",
    "www.classcentral.com/subject/social-work.html",
    "www.classcentral.com/subject/sociology.html",
    "www.classcentral.com/subject/software-development.html",
    "www.classcentral.com/subject/sports.html",
    "www.classcentral.com/subject/statistics.html",
    "www.classcentral.com/subject/statistics4658.html",
    "www.classcentral.com/subject/stem.html",
    "www.classcentral.com/subject/stem4658.html",
    "www.classcentral.com/subject/strategic-management.html",
    "www.classcentral.com/subject/strategic-management4658.html",
    "www.classcentral.com/subject/sustainability.html",
    "www.classcentral.com/subject/teacher-development.html",
    "www.classcentral.com/subject/test-prep.html",
    "www.classcentral.com/subject/textiles.html",
    "www.classcentral.com/subject/threat-intelligence.html",
    "www.classcentral.com/subject/threat-intelligence4658.html",
    "www.classcentral.com/subject/trigonometry.html",
    "www.classcentral.com/subject/urban-planning.html",
    "www.classcentral.com/subject/veterinary-science.html",
    "www.classcentral.com/subject/visual-arts.html",
    "www.classcentral.com/subject/visual-arts4658.html",
    "www.classcentral.com/subject/web-development.html",
    "www.classcentral.com/subjects.html",
    "www.classcentral.com/subjects4658.html",
    "www.classcentral.com/universities.html",
    "www.classcentral.com/university/columbia.html",
    "www.classcentral.com/university/columbia4658.html",
    "www.classcentral.com/university/cornell.html",
    "www.classcentral.com/university/duke.html",
    "www.classcentral.com/university/duke4658.html",
    "www.classcentral.com/university/edinburgh.html",
    "www.classcentral.com/university/edinburgh4658.html",
    "www.classcentral.com/university/gatech.html",
    "www.classcentral.com/university/gatech4658.html",
    "www.classcentral.com/university/harvard.html",
    "www.classcentral.com/university/harvard4658.html",
    "www.classcentral.com/university/iit-kharagpur.html",
    "www.classcentral.com/university/iit-kharagpur4658.html",
    "www.classcentral.com/university/iitm.html",
    "www.classcentral.com/university/iitm4658.html",
    "www.classcentral.com/university/mit.html",
    "www.classcentral.com/university/mit4658.html",
    "www.classcentral.com/university/penn.html",
    "www.classcentral.com/university/penn4658.html",
    "www.classcentral.com/university/purdue.html",
    "www.classcentral.com/university/purdue4658.html",
    "www.classcentral.com/university/rice.html",
    "www.classcentral.com/university/rice4658.html",
    "www.classcentral.com/university/stanford.html",
    "www.classcentral.com/university/stanford4658.html",
    "www.classcentral.com/university/umich.html",
    "www.classcentral.com/university/umich4658.html",
    "www.classcentral.com/update-item/index.html"
  ];

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

// ThroughDirectory("./www.classcentral.com");



// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'application/json'});


//   res.end(JSON.stringify(Files));
// }).listen(8083);








// const path = "./test.html"


// let html = FS.readFileSync(Files[0], "utf-8");
// const dom = new JSDOM(html);


// let childNodes = []

// function getAllChildNodes(element){
//     element.childNodes.forEach(childNode => {
//         if (childNode.nodeName == "SCRIPT" || childNode.nodeName == "STYLE") {
//             return;
//         }
    
//         if (
//             childNode.nodeType == Node.TEXT_NODE &&
//             childNode.nodeName !== "SCRIPT" &&
//             childNode.nodeName !== "STYLE" &&
//             childNode.nodeValue.replace(/\u00a0/g, "x").trim().length != 0
//         ) {
//             childNodes.push(childNode)
//         }
//         else {
//             getAllChildNodes(childNode)
//         }
//     });
// }
// getAllChildNodes(dom.window.document.querySelector('html'))
let childNodes = [];


translateAll()

async function translatePlease(childNodes){
    for (const childNode of childNodes) {
        await sleep(1000)
        childNode.textContent = await getTranslation(childNode.textContent)
    }
}


async function translateAll(){
    for (const fileName of Files)
    {
        let html = FS.readFileSync(fileName, "utf-8");
        const dom = new JSDOM(html);
        childNodes = [];
        
        getAllChildNodes(dom.window.document.querySelector('html'))

        await translatePlease(childNodes)
        let serializedHTML = dom.serialize()


        FS.writeFileSync(fileName, serializedHTML)
        
        console.log("done with translating all the file: " + fileName);
        console.log(words);
    }
}


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