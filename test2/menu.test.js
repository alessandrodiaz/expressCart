
const { getMenu, newMenu, deleteMenu, updateMenu, sortMenu, orderMenu } = require('../lib/menu');

describe('getMenu', () => {
    it('should return a menu object', () => {
        // Mock the database object
        const dbMock = {
            menu: {
                findOne: jest.fn(() => Promise.resolve({ items: [] }))
            }
        };

        return getMenu(dbMock).then(menu => {
            expect(menu).toBeDefined();
            expect(menu.items).toBeDefined();
            expect(Array.isArray(menu.items)).toBe(true);
        });
    });
});

describe('newMenu', () => {
    it('should create a new menu item', () => {
        const reqMock = {
            app: {
                db: {
                    menu: {
                        updateOne: jest.fn(() => Promise.resolve())
                    }
                }
            },
            body: {
                navMenu: 'New Menu',
                navLink: '/new'
            }
        };

        return newMenu(reqMock).then(result => {
            expect(result).toBe(true);
        });
    });
});

describe('deleteMenu', () => {
    it('should delete a menu item', () => {
        const reqMock = {
            app: {
                db: {
                    menu: {
                        updateOne: jest.fn(() => Promise.resolve())
                    }
                }
            }
        };

        const menuIndex = 0;

        return deleteMenu(reqMock, menuIndex).then(result => {
            expect(result).toBe(true);
        });
    });
});

