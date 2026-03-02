const express = require("express")
const router = express.Router()

const db = require("../config/db")


router.get("/categories", (req, res) => {
    db.query("SELECT * FROM categories", (err, result) => {
        if (err) throw err
        res.render("categories", { categories: result })
    })
})


router.post("/categories/add", (req, res) => {
    const { categoryName } = req.body

    db.query(
        "INSERT INTO categories (categoryName) VALUES (?)",
        [categoryName],
        (err) => {
            if (err) throw err
            res.redirect("/categories")
        }
    )
})


router.get("/categories/delete/:id", (req, res) => {

    const id = req.params.id

    db.query(
        "DELETE FROM categories WHERE categoryId = ?",
        [id],
        (err) => {
            if (err) throw err
            res.redirect("/categories")
        }
    )

})


router.get("/categories/edit/:id", (req, res) => {

    const id = req.params.id

    db.query(
        "SELECT * FROM categories WHERE categoryId = ?",
        [id],
        (err, result) => {
            if (err) throw err
            res.render("editCategory", { category: result[0] })
        }
    )

})


router.post("/categories/update/:id", (req, res) => {

    const id = req.params.id
    const { categoryName } = req.body

    db.query(
        "UPDATE categories SET categoryName = ? WHERE categoryId = ?",
        [categoryName, id],
        (err) => {
            if (err) throw err
            res.redirect("/categories")
        }
    )

})

module.exports = router