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
module.exports  = {
    postABook
}