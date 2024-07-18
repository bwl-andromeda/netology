import Validator from "../Validator";

describe("Validator", () => {
  let validator;
  beforeEach(() => {
    validator = new Validator();
  });

  it("Должно быть возвращено значение true для действительного имени пользователя с буквами, цифрами, символами подчеркивания и тире", () => {
    expect(validator.validateUsername("username_123")).toBe(true);
    expect(validator.validateUsername("user-name")).toBe(true);
    expect(validator.validateUsername("user_name")).toBe(true);
    expect(validator.validateUsername("username123")).toBe(true);
  });

  it("Должно возвращать значение false для имени пользователя, начинающегося или заканчивающегося цифрой, символом подчеркивания или тире", () => {
    expect(validator.validateUsername("1username")).toBe(false);
    expect(validator.validateUsername("-username")).toBe(false);
    expect(validator.validateUsername("username-")).toBe(false);
    expect(validator.validateUsername("_username")).toBe(false);
    expect(validator.validateUsername("username_")).toBe(false);
  });

  it("Должно возвращать значение false для имени пользователя, содержащего более трех цифр подряд", () => {
    expect(validator.validateUsername("username1234")).toBe(false);
    expect(validator.validateUsername("user-12345")).toBe(false);
    expect(validator.validateUsername("user_name12345")).toBe(false);
  });

  it("Должно возвращать значение false для имени пользователя с недопустимыми символами", () => {
    expect(validator.validateUsername("user@name")).toBe(false);
    expect(validator.validateUsername("user name")).toBe(false);
    expect(validator.validateUsername("user!name")).toBe(false);
  });

  it("Должно возвращать значение false для пустого имени пользователя", () => {
    expect(validator.validateUsername("")).toBe(false);
  });
});
