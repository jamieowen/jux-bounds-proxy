
var test 	= require( 'tape' );

var Proxy 	= require( '../BoundsProxy' );
var Bounds 	= require( 'jux-bounds' );

test( 'set/get values', function(t){

	var bounds 		= new Bounds();
	var proxy 		= new Proxy();
	var fetched;

	t.deepEquals( [ bounds.left, bounds.top, bounds.right, bounds.bottom ], [0,0,0,0], 'Bounds set to defaults.' );

	// set / get position.
	fetched = new Bounds();
	proxy.position.set( bounds, 55, 66 );
	proxy.position.get( bounds, fetched );
	t.deepEquals( [ fetched.x, fetched.y ], [55,66], 'Proxy sets/gets position.' );

	// set / get size
	fetched = new Bounds();
	proxy.size.set( bounds, 100, 34 );
	proxy.size.get( bounds, fetched );
	t.deepEquals( [ fetched.width, fetched.height ], [100,34], 'Proxy sets/gets size.' );

	t.deepEquals( [ bounds.left, bounds.top, bounds.right, bounds.bottom ], [55,66,155,100], 'Proxy updates t,r,b,l.' );

	// set / get bounds
	fetched = new Bounds();
	proxy.bounds.set( bounds, 10, 20, 110, 100 );
	proxy.bounds.get( bounds, fetched );

	t.deepEquals( [ fetched.left, fetched.top, fetched.right, fetched.bottom ], [10,20,110,100], 'Proxy sets/gets bounds.' );
	t.deepEquals( [ fetched.x, fetched.y, fetched.width, fetched.height ], [10,20,100,80], 'Proxy updates x,y,w,h.' );

	t.end();
} );