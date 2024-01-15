require('dotenv').config()  
const express = require("express")
const router = express.Router()
const {
    getBooks,
    getBook,
    createBook,
    deleteBook,
    updateBook
} = require('../controllers/bookController')



router.get('/books',(getBooks))

router.get('/:id', (getBook))

router.post('/',  (createBook))

router.delete('/',  (deleteBook))

router.patch('/', (updateBook))

module.exports = router

