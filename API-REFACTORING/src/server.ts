import 'express-async-errors';
/* import cors from 'cors'; */
import Express, { NextFunction, Request, Response } from 'express';
import router from './routes';
/* import { connect } from './connectionRequest'; */
/* import { UserRepository } from './repositories/UserRepository'; */
/* import Usercontrollers from './controllers/Usercontrollers'; */
/* import Dadoscontrollers from './controllers/Dadoscontrollers';*/

/* const userRepository = new UserRepository();
    const user = userRepository.create("Nerval de Junior", "nervaljunior123@gmail.com", "123456");
    console.log("User created:", user);
 */

const app = Express();
const PORT = 8000;
app.use(Express.json());

app.use((error: Error,req: Request,res: Response, next: NextFunction)=>{

    return res.json({
        status: 'Error',
        message: error.message
    });
    next();
});
/* app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  app.use(cors());
  next();
}); */

app.get('/', (req, res) => {
    return res.send({ message: 'hello world' });
});

app.use(router);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof Error) {
        return res.status(500).json({
            status: 'Error',
            message: error.message,
        });
    }

    return res.status(500).json({
        status: 'Error',
        message: 'Internal Server Error',
    });
}); */

/* app.post('/createUser', Usercontrollers.createUser); */
/* app.post('/createDados', Dadoscontrollers.createDados);
app.get('/listDados/:id', Dadoscontrollers.listDados);
app.put('/updateDados', Dadoscontrollers.updateDados);
app.delete('/deleteDados', Dadoscontrollers.deleteDados);
 */
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

