export const INPUTS_REGISTER = [
  {
    id: 1,
    label: 'Nombre de la empresa',
    placeholder: 'Empresa',
    name: 'company',
    typeFor: 1
  },
  {
    id: 2,
    label: 'Nombre',
    placeholder: 'Nombre',
    name: 'name',
    typeFor: 2
  },
  {
    id: 244,
    label: 'Apellidos',
    placeholder: 'lastname',
    name: 'lastname',
    typeFor: 2
  },
  {
    id: 2422224,
    label: 'Nombre de persona de contacto',
    placeholder: 'Nombre de persona de contacto',
    name: 'name',
    typeFor: 1
  },
  {
    id: 3,
    label: 'CIF/NIF',
    placeholder: 'Cif',
    name: 'cif',
    description: '*Colocar el CIF/NIF de la empresa, tal como aparece en la póliza de seguro'
  },
  {
    id: 5,
    label: 'Teléfono',
    placeholder: 'Teléfono',
    name: 'phone',
    keyboardType: 'phone-pad'
  },
  {
    id: 6,
    label: 'Email',
    placeholder: 'Email',
    name: 'email',
    autoCapitalize: 'none',
    keyboardType: 'email-address'
  },
  {
    id: 7,
    label: 'Contraseña',
    placeholder: 'Contraseña',
    name: 'password',
    secureTextEntry: true,
    minLength: {
      value: 8,
      message: 'La contraseña debe tener al menos 8 caracteres'
    }
  }
]
