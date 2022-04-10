import  { Request, Response } from 'express';

export const getAdministrators = (req: Request, res: Response) => {
    res.json({ 
        msg:"getAdministrators",
        tex:req.params
    })
}
export const getAdministrator = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({ 
        msg:"getAdministrator",
        id
    })
}
export const postAdministrator = (req: Request, res: Response) => {
    const { body } = req;
    res.json({ 
        msg:"postAdministrator",
        body
    })
}