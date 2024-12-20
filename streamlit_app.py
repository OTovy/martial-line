import streamlit as st
import graphviz

from utils import create_graphviz_chart
from graph_config import node_dict


def main():
    st.title("Martial Line")
    
    engines = ['dot', 'neato', 'fdp', 'sfdp', 'twopi', 'circo', 'osage', 'patchwork', 'dot', 'neato', 'fdp', 'sfdp', 'twopi', 'circo', 'osage', 'patchwork']
    engine = st.selectbox(label='Layout Engine', options=engines)
    
    flowchart = create_graphviz_chart(node_dict, engine)
    
    st.graphviz_chart(flowchart, use_container_width=True)


if __name__=='__main__':
    main()
