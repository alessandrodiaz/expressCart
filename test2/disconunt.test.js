// calculateDiscount.test.js
const { calculateDiscount } = require('../lib/modules/discount-voucher');

describe('calculateDiscount', () => {
    test('aplica descuento de cantidad correctamente', () => {
        const discount = {
            type: 'amount',
            value: 10
        };

        const req = {
            session: {
                discountCode: 'DESC10',
                totalCartNetAmount: 100
            }
        };

        calculateDiscount(discount, req);

        expect(req.session.totalCartDiscount).toBe(10);
    });

    test('aplica descuento porcentaje correctamente', () => {
        const discount = {
            type: 'percent',
            value: 20
        };

        const req = {
            session: {
                discountCode: 'PERCENT20',
                totalCartNetAmount: 100
            }
        };

        calculateDiscount(discount, req);

        expect(req.session.totalCartDiscount).toBe(20);
    });

    test('no aplica descuento si no hay código de descuento', () => {
        const discount = {
            type: 'amount',
            value: 10
        };

        const req = {
            session: {
                totalCartNetAmount: 100
            }
        };

        calculateDiscount(discount, req);

        expect(req.session.totalCartDiscount).toBe(0);
    });

    test('0', () => {
        const discount = {
            type: 'amoun',
            value: 10
        };

        const req = {
            session: {
                discountCode: 'PERCENT20',
                totalCartNetAmount: 100
            }
        };

        calculateDiscount(discount, req);

        expect(req.session.totalCartDiscount).toBe(0);
    });

    // Puedes agregar más casos de prueba según sea necesario
});
