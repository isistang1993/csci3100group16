var mongoose = require( 'mongoose' );

var accSchema = mongoose.Schema( {
	acc_id : Number,
	username : String,
	password : String,
	create_date : Date,
	lock_date : Date,
	type : Number
} );

var userSchema = mongoose.Schema( {
	user_id : Number,
	acc_id : Number,
	phone : String,
	email : String,
	create_date : Date,
	lock_date : Date
} );

var driverSchema = mongoose.Schema( {
	driver_id : Number,
	acc_id : Number,
	phone : String,
	email : String,
	work_type : String,
	create_date : Date,
	lock_date : Date,
	resign_date : Date
} );

var officerSchema = mongoose.Schema( {
	officer_id : Number,
	acc_id : Number,
	email : String,
	type : String,
	create_date : Date,
	lock_date : Date
} );

var orderSchema = mongoose.Schema( {
	order_id : Number,
	user_id : Number,
	shoes_id : Number,
	qty : Number,
	price : Number,
	driver_id : Number,
	Ship_date : Date, 
	create_date : Date,
	lock_date : Date
} );

var cartSchema = mongoose.Schema( {
	cart_id : Number,
	user_id : Number,
	shoes_id : Number,
	qty : Number,
	create_date : Date,
	remove_date : Date
} );

var shoesSchema = mongoose.Schema( {
	shoes_id : Number,
	colour : String,
	shoes_id : Number,
	qty : Number,
	brand_id : Number,
	price : Number,
	dsrc : String,
	catalog : String,
	create_date : Date,
	remove_date : Date
} );

var paymentSchema = mongoose.Schema( {
	payment_id : Number,
	payment_method : String,
	total_price : Number,
	detail : Number,
	create_date : Date,
	remove_date : Date
} );

var brandSchema = mongoose.Schema( {
	brand_id : Number,
	brand_name : String,
	phone : String,
	address : String,
	create_date : Date,
	remove_date : Date
} );

var msgSchema = mongoose.Schema( {
	msg_id : Number,
	s_id : Number,
	sender_id : Number,
	receiver_id : Number,
	Message : String,
	create_date : Date,
	remove_date : Date
} );


// Create a model
var Account = mongoose.model( 'Account', userSchema );
var User = mongoose.model( 'UserAccount', userSchema );
var Driver = mongoose.model( 'DriverAccount', userSchema );
var Officer = mongoose.model( 'OfficerAccount', userSchema );
var Order = mongoose.model( 'Order', userSchema );
var ShoppingCart = mongoose.model( 'ShoppingCart', userSchema );
var Shoes = mongoose.model( 'Shoes', userSchema );
var Payment = mongoose.model( 'Payment', userSchema );
var Brand = mongoose.model( 'Brand', userSchema );
var Message = mongoose.model( 'Message', userSchema );

module.exports = User;
