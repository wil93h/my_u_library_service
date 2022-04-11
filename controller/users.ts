import  { Request, Response } from 'express';
import User from '../models/user';

export const getUsers = async(_req: Request, res: Response) => {
    const admins = await User.findAll({
        where:{
            role:'admin'
        }
    });
    const students = await User.findAll({
        where:{
            role:'student'
        }
    });
    res.json({admins, students})
}
export const getUser = async(req: Request, res: Response) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    res.json({ 
        msg:'success',
        success:'true',
        user
    })
}
export const postUser = async(req: Request, res: Response) => {
    try {
        const { body } = req;
            const user = await User.create( {firstName: body.firstName ,lastName:body.lastName,email:body.email,role:body.role === 1?'admin':'student' , status:1});
            await user.save();
    
            res.json({
                msg:'the data was saved',
                success:'true',
                user
            })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:error,
            success:false
        })
    }

}