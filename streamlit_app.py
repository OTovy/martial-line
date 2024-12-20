import streamlit as st
import graphviz

from utils import create_graphviz_chart
from graph_config import node_dict


def main():
    st.title("Martial Line")
    
    engines = graphviz.get_engine_list()
    st.selectbox(label='Layout Engine', options=engines)
    
    flowchart = create_graphviz_chart(node_dict)
    st.graphviz_chart(flowchart)


if __name__=='__main__':
    main()
