import {Router} from 'express'
import { TestB } from './TestB';

const ruta = Router();

//ruta.get('/test', (requ, resp) => resp.send('HOLA MUNDO'));

ruta.get('/testB',  (requ, resp) => resp.send(TestB));

export default ruta;