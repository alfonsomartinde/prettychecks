(function () {
    var PRETTY = {
        actions: {
            uncheckThis: function ( ev, $el ) {
                $el.removeClass( 'checked' );
            },
            uncheckParent: function ( ev, $el ) {
                $el.parent().removeClass( 'checked' );
            },
            checkThis: function ( ev, $el ) {
                $el.addClass( 'checked' );
            },
            checkParent: function ( ev, $el ) {
                $el.parent().addClass( 'checked' );
            }
        }
    };

    // clear sessionStorage
    if ( window.sessionStorage ) {
        sessionStorage.clear();
    }

    // init
    (function() {
        $(document).on( 'click', '#test2', function ( ev ) {
            ev.stopPropagation();
            if( $(this).parent().hasClass("checked") === true ) {
                PRETTY.actions.uncheckParent.apply( PRETTY, [ev, $(this)] );
            } else {
                PRETTY.actions.checkParent.apply( PRETTY, [ev, $(this)] );
            }
        });
        $(document).on( 'click', '.prettychecks', function ( ev ) {
            ev.stopPropagation();
            if( $(this).hasClass("checked") === true ) {
                PRETTY.actions.uncheckThis.apply( PRETTY, [ev, $(this)] );
            } else {
                PRETTY.actions.checkThis.apply( PRETTY, [ev, $(this)] );
            }
        });
    }());

    // test
    module( "Radios" );
    test( "Parent is <span>", function() {
        var $input = $( "#test2" )
                .parent()
                .hasClass( "checked" );

        deepEqual( $input, false , "<span>" );
    });
    test( "After click on <input>, parent toggles <span class='checked'>", function( ) {
        var $input = $( "#test2" )
                .trigger( "click" )
                .parent()
                .hasClass( "checked" );

        deepEqual( $input, true , "<span class='checked'>" );
    });
    test( "After click again on <input>, parent toggles <span>", function( ) {
        var $input = $( "#test2" )
                .trigger( "click" )
                .trigger( "click" )
                .parent()
                .hasClass( "checked" );

        deepEqual( $input, false , "<span>" );
    });

    test( "After click on <span>, toggles <span class='checked'>", function( ) {
        var $span = $( "#test2" )
                .parent()
                .trigger( "click" )
                .hasClass( "checked" );

        deepEqual( $span, true , "<span class='checked'>" );
    });
    test( "After click again on <span>, toggles <span>", function( ) {
        var $span = $( "#test2" )
                .parent()
                .trigger( "click" )
                .trigger( "click" )
                .hasClass( "checked" );

        deepEqual( $span, false , "<span>" );
    });

}());