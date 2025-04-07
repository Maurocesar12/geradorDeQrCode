//criando a lista de senhas
async function permittedCharacters() {
    let permitted = [];
  
    if (process.env.UPPERCASE_LETTERS === "true")
      permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  
    if (process.env.LOWERCASE_LETTERS === "true")
      permitted.push(..."abcdefghijklmnopqrstuvwxyz");
  
    if (process.env.NUMBERS === "true") permitted.push(..."0123456789");
  
    if (process.env.SPECIAL_CHARACTERS === "true")
      permitted.push(..."!@#$%^&*()-_");
  
    return permitted;
  }

  
async function handle() {
    let caracters = [];
    let password = "";
    const passwordLength = process.env.PASSWORD_LENGTH;
    caracters = await permittedCharacters();

    for(let i = 0; i < passwordLength; i++){
        const index = Math.floor(Math.random() * caracters.length);
        password += caracters[index];
    }

    return password;
}

export default handle;