Feature: Eliminar tiendas
  Como administrador de la aplicación
  Quiero eliminar tiendas del sistema
  Para eliminar tiendas que ya no requieran el uso de la aplicación o que hayan cerrado

  Scenario: Eliminación de tienda
    Given soy un administrador de la aplicación
    And estoy en la página de administración de tiendas
    When selecciono la tienda "Nombre de la tienda" que deseo eliminar
    And confirmo la eliminación de la tienda
    Then la tienda "Nombre de la tienda" se elimina correctamente del sistema
    And todos los registros asociados a la tienda también se eliminan
