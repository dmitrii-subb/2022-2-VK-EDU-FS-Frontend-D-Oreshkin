/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)) === false;
  expect(convertBytesToHuman('string')) === false;
  expect(convertBytesToHuman(123.123)) === false;
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(123)) === "123 B";
  expect(convertBytesToHuman(1024)) === "1 KB";
  expect(convertBytesToHuman(123123)).toEqual("120.24 KB");
  expect(convertBytesToHuman(123123123)).toEqual("117.42 MB");
  expect(convertBytesToHuman(123123123123)).toEqual("114.67 GB");
  // ...
});

// другая группа проверок
