// ==UserScript==
// @name         Ban Recorder
// @version      0.1
// @description  Creates a template ban report
// @author       Atlae
// @match        https://www.nationstates.net/nation=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (window.location.href.includes("nation=") && document.getElementsByTagName("form")[2].querySelectorAll('p')[1].innerText === "Unban") {
        const ro = document.getElementsByClassName("bellink quietlink mediumname")[0].innerText;
        const url = window.location.href;
        const area = document.createElement("TEXTAREA");
        const text = document.createTextNode(`RO Name: ${ro}\nBanned: [url]${url}[/url]\nReason: who knows\nEvidence: hi`);
        area.appendChild(text);
        document.querySelector("fieldset.nationbanbuttons").innerHTML += '<p><a href="https://forum.theeastpacific.com/posting.php?mode=reply&f=18&t=17131" target="_blank">Record Ban</a></p>'
        document.querySelector("fieldset.nationbanbuttons").appendChild(area);
    }

})();
