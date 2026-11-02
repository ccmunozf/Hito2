export function validateAuth({ email, password, confirmPassword }, isRegister) {
  if (!email.trim() || !password.trim() || (isRegister && !confirmPassword.trim())) {
    return 'Todos los campos son obligatorios.'
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return 'Ingresa un correo electrónico válido.'
  }
  if (password.length < 6) return 'La contraseña debe tener al menos 6 caracteres.'
  if (isRegister && password !== confirmPassword) return 'Las contraseñas no coinciden.'
  return ''
}
