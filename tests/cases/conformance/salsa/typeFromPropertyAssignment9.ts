// @noEmit: true
// @allowJs: true
// @checkJs: true
// @target: es6
// @Filename: a.js

// TODO: JSDoc would provide a contextual type, so ... I should test that
// TODO: Try initializer of function or class I guess (though classes aren't context sensitive)
var my = my || {};
my.m = function() {
    return 1;
}
my.n = 1;
my.o = {};
my.possible = my.possible || {};

my.m;
my.o;
my.n;
my.possible;


