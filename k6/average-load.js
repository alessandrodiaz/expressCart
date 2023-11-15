import http from "k6/http";
import { check, sleep } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export const options = {
	stages: [
		// Prueba de carga
		{ duration: "1m", target: 100 }, // Subir a 100 usuarios durante 2 minutos
		{ duration: "10m", target: 100 }, // Mantener 100 usuarios durante 15 minutos
	],
};

export default () => {
	const url = "http://localhost:1111/admin/login_action";

	const payload = {
		email: "aless@gmail.com",
		password: "1234",
	};

	const headers = {
		"Content-Type": "application/json",
	};

	const response = http.post(url, JSON.stringify(payload), { headers });

	check(response, {
		"status is 200": (r) => r.status === 200,
		"login successful": (r) => JSON.parse(r.body).message === "Login successful",
	});
};

export function handleSummary(data) {
	return {
		"summary-average-load.html": htmlReport(data),
		stdout: textSummary(data, { indent: " ", enableColors: true }),
	};
}
