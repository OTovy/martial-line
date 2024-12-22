// Create an array of nodes
var nodes = new vis.DataSet([
  { id: "Shaolin", label: "Shaolin" },
  { id: "Southern Shaolin", label: "Southern Shaolin" },
  { id: "Five Elders", label: "Five Elders" },
  { id: "Miu Hin", label: "Miu Hin" },
  { id: "Fung Dou Dak", label: "Fung Dou Dak" },
  { id: "Ng Mui", label: "Ng Mui" },
  { id: "Ji Sin", label: "Ji Sin" },
  { id: "Bak Mei", label: "Bak Mei" },
  { id: "Bak Mei Pai", label: "Bak Mei Pai" },
  { id: "Five Elder Families", label: "Five Elder Families" },
  { id: "Hakka", label: "Hakka" },
  { id: "Southern Praying Mantis", label: "Southern Praying Mantis" },
  { id: "Southern Dragon", label: "Southern Dragon" },
  { id: "Phoenix Eye Fist (Chuka Shaolin)", label: "Phoenix Eye Fist (Chuka Shaolin)" },
  { id: "Lau Saam Ngan", label: "Lau Saam Ngan" },
  { id: "Mok Ching Giu", label: "Mok Ching Giu" },
  { id: "Hung Hei-gun", label: "Hung Hei-gun" },
  { id: "Choy Gau Yi", label: "Choy Gau Yi" },
  { id: "Lei Yau Saan", label: "Lei Yau Saan" },
  { id: "Lau Ga", label: "Lau Ga" },
  { id: "Mok Ga", label: "Mok Ga" },
  { id: "Hung Ga", label: "Hung Ga" },
  { id: "Choy Ga", label: "Choy Ga" },
  { id: "Lei Ga", label: "Lei Ga" },
  { id: "Fut Ga Buddha Family", label: "Fut Ga Buddha Family" },
  { id: "Chan Heung", label: "Chan Heung" },
  { id: "Choy Lei Fut", label: "Choy Lei Fut" },
  { id: "Yim Wing Chun", label: "Yim Wing Chun" },
  { id: "Leung Bok-chao", label: "Leung Bok-chao" },
  { id: "Leung Jan", label: "Leung Jan" },
  { id: "Leung Yee-tai", label: "Leung Yee-tai" },
  { id: "Leung Lan-kwai", label: "Leung Lan-kwai" },
  { id: "Wong Wah-bo", label: "Wong Wah-bo" },
  { id: "Chan Wan-shun", label: "Chan Wan-shun" },
  { id: "Ip Man", label: "Ip Man" },
  { id: "Bruce Lee", label: "Bruce Lee" },
  { id: "Wu Wei", label: "Wu Wei" },
  { id: "Jeet Kune Do", label: "Jeet Kune Do" },
  { id: "Joseph Cowles", label: "Joseph Cowles" },
  { id: "Luo Han Quan (Monk Fist)", label: "Luo Han Quan (Monk Fist)" },
  { id: "Incense Shop Boxing", label: "Incense Shop Boxing" },
  { id: "Fang Zhengdong", label: "Fang Zhengdong" }
]);

// Create an array of edges
var edges = new vis.DataSet([]);

// Function to add edges to the dataset
function addEdges(nodeDict) {
  nodeDict.forEach(node => {
    if (node.linked_nodes) { 
      node.linked_nodes.forEach(linkedNode => {
        edges.add({ from: node.Node, to: linkedNode });
      });
    }
  });
}

// Define the node data 
var node_dict = [
  {'Node': 'Shaolin', 'linked_nodes': ['Southern Shaolin', 'Five Elders']},
  {'Node': 'Five Elders', 'linked_nodes': ['Miu Hin', 'Fung Dou Dak', 'Ng Mui', 'Ji Sin', 'Bak Mei']},
  {'Node': 'Bak Mei', 'linked_nodes': ['Bak Mei Pai']},
  {'Node': 'Ji Sin', 'linked_nodes': ['Five Elder Families']},
  {'Node': 'Hakka', 'linked_nodes': ['Bak Mei Pai', 'Southern Praying Mantis', 'Southern Dragon', 'Phoenix Eye Fist (Chuka Shaolin)']},
  {'Node': 'Five Elder Families', 'linked_nodes': ['Lau Saam Ngan', 'Mok Ching Giu', 'Hung Hei-gun', 'Choy Gau Yi', 'Lei Yau Saan']},
  {'Node': 'Lau Saam Ngan', 'linked_nodes': ['Lau Ga']},
  {'Node': 'Mok Ching Giu', 'linked_nodes': ['Mok Ga']},
  {'Node': 'Hung Hei-gun', 'linked_nodes': ['Hung Ga']},
  {'Node': 'Choy Gau Yi', 'linked_nodes': ['Choy Ga']},
  {'Node': 'Lei Yau Saan', 'linked_nodes': ['Lei Ga']},
  {'Node': 'Hung Ga', 'linked_nodes': ['Fut Ga Buddha Family']},
  {'Node': 'Choy Ga', 'linked_nodes': ['Fut Ga Buddha Family', 'Chan Heung']},
  {'Node': 'Lei Ga', 'linked_nodes': ['Chan Heung']},
  {'Node': 'Fut Ga Buddha Family', 'linked_nodes': ['Chan Heung']},
  {'Node': 'Chan Heung', 'linked_nodes': ['Choy Lei Fut']},
  {'Node': 'Miu Hin', 'linked_nodes': ['Yim Wing Chun']},
  {'Node': 'Yim Wing Chun', 'linked_nodes': ['Leung Bok-chao', 'Leung Jan', 'Leung Yee-tai']},
  {'Node': 'Leung Bok-chao', 'linked_nodes': ['Leung Lan-kwai', 'Wong Wah-bo']},
  {'Node': 'Leung Jan', 'linked_nodes': ['Chan Wan-shun', 'Ip Man']},
  {'Node': 'Ip Man', 'linked_nodes': ['Bruce Lee', 'Wu Wei']},
  {'Node': 'Bruce Lee', 'linked_nodes': ['Jeet Kune Do', 'Joseph Cowles']},
  {'Node': 'Southern Shaolin', 'linked_nodes': ['Luo Han Quan (Monk Fist)']},
  {'Node': 'Luo Han Quan (Monk Fist)', 'linked_nodes': ['Incense Shop Boxing', 'Fang Zhengdong']},
  {'Node': 'Fang Zhengdong', 'linked_nodes': ['Fang Qiniang']},
  {'Node': 'Fang Qiniang', 'linked_nodes': ['Fujian White Crane']},
  {'Node': 'Lama Pai (Lions Roar)', 'linked_nodes': ['Adatuo']},
  {'Node': 'Adatuo', 'linked_nodes': ['Wong Yan-lam', 'Wong Lam-hoi']},
  {'Node': 'Wong Yan-lam', 'linked_nodes': ['Hop Ga']},
  {'Node': 'Wong Lam-hoi', 'linked_nodes': ['Pak Hok Pai (Tibetan White Crane)']},
  {'Node': 'Ryū Ryū Ko', 'linked_nodes': ['Fujian White Crane', 'Higaonna Kanryō']},
  {'Node': 'Higaonna Kanryō', 'linked_nodes': ['Miyagi Chōjun', 'Kyoda Jūhatsu', 'Nakaima Kenri', 'Nakaima Kenchu', 'Nakaima Keko']},
  {'Node': 'Miyagi Chōjun', 'linked_nodes': ['Goju Ryu']},
  {'Node': 'Goju Ryu', 'linked_nodes': ['Gogen Yamaguchi']},
  {'Node': 'Kyoda Jūhatsu', 'linked_nodes': ['Toon Ryu']},
  {'Node': 'Nakaima Keko', 'linked_nodes': ['Ryuei Ryu']},
  {'Node': 'Wāi Xinxian', 'linked_nodes': ['Uechi Kanbun']},
  {'Node': 'Uechi Kanbun', 'linked_nodes': ['Pangal-noon (Uechi Ryu)']}
];


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
