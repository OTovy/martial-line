
def create_graphviz_chart(nodes, edges):
  """
  Creates a Graphviz chart with nodes and edges.

  Args:
    nodes: A list of node names.
    edges: A list of tuples, where each tuple represents an edge 
           between two nodes (e.g., ('A', 'B')).

  Returns:
    A Graphviz graph object.
  """

  graph = graphviz.Digraph()

  # Add nodes to the graph
  for node in nodes:
    graph.node(node)

  # Add edges to the graph
  for edge in edges:
    graph.edge(*edge)

  return graph
