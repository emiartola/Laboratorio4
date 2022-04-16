import {Router} from 'express'
import { TestA } from './TestA';

const ruta = Router();

//ruta.get('/test', (requ, resp) => resp.send('HOLA MUNDO'));

ruta.get('/testA',  (requ, resp) => resp.send(TestA));

export default ruta;