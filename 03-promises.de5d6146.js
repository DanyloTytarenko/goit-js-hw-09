!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("6JpON");function u(e,t){return new Promise((function(n,o){Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();for(var n=Number(t.target.delay.value),o=Number(t.target.step.value),i=Number(t.target.amount.value),a=1;a<=i;a+=1)u(a,n).then((function(t){var n=t.position,o=t.delay;setTimeout((function(){e(r).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))}),o)})).catch((function(t){var n=t.position,o=t.delay;setTimeout((function(){e(r).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}),o)})),n+=o}))}();
//# sourceMappingURL=03-promises.de5d6146.js.map
