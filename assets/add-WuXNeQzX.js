(function(){"use strict";class c extends AudioWorkletProcessor{constructor(s){super()}process(s,o,t){for(let r=0;r<o[0].length;r++)for(let e=0;e<o[0][r].length;e++)o[0][r][e]=s[0][r][e]+s[1][r][e];return!0}}registerProcessor("add",c)})();
