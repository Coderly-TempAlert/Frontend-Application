Feature: Registro de Usuario
  Como usuario
  Quiero registrarme
  Para guardar información relevante rápida y eficientemente

  Scenario: Registro con campos vacíos
    Given el usuario encuentra el formulario de registro de datos personales
    And deja casillas vacías
    When el usuario intenta registrarse
    Then el sistema muestra un mensaje de error

  Scenario: Registro exitoso
    Given el usuario ingresa sus datos en las casillas de forma correcta
    When intenta registrarse
    Then el sistema almacena los datos ingresados