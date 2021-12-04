// obtain cookieconsent plugin
var cc = initCookieConsent();
var lorem_ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ';
var short_lorem_ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis exercitation. ';
var super_short_lorem_ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
var loaded_clarity = false;
if (!cc.get('level')) {

                // Disable gtag ...
                
                window.dataLayer = window.dataLayer || [];

                function gtag() {
                    dataLayer.push(arguments);
                }

                gtag('consent', 'default', {
                    'ad_storage': 'denied',
                    'analytics_storage': 'granted',
                    'wait_for_update': 500
                });
                console.log('chargement defaut gtag');
            }

// run plugin with config object
cc.run({
    current_lang: 'fr',
    autoclear_cookies: true,                    // default: false
    theme_css: '../src/cookieconsent.css',
    cookie_name: 'cc_cookie_demo2',             // default: 'cc_cookie'
    cookie_expiration: 365,                     // default: 182
    page_scripts: true,                         // default: false
    force_consent: true,                        // default: false

     //auto_language: browser,                     // default: null; could also be 'browser' or 'document'
     autorun: true,                           // default: true
    // delay: 0,                                // default: 0
    // hide_from_bots: false,                   // default: false
    // remove_cookie_tables: false              // default: false
    // cookie_domain: location.hostname,        // default: current domain
    // cookie_path: '/',                        // default: root
    // cookie_same_site: 'Lax',
    // use_rfc_cookie: false,                   // default: false
    // revision: 0,                             // default: 0

    gui_options: {
        consent_modal: {
            layout: 'cloud',                    // box,cloud,bar
            position: 'bottom center',          // bottom,middle,top + left,right,center
            transition: 'slide'                 // zoom,slide
        },
        settings_modal: {
            layout: 'bar',                      // box,bar
            position: 'left',                   // right,left (available only if bar layout selected)
            transition: 'slide'                 // zoom,slide
        }
    },

    /* End new options added in v2.4 */

    onAccept: function (cookie) {
        console.log('onAccept fired ...');
        disableBtn('btn2');
        disableBtn('btn3');
        if (!cc.allowedCategory('targeting')) {

                // Disable gtag ...
                
                window.dataLayer = window.dataLayer || [];

                function gtag() {
                    dataLayer.push(arguments);
                }

                gtag('consent', 'update', {
                    'ad_storage': 'denied',
                    'analytics_storage': 'granted'
                });
                gtag('set', 'url_passthrough', true);
                gtag('set', 'ads_data_redaction', true);
                console.log('disabling ads gtag');
            }else{
                console.log('ok gtag')
                window.dataLayer = window.dataLayer || [];

                function gtag() {
                    dataLayer.push(arguments);
                }

                gtag('consent', 'update', {
                    'ad_storage': 'granted',
                    'analytics_storage': 'granted'
                });
                console.log('update gtag');
            }

        // Delete line below
        document.getElementById('cookie_val') && (document.getElementById('cookie_val').innerHTML = JSON.stringify(cookie, null, 2));
    },

    onChange: function (cookie, changed_preferences) {
        console.log('onChange fired ...');

        // If analytics category's status was changed ...
        if (changed_preferences.indexOf('targeting') > -1) {

            // If analytics category is disabled ...
            if (!cc.allowedCategory('targeting')) {

                // Disable gtag ...
            
                window.dataLayer = window.dataLayer || [];

                function gtag() {
                    dataLayer.push(arguments);
                }

                gtag('consent', 'update', {
                    'ad_storage': 'denied',
                    'analytics_storage': 'granted'
                });
                gtag('set', 'url_passthrough', true);
                gtag('set', 'ads_data_redaction', true);
                console.log('disabling ads gtagchange');
            }
        }

        // Delete line below
        document.getElementById('cookie_val') && (document.getElementById('cookie_val').innerHTML = JSON.stringify(cookie, null, 2));
    },

    languages : {
            'en' : {    
                consent_modal : {
                    title :  "Hello, would you like a cookie ?",
                    description :  short_lorem_ipsum + '<button type="button" data-cc="c-settings" class="cc-link">Manage preferences</button>',
                    primary_btn: {
                        text: 'Accept',
                        role: 'accept_all'              //'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text : 'Reject',
                        role : 'accept_necessary'       //'settings' or 'accept_necessary'
                    }
                },
                settings_modal : {
                    title : '<div>Cookie settings</div><div aria-hidden="true" style="font-size: .8em; font-weight: 400; color: #687278; margin-top: 5px;">Powered by <a tabindex="-1" aria-hidden="true" href="https://github.com/orestbida/cookieconsent/">cookie-consent</a></div>',
                    save_settings_btn : "Save settings",
                    accept_all_btn : "Accept all",
                    reject_all_btn : "Reject all",
                    close_btn_label: "Close",
                    cookie_table_headers : [
                        {col1: "Name" }, 
                        {col2: "Domain" }, 
                        {col3: "Description" }
                    ],
                    blocks : [
                        {
                            title : "Cookie usage",
                            description: short_lorem_ipsum + ' <a href="#" class="cc-link">Privacy policy</a>'
                        },{
                            title : "Strictly necessary cookies",
                            description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                            toggle : {
                                value : 'necessary',
                                enabled : true,
                                readonly: true                          //cookie categories with readonly=true are all treated as "necessary cookies"
                            }
                        },{
                            title : "Performance and analytics cookies",
                            description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                            toggle : {
                                value : 'analytics',
                                enabled : false,
                                readonly: false
                            },
                            cookie_table: [
                                {
                                    col1: '_ga',
                                    col2: 'orestbida.com',
                                    col3: super_short_lorem_ipsum,
                                    path: window.location.pathname
                                },
                                {
                                    col1: '_gat',
                                    col2: 'orestbida.com',
                                    col3: super_short_lorem_ipsum,
                                    path: window.location.pathname
                                },
                                {
                                    col1: '_gid',
                                    col2: 'orestbida.com',
                                    col3: super_short_lorem_ipsum,
                                    path: window.location.pathname
                                }
                            ]
                        },{
                            title : "Targeting and Advertising cookies",
                            description: lorem_ipsum,
                            toggle : {
                                value : 'targeting',
                                enabled : false,
                                readonly: false,
                                reload: 'on_disable'
                            },
                            cookie_table: [
                                {
                                    col1: '^_cl',
                                    col2: 'orestbida.com',
                                    col3: 'All cookies starting with "_cl" are set by <a href="https://clarity.microsoft.com/terms">microsoft clarity</a>',
                                    is_regex: true,
                                }
                            ]
                        },{
                            title : "More information",
                            description: 'For any queries in relation to my policy on cookies and your choices, please <a class="cc-link" href="https://orestbida.com/contact/">contact me</a>.',
                        }
                    ]
                }
            },
            'it' : {    
                consent_modal : {
                    title :  "Salve, vuole un biscottino?",
                    description :  short_lorem_ipsum + '<button type="button" data-cc="c-settings" class="cc-link">Manage preferences</button>',
                    primary_btn: {
                        text: 'Accetta',
                        role: 'accept_all'              //'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text : 'Rifiuta',
                        role : 'accept_necessary'               //'settings' or 'accept_necessary'
                    }
                },
                settings_modal : {
                    title : '<div>Impostazioni dei cookies</div><div aria-hidden="true" style="font-size: .8em; font-weight: 400; color: #687278; margin-top: 5px;">Powered by <a tabindex="-1" aria-hidden="true" href="https://github.com/orestbida/cookieconsent/">cookie-consent</a></div>',
                    save_settings_btn : "Salva preferenze",
                    accept_all_btn : "Accetta tutto",
                    reject_all_btn : "Rifiuta tutto",
                    close_btn_label: "Chiudi",
                    cookie_table_headers : [
                        {col1: "Name" }, 
                        {col2: "Domain" }, 
                        {col3: "Description" }
                    ],
                    blocks : [
                        {
                            title : "Cookie usage",
                            description: short_lorem_ipsum + ' <a href="#" class="cc-link">Privacy policy</a>'
                        },{
                            title : "Strictly necessary cookies",
                            description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                            toggle : {
                                value : 'necessary',
                                enabled : true,
                                readonly: true                          //cookie categories with readonly=true are all treated as "necessary cookies"
                            }
                        },{
                            title : "Performance and analytics cookies",
                            description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                            toggle : {
                                value : 'analytics',
                                enabled : false,
                                readonly: false
                            },
                            cookie_table: [
                                {
                                    col1: '_ga',
                                    col2: 'orestbida.com',
                                    col3: super_short_lorem_ipsum,
                                    path: window.location.pathname
                                },
                                {
                                    col1: '_gat',
                                    col2: 'orestbida.com',
                                    col3: super_short_lorem_ipsum,
                                    path: window.location.pathname
                                },
                                {
                                    col1: '_gid',
                                    col2: 'orestbida.com',
                                    col3: super_short_lorem_ipsum,
                                    path: window.location.pathname
                                }
                            ]
                        },{
                            title : "Targeting and Advertising cookies",
                            description: lorem_ipsum,
                            toggle : {
                                value : 'targeting',
                                enabled : false,
                                readonly: false,
                                reload: 'on_disable'
                            },
                            cookie_table: [
                                {
                                    col1: '^_cl',
                                    col2: 'orestbida.com',
                                    col3: 'All cookies starting with "_cl" are set by <a href="https://clarity.microsoft.com/terms">microsoft clarity</a>',
                                    is_regex: true
                                }
                            ]
                        },{
                            title : "More information",
                            description: 'For any queries in relation to my policy on cookies and your choices, please <a class="cc-link" href="https://orestbida.com/contact/">contact me</a>.',
                        }
                    ]
                }
            },
            'de' : {    
                consent_modal : {
                    title :  "Hallo, möchtest du einen keks?",
                    description :  short_lorem_ipsum + '<button type="button" data-cc="c-settings" class="cc-link">Manage preferences</button>',
                    primary_btn: {
                        text: 'Akzeptieren',
                        role: 'accept_all'              //'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text : 'Ablehnen',
                        role : 'accept_necessary'               //'settings' or 'accept_necessary'
                    }
                },
                settings_modal : {
                    title : '<div>Cookie Einstellungen</div><div aria-hidden="true" style="font-size: .8em; font-weight: 400; color: #687278; margin-top: 5px;">Powered by <a tabindex="-1" aria-hidden="true" href="https://github.com/orestbida/cookieconsent/">cookie-consent</a></div>',
                    save_settings_btn : "Auswahl akzeptieren",
                    accept_all_btn : "Alle akzeptieren",
                    reject_all_btn : "Alles ablehnen",
                    close_btn_label: "Schließen",
                    cookie_table_headers : [
                        {col1: "Name" }, 
                        {col2: "Domain" }, 
                        {col3: "Description" }
                    ],
                    blocks : [
                        {
                            title : "Cookie usage",
                            description: short_lorem_ipsum + ' <a href="#" class="cc-link">Privacy policy</a>'
                        },{
                            title : "Strictly necessary cookies",
                            description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                            toggle : {
                                value : 'necessary',
                                enabled : true,
                                readonly: true
                            }
                        },{
                            title : "Performance and analytics cookies",
                            description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                            toggle : {
                                value : 'analytics',
                                enabled : false,
                                readonly: false
                            },
                            cookie_table: [
                                {
                                    col1: '_ga',
                                    col2: 'orestbida.com',
                                    col3: super_short_lorem_ipsum,
                                    path: window.location.pathname
                                },
                                {
                                    col1: '_gat',
                                    col2: 'orestbida.com',
                                    col3: super_short_lorem_ipsum,
                                    path: window.location.pathname
                                },
                                {
                                    col1: '_gid',
                                    col2: 'orestbida.com',
                                    col3: super_short_lorem_ipsum,
                                    path: window.location.pathname
                                }
                            ]
                        },{
                            title : "Targeting and Advertising cookies",
                            description: lorem_ipsum,
                            toggle : {
                                value : 'targeting',
                                enabled : false,
                                readonly: false,
                                reload: 'on_disable'
                            },
                            cookie_table: [
                                {
                                    col1: '^_cl',
                                    col2: 'orestbida.com',
                                    col3: 'All cookies starting with "_cl" are set by <a href="https://clarity.microsoft.com/terms">microsoft clarity</a>',
                                    is_regex: true,
                                    
                                }
                            ]
                        },{
                            title : "More information",
                            description: 'For any queries in relation to my policy on cookies and your choices, please <a class="cc-link" href="https://orestbida.com/contact/">contact me</a>.',
                        }
                    ]
                }
            },
            'fr' : {    
                consent_modal : {
                    title :  "Veux-tu un cookie?",
                    description :  short_lorem_ipsum + '<button type="button" data-cc="c-settings" class="cc-link">Manage preferences</button>',
                    primary_btn: {
                        text: 'J\'accepte',
                        role: 'accept_all'              //'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text : 'Refuser',
                        role : 'accept_necessary'               //'settings' or 'accept_necessary'
                    }
                },
                settings_modal : {
                    title : '<div>Paramètres des cookies</div><div aria-hidden="true" style="font-size: .8em; font-weight: 400; color: #687278; margin-top: 5px;">Powered by <a tabindex="-1" aria-hidden="true" href="https://github.com/orestbida/cookieconsent/">cookie-consent</a></div>',
                    save_settings_btn : "Accepter la sélection",
                    accept_all_btn : "Accepter tout",
                    reject_all_btn : "Tout rejeter",
                    close_btn_label: "Fermer",
                    cookie_table_headers : [
                        {col1: "Name" }, 
                        {col2: "Domain" }, 
                        {col3: "Description" }
                    ],
                    blocks : [
                        {
                            title : "Cookie usage",
                            description: short_lorem_ipsum + ' <a href="#" class="cc-link">Privacy policy</a>'
                        },{
                            title : "Strictly necessary cookies",
                            description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                            toggle : {
                                value : 'necessary',
                                enabled : true,
                                readonly: true,
                                reload : "on_disable"                          //cookie categories with readonly=true are all treated as "necessary cookies"
                            }
                        },{
                            title : "Performance and analytics cookies",
                            description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                            toggle : {
                                value : 'analytics',
                                enabled : false,
                                readonly: false
                            },
                            cookie_table: [
                                {
                                    col1: '_ga',
                                    col2: 'orestbida.com',
                                    col3: super_short_lorem_ipsum,
                                    path: window.location.pathname
                                },
                                {
                                    col1: '_gat',
                                    col2: 'orestbida.com',
                                    col3: super_short_lorem_ipsum,
                                    path: window.location.pathname
                                },
                                {
                                    col1: '_gid',
                                    col2: 'orestbida.com',
                                    col3: super_short_lorem_ipsum,
                                    path: window.location.pathname
                                }
                            ]
                        },{
                            title : "Targeting and Advertising cookies",
                            description: lorem_ipsum,
                            toggle : {
                                value : 'targeting',
                                enabled : false,
                                readonly: false,
                                reload: 'on_disable'
                            },
                            cookie_table: [
                                {
                                    col1: '^_cl',
                                    col2: 'orestbida.com',
                                    col3: 'All cookies starting with "_cl" are set by <a href="https://clarity.microsoft.com/terms">microsoft clarity</a>',
                                    is_regex: true
                                }
                            ]
                        },{
                            title : "More information",
                            description: 'For any queries in relation to my policy on cookies and your choices, please <a class="cc-link" href="https://orestbida.com/contact/">contact me</a>.',
                        }
                    ]
                }
            },
            
            'es' : {    
                consent_modal : {
                    title :  "Te gustaría una galleta?",
                    description :  short_lorem_ipsum + '<button type="button" data-cc="c-settings" class="cc-link">Manage preferences</button>',
                    primary_btn: {
                        text: 'Aceptar',
                        role: 'accept_all'              //'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text : 'Rechazar',
                        role : 'accept_necessary'               //'settings' or 'accept_necessary'
                    }
                },
                settings_modal : {
                    title : '<div>Configuración de cookies</div><div aria-hidden="true" style="font-size: .8em; font-weight: 400; color: #687278; margin-top: 5px;">Powered by <a tabindex="-1" aria-hidden="true" href="https://github.com/orestbida/cookieconsent/">cookie-consent</a></div>',
                    save_settings_btn : "Aceptar selección",
                    accept_all_btn : "Aceptar todo",
                    reject_all_btn : "Rechazar todo",
                    close_btn_label: "Cerrar",
                    cookie_table_headers : [
                        {col1: "Name" }, 
                        {col2: "Domain" }, 
                        {col3: "Description" }
                    ],
                    blocks : [
                        {
                            title : "Cookie usage",
                            description: short_lorem_ipsum + ' <a href="#" class="cc-link">Privacy policy</a>'
                        },{
                            title : "Strictly necessary cookies",
                            description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                            toggle : {
                                value : 'necessary',
                                enabled : true,
                                readonly: true                          //cookie categories with readonly=true are all treated as "necessary cookies"
                            }
                        },{
                            title : "Performance and analytics cookies",
                            description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                            toggle : {
                                value : 'analytics',
                                enabled : false,
                                readonly: false
                            },
                            cookie_table: [
                                {
                                    col1: '_ga',
                                    col2: 'orestbida.com',
                                    col3: super_short_lorem_ipsum,
                                    path: window.location.pathname
                                },
                                {
                                    col1: '_gat',
                                    col2: 'orestbida.com',
                                    col3: super_short_lorem_ipsum,
                                    path: window.location.pathname
                                },
                                {
                                    col1: '_gid',
                                    col2: 'orestbida.com',
                                    col3: super_short_lorem_ipsum,
                                    path: window.location.pathname
                                }
                            ]
                        },{
                            title : "Targeting and Advertising cookies",
                            description: lorem_ipsum,
                            toggle : {
                                value : 'targeting',
                                enabled : false,
                                readonly: false,
                                reload: 'on_disable'
                            },
                            cookie_table: [
                                {
                                    col1: '^_cl',
                                    col2: 'orestbida.com',
                                    col3: 'All cookies starting with "_cl" are set by <a href="https://clarity.microsoft.com/terms">microsoft clarity</a>',
                                    is_regex: true
                                }
                            ]
                        },{
                            title : "More information",
                            description: 'For any queries in relation to my policy on cookies and your choices, please <a class="cc-link" href="https://orestbida.com/contact/">contact me</a>.',
                        }
                    ]
                }
            },
        }
    });



function getLoremIpsum() {
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
}

// DELETE ALL CONTENT BELOW THIS COMMENT!!!
if (cc.validCookie('cc_cookie')) {
    //if cookie is set => disable buttons
    disableBtn('btn2');
    disableBtn('btn3');
}

function disableBtn(id) {
    document.getElementById(id).disabled = true;
    document.getElementById(id).className = 'styled_btn disabled';
}

var darkmode = false;

function toggleDarkmode() {
    if (!darkmode) {
        document.getElementById('theme').innerText = 'dark theme';
        document.body.className = 'd_mode c_darkmode';
        darkmode = true;
    } else {
        document.getElementById('theme').innerText = 'light theme';
        document.body.className = 'd_mode';
        darkmode = false;
    }
}

/*
* The following lines of code are for demo purposes (show api functions)
*/
if (document.addEventListener) {

    document.getElementById('btn2').addEventListener('click', function () {
        cc.show(0);
    });

    document.getElementById('btn3').addEventListener('click', function () {
        cc.hide();
    });

    document.getElementById('btn5').addEventListener('click', function () {
        cc.showSettings(0);
    });

    document.getElementById('btn6').addEventListener('click', function () {
        toggleDarkmode();
    });
} else {
    document.getElementById('btn2').attachEvent('onclick', function () {
        cc.show(0);
    });

    document.getElementById('btn3').attachEvent('onclick', function () {
        cc.hide();
    });

    document.getElementById('btn5').attachEvent('onclick', function () {
        cc.showSettings(0);
    });

    document.getElementById('btn6').attachEvent('onclick', function () {
        toggleDarkmode();
    });
}