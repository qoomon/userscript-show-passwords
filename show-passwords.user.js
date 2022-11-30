// ==UserScript==
// @name         Show Passwords
// @namespace    https://qoomon.github.io
// @version      1.0.0
// @updateURL    https://github.com/qoomon/userscript-show-passwords/raw/main/show-passwords.user.js
// @downloadURL  https://github.com/qoomon/userscript-show-passwords/raw/main/show-passwords.user.js
// @description  Temporary show passwords by quadruple click input fields
// @author       Bengt
// @match        https://*/*
// @icon         https://img.icons8.com/ios-filled/48/password-window.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener("click", event => {
        if (event.detail !== 4) return; // quadruple click
        const target = event.target;
        if ( target.nodeName !== "INPUT" || target.type !== "password") return;

        target.setAttribute("type", "text");
        const reset = () => { target.type = "password"; };
        const timeout = setTimeout(reset, 5000)
        target.onblur= () => {
            clearTimeout(timeout);
            reset();
        }
    });
})();
