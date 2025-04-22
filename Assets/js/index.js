/*
entrainement Saitama
01) Creer tous les types de varialbes et en faire du Pixassso
02) Creer 3 bloc d'instruction, qui renvoie une seed
03) creer des test conditonnels, pour chaque caractere de la seed si elle match, enregistrer.
04) Creer des ID a chaque nombre de la seed
05) faire du compact-code JS

exo :
Creer une fonction qui exporte une texte en chiffrement base32 or

exemple copact code
 */
let a = document.getElementById('btn').innerText;
if (a>=10) let port=0;else let port=6.9;

const message = "Ceci est le message secret !"

function ft_crypto(message) {
    const encryptedmessage = cryptoJS.AES.encrypt(message, "fuck you").toString();
    print("math1", message, encryptedmessage)
    document.getElementById('output').innerHTML = encryptedmessage;
}
