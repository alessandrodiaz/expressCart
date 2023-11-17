const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const { getConfig, getPaymentConfig, updateConfig, updateConfigLocal } = require('../lib/config'); 

describe('getConfig', () => {

  test('should return config object', () => {
    const config = getConfig();
    expect(config).toBeDefined();
  });

});

describe('getPaymentConfig', () => {

  test('should return payment config for a specific gateway', () => {
    const gateway = 'someGateway';
    const paymentConfig = getPaymentConfig(gateway);
    expect(paymentConfig).toBeDefined();
  });

});

describe('updateConfig', () => {

  test('should update config fields', () => {
    const fields = {
      emailSecure: 'on',
      emailPort: '587',
      productsPerRow: '3',
      productsPerPage: '10',
      customCss_input: 'body { color: red; }',
      footerHtml_input: '<p>Footer</p>',
      googleAnalytics_input: 'UA-12345678-1'
    };

    const result = updateConfig(fields);
    expect(result).toBeTruthy();
  });

  test('should handle missing local settings file', () => {
    fs.unlinkSync(path.join(__dirname, '../config', 'settings-local.json'));

    const fields = {
      emailSecure: 'on'
    };

    const result = updateConfig(fields);
    expect(result).toBeTruthy();

  });

  test('should update config fields false', () => {
    const fields = {
      emailSecure: 'off',
      emailPort: '587',
      productsPerRow: '3',
      productsPerPage: '10',
      customCss_input: 'body { color: red; }',
      footerHtml_input: '<p>Footer</p>',
      googleAnalytics_input: 'UA-12345678-1'
    };

    const result = updateConfig(fields);
    expect(result).toBeFalsy();
  });

});


describe('updateConfigLocal', () => {

  test('should update local config fields', () => {
    const field = {
      someField: 'someValue' 
    };

    updateConfigLocal(field);

    // Verifica que los cambios se hayan aplicado correctamente
    const localSettingsFile = path.join(__dirname, '../config', 'settings-local.json');
    const localSettings = JSON.parse(fs.readFileSync(localSettingsFile));
    expect(localSettings.someField).toBe('someValue');

  });


});

describe('getConfig', () => {
    // Supongamos que settings.json y settings-local.json existen con valores válidos para las pruebas

    test('should return config object', () => {
      const config = getConfig();
      expect(config).toBeDefined();
      expect(config).toHaveProperty('theme');
    });

    test('should handle missing local config file', () => {
      fs.unlinkSync(path.join(__dirname, '../config', 'settings-local.json'));
      const config = getConfig();
      expect(config).toBeDefined();
      expect(config).toHaveProperty('theme');
    });

  });

  describe('getPaymentConfig', () => {

    test('should return payment config for a specific gateway', () => {
      const gateway = 'someGateway';
      const paymentConfig = getPaymentConfig(gateway);
      expect(paymentConfig).toBeDefined();
    });

    test('should return empty config for unknown gateway', () => {
      const gateway = 'unknownGateway';
      const paymentConfig = getPaymentConfig(gateway);
      expect(paymentConfig).toEqual({});
    });

  });



  describe('updateConfigLocal', () => {

    test('should update local config fields', () => {
      const field = {
        someField: 'someValue'
      };

      updateConfigLocal(field);

      // Verifica que los cambios se hayan aplicado correctamente
      const localSettingsFile = path.join(
        __dirname,
        '../config',
        'settings-local.json'
      );
      const localSettings = JSON.parse(fs.readFileSync(localSettingsFile));
      expect(localSettings.someField).toBe('someValue');
      
    });
 });
