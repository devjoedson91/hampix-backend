import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { isAuthenticated } from './middlewares/isAuthenticated'; // middleware

const router = Router();

// ROTAS USERS

router.post('/users', new CreateUserController().handle); // chamando o controller, criando user

router.post('/session', new AuthUserController().handle); // chamando o authuser, autenticando o user

router.get('/userinfo', isAuthenticated, new DetailUserController().handle); 

// antes de chamar a classe detailuser, passe pelo um middleware que verifica o token é valido e deixa prosseguir ou nao

// ROTAS CATEGORY



export { router };