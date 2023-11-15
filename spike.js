import http from "k6/http";
import { check, sleep } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export const options = {
	stages: [
		// Prueba de humo
		{ duration: "10s", target: 3 },
		// Prueba de picos
		{ duration: "1m", target: 2000 }, // Llegar a un alto numero de usuarios rapidamente
		{ duration: "1m", target: 0 }, // Bajar a 0 usuarios rapidamente
	],
};

export default () => {
	const url = "http://localhost:1111/admin/login_action";

	// Datos de inicio de sesión simulados
	const payload = {
		email: "aless@gmail.com",
		password: "1234",
	};

	// Encabezados para la solicitud POST
	const headers = {
		"Content-Type": "application/json",
	};

	// Realiza una solicitud POST a /admin/login_action con datos de inicio de sesión
	const response = http.post(url, JSON.stringify(payload), { headers });

	// Verifica que el código de estado sea 200 y que el mensaje sea "Login successful"
	check(response, {
		"status is 200": (r) => r.status === 200,
		"login successful": (r) => JSON.parse(r.body).message === "Login successful",
	});

	// Puedes agregar más validaciones según tus necesidades

	// Agrega un tiempo de espera opcional entre las solicitudes
	sleep(1); // en segundos
};

export function handleSummary(data) {
	return {
		"summary.html": htmlReport(data),
		stdout: textSummary(data, { indent: " ", enableColors: true }),
	};
}
