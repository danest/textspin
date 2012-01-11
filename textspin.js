  /*
   *     Text Spin- jQuery plugin
   *     written by Kevin Urrutia
   *     www.kevinurrutia.tumblr.com
   *
   *     Copyright (c) 2010 Kevin Urrutia (www.kevinurrutia.tumblr.com)
   *     Dual licensed under the MIT (MIT-LICENSE.txt)
   *     and GPL (GPL-LICENSE.txt) licenses.
   *
   *     Built for jQuery library and jQuery UI library
   *     http://jquery.com
   *
  */
$.fn.textSpin = function (words_array) {
	var words = words_array;
    return this.each (function () { 
		var prefix = '#' +$(this).attr('id');
		var counter = 1;
		var spin = true
		
		function spinText(){
			var $text = $(prefix + ' span.ts-word-one');
			var $text2 = $(prefix + ' span.ts-word-two');
			
			if(spin){
				$text2.text(words[counter]);
			    $text.hide('drop', { direction: 'up' }, 500);
	            $text2.show('drop', { direction: 'down' }, 500);
				spin = false;
				
			} else {
				$text.text(words[counter]);
			    $text.show('drop', { direction: 'down' }, 500);
	            $text2.hide('drop', { direction: 'up' }, 500);
				spin = true;
			}
			counter++;
			if(counter == words.length){
				counter= 0;
			}
		}
		setInterval(spinText,2000);
    });
};