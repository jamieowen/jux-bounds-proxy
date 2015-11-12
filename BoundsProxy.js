
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

	data_get: function( obj ){
		return obj.data;
	},

	data_set: function( bounds, data ){
		bounds.data = data;
	},

	bounds_get: function( obj, bounds ){
		bounds.x = obj.x;
		bounds.y = obj.y;
		bounds.width = obj.width;
		bounds.height = obj.height;
	},

	bounds_set: function( obj, left, top, right, bottom ){
		obj.x = left;
		obj.y = top;
		obj.width = right - left;
		obj.height = bottom - top;
	},

	position_get: function( obj, point ){
		point.x = obj.x;
		point.y = obj.y;
	},

	position_set: function( obj, x, y ){
		obj.x = x;
		obj.y = y;
	},

	size_get: function( obj, bounds ){
		bounds.width = obj.width;
		bounds.height = obj.height;
	},

	size_set: function( obj, width, height ){
		obj.width = width;
		obj.height = height;
	}

};

// x,
// y,
// width,
// height
// rotation?

module.exports = BoundsProxy;