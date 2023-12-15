const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  constructor(machine) {
    if (typeof machine === 'boolean') {
      this.machine = machine;
    } else this.machine = true;
  }

  encrypt(mes, key) {
    if (typeof mes === 'undefined' || typeof key === 'undefined') throw Error('Incorrect arguments!');
    mes = mes.toUpperCase();
    key = key.toUpperCase();

    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < mes.length; i++) {
        let char = mes[i];
        if (this.alpha.includes(char)) {
          let charIndex = this.alpha.indexOf(char);
          let keyCharIndex = this.alpha.indexOf(key[keyIndex % key.length]);

          result += this.alpha[(charIndex + keyCharIndex) % this.alpha.length];
          keyIndex++;
        } else {
          result += char;
        }
    }

    if (!this.machine) result = result.split('').reverse().join('');
    return result;
  }
  decrypt(mes, key) {
    if (typeof mes === 'undefined' || typeof key === 'undefined') throw Error('Incorrect arguments!');
    mes = mes.toUpperCase();
    key = key.toUpperCase();

    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < mes.length; i++) {
        let char = mes[i];
        if (this.alpha.includes(char)) {
          let charIndex = this.alpha.indexOf(char);
          let keyCharIndex = this.alpha.indexOf(key[keyIndex % key.length]);

          result += this.alpha[(charIndex - keyCharIndex + this.alpha.length) % this.alpha.length];
          keyIndex++;
        } else {
          result += char;
        }
    }

    if (!this.machine) result = result.split('').reverse().join('');
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
