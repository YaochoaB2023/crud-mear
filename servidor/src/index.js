import app from './app.js';
import { conectarDB } from './db.js';

app.listen(5000, () => console.log(`server on in port 5001`));
conectarDB();