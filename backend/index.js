const db = require('./database/db');

(async () => {
    await db.insertProducts({description: "Produto teste"})
})();