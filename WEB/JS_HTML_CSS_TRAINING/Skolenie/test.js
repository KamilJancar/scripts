$(document).ready(function() {
            var $frm = $("#frmArt");
            var countries = [{ "name": "Afghanistan", "code": "AF" }, { "name": "Ã…land Islands", "code": "AX" }, { "name": "Albania", "code": "AL" }, { "name": "Algeria", "code": "DZ" }, { "name": "American Samoa", "code": "AS" }, { "name": "AndorrA", "code": "AD" }, { "name": "Angola", "code": "AO" }, { "name": "Anguilla", "code": "AI" }, { "name": "Antarctica", "code": "AQ" }, { "name": "Antigua and Barbuda", "code": "AG" }, { "name": "Argentina", "code": "AR" }, { "name": "Armenia", "code": "AM" }, { "name": "Aruba", "code": "AW" }, { "name": "Australia", "code": "AU" }, { "name": "Austria", "code": "AT" }, { "name": "Azerbaijan", "code": "AZ" }, { "name": "Bahamas", "code": "BS" }, { "name": "Bahrain", "code": "BH" }, { "name": "Bangladesh", "code": "BD" }, { "name": "Barbados", "code": "BB" }, { "name": "Belarus", "code": "BY" }, { "name": "Belgium", "code": "BE" }, { "name": "Belize", "code": "BZ" }, { "name": "Benin", "code": "BJ" }, { "name": "Bermuda", "code": "BM" }, { "name": "Bhutan", "code": "BT" }, { "name": "Bolivia", "code": "BO" }, { "name": "Bosnia and Herzegovina", "code": "BA" }, { "name": "Botswana", "code": "BW" }, { "name": "Bouvet Island", "code": "BV" }, { "name": "Brazil", "code": "BR" }, { "name": "British Indian Ocean Territory", "code": "IO" }, { "name": "Brunei Darussalam", "code": "BN" }, { "name": "Bulgaria", "code": "BG" }, { "name": "Burkina Faso", "code": "BF" }, { "name": "Burundi", "code": "BI" }, { "name": "Cambodia", "code": "KH" }, { "name": "Cameroon", "code": "CM" }, { "name": "Canada", "code": "CA" }, { "name": "Cape Verde", "code": "CV" }, { "name": "Cayman Islands", "code": "KY" }, { "name": "Central African Republic", "code": "CF" }, { "name": "Chad", "code": "TD" }, { "name": "Chile", "code": "CL" }, { "name": "China", "code": "CN" }, { "name": "Christmas Island", "code": "CX" }, { "name": "Cocos (Keeling) Islands", "code": "CC" }, { "name": "Colombia", "code": "CO" }, { "name": "Comoros", "code": "KM" }, { "name": "Congo", "code": "CG" }, { "name": "Congo, The Democratic Republic of the", "code": "CD" }, { "name": "Cook Islands", "code": "CK" }, { "name": "Costa Rica", "code": "CR" }, { "name": "Cote D\"Ivoire", "code": "CI" }, { "name": "Croatia", "code": "HR" }, { "name": "Cuba", "code": "CU" }, { "name": "Cyprus", "code": "CY" }, { "name": "Czech Republic", "code": "CZ" }, { "name": "Denmark", "code": "DK" }, { "name": "Djibouti", "code": "DJ" }, { "name": "Dominica", "code": "DM" }, { "name": "Dominican Republic", "code": "DO" }, { "name": "Ecuador", "code": "EC" }, { "name": "Egypt", "code": "EG" }, { "name": "El Salvador", "code": "SV" }, { "name": "Equatorial Guinea", "code": "GQ" }, { "name": "Eritrea", "code": "ER" }, { "name": "Estonia", "code": "EE" }, { "name": "Ethiopia", "code": "ET" }, { "name": "Falkland Islands (Malvinas)", "code": "FK" }, { "name": "Faroe Islands", "code": "FO" }, { "name": "Fiji", "code": "FJ" }, { "name": "Finland", "code": "FI" }, { "name": "France", "code": "FR" }, { "name": "French Guiana", "code": "GF" }, { "name": "French Polynesia", "code": "PF" }, { "name": "French Southern Territories", "code": "TF" }, { "name": "Gabon", "code": "GA" }, { "name": "Gambia", "code": "GM" }, { "name": "Georgia", "code": "GE" }, { "name": "Germany", "code": "DE" }, { "name": "Ghana", "code": "GH" }, { "name": "Gibraltar", "code": "GI" }, { "name": "Greece", "code": "GR" }, { "name": "Greenland", "code": "GL" }, { "name": "Grenada", "code": "GD" }, { "name": "Guadeloupe", "code": "GP" }, { "name": "Guam", "code": "GU" }, { "name": "Guatemala", "code": "GT" }, { "name": "Guernsey", "code": "GG" }, { "name": "Guinea", "code": "GN" }, { "name": "Guinea-Bissau", "code": "GW" }, { "name": "Guyana", "code": "GY" }, { "name": "Haiti", "code": "HT" }, { "name": "Heard Island and Mcdonald Islands", "code": "HM" }, { "name": "Holy See (Vatican City State)", "code": "VA" }, { "name": "Honduras", "code": "HN" }, { "name": "Hong Kong", "code": "HK" }, { "name": "Hungary", "code": "HU" }, { "name": "Iceland", "code": "IS" }, { "name": "India", "code": "IN" }, { "name": "Indonesia", "code": "ID" }, { "name": "Iran, Islamic Republic Of", "code": "IR" }, { "name": "Iraq", "code": "IQ" }, { "name": "Ireland", "code": "IE" }, { "name": "Isle of Man", "code": "IM" }, { "name": "Israel", "code": "IL" }, { "name": "Italy", "code": "IT" }, { "name": "Jamaica", "code": "JM" }, { "name": "Japan", "code": "JP" }, { "name": "Jersey", "code": "JE" }, { "name": "Jordan", "code": "JO" }, { "name": "Kazakhstan", "code": "KZ" }, { "name": "Kenya", "code": "KE" }, { "name": "Kiribati", "code": "KI" }, { "name": "Korea, Democratic People\"S Republic of", "code": "KP" }, { "name": "Korea, Republic of", "code": "KR" }, { "name": "Kuwait", "code": "KW" }, { "name": "Kyrgyzstan", "code": "KG" }, { "name": "Lao People\"S Democratic Republic", "code": "LA" }, { "name": "Latvia", "code": "LV" }, { "name": "Lebanon", "code": "LB" }, { "name": "Lesotho", "code": "LS" }, { "name": "Liberia", "code": "LR" }, { "name": "Libyan Arab Jamahiriya", "code": "LY" }, { "name": "Liechtenstein", "code": "LI" }, { "name": "Lithuania", "code": "LT" }, { "name": "Luxembourg", "code": "LU" }, { "name": "Macao", "code": "MO" }, { "name": "Macedonia, The Former Yugoslav Republic of", "code": "MK" }, { "name": "Madagascar", "code": "MG" }, { "name": "Malawi", "code": "MW" }, { "name": "Malaysia", "code": "MY" }, { "name": "Maldives", "code": "MV" }, { "name": "Mali", "code": "ML" }, { "name": "Malta", "code": "MT" }, { "name": "Marshall Islands", "code": "MH" }, { "name": "Martinique", "code": "MQ" }, { "name": "Mauritania", "code": "MR" }, { "name": "Mauritius", "code": "MU" }, { "name": "Mayotte", "code": "YT" }, { "name": "Mexico", "code": "MX" }, { "name": "Micronesia, Federated States of", "code": "FM" }, { "name": "Moldova, Republic of", "code": "MD" }, { "name": "Monaco", "code": "MC" }, { "name": "Mongolia", "code": "MN" }, { "name": "Montserrat", "code": "MS" }, { "name": "Morocco", "code": "MA" }, { "name": "Mozambique", "code": "MZ" }, { "name": "Myanmar", "code": "MM" }, { "name": "Namibia", "code": "NA" }, { "name": "Nauru", "code": "NR" }, { "name": "Nepal", "code": "NP" }, { "name": "Netherlands", "code": "NL" }, { "name": "Netherlands Antilles", "code": "AN" }, { "name": "New Caledonia", "code": "NC" }, { "name": "New Zealand", "code": "NZ" }, { "name": "Nicaragua", "code": "NI" }, { "name": "Niger", "code": "NE" }, { "name": "Nigeria", "code": "NG" }, { "name": "Niue", "code": "NU" }, { "name": "Norfolk Island", "code": "NF" }, { "name": "Northern Mariana Islands", "code": "MP" }, { "name": "Norway", "code": "NO" }, { "name": "Oman", "code": "OM" }, { "name": "Pakistan", "code": "PK" }, { "name": "Palau", "code": "PW" }, { "name": "Palestinian Territory, Occupied", "code": "PS" }, { "name": "Panama", "code": "PA" }, { "name": "Papua New Guinea", "code": "PG" }, { "name": "Paraguay", "code": "PY" }, { "name": "Peru", "code": "PE" }, { "name": "Philippines", "code": "PH" }, { "name": "Pitcairn", "code": "PN" }, { "name": "Poland", "code": "PL" }, { "name": "Portugal", "code": "PT" }, { "name": "Puerto Rico", "code": "PR" }, { "name": "Qatar", "code": "QA" }, { "name": "Reunion", "code": "RE" }, { "name": "Romania", "code": "RO" }, { "name": "Russian Federation", "code": "RU" }, { "name": "RWANDA", "code": "RW" }, { "name": "Saint Helena", "code": "SH" }, { "name": "Saint Kitts and Nevis", "code": "KN" }, { "name": "Saint Lucia", "code": "LC" }, { "name": "Saint Pierre and Miquelon", "code": "PM" }, { "name": "Saint Vincent and the Grenadines", "code": "VC" }, { "name": "Samoa", "code": "WS" }, { "name": "San Marino", "code": "SM" }, { "name": "Sao Tome and Principe", "code": "ST" }, { "name": "Saudi Arabia", "code": "SA" }, { "name": "Senegal", "code": "SN" }, { "name": "Serbia and Montenegro", "code": "CS" }, { "name": "Seychelles", "code": "SC" }, { "name": "Sierra Leone", "code": "SL" }, { "name": "Singapore", "code": "SG" }, { "name": "Slovakia", "code": "SK", "active": "1" }, { "name": "Slovenia", "code": "SI" }, { "name": "Solomon Islands", "code": "SB" }, { "name": "Somalia", "code": "SO" }, { "name": "South Africa", "code": "ZA" }, { "name": "South Georgia and the South Sandwich Islands", "code": "GS" }, { "name": "Spain", "code": "ES" }, { "name": "Sri Lanka", "code": "LK" }, { "name": "Sudan", "code": "SD" }, { "name": "Suriname", "code": "SR" }, { "name": "Svalbard and Jan Mayen", "code": "SJ" }, { "name": "Swaziland", "code": "SZ" }, { "name": "Sweden", "code": "SE" }, { "name": "Switzerland", "code": "CH" }, { "name": "Syrian Arab Republic", "code": "SY" }, { "name": "Taiwan, Province of China", "code": "TW" }, { "name": "Tajikistan", "code": "TJ" }, { "name": "Tanzania, United Republic of", "code": "TZ" }, { "name": "Thailand", "code": "TH" }, { "name": "Timor-Leste", "code": "TL" }, { "name": "Togo", "code": "TG" }, { "name": "Tokelau", "code": "TK" }, { "name": "Tonga", "code": "TO" }, { "name": "Trinidad and Tobago", "code": "TT" }, { "name": "Tunisia", "code": "TN" }, { "name": "Turkey", "code": "TR" }, { "name": "Turkmenistan", "code": "TM" }, { "name": "Turks and Caicos Islands", "code": "TC" }, { "name": "Tuvalu", "code": "TV" }, { "name": "Uganda", "code": "UG" }, { "name": "Ukraine", "code": "UA" }, { "name": "United Arab Emirates", "code": "AE" }, { "name": "United Kingdom", "code": "GB" }, { "name": "United States", "code": "US" }, { "name": "United States Minor Outlying Islands", "code": "UM" }, { "name": "Uruguay", "code": "UY" }, { "name": "Uzbekistan", "code": "UZ" }, { "name": "Vanuatu", "code": "VU" }, { "name": "Venezuela", "code": "VE" }, { "name": "Viet Nam", "code": "VN" }, { "name": "Virgin Islands, British", "code": "VG" }, { "name": "Virgin Islands, U.S.", "code": "VI" }, { "name": "Wallis and Futuna", "code": "WF" }, { "name": "Western Sahara", "code": "EH" }, { "name": "Yemen", "code": "YE" }, { "name": "Zambia", "code": "ZM" }, { "name": "Zimbabwe", "code": "ZW" }]
            function vypis_predpoved_pocasia(udaje) { $('#predpoved-pocasiaTab').html(Mustache.render($("#predpoved-pocasia-tpl").html(), udaje));
                console.log(udaje); }
            $.getJSON("http://api.openweathermap.org/data/2.5/forecast", { id: "723819", units: 'metric', APPID: "8641355d0bdfa52a49f4e9a42560adf0" }, vypis_predpoved_pocasia);

            function vypis_aktualne_pocasie(udaje) { $('#aktualne-pocasieTab').html(Mustache.render($("#aktualne-pocasie-tpl").html(), udaje));
                console.log(udaje); }
            $.getJSON("http://api.openweathermap.org/data/2.5/weather", { id: "723819", units: 'metric', APPID: "8641355d0bdfa52a49f4e9a42560adf0" }, vypis_aktualne_pocasie);
            $('#krajina').html(Mustache.render($("#krajina-tpl").html(), countries)); //Pridanie funkcionality pre kliknutie na tlacidlo "UloÅ¾ ÄlÃ¡nok" $frm.submit(function (event) { //tu potrebujem aj objekt s udalosÅ¥ou, aby som event.preventDefault(); //zruÅ¡iÅ¥ pÃ´vodnÃ© spracovanie udalosti skontrolujAOdosli(); }); function vypis_clankov(udaje) { $.each(udaje.articles, function (index, article) { nacitaj_content_clanku(article.id); }); $('#clankyTab').html(Mustache.render($("#clanky-tpl").html(), udaje)); } function nacitaj_content_clanku(id) { return $.getJSON("http://wt.kpi.fei.tuke.sk/api/article/" +id, vypis_content); } function vypis_content(data) { $("#c" + data.id).html(data.content); } function nacitaj_clanky() { // $.getJSON("http://wt.kpi.fei.tuke.sk/api/article", vypis_clankov); $.getJSON("http://wt.kpi.fei.tuke.sk/api/article?tag=presov", vypis_clankov); } function skontrolujAOdosli() { //1. UloÅ¾Ã­ Ãºdaje z formulÃ¡ra do objektu var data = {}; $frm.serializeArray().map( function (item) { var itemValueTrimmed = item.value.trim(); if (itemValueTrimmed) {//ak je hodnota neprÃ¡zdny reÅ¥azec data[item.name] = itemValueTrimmed; } } ); console.log("skontrolujAOdosli> Ãšdaje po uloÅ¾enÃ­ z formulÃ¡ra do objektu:"); console.log(JSON.stringify(data)); //3.Kontrola, Äi boli zadanÃ© povinnÃ© polia if (!data.title) { //toto len pre istotu alert("NÃ¡zov ÄlÃ¡nku musÃ­ byÅ¥ zadanÃ½ a musÃ­ obsahovaÅ¥ ÄitateÄ¾nÃ© znaky"); return; } if (!data.content) { //toto je dÃ´leÅ¾itÃ©, keÄÅ¾e na textarea sa nedÃ¡ pouÅ¾iÅ¥ pattern. OdchytÃ­, keÄ pouÅ¾Ã­vateÄ¾ do prvku content //zadal iba biele znaky alert("Obsah ÄlÃ¡nku musÃ­ byÅ¥ zadanÃ½ a musÃ­ obsahovaÅ¥ ÄitateÄ¾nÃ© znaky."); return; } if (!data.author) { //toto je dÃ´leÅ¾itÃ©, keÄÅ¾e na textarea sa nedÃ¡ pouÅ¾iÅ¥ pattern. OdchytÃ­, keÄ pouÅ¾Ã­vateÄ¾ do prvku content //zadal iba biele znaky alert("Autor ÄlÃ¡nku musÃ­ byÅ¥ zadanÃ½ a musÃ­ obsahovaÅ¥ ÄitateÄ¾nÃ© znaky."); return; } console.log("prepareAndSendArticle> PovinnÃ© Ãºdaje ÃºspeÅ¡ne skontrolovanÃ©:"); //4. odoslanie Ãºdajov if (window.confirm("SkutoÄne si Å¾elÃ¡te ÄlÃ¡nok odoslaÅ¥?")) { if ($('#obrazok')[0].files[0]) { var formData = new FormData(); formData.append('file', $('#obrazok')[0].files[0]); imageUpload(); } else { clanokUpload(); } function imageUpload() { $.ajax({ type: "POST", url: "http://wt.kpi.fei.tuke.sk/api/fileUpload", processData: false, // tell jQuery not to process the data contentType: false, data: formData, success: function (response) { data.imageLink = response.fullFileUrl; clanokUpload(); } }); } function clanokUpload() { var nalada = "
            < h2 > Ako sa dnes mam ? < /h2>"; if (!data.nalada) { data.nalada = 0; } switch (data.nalada) { case "1": nalada = nalada + " < p > Dobre < /p>"; break; case "2": nalada = nalada + " < p > V pohode < /p>"; break; case "3": nalada = nalada + " < p > Zle < /p>"; break; default: nalada = nalada + " < p > Najlepsie na svete < /p>"; break; } var jedlo = " < h2 > Co som dnes jedol ? < /h2>"; if (!data.ranajky && !data.obed && !data.vecera) { jedlo = jedlo + ' < p > Nic, bo zijem zo vzduchu. < /p>'; } else { if (data.ranajky == 1) { jedlo = jedlo + ' < p > Ranajky < /p>'; } if (data.obed == 1) { jedlo = jedlo + ' < p > Obed < /p>'; } if (data.vecera == 1) { jedlo = jedlo + ' < p > Veceru < /p>'; } } var krajina = ' < h2 > Pochadzam z krajiny : < /h2>' + data.krajina; data.content = data.content + nalada + jedlo + krajina; $.ajax({ type: "POST", url: "http:/ / wt.kpi.fei.tuke.sk / api / article ", contentType: "
            application / json;
            charset = UTF - 8 ", dataType: "
            json ", data: JSON.stringify(data), success: function (response) { nacitaj_clanky(); if (response.id) { console.log(response.id); window.alert("
            ÄŒlÃ¡ nok ÃºspeÅ¡ ne uloÅ¾ enÃ½ s id = " + response.id + ".
            "); window.open('http://hron.fei.tuke.sk/~korecko/WebTechAkademia/wtKpiBlogBrowser/article.html?id=' + response.id, '_blank'); // $frm.trigger('reset'); } }, error: function (jxhr) { window.alert("
            Spracovanie neÃºspeÅ¡ nÃ©.Ãšdaje neboli zapÃ­ sanÃ©.KÃ³ d chyby: " + status + "\
            n " + jxhr.statusText + "\
            n " + jxhr.responseText); } }); } } } nacitaj_clanky(); })