const { data, deptNames, lp, ctype } = require('./data');

function search(nameKey, myArray) {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].code === nameKey) {
            return myArray[i];
        }
    }
}

async function urlCheck(url) {
    const urlStatusCode = require('url-status-code')
    try {
        const status = await urlStatusCode(url)
        //   console.log(status)
        if (status === 200)
            return url;
        else return 'NA';
    } catch (error) {
        //   console.error(error)
    }
}

async function run(handle, res) {
    try {
        let inp = handle.toUpperCase();
        let resu = search(inp, data);
        resu.hi = 'resu';
        let two = inp.trim().slice(0, 2).toLowerCase();
        let url = `https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/${lp[two]}/${inp}.pdf`;
        resu.lplink = await urlCheck(url);
        console.log(resu);
        return resu;
        // res.render('result.ejs', { resu });
    } catch (error) {
        // console.log(error);
        let inp = handle.toUpperCase();
        return "error";
        // res.render('404.ejs', { inp });
    }
}



module.exports = { run };
