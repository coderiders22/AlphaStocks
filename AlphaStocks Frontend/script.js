document.addEventListener("DOMContentLoaded", function() {
    const recommendationsDiv = document.getElementById("recommendations");

    // Function to generate recommendations
    function generateRecommendations() {
        // Clear previous recommendations
        recommendationsDiv.innerHTML = "";

        // Here you can generate recommendations based on user input
        // For demonstration, let's generate some dummy recommendations
        const dummyRecommendations = [
            { symbol: "AXISBANK", price: 150.25, recommendation: "Buy 30 SHARES" },
            { symbol: "WIPRO", price: 2800.50, recommendation: "Hold" },
            { symbol: "ZEEMD", price: 300.75, recommendation: "Sell 15 SHARES" },
            { symbol: "TECHM", price: 3400.20, recommendation: "Buy 40 SHARES" },
            { symbol: "FORTISHEALTHCARE", price: 900.80, recommendation: "Hold" }
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
document.addEventListener("DOMContentLoaded", function() {
    const newsDiv = document.getElementById("news");

    // Function to add news manually
    function addNews(title, content, isPositive) {
        const div = document.createElement("div");
        div.className = "news-item";
        div.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
        if (isPositive) {
            div.classList.add("positive");
        } else {
            div.classList.add("negative");
        }
        newsDiv.appendChild(div);
    }

    // Add news manually (Example)
    addNews("Tech Titan Meta Shatters Earnings Records", "Global Recession Fears Intensify as Key Economic Indicators Signal Downturn", true);
    addNews("Federal Reserve Announces Interest Rate Cut to Stimulate Slowing Economy", "Retail Giant Walmart Disappoints with Weak Sales Figures, Stock Price Tumbles", false);
});
