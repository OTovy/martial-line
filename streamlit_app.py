import streamlit as st

from utils import create_graphviz_chart
from graph_config import node_dict


def main():
    st.title("Martial Line")
    flowchart = create_graphviz_chart(node_dict)
    st.graphviz_chart(flowchart)


if __name__=='__main__':
    main()
