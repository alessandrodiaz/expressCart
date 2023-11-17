const { calculateShipping } = require('../lib/modules/shipping-basic');

const domesticShippingAmount = 10;
const internationalShippingAmount = 25;

describe('calculateShipping', () => {
  let req;

  beforeEach(() => {
    req = {
      session: {
      }
    };
  });

  it('should apply free shipping for subscriptions', () => {
    req.session.cartSubscription = 'someSubscription';
    req.session.totalCartAmount = 50;
    calculateShipping(50, {}, req);

    expect(req.session.shippingMessage).toBe('FREE shipping');
    expect(req.session.totalCartShipping).toBe(0);
    expect(req.session.totalCartAmount).toBe(50);
  });

  it('should apply free shipping for orders above the free threshold', () => {
    calculateShipping(150, {}, req);
    req.session.totalCartAmount = 150;
    expect(req.session.shippingMessage).toBe('FREE shipping');
    expect(req.session.totalCartShipping).toBe(0);
    expect(req.session.totalCartAmount).toBe(150);
  });

  it('should estimate domestic shipping if country is not set', () => {
    calculateShipping(75, {}, req);

    expect(req.session.shippingMessage).toBe('Estimated shipping');
    expect(req.session.totalCartShipping).toBe(domesticShippingAmount);
    expect(req.session.totalCartAmount).toBe(75 + domesticShippingAmount);
  });

  it('should apply international shipping for non-matching countries', () => {
    req.session.customerCountry = 'Panama';
    calculateShipping(10, {}, req);

    expect(req.session.shippingMessage).toBe('International shipping');
    expect(req.session.totalCartShipping).toBe(internationalShippingAmount);
    expect(req.session.totalCartAmount).toBe(10 + internationalShippingAmount);
  });

  it('should apply domestic shipping for matching countries', () => {
    req.session.customerCountry = 'Australia';
    calculateShipping(50, {}, req);

    expect(req.session.shippingMessage).toBe('Domestic shipping');
    expect(req.session.totalCartShipping).toBe(domesticShippingAmount);
    expect(req.session.totalCartAmount).toBe(50 + domesticShippingAmount);
  });


  it('should apply domestic shipping for matching countries negative', () => {
    req.session.customerCountry = 'Australia';
    calculateShipping(-50, {}, req);

    expect(req.session.shippingMessage).toBe('Domestic shipping');
    expect(req.session.totalCartShipping).toBe(domesticShippingAmount);
    expect(req.session.totalCartAmount).toBe(0);
  });

  it('should apply free shipping for subscriptions negative', () => {
    req.session.cartSubscription = 'someSubscription';
    req.session.totalCartAmount = 0;
    calculateShipping(-50, {}, req);

    expect(req.session.shippingMessage).toBe('FREE shipping');
    expect(req.session.totalCartShipping).toBe(0);
    expect(req.session.totalCartAmount).toBe(0);
  });
});
