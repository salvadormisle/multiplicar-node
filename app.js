const colors = require('colors');

const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}



// console.log(`Base: ${argv.base}`);
// console.log(`Limite: ${argv.limite}`);
// console.log(process.argv);
// let parametro = argv[2];
// console.log(`Parámetro: ${parametro}`);
// let base = parametro.split('=')[1];
// console.log(`base: ${base}`);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));