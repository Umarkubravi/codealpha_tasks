const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

const sourceLanguage = document.getElementById("sourceLanguage");
const targetLanguage = document.getElementById("targetLanguage");

const translateBtn = document.getElementById("translateBtn");
const copyBtn = document.getElementById("copyBtn");

// Translate Button
translateBtn.addEventListener("click", async () => {

    const text = inputText.value.trim();

    if (text === "") {
        alert("Please enter text to translate.");
        return;
    }

    outputText.value = "Translating...";

    try {

        const url =
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLanguage.value}|${targetLanguage.value}`;

        const response = await fetch(url);

        const data = await response.json();

        outputText.value = data.responseData.translatedText;

    }

    catch (error) {

        outputText.value = "Translation failed. Please try again.";

    }

});

// Copy Button
copyBtn.addEventListener("click", async () => {

    if (outputText.value === "") {
        alert("Nothing to copy!");
        return;
    }

    await navigator.clipboard.writeText(outputText.value);

    alert("Translation copied successfully!");

});