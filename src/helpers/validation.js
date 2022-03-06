export const validateForm = (profileData) =>{
    let errors = {};

  if (!profileData.name) {
    errors.name = "Se requiere un nombre";
  } else if (!/^[a-zA-Z]+$/.test(profileData.name) || profileData.name.length > 15) {
    errors.name = "El nombre es invalido";
  }

  if (!profileData.lastName) {
    errors.lastName = "Se requiere un apellido";
  } else if (!/^[a-zA-Z]+$/.test(profileData.lastName) || profileData.lastName.length > 20) {
    errors.lastName = "El apellido es inválido";
  }

  if (!profileData.phoneNumber) {
    errors.phoneNumber = "Un numero de telefono es requerido";
  } else if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(profileData.phoneNumber)) {
    errors.phoneNumber = "el numero de telefono es invalido";
  }

  if (!profileData.address) {
    errors.address = "Se requiere una dirección";
  } 

  if (!profileData.email) {
    errors.email = "Un email es requerido";
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(profileData.email)) {
    errors.email = "El email es inválido";
  }


  return errors;
}