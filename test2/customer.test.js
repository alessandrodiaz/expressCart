const request = require('supertest');
const { runBefore, g } = require('../helper');

beforeAll(async () => {
    await runBefore();
});

it('[Success] Create a customer', async () => {
    const customer = {
        email: 'sarah.jones@test.com',
        company: 'Acme Co',
        firstName: 'Sarah',
        lastName: 'Jones',
        address1: '1 Sydney Street',
        address2: '',
        country: 'Australia',
        state: 'NSW',
        postcode: '2000',
        phone: '0400000000',
        password: 'password'
    };

    const res = await request(g.app)
        .post('/customer/create')
        .send(customer);

    expect(res.statusCode).toBe(200);
    expect(res.body.email).toEqual(customer.email);
    expect(res.body.firstName).toEqual(customer.firstName);
});

it('[Fail] Try create a duplicate customer', async () => {
    const customer = {
        email: 'sarah.jones@test.com',
        company: 'Acme Co',
        firstName: 'Sarah',
        lastName: 'Jones',
        address1: '1 Sydney Street',
        address2: '',
        country: 'Australia',
        state: 'NSW',
        postcode: '2000',
        phone: '0400000000',
        password: 'password'
    };

    const res = await request(g.app)
        .post('/customer/create')
        .send(customer);

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toEqual('A customer already exists with that email address');
});

it('[Fail] Create with invalid email address', async () => {
    const customer = {
        email: 'sarah.jones@test',
        company: 'Acme Co',
        firstName: 'Sarah',
        lastName: 'Jones',
        address1: '1 Sydney Street',
        address2: '',
        country: 'Australia',
        state: 'NSW',
        postcode: '2000',
        phone: '0400000000',
        password: 'password'
    };

    const res = await request(g.app)
        .post('/customer/create')
        .send(customer);

    expect(res.statusCode).toBe(400);
    expect(res.body[0].message).toEqual('should match format "emailAddress"');
});

it('[Success] Update existing customer from dashboard', async () => {
    const customer = {
        customerId: g.customers[1]._id,
        company: 'Acme Co',
        email: 'sarah.jones@test.com',
        firstName: 'Sarah',
        lastName: 'Jones',
        address1: '1 Sydney Street',
        address2: '',
        country: 'Australia',
        state: 'NSW',
        postcode: '2000',
        phone: '0444444444'
    };

    const res = await request(g.app)
        .post('/admin/customer/update')
        .send(customer)
        .set('apiKey', g.users[0].apiKey);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toEqual('Customer updated');
    expect(res.body.customer.company).toEqual(customer.company);
    expect(res.body.customer.email).toEqual(customer.email);
    expect(res.body.customer.firstName).toEqual(customer.firstName);
    // ... (continuar con las demás expectativas)
});