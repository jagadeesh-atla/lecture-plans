const { data, deptNames, lp, ctype } = require('./data');

function search(nameKey, myArray) {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].code === nameKey) {
            return myArray[i];
        }
    }
}

function run(handle, res) {
    try {
        let inp = handle.toUpperCase();
        let resu = search(inp, data);
        resu.hi = 'resu';
        let two = inp.trim().slice(0, 2).toLowerCase();
        let url = `https://people.iitism.ac.in/~academics/assets/course_structure/new/cat/${lp[two]}/${inp}.pdf`;
        (async () => {
            const urlStatusCode = require('url-status-code')
            try {
                const status = await urlStatusCode(url)
                //   console.log(status)
                if (status === 200)
                    resu.lplink = url;
                else resu.lplink = 'NA';
            } catch (error) {
                //   console.error(error)
            }
        })();
        console.log(resu);
        res.render('result.ejs', { resu });
    } catch (error) {
        // console.log(error);
        let inp = handle.toUpperCase();
        res.render('404.ejs', { inp });
    }
}



module.exports = { run };
