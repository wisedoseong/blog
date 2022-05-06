/**
웹페이지에서 상대주소로 설정된경우 절대주소로 강제 치횐하여 노출처리
**/
    $('body').find('img').each(function(idx, img) {
        var temp = $(img).attr('alt');

        if ($(img).attr('src') == undefined) {
            var srcUrl = temp.replace(/src=/g, '');
            $(img).attr('src', srcUrl)

        }

        var imgSrc = $(img).attr('src');
        if(imgSrc.indexOf('http') == -1 ) {
            let setSrc = 'https://주소/'+imgSrc;
            $(img).attr('src', setSrc);
        }


        $(img).removeAttr('alt', '');
    });
