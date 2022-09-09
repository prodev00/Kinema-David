import { Router } from 'express';
import { create, get, update, remove, list } from '../controllers/contact';

const router: Router = Router();

router.post('/', create);
router.get('/', list);
router.get('/:id', get);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;
