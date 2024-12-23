
import { nodes_list, edges_list } from './objects.js';


// Create an array of nodes
var nodes = new vis.DataSet(nodes_list);

// Create an array of edges
var edges = new vis.DataSet([]);

// Function to add edges to the dataset
function addEdges(edgesList) {
  edgesList.forEach(node => {
    if (node.linked_nodes) { 
      node.linked_nodes.forEach(linkedNode => {
        edges.add({ from: node.Node, to: linkedNode });
      });
    }
  });
}

function draw(formData) {
        if (network !== null) {
          network.destroy();
          network = null;
        }
  
// Add edges to the dataset
addEdges(edges_list);

// Create the network
var container = document.getElementById('mynetwork');
var data = {
  nodes: nodes,
  edges: edges
};


var options = {
    width: '100%', // Set width to 100% of the container
    height: '100%', // Set height to 100% of the container

    nodes: {
      shape: 'circle',
      color: {
        border: '#000',
        background: '#fff', 
        highlight: {
          border: '#000',
          background: '#ccc' 
        },
        hover: {
          border: '#000',
          background: '#ddd' 
        }
      },
      font: {
        color: '#000'
      }
    },
    edges: {
      color: '#000',
      arrows: {
           to: {
             enabled: true, // Enable arrows
             scaleFactor: 1 // Adjust arrow size
           }
         }
    },
    physics: {
      enabled: false // Disable physics for static layout
    },
  
  layout: {
    hierarchical: {
      direction: 'UD', // 'LR' for left-to-right, 'UD' for up-to-down
      sortMethod: formData.get("layout-method"),
      shakeTowards: formData.get("shake-towards")
      
    },
    improvedLayout: true, // Use Kamada-Kawai for initial layout
    randomSeed: 123 // For consistent results
    
  }
  
};
var network = new vis.Network(container, data, options);
        network.cluster({
          joinCondition(nodeOptions) {
            return !!formData.get(`cluster-node-${nodeOptions.id}`);
          },
        });

