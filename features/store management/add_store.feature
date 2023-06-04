Feature: Registrar tiendas
  Como administrador de la aplicación
  Quiero registrar nuevas tiendas
  Para llevar un control de todas las tiendas que utilizan la aplicación y sus respectivos inventarios

  Scenario: Registro de nueva tienda
    Given soy un administrador de la aplicación
    And estoy en la página de registro de tiendas
    When ingreso los datos de la nueva tienda: nombre "Nombre de la tienda", dirección "Dirección de la tienda", descripcion "Descripcion"
    And presiono el botón de registrar
    Then la tienda "Nombre de la tienda" se registra exitosamente en el sistema
    And se crea un nuevo inventario para la tienda
