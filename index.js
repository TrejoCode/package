/**
 * @author Trejocode
 * @description Simple "Hello World" package for Github Packages
 */

const messages = ["Hola", "Hello", "Jelou", "Ola", "Aló"];

const getMessage = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  return message;
};

module.exports = { getMessage };
