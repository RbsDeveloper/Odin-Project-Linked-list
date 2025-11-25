# Odin-Project-Linked-list

This project implements a **singly linked list** in JavaScript as part of The Odin Project curriculum. The goal is to understand how node-based data structures work under the hood by building all list operations manually (without using arrays for storage or traversal).

---

## 🧱 Structure

### **Node**
Represents a single list element.
- `value` — stored data  
- `next` — pointer to the next node (default: `null`)

### **LinkedList**
Manages the list and provides utility methods.

---

## 🚀 Features

### Core Methods
- **append(value)** — add a node to the end  
- **prepend(value)** — add a node to the start  
- **size()** — return the number of nodes  
- **head()** — return the first node  
- **tail()** — return the last node  
- **at(index)** — return the node at the given index  
- **pop()** — remove and return the last node  
- **contains(value)** — check if value exists  
- **find(value)** — return index of value or `null`  
- **toString()** — return a string like:  
  `( value ) -> ( value ) -> ... -> null`

### Extra Credit
- **insertAt(value, index)** — insert at a specific position  
- **removeAt(index)** — remove node at given position  
