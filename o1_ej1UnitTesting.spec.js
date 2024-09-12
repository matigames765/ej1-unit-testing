/*
1. Validar código PIN
Los bancos utilizan un código PIN numérico como parte de la autenticación de los usuarios. Dicho PIN debe cumplir 
con los siguientes requerimientos:

PIN de exáctamente 4 o 6 dígitos.
No puede contener letras.
La función debe retornar Verdadero si es el PIN es válido, caso contrario Falso.
*/
function validatePinCode(pin) {
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  } else if (/[a-zA-Z]/.test(pin)) {
    return false;
  } else {
    return true;
  }
}

test("pin with 5 digits and without letters", () => {
  const pin = "56784";
  expect(validatePinCode(pin)).not.toBeTruthy();
  expect(validatePinCode(pin)).toBeFalsy();
});

test("pin with 3 digits with no letters", () => {
  const pin2 = "355";
  expect(validatePinCode(pin2)).not.toBeTruthy();
  expect(validatePinCode(pin2)).toBeFalsy();
});

test("pin with 4 digits with letters", () => {
  const pin3 = "4a5b";
  expect(validatePinCode(pin3)).not.toBeTruthy();
  expect(validatePinCode(pin3)).toBeFalsy();
});

test("pin with 6 digits and without letters", () => {
  const pin4 = "123456";
  expect(validatePinCode(pin4)).toBeTruthy();
  expect(validatePinCode(pin4)).not.toBeFalsy();
});

test("pin with 4 digits and without letters", () => {
  const pin5 = "1234";
  expect(validatePinCode(pin5)).toBeTruthy();
  expect(validatePinCode(pin5)).not.toBeFalsy();
});
