import {Router} from 'express'
const router = Router()


import {registerUserHandler, loginUserHandler  } from '../controllers/users.controller'

router.post('/register',registerUserHandler)
router.post('/login', loginUserHandler)


export default router