const db = {};

  db['A'] = 'А';
  db['a'] = 'а';
  db['B'] = 'Б';
  db['b'] = 'б';
  db['V'] = 'В';
  db['v'] = 'в';
  db['G'] = 'Г';
  db['g'] = 'г';
  db['D'] = 'Д';
  db['d'] = 'д';
  db['E'] = 'Е';
  db['e'] = 'е';
  db['Yo'] = 'Ё';
  db['yo'] = 'ё';
  db['Zh'] = 'Ж';
  db['zh'] = 'ж';
  db['Z'] = 'З';
  db['z'] = 'з';
  db['I'] = 'И';
  db['i'] = 'и';
  db['Y'] = 'Й';
  db['y'] = 'й';
  db['K'] = 'К';
  db['k'] = 'к';
  db['L'] = 'Л';
  db['l'] = 'л';
  db['M'] = 'М';
  db['m'] = 'м';
  db['N'] = 'Н';
  db['n'] = 'н';
  db['O'] = 'О';
  db['o'] = 'о';
  db['P'] = 'П';
  db['p'] = 'п';
  db['R'] = 'Р';
  db['r'] = 'р';
  db['S'] = 'С';
  db['s'] = 'с';
  db['T'] = 'Т';
  db['t'] = 'т';
  db['U'] = 'У';
  db['u'] = 'у';
  db['F'] = 'Ф';
  db['f'] = 'ф';
  db['Kh'] = 'Х';
  db['kh'] = 'х';
  db['Ts'] = 'Ц';
  db['ts'] = 'ц';
  db['Ch'] = 'Ч';
  db['ch'] = 'ч';
  db['Sh'] = 'Ш';
  db['sh'] = 'ш';
  db['Sch'] = 'Щ';
  db['sch'] = 'щ';
  db['Y'] = 'Ы';
  db['y'] = 'ы';
  db['Yu'] = 'Ю';
  db['yu'] = 'ю';
  db['Ya'] = 'Я';
  db['ya'] = 'я';

const transliterate = word =>
  word.split('').map(char =>
    db[char] || char)
    .join('');

export default transliterate;
