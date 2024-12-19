import streamlit as st

# Create a title for the app
st.title("My First Streamlit App")

# Add a text input for user input
name = st.text_input("Enter your name:")

# Display a greeting based on the input
if name:
    st.write(f"Hello, {name}!")
