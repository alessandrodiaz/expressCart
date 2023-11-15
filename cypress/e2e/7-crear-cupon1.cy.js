describe("crear Cupon valor negativo", () => {
	it("Inicia sesión y agrega nuevo cliente", () => {
		// Visitar la página de inicio de sesión
		cy.visit("http://localhost:1111/admin/login");

		// Ingresar el correo electrónico
		cy.get('input[type="email"]').type("karen@gmail.com");

		// Ingresar la contraseña
		cy.get('input[type="password"]').type("1111");

		cy.get("#loginForm").click();
		cy.get('.nav-link[href="/admin/settings/discounts"]').click();
		cy.get('a.btn.btn-outline-success[href="/admin/settings/discount/new"]').click();
		cy.get("#discountCode").type("CODEP12");
		cy.get("#discountType").select("percent");
		cy.get("#discountValue").type("-70");
		// Obtener la fecha actual

		// Establecer la hora en "12:00 PM"
		const today = new Date();

		// Calcular la fecha dos días después
		const twoDaysAfter = new Date(today);
		twoDaysAfter.setDate(today.getDate() + 2);

		// Formatear la fecha de inicio en el formato de tu aplicación
		const formattedStartDate = formatDate(twoDaysAfter); // "14/11/2023 17:21"

		// Ingresar la fecha de inicio en el campo correspondiente
		cy.get("#discountStart").type(formattedStartDate);

		// Ingresar la fecha de inicio en el campo correspondiente
		// Hacer clic en el botón "Ok"
		cy.get("button.btn.btn-default").click({ multiple: true, force: true });

		// Establecer la hora en "12:00 PM"
		today.setHours(12, 0, 0, 0);

		const fifteenDaysLater = new Date(today);
		fifteenDaysLater.setDate(today.getDate() + 15);

		// Formatear la fecha de finalización en el formato de tu aplicación
		const formattedEndDate = formatDate(fifteenDaysLater); // "14/11/2023 17:21"

		// Ingresar la fecha de finalización en el campo correspondiente
		cy.get("#discountEnd").type(formattedEndDate);
		cy.get("button.btn.btn-default").click({ multiple: true, force: true });
		cy.get('button.btn.btn-outline-success[type="submit"]').click();
		cy.get("div#notify_message").should("contain", "error");

		// Formatear la fecha en un formato adecuado (puede variar según tu aplicación)
		/*const formattedDate2 = `${twoDaysAfter.getMonth() + 2}/${twoDaysAfter.getDate() }/${twoDaysAfter.getFullYear()} 13:00 PM`;

 // Ingresar la fecha en el campo de entrada
 cy.get('#discountEnd').type(formattedDate2);

 // Hacer clic en el botón "Ok"
 cy.get('button.btn.btn-default').click({ multiple: true, force: true });
     cy.get('button.btn.btn-outline-success[type="submit"]').click();*/
	});
});

function formatDate(date) {
	const day = date.getDate().toString().padStart(2, "0");
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const year = date.getFullYear();
	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");

	return `${day}/${month}/${year} ${hours}:${minutes}`;
}
