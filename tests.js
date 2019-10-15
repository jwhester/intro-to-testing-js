// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });
});

describe('isFive', function() {
    it("should be a defined function", function () {
        expect(typeof isFive).toBe("function");
    });
    it("should return a boolean when called", function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it("should return a true when 5 is passed", function () {
        expect(isFive(5)).toBe(true);
    });
    it("should return a true when '5' is passed", function () {
        expect(isFive("5")).toBe(true);
    });
});
describe("isEven", function (){
    it("should be a defined function", function () {
        expect(typeof isEven).toBe("function");
    });
    it("should return a boolean when called", function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it("should return a true when 2 is passed", function () {
        expect(isEven(2)).toBe(true);
    });
    it("should return a true when -4 is passed", function () {
        expect(isEven(-4)).toBe(true);
    });
    it("should return a false when 3 is passed", function () {
        expect(isEven(3)).toBe(false);
    });
    it("should return a false when 'banana is passed", function () {
        expect(isEven("banana")).toBe(false);
    });
    it("should return a false when infinity is passed", function () {
        expect(isEven(Infinity)).toBe(false);
    });
});

describe("isVowel", function () {
    it("should be a defined function", function () {
        expect(typeof isVowel).toBe("function");
    });
    it("should return a boolean when called", function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it("should return a true when 'a' is passed", function () {
        expect(isVowel("a")).toBe(true);
    });
    it("should return a true when 'A' is passed", function () {
        expect(isVowel("A")).toBe(true);
    });
    it("should return a false when 'y' is passed", function () {
        expect(isVowel("y")).toBe(false);
    });
    it("should return a false when '4' is passed", function () {
        expect(isVowel(4)).toBe(false);
    });
    it("should return a false when true is passed", function () {
        expect(isVowel(true)).toBe(false);
    });
    it("should return a false when false is passed", function () {
        expect(isVowel(false)).toBe(false);
    });
    it("should return a false when 'banana' is passed", function () {
        expect(isVowel("banana")).toBe(false);
    });
    it("should return a false when '' is passed", function () {
        expect(isVowel("")).toBe(false);
    });
});

describe("add", function () {
    it("should be a defined function", function () {
        expect(typeof add).toBe("function");
    });
    it("should return a number when called", function () {
        expect(typeof add()).toBe("number");
    });
    it("should return 5 when 2 and 3 is passed", function () {
        expect(add(2,3)).toBe(5);
    });
    it("should return -12 when -3 and -9 is passed", function () {
        expect(add(-3,-9)).toBe(-12);
    });
    it("should return 11 when '5' and 6 is passed", function () {
        expect(add("5",6)).toBe(11);
    });
    it("should return 6 when '-4' and '10' is passed", function () {
        expect(add("-4","10")).toBe(6);
    });
    it("should return NaN when 'banana' and 'split' is passed", function () {
        expect(add("banana","split")).toBeNaN();
    });
    it("should return NaN when 2 and 'apples' is passed", function () {
        expect(add(2,"apples")).toBeNaN();
    });
    it("should return NaN when ''is passed", function () {
        expect(add("")).toBeNaN();
    });
});

