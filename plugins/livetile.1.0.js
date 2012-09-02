;(function($){
	if(typeof String.supplant === 'undefined'){
		String.prototype.supplant = function(o){
		    o = o || {};
		    return this.replace(/{([^{}]*)}/g,
		        function (bracketed, clean) {
		            var object_value = o[clean];
		            return ['string', 'number'].indexOf((typeof object_value)) > -1 ? object_value : bracketed;
		        }
		    );
		}
	}
	var live_tile_templates = {
		base: '<title><visual><binding template="{template}">{body}</binding></visual></title>',
		text_node: '<text id="{id}">{text}</text>',
		image_node: '<image id="{id}" src="{src}" alt="{alt}"/>',
		generic: function(template, rows){
			rows = rows || [];
			var doc = {
				'template': template,
				'body': ''
			};
			for(var i = 0; i < rows.length; i++){
				var current = rows[i];
				current.id = (i+1);
				var	row = live_tile_templates.text_node.supplant(current);
				doc.body += row;
			}
			return live_tile_templates.base.supplant(doc);
		},
		Square: {
			Text: function(rows, template){
				template = template || 'TileSquareBlock';
				return live_tile_templates.generic(template, rows);
			},
			Image: {
				
			},
			Peek: {
				
			}
		},
		Wide: {
			Text: {
				
			},
			Image: {
				
			},
			Peek: {
				
			}
		}
	};
	/**
	*	type can be: SquareText, SquareImage, SquarePeek, 
	*/
	$.extend({
		livetile: function(type, obj){
			return live_tile_templates;
		}
	});
})(window['jQuery']);