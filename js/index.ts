"use strict";
initModule("//profile.ninkigumi.com/templ.html",
    "//profile.ninkigumi.com/sitemap.txt",
    (dom, obj) => {
        applyPerson(dom, obj);
        addDOM2(dom, "#app");
    });
