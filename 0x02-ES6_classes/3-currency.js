export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /* getter and sertter for code */
  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = value;
  }

  /* getter and setter for name */
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = value;
  }

  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
