{
    const welcome = () => {
        console.log("Hello World");
    }

    const calculateResult = (currencyValueFrom, currencyTo) => {

        const eurRate = 4.8448;
        const usdRate = 4.4200;
        const gbpRate = 5.7711;

        switch (currencyTo) {
            case "EUR":
                return currencyValueFrom / eurRate;

            case "USD":
                return currencyValueFrom / usdRate;

            case "GBP":
                return currencyValueFrom / gbpRate;
        };
    }

    const updateResultText = (result, currencyTo) => {

        const currencyResultElement = document.querySelector(".js-currency-result");

        currencyResultElement.innerText = `${result.toFixed(2)} ${currencyTo}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyToElement = document.querySelector(".js-currency-to");
        const currencyValueFromElement = document.querySelector(".js-currency-value-from");

        const currencyTo = currencyToElement.value;
        const currencyValueFrom = currencyValueFromElement.value;

        const result = calculateResult(currencyValueFrom, currencyTo);

        updateResultText(result, currencyTo)
    }

    const init = () => {

        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);

        welcome()
    }

    init()
}
