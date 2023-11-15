describe("crear Cupon nuevo fecha terminacion anterios a la fecha que comienza el cupon", () => {
	it("Inicia sesión y agrega nuevo cliente", () => {
		cy.visit("http://localhost:1111/admin/login");
		cy.get('input[type="email"]').type("karen@gmail.com");
		cy.get('input[type="password"]').type("1111");
		cy.get("#loginForm").click();
		cy.get('.nav-link[href="/admin/settings/discounts"]').click();
		cy.get('a.btn.btn-outline-success[href="/admin/settings/discount/new"]').click();
		cy.get("#discountCode").type("CODEP12");
		cy.get("#discountType").select("percent");
		cy.get("#discountValue").type("70");
		const today = new Date();
		const twoDaysAfter = new Date(today);
		twoDaysAfter.setDate(today.getDate() + 2);
		const formattedStartDate = formatDate(twoDaysAfter);
		cy.get("#discountStart").type(formattedStartDate);
		cy.get("button.btn.btn-default").click({ multiple: true, force: true });
		today.setHours(12, 0, 0, 0);
		const fifteenDaysLater = new Date(today);
		fifteenDaysLater.setDate(today.getDate() - 3);
		const formattedEndDate = formatDate(fifteenDaysLater);
		cy.get("#discountEnd").type(formattedEndDate);
		cy.get("button.btn.btn-default").click({ multiple: true, force: true });
		cy.get('button.btn.btn-outline-success[type="submit"]').click();
		cy.get("div#notify_message").should("contain", "Discount start date needs to be after today");
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
