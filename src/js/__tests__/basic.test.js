import sortUnitsFromHealth from "../app.js"

test("sort units by health", () => {
  const units = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ]
  const sortUnits = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ]
  expect(sortUnitsFromHealth(units)).toEqual(sortUnits);
})