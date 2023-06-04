Feature: Cambio de contraseña
  Como usuario
  Quiero poder cambiar mi contraseña
  Para mantener la seguridad de mi cuenta

  Scenario: Cambiar contraseña exitosamente
    Given soy un usuario autenticado
    And estoy en el modal de cambio de contraseña
    And he introducido mi contraseña actual "contraseña_actual"
    And he introducido mi nueva contraseña "nueva_contraseña"
    When intento cambiar mi contraseña
    Then la nueva contraseña "nueva_contraseña" se guarda en el sistema

  Scenario: Cambio de contraseña fallido
    Given soy un usuario autenticado
    And estoy en el modal de cambio de contraseña
    And he introducido mi contraseña actual "contraseña_actual"
    And he introducido mi nueva contraseña "nueva_contraseña"
    When intento cambiar mi contraseña
    Then veo un mensaje de error indicando que el cambio de contraseña ha fallado