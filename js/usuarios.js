import { obtenerUsuarios, editarUsuario } from './funciones.js'

let usuarios = obtenerUsuarios()
console.log(usuarios)

let editUser = editarUsuario(1)
console.log(editUser)


