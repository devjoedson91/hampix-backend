// quando iniciar a aplicação esse será o primeiro arquivo executado

import express, { Request, Response, NextFunction } from 'express'; // NextFunction - prosseguir a app
import 'express-async-errors';
import cors from 'cors'; // o cors serve para que qualquer ip consiga fazer requisições nessa api

import { router } from './routes';

const app = express();

app.use(express.json()); // o tipo de dados que será usado é o json
app.use(cors()) ;

app.use(router);

// middlewares

app.use((err: Error, req: Request, res: Response, next: NextFunction) => { // todas as rotas passam aqui

    if (err instanceof Error) { // se for uma instancia do tipo error

        return res.status(400).json({
            error: err.message
        });

    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    });

});

app.listen(3333, () => console.log('servidor online'));