#!/usr/bin/env node
require('expansion');

Object.defineProperty(global, '__config', {
    value:require('path').join(__dirname, 'utils', 'config.json')
});

switch(process.argv[2]){
    case "config":
        require('./lib/config.js');
        break;
    case "export":
        require('./lib/export.js');
        break;
    case "help":
        require('./lib/help.js');
        break;
    case "import":
        require('./lib/import.js');
        break;
    case "query":
        require('./lib/query.js');
        break;
    case "queue":
        require('./lib/queue.js');
        break;
    case "set":
        require('./lib/set.js');
        break;
    case "unset":
        require('./lib/unset.js');
        break;
    case "version":
        require('./lib/version.js');
        break;
    default:
        console.log("\nPlease provide a valid option: config, export, help, import, query, queue, set, unset, version.\n");
        break;
}