const { Router } = require('express');
const router = Router();
const userSchema = require('../models/user');

// router.get('/', (req, res) => {
//   res.send('ojo por aca');
// });

router.post('/post', (req, res) => {
  const user = userSchema(req.body);
  console.log(user);
  // console.log('test', user);
  user
    .save()
    .then((data) => res.json(data))
    .catch((e) => {
      res.json({ error: 'paso cadena por aca' });
    });
  // res.json('esta es la ruta post');
});

module.exports = router;
