(function(){

    "no strict";

    var resourceWait  = 300,
        maxRenderWait = 10000,
        forcedRenderTimeout,
        clickTimeout,
        renderTimeout,
        url  = 'http://localhost:3000/html/index.html',
        page = require('webpage').create();

    page.viewportSize = { width: 1024, height : 512 };

    page.onConsoleMessage = function (msg, line, source) {
        console.log( 'console> ' + msg );
    };

    page.onAlert = function (msg) {
        console.log( 'alert!!> ' + msg );
    };

    page.onResourceRequested = function (req) {
        //console.log( 'request> ' + req.id + ' - ' + req.url );
        clearTimeout(renderTimeout);
    };
     
    page.onResourceReceived = function (res) {
        if (!res.stage || res.stage === 'end') {
            console.log( 'loaded> ' + res.id + ' ' + res.status + ' - ' + res.url);
        }
    };

    page.open(url, function (status) {

        if (status !== 'success') {
            console.log('Error al cargar la URL: ' + url);
        } else {

            forcedRenderTimeout = setTimeout(function () {

                page.evaluate(function () {
                    var $elm = $("#test2");
                    if( $elm.length > 0 ) {
                        console.log("Hago click en radioButton2");
                        $elm.trigger("click");
                        clickTimeout = setTimeout(function () {
                            console.log( $elm.parent().hasClass("checked") );
                        }, 1000);
                    }
                });
                page.render( 'test2.png' );
                
                page.evaluate(function () {
                    var $elm = $("#test3");
                    if( $elm.length > 0 ) {
                        console.log("Hago click en radioButton3");
                        $elm.trigger("click");
                        clickTimeout = setTimeout(function () {
                            console.log( $elm.parent().hasClass("checked") );
                        }, 1000);
                    }
                });
                page.render( 'test3.png' );
                
                phantom.exit();

            }, maxRenderWait);
        }     
    });

}());