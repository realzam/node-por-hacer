const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Description de la tarea por hacer'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', { descripcion })
    .command('actualizar', 'Crea una tarea por hacer', { descripcion, completado })
    .command('borrar', 'Elimina una tarea por hacer', { descripcion })
    .help().argv;

module.exports = {
    argv
}