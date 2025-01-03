
import { nodes_list, positionsList } from './objects.js';


// Process nodes and edges
var elements = [];

// Add all nodes from nodes_list
var nodeSet = new Set();
nodes_list.forEach(node => {
  nodeSet.add(node.id);
  elements.push({
    data: { id: node.id, label: node.label }
  });
});

// Add any missing nodes from linked_nodes
nodes_list.forEach(node => {
  node.linked_nodes.forEach(linkedNode => {
    if (!nodeSet.has(linkedNode)) {
      nodeSet.add(linkedNode);
      elements.push({
        data: { id: linkedNode, label: linkedNode }
      });
    }
  });
});

// Add edges
nodes_list.forEach(node => {
  node.linked_nodes.forEach(linkedNode => {
    elements.push({
      data: { source: node.id, target: linkedNode }
    });
  });
});


// Initialize Cytoscape
var cy = cytoscape({
  container: document.getElementById('mynetwork'), // Container to render in
  elements: elements,
style: [
  {
    selector: 'node',
    style: {
      'border-color': '#f0f0f0',
      'border-width': 2,
      'label': 'data(label)',
      'color': '#f0f0f0',
      'background-opacity': 0,
      'background-color': '#000000',
      'shape': 'ellipse', // This makes the node a circle
      'text-valign': 'center',
      'text-halign': 'center',
      'font-size': '10px', // Adjust the font size
      'width': '60px',          // Width of the node (circle's diameter)
      'height': '60px',         // Height of the node (circle's diameter)
      'padding': '10px', // Add some padding around the text
      'text-wrap': 'wrap', // Allow text to wrap inside the node
      'text-max-width': '55px' // Set a maximum width for wrapped text
    }
  },
    {
      selector: 'node:selected',
      style: {
        'color': '#ffffff',
        'font-weight': 'bold', // Make the font bold
        'background-color': '#2a2a2a',
        'border-width': 6, // Wider border when selected
        'border-color': '#ffffff' // Optional: Change border color
      }
    },
  
  {
    selector: 'edge',
    style: {
      'curve-style': 'bezier', // Use bezier style for curves
      'control-point-distance': 0, // Initial curve distance
      'width': 2,
      'line-color': '#f0f0f0',
      'target-arrow-color': '#f0f0f0',
      'target-arrow-shape': 'triangle',
      'z-index': 1,

    }
  },
{
      selector: 'edge:selected',
      style: {
        'width': 4, // Wider edge line when selected
        'line-color': '#ffffff', // Optional: Change edge color
        'arrow-scale': 3,
        'target-arrow-color': '#ffffff' // Optional: Change arrow color
      }
    },
    // Highlighted connected node style
    {
      selector: '.highlighted-connected-node',
      style: {
        'color': '#ffffff',
        'font-weight': 'bold', // Make the font bold
        'background-color': '#2a2a2a',
        'border-width': 6, // Wider border when selected
        'border-color': '#ffffff' // Optional: Change border color
      }
    }
  
],
  layout: {
    name: 'dagre', // 'cose' is a force-directed layout
    rankDir: 'TB', // Top-to-bottom direction
   ranker: 'network-simplex', // Alternative options: 'tight-tree', 'longest-path'
  boxSelectionEnabled: true
    }
});


// Set the position for each node
positionsList.forEach(item => {
  const node = cy.getElementById(item.id); // Get the node by ID
    node.position(item.position); // Set the node's position
});

// Log all node positions when any node is moved
cy.on('free', 'node', function () {
  const nodePositions = cy.nodes().map(node => ({
    id: node.id(),
    position: node.position()
  }));
  console.log('Node positions after drop:', nodePositions);
});

//

  




// Highlight connected elements on node select
cy.on('select', 'node', (event) => {
  const node = event.target;

  // Highlight the selected node
  node.addClass('highlighted-node');

  // Highlight connected edges
  const connectedEdges = node.connectedEdges();
  connectedEdges.forEach(edge => edge.addClass('highlighted-edge'));

  // Highlight connected nodes
  const connectedNodes = connectedEdges.connectedNodes().filter(n => n.id() !== node.id());
  connectedNodes.forEach(connectedNode => connectedNode.addClass('highlighted-connected-node'));
});

// Remove highlight on deselect
cy.on('unselect', 'node', (event) => {
  const node = event.target;

  // Remove highlight from the selected node
  node.removeClass('highlighted-node');

  // Remove highlight from connected edges
  const connectedEdges = node.connectedEdges();
  connectedEdges.forEach(edge => edge.removeClass('highlighted-edge'));

  // Remove highlight from connected nodes
  const connectedNodes = connectedEdges.connectedNodes().filter(n => n.id() !== node.id());
  connectedNodes.forEach(connectedNode => connectedNode.removeClass('highlighted-connected-node'));
});


cy.on('select', 'edge', (event) => {
  const node = event.target;

  // Highlight the selected node
  node.addClass('highlighted-node');

  // Highlight connected edges
  const connectedEdges = node.connectedEdges();
  connectedEdges.forEach(edge => edge.addClass('highlighted-edge'));

  // Highlight connected nodes
  const connectedNodes = connectedEdges.connectedNodes().filter(n => n.id() !== node.id());
  connectedNodes.forEach(connectedNode => connectedNode.addClass('highlighted-connected-node'));
});

// Remove highlight on deselect
cy.on('unselect', 'edge', (event) => {
  const node = event.target;

  // Remove highlight from the selected node
  node.removeClass('highlighted-node');

  // Remove highlight from connected edges
  const connectedEdges = node.connectedEdges();
  connectedEdges.forEach(edge => edge.removeClass('highlighted-edge'));

  // Remove highlight from connected nodes
  const connectedNodes = connectedEdges.connectedNodes().filter(n => n.id() !== node.id());
  connectedNodes.forEach(connectedNode => connectedNode.removeClass('highlighted-connected-node'));
});
