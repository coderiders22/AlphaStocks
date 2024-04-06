import streamlit as st
from transformers import AutoModelForSequenceClassification, AutoTokenizer

# Load the sentiment analysis model and tokenizer
@st.cache(allow_output_mutation=True)
def load_sentiment_model():
    model_name = "mrm8488/distilroberta-finetuned-financial-news-sentiment-analysis"
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = AutoModelForSequenceClassification.from_pretrained(model_name)
    return model, tokenizer

# Analyze sentiment for input text
def analyze_sentiment(text, model, tokenizer):
    inputs = tokenizer(text, return_tensors="pt", truncation=True, padding=True)
    outputs = model(**inputs)
    logits = outputs.logits
    predicted_class = logits.argmax().item()
    return "Positive" if predicted_class == 1 else "Negative"

def main():
    st.title("Financial News Sentiment Analysis")
    st.write("Enter a financial news headline below to analyze its sentiment.")

    # Get input text from user
    headline = st.text_input("Enter a news headline:")

    if st.button("Analyze"):
        if headline.strip() == "":
            st.error("Please enter a news headline.")
        else:
            model, tokenizer = load_sentiment_model()
            sentiment = analyze_sentiment(headline, model, tokenizer)
            st.write(f"The sentiment of the headline '{headline}' is {sentiment}.")

if __name__ == "__main__":
    main()
