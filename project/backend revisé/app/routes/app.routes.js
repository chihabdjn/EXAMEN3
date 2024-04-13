module.exports = app => {
  const controller = require("../controllers/app.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/tuts", controller.create);

  // Retrieve all controller
  router.get("/tuts", controller.findAll);

  // Retrieve all published controller
  router.get("tuts/published", controller.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("tuts/:id", controller.findOne);

  // Update a Tutorial with id
  router.put("tuts/:id", controller.update);

  // Delete a Tutorial with id
  router.delete("tuts/:id", controller.delete);

  // Delete all controller
  router.delete("tuts/", controller.deleteAll);

  // Login
  router.post("/login", controller.login)

  // Create a new User
  router.post("/user", controller.createUser);

  // Retrieve all Users
  router.get("/user", controller.findAllUsers);

  // Retrieve a single User with id
  router.get("/user/:id", controller.findOneUser);

  // Update a User with id
  router.put("/user/:id", controller.updateUser);

  // Delete a User with id
  router.delete("/user/:id", controller.deleteUser);

  // Delete all Users
  router.delete("/user", controller.deleteAllUsers);

  // Create a new CategoryMenu
  router.post("/catMenu", controller.createCatMenu);

  // Retrieve all CategoryMenu
  router.get("/catMenu", controller.findAllCatMenu);
  
  // Retrieve a single CategoryMenu with id
  router.get("/catMenu/:id", controller.findOneCatMenu);

  // Update a CategoryMenu with id
  router.put("/catMenu/:id", controller.updateCatMenu);

  // Delete a CategoryMenu with id
  router.delete("/catMenu/:id", controller.deleteCatMenu);

  // Delete all CategoryMenu
  router.delete("/catMenu", controller.deleteAllCatMenu);

  // Create a new Commande
  router.post("/cmd", controller.createCmd);

  // Retrieve all Commande
  router.get("/cmd", controller.findAllCmd);

  // Retrieve a single Commande with id
  router.get("/cmd/:id", controller.findOneCmd);

  // Update a Commande with id
  router.put("/cmd/:id", controller.updateCmd);

  // Delete a Commande with id
  router.delete("/cmd/:id", controller.deleteCmd);

  // Delete all Commande
  router.delete("/cmd", controller.deleteAllCmd);

  // Create a new Menu
  router.post("/menu", controller.createMenu);

  // Retrieve all Menu
  router.get("/menu", controller.findAllMenu);

  // Retrieve a single Menu with id
  router.get("/menu/:id", controller.findOneMenu);

  // Update a Menu with id
  router.put("/menu/:id", controller.updateMenu);

  // Delete a Menu with id
  router.delete("/menu/:id", controller.deleteMenu);

  // Delete all Menu
  router.delete("/menu", controller.deleteAllMenu);

  // Create a new Order
  router.post("/order", controller.createOrder);

  // Retrieve all Order
  router.get("/order", controller.findAllOrder);

  // Retrieve a single Order with id
  router.get("/order/:id", controller.findOneOrder);

  // Update a Order with id
  router.put("/order/:id", controller.updateOrder);

  // Delete a Order with id
  router.delete("/order/:id", controller.deleteOrder);

  // Delete all Order
  router.delete("/order", controller.deleteAllOrder);

  // Create a new Table
  router.post("/table", controller.createTable);

  // Retrieve all Table
  router.get("/table", controller.findAllTable);

  // Retrieve a single Table with id
  router.get("/table/:id", controller.findOneTable);

  // Update a Table with id
  router.put("/table/:id", controller.updateTable);

  // Delete a Table with id
  router.delete("/table/:id", controller.deleteTable);

  // Delete all Table
  router.delete("/table", controller.deleteAllTable);

  // Create a new Restaurant
  router.post("/restaurant", controller.createRestaurant);

  // Retrieve all Restaurant
  router.get("/restaurant", controller.findAllRestaurant);

  // Retrieve a single Restaurant with id
  router.get("/restaurant/:id", controller.findOneRestaurant);

  // Update a Restaurant with id
  router.put("/restaurant/:id", controller.updateRestaurant);

  // Delete a Restaurant with id
  router.delete("/restaurant/:id", controller.deleteRestaurant);

  // Delete all Restaurant
  router.delete("/restaurant", controller.deleteAllRestaurant);

  // Create a new role
  router.post("/role", controller.createRole);

  // Retrieve all role
  router.get("/role", controller.findAllRole);

  // Retrieve a single role with id
  router.get("/role/:id", controller.findOneRole);

  // Update a role with id
  router.put("/role/:id", controller.updateRole);

  // Delete a role with id
  router.delete("/role/:id", controller.deleteRole);

  // Delete all role
  router.delete("/role", controller.deleteAllRole);

  // Create a new review
  router.post("/review", controller.createReview);

  // Retrieve all review
  router.get("/review", controller.findAllReview);

  // Retrieve a single review with id
  router.get("/review/:id", controller.findOneReview);

  // Update a review with id
  router.put("/review/:id", controller.updateReview);

  // Delete a review with id
  router.delete("/review/:id", controller.deleteReview);

  // Delete all review
  router.delete("/review", controller.deleteAllReview);

  app.use('/api/', router);
};
