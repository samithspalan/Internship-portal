import express, { Router } from 'express';
import { getUser, login, logout, singUp } from '../controller/auth.js';
import { checkAuth } from '../middlewares/checkauth.js';
// import { upload } from '../middlewares/multer.js';
const authRouter =  express.Router();
// authRouter.post('/signup',upload.single("profileimage"),(singUp)) this is used to upload image in signup
authRouter.post('/signup',(singUp))
authRouter.post('/login',(login))
authRouter.post('/logout', (logout))
authRouter.get('/getuserdata', checkAuth,getUser)
export default authRouter;