/** 
 * ?--------------------------
 * *REQUIRE PACKS FOR NODE
 * ?--------------------------
 **/
//! for create servers
const express = require("express");
//! for concatenate paths
const path = require("path");
//! calling files with routes
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

/** 
 * ?--------------------------
 * *SERVER SETUP
 * ?--------------------------
 **/
//! Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3000;
//! Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

/** 
 * ?--------------------------
 * *SERVER START UP
 * ?--------------------------
 **/
//! Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));