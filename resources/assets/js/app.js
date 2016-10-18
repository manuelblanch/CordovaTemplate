//Opcio 1 navegadors normals no node.js si
//Opcio 2 import navegadors normals node.js pero ecs6 si

//var $ = require('jquery');

window.$ = window.jQuery = require('jquery');

window.$ = require('underscore');
require('bootstrap.sass');

//Opcio 2.a

$(document).ready(function(){
    $('emsgid').html('hello-world');
});
