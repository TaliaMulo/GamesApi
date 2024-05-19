

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/games', async (req, res) => {
    try {
        const apiRes = await fetch('https://www.gamerpower.com/api/giveaways');
        if (!apiRes.ok) {
            throw new Error(`http error status :${apiRes.status}`);
        }

        const data = await apiRes.json();
        res.json(data);

    }
    catch (error) {
        console.error('fetch error');
        res.status(500).send('internal server error');
    }

})

app.listen(PORT, () => {
    console.log(`server is runing at http://localhost:${PORT}`);
})
