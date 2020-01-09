import { Request, Response, Router } from 'express';
import { BAD_REQUEST, OK } from 'http-status-codes';
import { logger } from '@shared';

const router = Router();

/*****************************************************************************************
 *  Get Calculation performance(if set array length or not) - "GET /api/cal/arraytest"
 *****************************************************************************************/

router.get('/arraytest', async (req: Request, res: Response) => {
    try {
        const start = new Date().getTime();
        // let result = []
        let result = new Array<number>(8000000);
        for (let i = 0; i < 8000000; i++) {
            // result.push(i);
            result[i] = i
        }
        const end = new Date().getTime()
        return res.status(OK).json({ cal: result, time: end - start });
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
});


export default router;
