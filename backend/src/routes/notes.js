import { Router } from 'express';
const router = Router();

import { createNoteHandler, deleteNoteHandler, editNoteHandler, getAllNotesHandler, getArchievedNotesHandler, getByCathegoryNoteHandler, getByUserHandler, toggleArchiveStatusHandler, getUnarchievedNotesHandler } from '../controllers/notes.controller';

router.post('/insert', createNoteHandler);
router.get('/getAll', getAllNotesHandler);
router.get('/getByUser/:userId', getByUserHandler);
router.put('/edit/:id', editNoteHandler);
router.put('/archive/:id', toggleArchiveStatusHandler);
router.delete('/delete/:id', deleteNoteHandler);
router.get('/archived/:userId', getArchievedNotesHandler);
router.get('/unarchived/:userId', getUnarchievedNotesHandler);
router.get('/category/:id', getByCathegoryNoteHandler);

export default router;


