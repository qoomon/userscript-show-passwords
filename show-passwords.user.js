// ==UserScript==
// @name         Show Passwords
// @namespace    https://qoomon.github.io
// @version      1.1.0
// @updateURL    https://github.com/qoomon/userscript-show-passwords/raw/main/show-passwords.user.js
// @downloadURL  https://github.com/qoomon/userscript-show-passwords/raw/main/show-passwords.user.js
// @description  Temporary show passwords by quadruple click input fields
// @author       Bengt
// @match        https://*/*
// @icon         https://img.icons8.com/fluency-systems-filled/64/show-password.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener("keydown", (event) => {
        if (event.ctrlKey && event.key === "#"
            && document.activeElement.nodeName === "INPUT"
            && (document.activeElement.type === "password" || document.activeElement._passwordTimeout)) {

            const inputElement = document.activeElement;
            if (inputElement.type === "password") {
                inputElement.type = "text";
                inputElement._passwordTimeout = setTimeout(() => {
                    inputElement.type = "password";
                }, 5000);
                // inputElement.onblur = () => {
                //    clearTimeout(inputElement._passwordTimeout);
                //    inputElement.type = "password";
                // }
            } else {
                clearTimeout(inputElement._passwordTimeout);
                inputElement.type = "password";
            }
        }
    });
})();
