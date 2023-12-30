const mongoose = require('mongoose')


const bookSchema = new mongoose.Schema(
    {
    bookTitle: {
        type: String,
        required: true
    },
    bookAuthor: {
        type: String,
        required: true
    },
    bookPrice: {
        type: mongoose.Schema.Types.Decimal128,
        required: true
    },
    bookPublishYear: {
        type: Date,
        required: true
    }
    },
    {
        timestamps: true
    }
)
class BookDTO{
    constructor(bookTitle, bookAuthor, bookPrice, bookPublishYear){
        this.bookTitle = bookTitle
        this.bookAuthor = bookAuthor
        this.bookPrice = bookPrice
        this.bookPublishYear = bookPublishYear
    }
}

const Book = mongoose.model('Book', bookSchema)
module.exports = Book