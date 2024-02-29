// const { encrypt, decrypt } = require('../src/index');
const { encrypt, decrypt } = require('../package/src/index');

// Test encryption and decryption
const key = 'mySecretKey123'; // Replace with your secret key
const plaintext = 'Hello, world!';
const encrypted = encrypt(plaintext, key);
const decrypted = decrypt(encrypted, key);

console.log(encrypted)
console.log(decrypted)

if (plaintext !== decrypted) {
    throw new Error('Encryption/decryption failed!');
}
console.log('Encryption/decryption successful!');
