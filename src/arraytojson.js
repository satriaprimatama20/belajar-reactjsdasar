let jsonArg1 = new Object();
    jsonArg1.name = 'calc this';
    jsonArg1.value = 3.1415;
let jsonArg2 = new Object();
    jsonArg2.name = 'calc this again';
    jsonArg2.value = 2.73;

let pluginArrayArg = new Array();
    pluginArrayArg.push(jsonArg1);
    pluginArrayArg.push(jsonArg2);
// to convert pluginArrayArg (which is pure javascript array) into JSON array:

const jsonArray = () => {JSON.parse(JSON.stringify(pluginArrayArg))}