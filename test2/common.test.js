const {
    allowedMimeType,
    fileSizeLimit,
    sanitize,
    cleanHtml,
    mongoSanitize,
    safeParseInt,
    checkboxBool,
    convertBool,
    addSitemapProducts,
    clearSessionValue,
    checkDirectorySync,
    getThemes,
    getImages,
    getEmailTemplate,
    sendEmail,
    getId,
    newId,
    hooker,
    getCountryList,
    cleanAmount,
    clearCustomer,
    getCountryNameToCode
  } = require('../lib/common'); // Reemplaza 'tuArchivo' con el nombre real de tu archivo

  describe('Utilities', () => {
    describe('sanitize', () => {
      test('should remove HTML tags', () => {
        const input = '<p>This is <b>HTML</b> content</p>';
        const result = sanitize(input);
        expect(result).toBe('This is HTML content');
      });
    });

    describe('cleanHtml', () => {
      test('should sanitize HTML content', () => {
        const input = '<script>alert("XSS");</script><p>Safe content</p>';
        const result = cleanHtml(input);
        expect(result).toBe('<p>Safe content</p>');
      });
    });

    describe('mongoSanitize', () => {
      test('should remove $ prefixed properties from objects', () => {
        const input = { $gt: 5, name: 'John' };
        const result = mongoSanitize(input);
        expect(result).toEqual({ name: 'John' });
      });
    });

    describe('getThemes', () => {
      test('should return an array of theme names', () => {
        const themes = getThemes();
        expect(Array.isArray(themes)).toBe(true);
      });
    });

    describe('getId', () => {
      test('should return a valid ObjectId', () => {
        const id = '5fc0deed5ab3692c4e2b0657';
        const result = getId(id);
        expect(result).toBeInstanceOf(ObjectId);
      });
    });

    describe('newId', () => {
      test('should return a new ObjectId', () => {
        const result = newId();
        expect(result).toBeInstanceOf(ObjectId);
      });
    });


  });

  describe('Hooker', () => {
    test('should make a successful hook request', async () => {

      const mockAxios = jest.spyOn(require('axios'), 'post');
      mockAxios.mockResolvedValue({ status: 200 });

      const order = { /* your order data */ };
      const result = await hooker(order);

      expect(result).toBeUndefined(); 
      expect(mockAxios).toHaveBeenCalledWith();

      mockAxios.mockRestore();
    });
  });

  describe('getCountryList', () => {
    test('should return an array of country names', () => {
      const countries = getCountryList();
      expect(Array.isArray(countries)).toBe(true);
    });
  });

  describe('cleanAmount', () => {
    test('should convert amount to an integer', () => {
      const amount = '1,234.56';
      const result = cleanAmount(amount);
      expect(result).toBe(123456);
    });

    test('should handle undefined input', () => {
      const result = cleanAmount(undefined);
      expect(result).toBeUndefined();
    });
  });

  describe('clearCustomer', () => {
    test('should clear customer-related session values', () => {
      const req = { session: { customerCompany: 'ABC', customerEmail: 'test@example.com' } };
      clearCustomer(req);

      expect(req.session.customerCompany).toBeNull();
      expect(req.session.customerEmail).toBeNull();
    });
  });

  describe('getCountryNameToCode', () => {
    test('should return country code based on country name', () => {
      const countryName = 'United States';
      const result = getCountryNameToCode(countryName);
      expect(result).toEqual({ code: 'US' });
    });

    test('should handle undefined input', () => {
      const result = getCountryNameToCode(undefined);
      expect(result).toBeUndefined();
    });
  });

  describe('safeParseInt', () => {
    test('should parse string to integer', () => {
      const str = '123';
      const result = safeParseInt(str);
      expect(result).toBe(123);
    });

    test('should handle undefined input', () => {
      const result = safeParseInt(undefined);
      expect(result).toBeUndefined();
    });

    test('should handle non-numeric input', () => {
      const str = 'abc';
      const result = safeParseInt(str);
      expect(result).toBeNaN();
    });
  });

  describe('checkboxBool', () => {
    test('should return true for "on"', () => {
      const result = checkboxBool('on');
      expect(result).toBe(true);
    });
  
    test('should return true for "true"', () => {
      const result = checkboxBool('true');
      expect(result).toBe(true);
    });
  
    test('should return false for other values', () => {
      const result = checkboxBool('off');
      expect(result).toBe(false);
    });
  
    test('should return false for undefined input', () => {
      const result = checkboxBool(undefined);
      expect(result).toBe(false);
    });
  });
  
  describe('convertBool', () => {
    test('should convert "true" to true', () => {
      const result = convertBool('true');
      expect(result).toBe(true);
    });
  
    test('should convert other values to false', () => {
      const result = convertBool('false');
      expect(result).toBe(false);
    });
  
    test('should handle undefined input', () => {
      const result = convertBool(undefined);
      expect(result).toBe(false);
    });
  });
  
  // Mocks for addSitemapProducts function
  const mockDb = {
    products: {
      find: jest.fn().mockReturnThis(),
      toArray: jest.fn()
    }
  };
  const mockReq = { app: { db: mockDb } };
  const mockRes = {};
  const mockCb = jest.fn();
  
  describe('addSitemapProducts', () => {
    test('should call callback with posts array', async () => {
      const mockProducts = [{ _id: 1, productPermalink: 'product-1' }];
      mockDb.products.toArray.mockResolvedValueOnce(mockProducts);
  
      await addSitemapProducts(mockReq, mockRes, mockCb);
  
      expect(mockCb).toHaveBeenCalledWith(null, expect.any(Array));
      const posts = mockCb.mock.calls[0][1];
      expect(posts.length).toBe(1);
    
    });
  });
  
  describe('clearSessionValue', () => {
    test('should clear and return session value', () => {
      const mockSession = { someVar: 'value' };
      const result = clearSessionValue(mockSession, 'someVar');
  
      expect(result).toBe('value');
      expect(mockSession.someVar).toBeNull();
    });
  
    test('should handle undefined session', () => {
      const result = clearSessionValue(undefined, 'someVar');
      expect(result).toBeUndefined();
    });
  });
  
  describe('checkDirectorySync', () => {
    test('should create directory if not exists', () => {
      const mockFs = require('fs');
      const mockMkdirp = require('mkdirp');
      mockFs.statSync.mockImplementationOnce(() => {
        throw new Error(); // Simulate directory not exists
      });
  
      checkDirectorySync('someDirectoryPath');
  
      expect(mockMkdirp.sync).toHaveBeenCalledWith('someDirectoryPath');
 
    });
  
    test('should not create directory if exists', () => {
      const mockFs = require('fs');
      const mockMkdirp = require('mkdirp');
      mockFs.statSync.mockImplementationOnce(() => ({})); // Simulate directory exists
  
      checkDirectorySync('someDirectoryPath');
  
      expect(mockMkdirp.sync).not.toHaveBeenCalled();

    });
  });