if ( window.sessionStorage ) {
        sessionStorage.clear();
}

module( "Globals" );
test( "Libraries loaded on global scope", function() {
    ok( typeof($ !== "undefined") , "jQuery loaded!" );
});
/*
module( "Radios" );
test( "Parent <span> changes to 'checked' when click on <input>", function() {

    var $input = $( "#test2" ),
        $parent = $input.parent();

    ok( $parent.hasClass("checked") === false , "<span> has not class='checked'..." );
    
    $parent.trigger("click");
    ok( $parent.hasClass("checked") === true , "... after click, <span> has now class='checked'... " );

    $parent.trigger("click");
    ok( $parent.hasClass("checked") === false , "... after one more click, <span> has not class='checked'" );

});
*/
