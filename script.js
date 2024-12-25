
import { nodes_list } from './objects.js';


var nodes_array = new Array();
var edges_array = new Array();

// Function to add edges to the dataset
function populateNodeLists(nodeList) {
  nodeList.forEach(node => {
    nodes_array.push({ id: node.id, label: node.label });

    if (node.linked_nodes) { 
      node.linked_nodes.forEach(linkedNode => {
        nodes_array.push({ id: linkedNode, label: linkedNode });
        edges_array.push({ from: node.id, to: linkedNode });
      });
    };
  });
}

function removeDuplicates(arr, key) {
  return arr.reduce((unique, obj) => {
    if (!unique.some(item => item[key] === obj[key])) {
      unique.push(obj);
    }
    return unique;
  }, []);
}

populateNodeLists(nodes_list);

var nodes_array = removeDuplicates(nodes_array, "id")
console.log(nodes_array)

var nodes = new vis.DataSet( nodes_array ); 
var edges = new vis.DataSet( edges_array ); 


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

