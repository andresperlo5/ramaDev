const arrayUsuarios = [
  {
    usuario: 'asd1',
    pass: '123'
  },
  {
    usuario: 'asd2',
    pass: '123'
  },
  {
    usuario: 'asd3',
    pass: '123'
  }
]

localStorage.setItem('usuarios', JSON.stringify(arrayUsuarios))
