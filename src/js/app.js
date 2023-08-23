export default function sortUnitsFromHealth(unit) {
    return unit.sort((a, b) => a.health > b.health ? -1 : 1);
}