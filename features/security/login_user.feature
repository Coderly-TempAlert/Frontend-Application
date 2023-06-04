Feature: Log In
  Como usuario
  Quiero iniciar sesión
  Para disfrutar de los beneficios que me ofrece

  Scenario: Inicio de sesión exitoso
    Given soy un usuario registrado
    And estoy en la página de inicio de sesión
    When ingreso mi nombre de usuario "mi_usuario" y contraseña "mi_contraseña"
    And presiono el botón de iniciar sesión
    Then ingreso correctamente al sistema
    And veo la página de inicio del usuario