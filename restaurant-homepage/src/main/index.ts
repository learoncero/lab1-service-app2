const formNode = document.getElementById("form") as HTMLFormElement;
const placeOrderButton = document.getElementById("placeOrderButton") as HTMLButtonElement;

placeOrderButton.addEventListener('click', () => {
    const data = new FormData(formNode);
    const userID = data.get('userID') as string;
    const orderText = data.get('orderText') as string;
});