
function detaily() {
    $(".btn").click(function() {
        $(this).next().toggleClass('hidden');
    });
}

function updateform() {



    var $frm = $("#frmArt");

    //Pridanie funkcionality pre kliknutie na tlacidlo "Ulož článok"
    $frm.submit(function(event) { //tu potrebujem aj objekt s udalosťou, aby som
        event.preventDefault(); //zrušiť pôvodné spracovanie udalosti
        skontrolujAOdosli();
    });

    function skontrolujAOdosli() {
        //1. Uloží údaje z formulára do objektu
        var data = {};
        $frm.serializeArray().map(
            function(item) {
                var itemValueTrimmed = item.value.trim();
                if (itemValueTrimmed) { //ak je hodnota neprázdny reťazec
                    data[item.name] = itemValueTrimmed;

                }
            }
        );

        console.log("skontrolujAOdosli> Údaje po uložení z formulára do objektu:");
        console.log(JSON.stringify(data));

        //3.Kontrola, či boli zadané povinné polia
        if (!data.title) { //toto len pre istotu
            alert("Názov článku musí byť zadaný a musí obsahovať čitateľné znaky");
            return;
        }
        if (!data.content) { //toto je dôležité, keďže na textarea sa nedá použiť pattern. Odchytí, keď používateľ do prvku content
            //zadal iba biele znaky
            alert("Obsah článku musí byť zadaný a musí obsahovať čitateľné znaky.");
            return;
        }
        if (!data.author) { //toto je dôležité, keďže na textarea sa nedá použiť pattern. Odchytí, keď používateľ do prvku content
            //zadal iba biele znaky
            alert("Obsah článku musí byť zadaný a musí obsahovať čitateľné znaky.");
            return;
        }
        console.log("prepareAndSendArticle> Povinné údaje úspešne skontrolované:");

        var content = "<h6>Ako sa ti pacil Londyn?</h6>";
        if (data.nalada == 0) {
            content = content + "<p>Zle</p>";
        } else if (data.nalada == 1) {
            content = content + "<p>Dobre</p>";
        } else {
            content = content + "<p>Velmi</p>";
        }

        content = content + "<h6>Co si tam videl?</h6>";
        if (data.palac == "on") {
            content = content + "<p>Palac.</p>";
        }

        if (data.most == "on") {
            content = content + "<p>Most.</p>";
        }

        if (data.kralovna == "on") {
            content = content + "<p>Kralovnu.</p>";
        }

        content = content + "<h6>Moje pohlavie je:</h6>";

        if(data.pohlavie == "m"){
            content = content + "<p>Muz.</p>"
        }else{
            content = content + "<p>Zena.</p>"
        }

        data.content = data.content + content;



        var formData = new FormData();
        formData.append('file', $('#obrazok')[0].files[0]);

        $.ajax({
            type: "POST",
            url: "http://wt.kpi.fei.tuke.sk/api/fileUpload",
            processData: false,
            contentType: false,
            data: formData,
            success: function(response) {
                if (response.fullFileUrl) {
                    data.imageLink = response.fullFileUrl;
                    upload();
                }
            }

        });

        function ziskajIdClanky() {
            $.getJSON("http://wt.kpi.fei.tuke.sk/api/article?tag=jancak", vypis_clanky);

        }

        ziskajIdClanky();

        function ziskajContentClanku(id) {
            return $.getJSON("http://wt.kpi.fei.tuke.sk/api/article/" +id, vypis_content);
        }

        function vypis_clanky(udaje) {
            $.each(udaje.articles, function (index, article) {
                ziskajContentClanku(article.id);
            });

            $("#clanky").html(Mustache.render($("#mustClanky").html(), udaje));
        }

        function vypis_content(data) {
            $("#clanok" + data.id).html(data.content);
        }


        function upload() {
            if (window.confirm("Skutočne si želáte článok odoslať?")) {
                $.ajax({
                    type: "POST",
                    url: "http://wt.kpi.fei.tuke.sk/api/article",
                    contentType: "application/json;charset=UTF-8",
                    dataType: "json",
                    data: JSON.stringify(data),
                    success: function(response) {
                        if (response.id) {
                            console.log(response.id);
                            window.alert("Článok úspešne uložený s id=" + response.id + ".");
                            window.open('http://hron.fei.tuke.sk/~korecko/WebTechAkademia/wtKpiBlogBrowser/article.html?id=' + response.id, '_blank');
                            $frm.trigger('reset');
                        }
                    },
                    error: function(jxhr) {
                        window.alert("Spracovanie neúspešné. Údaje neboli zapísané. Kód chyby:" + status + "\n" + jxhr.statusText + "\n" + jxhr.responseText);
                    }
                });

            }
        }
    }
}
