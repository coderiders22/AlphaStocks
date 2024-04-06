document.addEventListener("DOMContentLoaded", function() {
    const recommendationsDiv = document.getElementById("recommendations");

    // Function to generate recommendations
    function generateRecommendations() {
        // Clear previous recommendations
        recommendationsDiv.innerHTML = "";

        // Here you can generate recommendations based on user input
        // For demonstration, let's generate some dummy recommendations
        const dummyRecommendations = [
            { symbol: "AAPL", price: 150.25, recommendation: "Buy" },
            { symbol: "GOOGL", price: 2800.50, recommendation: "Hold" },
            { symbol: "MSFT", price: 300.75, recommendation: "Sell" },
            { symbol: "AMZN", price: 3400.20, recommendation: "Buy" },
            { symbol: "TSLA", price: 900.80, recommendation: "Hold" }
        ];

        dummyRecommendations.forEach(recommendation => {
            const div = document.createElement("div");
            div.innerHTML = `<strong>${recommendation.symbol}</strong> - Price: ${recommendation.price.toFixed(2)} - Recommendation: ${recommendation.recommendation}`;
            recommendationsDiv.appendChild(div);
        });
    }

    // Event listener for button click to generate recommendations
    document.getElementById("submitBtn").addEventListener("click", function() {
        generateRecommendations();
    });
});
