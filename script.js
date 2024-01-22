// Get the message and signature textboxes
const messageTextbox = document.getElementById('message');
const signatureTextbox = document.getElementById('signature');
const resultTextbox = document.getElementById('resultUser');

// Function to handle button click
function verifySignature() {
    // Get the user that signed the message
    const user = getUserFromSignature(messageTextbox.value, signatureTextbox.value);

    // Write the user to the result textbox
    resultTextbox.value = user;
}

// Function to get the user from the signature
function getUserFromSignature(message, signature) {
    console.log(message);
    console.log(signature);
    window.web3 = new Web3(new Web3.providers.HttpProvider("https://ethereum.publicnode.com"));
    const address_of_signer = web3.eth.accounts.recover(message, signature);
    console.log(address_of_signer);
    // For now, let's assume the user is hardcoded as "John Doe"
    return address_of_signer;
}