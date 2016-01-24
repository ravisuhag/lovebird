#!/usr/bin/env node

var program = require('commander');

program
    .version('0.0.1')
    .command('excuse', 'Best excuse to get out of relationship.')
    .command('compliment', 'Pay a compliment that can save you ass.')
    .parse(process.argv);
