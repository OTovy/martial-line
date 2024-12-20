
import graphviz

def create_graphviz_chart(nodes_dict, graph_engine):
  """
  Creates a Graphviz chart from a dictionary of nodes and their linked nodes.

  Args:
    node_dict: A list of dictionaries, where each dictionary 
               represents a node and its linked nodes.
               Example: 
               [
                 {'Node': 'A', 'linked_nodes': ['B', 'C']}, 
                 {'Node': 'B', 'linked_nodes': ['D']}, 
                 {'Node': 'C', 'linked_nodes': []}, 
                 {'Node': 'D', 'linked_nodes': []}
               ]

  Returns:
    A Graphviz graph object.
  """

  graph = graphviz.Digraph(node_attr={'shape': 'circle'})
  # graph.attr(rankdir='TB')
  if graph_engine:
    graph.engine = graph_engine
  
  for node_data in nodes_dict:
    node_name = node_data['Node']
    graph.node(node_name)

    for linked_node in node_data['linked_nodes']:
      graph.edge(node_name, linked_node)

  
  return graph
