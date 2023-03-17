<?php

include "./vendor/autoload.php";

use Google\Cloud\Translate\V2\TranslateClient;


$translate = new TranslateClient([
    'keyFilePath' => "./aisha-367110-d16a87ce0421.json"
]);

$result = $translate->translate('Hello world!', [
    'target' => 'fr'
]);

echo $result['text'] . "\n";

// $path = "./test.html";

// $file = file_get_contents($path);

// $dom = new DOMDocument('1.0', 'UTF-8');
// $dom->loadHTML($file);

// myFunc($dom);

// $dom->saveHTMLFile("test2.html");

// function myFunc(DOMNode $domNode)
// {
//     foreach ($domNode->childNodes as $node) {
//         if ($node->hasChildNodes()) {
//             myFunc($node);
//         } else {
//             if ($node instanceof DOMText &&  !$node->isElementContentWhitespace()) {
//                 print_r($node->textContent);
//                 $node->textContent = "ahmed";
//             }
//         }
//     }
// }





// $path = "./www.classcentral.com";

// $files = scandir($path);
// $files = array_diff($files, ['.', '..']);


// function getDirContents($dir, &$results = array())
// {
//     $files = scandir($dir);

//     foreach ($files as $key => $value) {
//         $path = realpath($dir . DIRECTORY_SEPARATOR . $value);
//         if (!is_dir($path)) {
//             $results[] = $path;
//         } else if ($value != "." && $value != "..") {
//             getDirContents($path, $results);
//             $results[] = $path;
//         }
//     }

//     return $results;
// }

// $files = getDirContents($path);
// $htmlFiles = [];

// foreach ($files as $fileName) {
//     $fileNames = explode('.', $fileName);
//     if (end($fileNames) == "html") {
//         $htmlFiles[] = $fileName;
//     }
// }
