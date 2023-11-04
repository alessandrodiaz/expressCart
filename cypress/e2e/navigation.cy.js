//EJEMPLO PRUEBA FUNCIONAL DEL REDIRECCIONAMIENTO DEL BOTÓN DE HOME DESDE LA PAGINA DE INICIO
describe("Navegación a la página de inicio", () => {
	it("Debería llevar a la página de inicio al hacer clic en 'Home'", () => {
		// Visita la página web
		cy.visit("http://localhost:1111");

		// Espera a que la página se cargue completamente
		cy.wait(1000);

		// Haz clic en el enlace "Home" en la barra de navegación
		cy.get("nav a.nav-link").contains("Home").click();

		// Verificar que la URL actual sea la página de inicio
		cy.url().should("eq", "http://localhost:1111/");
	});
});
