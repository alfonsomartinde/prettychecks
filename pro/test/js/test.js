module( "Globals" );
test( "Libraries loaded on global scope", function() {
    ok( typeof($ !== "undefined") , "jQuery loaded!" );
});