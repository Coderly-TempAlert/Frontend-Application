Feature: Editar tiendas
  Como administrador de la aplicación
  Quiero editar la información de las tiendas existentes
  Para mantener actualizada la información de contacto y ubicación de cada tienda

  Scenario: Edición de información de tienda
    Given soy un administrador de la aplicación
    And estoy en la página de edición de tiendas
    When selecciono la tienda "Nombre de la tienda" que deseo editar
    And actualizo la información de contacto y ubicación de la tienda
    And presiono el botón de guardar cambios
    Then la información de la tienda "Nombre de la tienda" se actualiza correctamente en el sistema
