;(function($){
	var make_util = function(engine){
		return (function(storage){
			var _get = function(key){
				return JSON.parse(storage.getItem(key));
			}
			var _set = function(key, val){
				var str = JSON.stringify(val);
				storage.setItem(key, str);
				return
			}
			return {
				get: function(k){
					return _get(k);
				},
				set: function(k,v){
					return _set(k, v);
				}
			}
		})(window[engine]);
	}
	$.extend({
		storage: function(key, value){
			var store = make_util('localStorage');
			if(value !== undefined){
				return store.set(key, value);
			} else {
				return store.get(key);
			}
			return this;
		},
		session: function(key, value){
			var store = make_util('sessionStorage');
			if(value !== undefined){
				return store.set(key, value);
			} else {
				return store.get(key);
			}
			return this;
		},
		persist: this.storage
	});
})(window.$);