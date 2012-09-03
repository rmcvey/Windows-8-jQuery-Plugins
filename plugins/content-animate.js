;(function($){
	$.fn.content = function(dir, option, fn_success, fn_error){
		var incoming = $(this),
			direction = dir || 'enterContent',
			params = option || null,
			success_fn = fn_success || $.noop,
			error_fn = fn_error || $.noop;
		
		WinJS.UI.Animation[dir](incoming, params).done(
			function completed(){
				success_fn.apply(incoming, [incoming])
			},
			function error(){
				error_fn.apply(incoming, [incoming])
			}
		);
		return this;
	}
	$.fn.enterContent = function(options, fn_success, fn_error){
		if($.isFunction(options)){
			fn_success = options;
			fn_error = fn_success;
			options = null;
		} else if(!options){
			options = null;
		}
		return $(this).content('enterContent', options, fn_success, fn_error);
	}
	$.fn.exitContent = function(options, fn_success, fn_errors){
		if($.isFunction(options)){
			fn_success = options;
			fn_error = fn_success;
			options = null;
		} else if(!options){
			options = null;
		}
		return $(this).content('exitContent', options, fn_success, fn_error);
	}
})(window.$);
