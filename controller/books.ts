import  { Request, Response } from 'express';
import Book from '../models/books';

export const getBooks = async(_req: Request, res: Response) => {
    const books = await Book.findAll(); 
    res.json({ 
        msg:'success',
        success:'true',
        books
    })
}
export const getBook = async(req: Request, res: Response) => {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    res.json({ 
        msg:'success',
        success:'true',
        book
    })
}

export const postBook = async(req: Request, res: Response) => {
    try {
        const { body } = req;
            const book = await Book.create( {title: body.title ,author:body.author,publishedYear:body.publishedYear,genre:body.genre , status:1});
            await book.save();
    
            res.json({
                msg:'the data was saved',
                success:'true',
                book
            })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:error,
            success:false
        })
    }

}