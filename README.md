# Dice Roller

Your goal is to edit `script.js` so that the dice roller works.

You will need to create **two functions**:

---

## 1) `toggleDieHold`

- Accept a parameter called `id`.  
- Access the corresponding `<img>` element for the die and **toggle the attribute** `data-active`.  
- This attribute starts as `true`.  
- Either **add or remove** the `"held"` class from the `classList`:  
  - The class should be `"held"` if `data-active` is `false`.  
  - The class should **not** be `"held"` when `data-active` is `true`.

---

## 2) `rollDice`

- Generate a **random number** for each die that has `data-active="true"`.  
- Update the `src` and `alt` attributes of the `<img>` accordingly.
