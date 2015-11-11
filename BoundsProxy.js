
var BoundsBase = require( 'jux-bounds' );

var Bounds = function(){
	BoundsBase.call( this );
	this.data = null;
};

Bounds.prototype = Object.create( BoundsBase.prototype );

var BoundsProxy = function(){

};

BoundsProxy.extend = function( newProps ){

	var ExtendedBoundsProxy = function(){
		ExtendedBoundsProxy.call( BoundsProxy.prototype );
	};

	ExtendedBoundsProxy.prototype = Object.create( ExtendedBoundsProxy.prototype );
	ExtendedBoundsProxy.prototype.constructor = ExtendedBoundsProxy;
	for( var prop in newProps ){
		ExtendedBoundsProxy.prototype = newProps[prop];
	}
	return new ExtendedBoundsProxy();
};

module.exports = BoundsProxy;

BoundsProxy.prototype = {

	create: function( data ){
		return new Bounds();
	},

	data: {
		get: function( obj ){
			return obj.data;
		},

		set: function(){

		}
	},

	bounds: {
		get: function( obj, bounds ){
			bounds.left = obj.left;
			bounds.right = obj.right;
			bounds.top = obj.top;
			bounds.bottom = obj.bottom
		},

		set: function( obj, left, top, right, bottom ){
			obj.left = left;
			obj.right = right;
			obj.top = top;
			obj.bottom = bottom
		}
	},

	position: {
		get: function( obj, point ){
			point.x = obj.left;
			point.y = obj.top;
		},

		set: function( obj, x, y ){
			obj.left = x;
			obj.top = y;
		}
	},

	size: {
		get: function( obj, rect ){
			rect.width = obj.width;
			rect.height = obj.height;
		},

		set: function( obj, width, height ){
			obj.width = width;
			obj.height = height;
		}
	}

	// x,
	// y,
	// width,
	// height
	// rotation?

};