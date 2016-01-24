#!/usr/bin/env node

var vorpal = require('vorpal')();
var excuses = require('./store/excuses');
var chalk = require('chalk');
var emoji = require('node-emoji');

vorpal
    .command('excuse', 'Best excuses to get out of relationship')
    .action(function(args, callback) {
        var excuse = excuses[getRandomInt(0, excuses.length)];
        this.log(emoji.emojify(':broken_heart: :broken_heart: :broken_heart: :broken_heart: '), excuse);
        callback();
    });

vorpal
    .delimiter(chalk.bold.blue('lovebird$'))
    .show();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
