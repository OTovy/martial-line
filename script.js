// Create an array of nodes
var nodes = new vis.DataSet([
  { id: 'Shaolin', label: 'Shaolin' },
  { id: 'Southern Shaolin', label: 'Southern Shaolin' },
  { id: 'Five Elders', label: 'Five Elders' },
  { id: 'Miu Hin', label: 'Miu Hin' },
  { id: 'Fung Dou Dak', label: 'Fung Dou Dak' },
  { id: 'Ng Mui', label: 'Ng Mui' },
  { id: 'Ji Sin', label: 'Ji Sin' },
  { id: 'Bak Mei', label: 'Bak Mei' },
  { id: 'Bak Mei Pai', label: 'Bak Mei Pai' },
  { id: 'Five Elder Families', label: 'Five Elder Families' },
  { id: 'Hakka', label: 'Hakka' },
  { id: 'Southern Praying Mantis', label: 'Southern Praying Mantis' },
  { id: 'Southern Dragon', label: 'Southern Dragon' },
  { id: 'Phoenix Eye Fist (Chuka Shaolin)', label: 'Phoenix Eye Fist (Chuka Shaolin)' },
  { id: 'Lau Saam Ngan', label: 'Lau Saam Ngan' },
  { id: 'Mok Ching Giu', label: 'Mok Ching Giu' },
  { id: 'Hung Hei-gun', label: 'Hung Hei-gun' },
  { id: 'Choy Gau Yi', label: 'Choy Gau Yi' },
  { id: 'Lei Yau Saan', label: 'Lei Yau Saan' },
  { id: 'Lau Ga', label: 'Lau Ga' },
  { id: 'Mok Ga', label: 'Mok Ga' },
  { id: 'Hung Ga', label: 'Hung Ga' },
  { id: 'Choy Ga', label: 'Choy Ga' },
  { id: 'Lei Ga', label: 'Lei Ga' },
  { id: 'Fut Ga Buddha Family', label: 'Fut Ga Buddha Family' }
]);

// Create an array of edges
var edges = new vis.DataSet([]);

// Function to add edges to the dataset
function addEdges(nodeDict) {
  nodeDict.forEach(node => {
    node.linked_nodes.forEach(linkedNode => {
      edges.add({ from: node.Node, to: linkedNode });
    });
  });
}

// Add edges to the dataset
addEdges(node_dict);

// Create the network
var container = document.getElementById('mynetwork');
var data = {
  nodes: nodes,
  edges: edges
};
var options = {};
var network = new vis.Network(container, data, options);
