import express from 'express';

const router = express.Router();

const users = [];

router.get('/', (req, res) => {
    res.render("index.ejs");
});

router.post('/users', (req, res) => {
    users.push(req.body.user); // Ensure 'user' is the name attribute in your form
    res.redirect('/usersData');
});

router.get('/usersData', (req, res) => {
    res.render("user.ejs", { users }); // Use 'users' to match your template
});

export default router;
