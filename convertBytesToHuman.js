/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  
  if (typeof(bytes) != 'number')
    return false;
  
  if (bytes < 0)
    return false;

  let order = 1;
  for (order; order <= 40; order++) {
    if (bytes <= (2 ** order)) {
      //order -= 1;
      break
    }
  }
  
  let converted_value = 0;

  if (order < 10) {
    return bytes + ' B';
  }

  if (order >= 10 && order <= 20) {
    converted_value = (bytes/(2 ** 10)).toFixed(2); 
    return parseFloat(converted_value) + ' KB';
  }

  if (order > 20 && order <= 30) {
    converted_value = (bytes/(2 ** 20)).toFixed(2);
    return parseFloat(converted_value) + ' MB';
  }

  if (order > 30) {
    converted_value = (bytes/(2 ** 30)).toFixed(2);
    return parseFloat(converted_value) + ' GB';
  }
  return 0;
}
