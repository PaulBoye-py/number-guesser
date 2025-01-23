#!/bin/bash
cd /var/www/number-guesser
npm install
nohup npm run dev > /dev/null 2>&1 &
