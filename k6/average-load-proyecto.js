import http from "k6/http";
import { check, sleep } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export const options = {
	stages: [
		// Prueba de carga
		{ duration: "1m", target: 100 }, // Subir a 100 usuarios durante 1 minuto
		{ duration: "5m", target: 500 }, // Mantener 500 usuarios durante 5 minutos
	],
};

export default () => {
	const url = "http://localhost:1111/customer/login_action";

	const payload = {
		loginEmail: "natalia@gmail.com",
		loginPassword: "1234",
	};

	const headers = {
		"Content-Type": "application/json",
	};

	const response = http.post(url, JSON.stringify(payload), { headers });

	check(response, {
		"status is 200 - login": (r) => r.status === 200,
		"login successful": (r) => JSON.parse(r.body).message === "Successfully logged in",
	});

	let res = http.get("http://localhost:1111/product/bufanda");
	check(res, {
		"is status 200 - product": (r) => r.status === 200,
	});

	sleep(1);
};

export function handleSummary(data) {
	return {
		"summary-average-load.html": htmlReport(data),
		stdout: textSummary(data, { indent: " ", enableColors: true }),
	};
}
