import $ from 'jquery';
import 'bootstrap';
import 'es6';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './doctor.js';
var Promise = require('es6-promise').Promise;


$(document).ready(function() {
  $('#search').submit(function(event) {
    event.preventDefault();
    let issue = $('#simptom').val();
    $('#simptom').val("");

  });
});
