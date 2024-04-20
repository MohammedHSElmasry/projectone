import user from "./src/modules/user/user.roter.js"
import auth from "./src/modules/auth/auth.router.js"
import { asyncHandler, handelerror } from "./src/utils/errorhandling.js"
import city from './src/modules/city/city.router.js'
import hotel from './src/modules/hotel/hotel.router.js'
import trip from './src/modules/trips/trip.router.js'
import cors from 'cors'


const bootstrap= (app,express)=>{
    app.use(express.json())
    app.use('/user',user)
    app.use('/auth',auth)
    app.use('/city',city)
    app.use('/hotel',hotel)
    app.use('/trip',trip)
    app.use(handelerror)
    app.use(asyncHandler)
    app.use(cors)
    app.use('*', (req, res, next) => {
        return res.json({ message: 'Invalid routing' });
    });
    
}


export default bootstrap