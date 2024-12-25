
import { nodes_list } from './objects.js';


var nodes_array = new Set();
var edges_array = new Set();

// Function to add edges to the dataset
function populateNodeLists(nodeList) {
  nodeList.forEach(node => {
    var nodeObject = { id: node.id, label: node.label };
    if (!nodes_array.has(nodeObject)) {
        nodes_array.add(nodeObject);
    }      
    if (node.linked_nodes) { 
      node.linked_nodes.forEach(linkedNode => {
        var lNodeObject = { id: linkedNode, label: linkedNode };
        if (!nodes_array.has(lNodeObject)) {
            nodes_array.add(lNodeObject);
        }
        edges_array.add({ from: node.id, to: linkedNode });
      });
    }
  });
}
  
// Add edges to the dataset
populateNodeLists(nodes_list);

console.log(nodes_array)

var nodes = new vis.DataSet( Array.from(nodes_array) ); 
var edges = new vis.DataSet( Array.from(edges_array) ); 


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
      size: 50,
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
        color: '#000',
        size: 12,
        align: 'center',
        multi: true    
      }
    },
     edges: {
       color: '#000',
     smooth: {
         type: 'continuous',
         roundness: 0.5 
     },
      arrows: {
           to: {
             enabled: true, // Enable arrows
             scaleFactor: 1 // Adjust arrow size
           }
         }
    },
 physics: {
        enabled: true,
        stabilization: true,
        solver: 'forceAtlas2Based',
        forceAtlas2Based: {
            springLength: 1000
        }
    },  
       layout: {
        hierarchical: {
            direction: 'UD', // Upwards direction
            levelSeparation: 300, // Adjust spacing between levels
            nodeSpacing: 1000, // Adjust spacing between nodes
            treeSpacing: 300 // Adjust spacing between subtrees
        }
    }
  
};
var network = new vis.Network(container, data, options);

