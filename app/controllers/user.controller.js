const User = require("../models/user.model.js");

// Create and Save a new User
exports.create = (req, res) => {
	// Validate request
	if (!req.body) {
	  res.status(400).send({
		 message: "Conteudo vazio!"
	  });
	}
 
	// Create a user
	const user = new User({
	  email: req.body.email,
	  name: req.body.name,
	  active: req.body.active
	});
 
	// Save User in the database
	User.create(user, (err, data) => {
	  if (err)
		 res.status(500).send({
			message:
			  err.message || "Some error occurred while creating the User."
		 });
	  else res.send(data);
	});
 };

// Retrieve all User from the database.
exports.findAll = (req, res) => {
	User.getAll((err, data) => {
	  if (err)
		 res.status(500).send({
			message:
			  err.message || "Some error occurred while retrieving users."
		 });
	  else res.send(data);
	});
 };

// Find a single User with a userId
exports.findOne = (req, res) => {
	User.findById(req.params.userId, (err, data) => {
	  if (err) {
		 if (err.kind === "not_found") {
			res.status(404).send({
			  message: `Not found User with id ${req.params.userId}.`
			});
		 } else {
			res.status(500).send({
			  message: "Error retrieving User with id " + req.params.userId
			});
		 }
	  } else res.send(data);
	});
};

// Update a User identified by the userId in the request
exports.update = (req, res) => {
	// Validate Request
	if (!req.body) {
	  res.status(400).send({
		 message: "Content can not be empty!"
	  });
	}
 
	User.updateById(
	  req.params.userId,
	  new User(req.body),
	  (err, data) => {
		 if (err) {
			if (err.kind === "not_found") {
			  res.status(404).send({
				 message: `Not found User with id ${req.params.userId}.`
			  });
			} else {
			  res.status(500).send({
				 message: "Error updating User with id " + req.params.userId
			  });
			}
		 } else res.send(data);
	  }
	);
 };

// Delete a User with the specified userId in the request
exports.delete = (req, res) => {
  
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  
};