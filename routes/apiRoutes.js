
/** 
 * ?--------------------------
 * *REQUIRE PACKS FOR NODE
 * ?--------------------------
 **/
//! with .Router express function don't need use /api in the get/post/delete metods
const router = require("express").Router();
//! fs for write on the JSON db
const fs = require("fs");
//! uuid node pack for ramdoms id's
const uuid = require("uuid/v4")

//! to read the db
const note_JSON = fs.readFileSync("db/db.json", "utf-8");
//! array with the db info for temp store, then write on the db 
let notes = JSON.parse(note_JSON);


/** 
 * ?--------------------------
 * *ROUTES 
 * ?--------------------------
 **/

//! get route for api/notes
router.get("/notes", function (req, res) {
    res.send(notes);
})

//! post route for api/notes
router.post("/notes", function (req, res) {
    //! const with the parameters of req.body
    const { title, text, id } = req.body;
    //! adding id parameter with the node pack uuid for ramdom id's
    let newNote = {
        title,
        text,
        id: uuid()
    }
    //! push the newNotes with all info and the new parameter
    notes.push(newNote);
    //! changing the notes array into JSON string
    const json_NOTES = JSON.stringify(notes);
    //! Write JSON string into the JSON file DB
    fs.writeFileSync("db/db.json", json_NOTES);
    res.json(true);
})

//! delete route for api/notes
router.delete("/notes/:id", function (req, res) {
    //! const for the id path when click the trach icon
    const idPath = req.path;
    //! const for take just the id without the /notes/
    const onlyID = idPath.slice(7);
    //! filter method for create a new array without the delete note
    notes = notes.filter(notes => notes.id != onlyID);
    //! changing the notes array into JSON string
    const json_NOTES = JSON.stringify(notes);
    //! Write the new JSON string into the JSON file DB
    fs.writeFileSync("db/db.json", json_NOTES);
    res.send(`erased ${onlyID}`);

})




module.exports = router;