import streamlit as st
from graphviz import Digraph

# Create a title for the app
st.title("Martial Line")


def create_simple_flowchart():
    """
    Creates a simple flowchart with two nodes and an edge using Graphviz.

    Returns:
        The Graphviz Digraph object representing the flowchart.
    """

    dot = Digraph(comment='Simple Flowchart')

    # Add nodes
    dot.node('Start', 'Start')
    dot.node('End', 'End')

    # Add edge
    dot.edge('Start', 'End')

    return dot

# Streamlit app
st.title("Simple Flowchart with Graphviz")

# Create the flowchart
flowchart = create_simple_flowchart()

# Display the flowchart in Streamlit
st.graphviz_chart(flowchart)
