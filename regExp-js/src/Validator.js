export default class Validator {
  validateUsername(username) {
    const regex = /^[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z0-9]$/;

    if (!regex.test(username)) {
      return false;
    }

    const digitsRegex = /\d{4}/;
    if (digitsRegex.test(username)) {
      return false;
    }

    return true;
  }
}
