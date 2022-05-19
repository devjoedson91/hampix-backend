import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';

import { isAuthenticated } from './middlewares/isAuthenticated'; // middleware

import uploadConfig from './config/multer';

const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));

// ROTAS USERS

router.post('/users', new CreateUserController().handle); // chamando o controller, criando user

router.post('/session', new AuthUserController().handle); // chamando o authuser, autenticando o user

router.get('/userinfo', isAuthenticated, new DetailUserController().handle); 

// antes de chamar a classe detailuser, passe pelo um middleware que verifica o token é valido e deixa prosseguir ou nao


// ROTAS CATEGORY

router.post('/category', isAuthenticated, new CreateCategoryController().handle);

router.get('/category', isAuthenticated, new ListCategoryController().handle);


// ROTAS PRODUCTS

router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);

router.get('/category/product', isAuthenticated, new ListByCategoryController().handle);



export { router };