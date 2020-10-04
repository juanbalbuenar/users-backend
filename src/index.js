const app = require('./app');
const { connect } = require('./database');

async function main() {
    //Conexion BD
    await connect();
    
    await app.listen(4000)
    console.log('Servidor corriendo en puerto 4000');

}

main();