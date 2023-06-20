Feature: Seguir en vivo la temperatura de la zona de refrigerado

Scenario: Obtener la temperatura actual y un ligero historial de la zona de refrigerado
    Dado que soy un supervisor de zona de refrigerado
    Cuando quiero seguir en vivo la temperatura de la zona de refrigerado
    Entonces deseo recibir la temperatura actual y un ligero historial de la misma
