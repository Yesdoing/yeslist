export default class ToDo {
  constructor(todo, startDate, endDate, checked) {
    Object.assign(this, { todo, startDate, endDate, checked });
  }

  get todo() {
    return this._todo;
  }

  set todo(value) {
    this._todo = value;
  }

  get startDate() {
    return this._startDate;
  }

  set startDate(value) {
    this._startDAte = value;
  }

  get endDate() {
    return this._endDate;
  }

  set endDate(value) {
    this._endDate = value;
  }

  get checked() {
    return this._checked;
  }

  set checked(value) {
    this._checked = value;
  }
}
