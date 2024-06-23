const {Router} = require('express');
const { getToDo, saveToDo, updateToDo,deleteToDo,getToDoById } = require('../controllers/ToDoController');

const router = Router();

router.get('/', getToDo);
router.post('/save', saveToDo);
router.post('/update/:_id', updateToDo);
router.post('/delete/:_id', deleteToDo);
router.get('/getTodo/:_id', getToDoById);

module.exports = router;
