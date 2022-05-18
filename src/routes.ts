import { Router, Request, Response } from 'express';

const router = Router();

router.get('/test', (req: Request, res: Response) => { // (typescript) req é do tipo Resquest e permite saber o que tem no Resquest

    return res.json({ok: true});

});

export { router };