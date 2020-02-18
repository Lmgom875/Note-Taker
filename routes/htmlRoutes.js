/** 
 * ?--------------------------
 * *REQUIRE PACKS FOR NODE
 * ?--------------------------
 **/
//! for concatenate paths
const path = require("path");
//! with .Router express function don't need use /api in the get/post/delete metods
const router = require("express").Router();

/** 
 * ?--------------------------
 * *ROUTES 
 * ?--------------------------
 **/

 //! get route for /notes.html
router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})

 //! get route for /index.html
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})



module.exports = router;