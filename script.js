document.addEventListener("DOMContentLoaded", function () {

    const generatePromptBtn = document.getElementById("generatePrompt");
    const generateBatchBtn = document.getElementById("generateBatch");
    const output = document.getElementById("output");

    const subjects = [
        "abandoned hospital",
        "haunted forest",
        "cursed village",
        "dark ritual room",
        "ancient cemetery"
    ];

    const styles = [
        "cinematic horror",
        "dark fantasy",
        "analog horror",
        "found footage",
        "photorealistic nightmare"
    ];

    const lighting = [
        "moonlight",
        "flickering candlelight",
        "red emergency light",
        "dim flashlight",
        "foggy night lighting"
    ];

    function randomItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function generatePrompt() {
        const prompt =
            "Horror scene of " +
            randomItem(subjects) +
            ", " +
            randomItem(styles) +
            ", " +
            randomItem(lighting) +
            ", ultra detailed, cinematic, terrifying atmosphere";

        output.value = prompt;
    }

    function generateBatch() {

        let results = [];

        for (let i = 0; i < 10; i++) {

            const prompt =
                "Horror scene of " +
                randomItem(subjects) +
                ", " +
                randomItem(styles) +
                ", " +
                randomItem(lighting) +
                ", ultra detailed, cinematic, terrifying atmosphere";

            results.push(prompt);
        }

        output.value = results.join("\n\n");
    }

    generatePromptBtn.addEventListener("click", generatePrompt);
    generateBatchBtn.addEventListener("click", generateBatch);

});
