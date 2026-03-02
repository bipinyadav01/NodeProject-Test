const express = require("express")
const router = express.Router()
const db = require("../config/db")


router.get("/products", (req, res) => {

    const page = parseInt(req.query.page) || 1
    const limit = 10
    const offset = (page - 1) * limit

    const categoryQuery = "SELECT * FROM categories"

    const productQuery = `
    SELECT p.productId, p.productName, c.categoryName, c.categoryId
    FROM products p
    JOIN categories c ON p.categoryId = c.categoryId
    LIMIT ? OFFSET ?
    `

    db.query(categoryQuery, (err, categories) => {

        if (err) throw err

        db.query(productQuery, [limit, offset], (err, products) => {

            if (err) throw err

            res.render("products", {
                categories: categories,
                products: products,
                page: page
            })

        })

    })

})


router.post("/products/add", (req, res) => {

    const { productName, categoryId } = req.body

    db.query(
        "INSERT INTO products (productName, categoryId) VALUES (?,?)",
        [productName, categoryId],
        (err) => {

            if (err) throw err

            res.redirect("/products")
        }
    )

})

router.get("/products/delete/:id", (req, res) => {

    const id = req.params.id

    db.query(
        "DELETE FROM products WHERE productId = ?",
        [id],
        (err) => {

            if (err) throw err

            res.redirect("/products")
        }
    )

})

router.get("/products/edit/:id", (req, res) => {

    const id = req.params.id

    const productQuery = "SELECT * FROM products WHERE productId = ?"
    const categoryQuery = "SELECT * FROM categories"

    db.query(productQuery, [id], (err, productResult) => {

        if (err) throw err

        db.query(categoryQuery, (err, categories) => {

            if (err) throw err

            res.render("editProduct", {
                product: productResult[0],
                categories: categories
            })

        })

    })

})

router.post("/products/update/:id", (req, res) => {

    const id = req.params.id
    const { productName, categoryId } = req.body

    db.query(
        "UPDATE products SET productName = ?, categoryId = ? WHERE productId = ?",
        [productName, categoryId, id],
        (err) => {

            if (err) throw err

            res.redirect("/products")
        }
    )

})

module.exports = router