import  { Request, Response } from 'express';

export const getBooks = (req: Request, res: Response) => {
    res.json({ 
        msg:"getBooks",
        tex:req.params
    })
}
export const getBook = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({ 
        msg:"getBook",
        id
    })
}
export const postBook = (req: Request, res: Response) => {
    const { body } = req;
    res.json({ 
        msg:"postBook",
        body
    })
}