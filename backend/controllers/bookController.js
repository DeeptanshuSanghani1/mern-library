const Book = require('../models/bookModel')
const mongoose = require('mongoose')

const getBooks = async (req,res)=>{
    try{
        const books = await Book.find().select('-_id')
        if(!books){
            res.status(404).json({message: 'No books found'})
        }
        res.status(200).json(books)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

const getBook = async (req,res)=>{
    try{
        const id = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(404).json({message: 'No book found'})
        }
        const book = await Book.findById(req.params.id).select('_id')
        res.status(200).json(book)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

const createBook = async (req,res)=>{

    const {bookTitle, bookAuthor, bookPrice, bookPublishYear} = req.body
    //query db and compare booktitles if exist return error
    try{
        if(Book.findOne({bookTitle: bookTitle})){
            res.status(409).json({message: 'Book already exists'})
        }
        const book = await Book.create({bookTitle, bookAuthor, bookPrice, bookPublishYear})
        res.status(201).send(book)
    }
    catch(err){
        res.status(500).json({message: err.message})    
    }
}

const deleteBook = async (req,res)=>{
    try{
        const id = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(404).json({message: 'No book found'})
        }
        const book = await Book.findOneAndDelete({_id:id})
        res.status(200).send(book).json({message: 'Book deleted'})

    }
    catch{
        res.status(500).json({message: err.message}) 
    }
}

const updateBook = async (req,res)=>{
    try{
        const id = req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(404).json({message: 'No book found'})
        }
        const book = await Book.findOneAndUpdate({_id:id}, req.body)
    }
    catch{
        res.status(500).json({message: err.message}) 
    }
}

module.exports = {
    getBooks,
    getBook,
    createBook,
    deleteBook,
    updateBook
}