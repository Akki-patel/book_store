const Book = require('./book.model')

const postABook = async(req,res)=>{
    console.log(req.body)
    try{
        const newBook = await Book({...req.body});
        await newBook.save();
        res.status(200).send({message:"book posted successfully",book:newBook})
    }catch(error){
        console.log("error creating book")
        res.status(500).send({message:"Failed to create book"})

    }
}

const getAllBooks = async(req,res)=>{
    try {
        const books  =  await Book.find();
        res.status(200).send(books).sort({createdAt:-1})
    } catch (error) {
        console.log(error)
    }
}

const getSingleBook = async(req,res)=>{
    try{
        const {id} = req.params;
        const book = await Book.findById(id) 
        res.status(200).send(book);
        if(!book){
            res.status(404).send({message:"book not found"})

        }
    } catch(error) {
            console.log("error fecthing book",error);
            res.status(500).send({message:"faild to fetch"})
        
    }
}


const updateBookData = async(req,res) =>{
    try {
        const{id} = req.params;
        const updateBook = await Book.findByIdAndUpdate(id,req.body,{new:true})
        if(!updateBook){
            res.status(404).send({message:"book not found"})
        }
        res.status(200).send({
            message:"Book updated successfully",
            book:updateBook
        })
    } catch (error) {
        console.log("error updating book",error);
        res.status(500).send({message:"faild to update book"})
    
    }
}


const deleteBook = async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteABook = await Book.findByIdAndDelete(id);
        if(!deleteABook){
            res.status(404).send({message:"book not found"})
        }
        res.status(200).send({
            message:"Book deleted successfully",
            book: deleteBook
        })
    } catch (error) {
        console.log("error deleteing book",error);
        res.status(500).send({message:"faild to delete book"})
    }
}

module.exports  = {
    postABook,getAllBooks,getSingleBook,updateBookData,deleteBook
}