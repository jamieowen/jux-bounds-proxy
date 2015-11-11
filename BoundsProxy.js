
var BoundsBase = require( 'jux-bounds' );

var Bounds = function(){
	BoundsBase.call( this );
	this.data = null;
};

Bounds.prototype = Object.create( BoundsBase.prototype );
Bounds.prototype.constructor = Bounds;


var BoundsProxy = function(){

};
/**
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
**/



BoundsProxy.prototype = {

	constructor: BoundsProxy,

	create: function( data ){
		return new Bounds();
	},


	data: {
		get: function( obj ){
			return obj.data;
		},

		set: function( bounds, data ){
			bounds.data = data;
		}
	},

	bounds: {
		get: function( obj, bounds ){
			bounds.x = obj.x;
			bounds.y = obj.y;
			bounds.width = obj.width;
			bounds.height = obj.height;
		},

		set: function( obj, left, top, right, bottom ){
			obj.x = left;
			obj.y = top;
			obj.width = right - left;
			obj.height = bottom - top;
		}
	},

	position: {
		get: function( obj, point ){
			point.x = obj.x;
			point.y = obj.y;
		},

		set: function( obj, x, y ){
			obj.x = x;
			obj.y = y;
		}
	},

	size: {
		get: function( obj, bounds ){
			bounds.width = obj.width;
			bounds.height = obj.height;
		},

		set: function( obj, width, height ){
			obj.width = width;
			obj.height = height;
		}
	}
};

// x,
// y,
// width,
// height
// rotation?

module.exports = BoundsProxy;