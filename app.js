const port = process.env.PORT || 3000;
const express = require('express');
const { run } = require('./worker');
const { data, deptNames, lp, ctype } = require('./data');
const { courses_names } = require('./courses');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/src'));

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    // res.send('index');
    const names = courses_names;
    // console.log(names);
    res.render('index.ejs', { names })
});

app.post("/:handle", async (req, res) => {
    let handle = req.body.username.trim();
    handle = handle.substring(0, handle.indexOf('-')-1).trim();
    const resu = await run(handle, res);
    if (resu != "error") res.render('result.ejs', { resu });
    else {
        const inp = handle.toUpperCase();
        res.render('404.ejs', { inp })
    };
});

app.get('/:handle', async (req, res) => {
    let handle = req.params.handle.trim();
    handle = handle.substring(0, handle.indexOf('-')-1).trim();
    const resu = await run(handle, res);
    if (resu != "error") res.render('result.ejs', { resu });
    else {
        const inp = handle.toUpperCase();
        res.render('404.ejs', { inp })
    };
});

app.listen(port, () => { console.log(`listens at ${port}`); });
