import { Router } from "express";
import { getUsers, getUser } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id',authorize, getUser);

userRouter.post('/', (req, res) => {
    res.json({ message: 'CREATE new user' });
})
userRouter.put('/:id', (req, res) => {
    res.json({ message: 'UPDATE user' });
})
userRouter.delete('/id', (req, res) => {
    res.json({ message: 'DELETE user' });
})


export default userRouter;