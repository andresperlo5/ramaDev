const obtenerUsuarios = () => {
 let resultado = JSON.parse(localStorage.getItem('usuarios'))
 return resultado
}

const editarUsuario = (id) => {
  return id
}

export {
  obtenerUsuarios,
  editarUsuario
}
