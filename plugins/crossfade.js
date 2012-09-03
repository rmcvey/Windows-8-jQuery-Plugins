;(function($){
	$.fn.crossfade = function(selector, fn_success, fn_error){
		var $this = $(this),
			incoming = $this,
			outgoing = $(selector),
			success = fn_success || $.noop,
			error = fn_error || $.noop;
			
		WinJS.UI.Animation.crossFade(incoming, outgoing).done( 
			function complete(){
				success.apply($this, [incoming, outgoing]);
			}, function error(){
				error.apply($this)
			}
		);
		return this;
	}
})(window.$);