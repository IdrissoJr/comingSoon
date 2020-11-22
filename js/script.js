/*global $, jQuery, alert*/
$(function () {
    'use strict';
    $('#countdown').countdown('2030/1/1', function(event) {
	  var $this = $(this).html(event.strftime(''
	    + '<span>%w</span> Weeks '
	    + '<span>%d</span> Days '
	    + '<span>%H</span> Hr '
	    + '<span>%M</span> Min '
	    + '<span>%S</span> Sec'));
	});
});
