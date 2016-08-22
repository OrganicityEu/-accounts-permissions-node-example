var fs = require('fs');

// https://github.com/auth0/node-jsonwebtoken
var jwt = require('jsonwebtoken');

// Token to be verified
var token = "eyJhbGciOiJSUzI1NiJ9......eyYLiXN2g";

var callback = function(err, decoded) {
	if(!err && decoded) {
//		console.log(decoded);
//		console.log('-------------------------');
		console.log('Token valid!');
	} else {
//		console.error(err);
		console.log('Token invalid!');
	}
};

// Read cert
var cert = fs.readFileSync('accounts.organicity.eu.cert.pem', 'utf8');
jwt.verify(token, cert, callback);

// Read key
var key = fs.readFileSync('accounts.organicity.eu.key.pem', 'utf8');
jwt.verify(token, key, callback);
