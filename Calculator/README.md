# 🧮 Basic Calculator Web App

A simple, elegant, and responsive **Basic Calculator** built using **HTML, CSS, and JavaScript**.  
It replicates the look and behavior of a modern mobile calculator and includes a **calculation history** feature with results rounded to **3 decimal places**.
<img width="1902" height="905" alt="image" src="https://github.com/user-attachments/assets/ef1c4c60-7af7-408e-9472-b540be11291f" /> <br>
      <img width="808" height="827" alt="image" src="https://github.com/user-attachments/assets/b91334e7-d7f4-4694-91bc-6d0885261777" />

---

## 🎯 Objective

To build a functional and visually clean calculator web app that:
- Performs basic arithmetic operations.
- Displays and stores calculation history.
- Shows results up to **3 decimal places**.
- Mimics the look and feel of a real smartphone calculator.

---

## 🛠️ Tech Stack

- **HTML** – Structure and layout of the calculator  
- **CSS** – Design, colors, and grid-based layout  
- **JavaScript** – Core logic, arithmetic operations, and history functionality  

---
## ⚔️ Challenges Faced

### 1. Implementing the ± Button
It was difficult to toggle the sign of only the last number without breaking expressions.  
This issue was solved using **regular expressions** to detect and modify the final numeric part of the input dynamically.

---

### 2. Dealing with Floating Point Precision
JavaScript often returns long decimal values such as `0.3333333`.  
To handle this, I used the **`toFixed(3)`** method to round results to three decimal places, and then converted the string result back to a number using **`parseFloat()`**.

---

### 3. Persistent History Storage
Initially, the history panel was cleared every time the page reloaded.  
I resolved this by implementing **`localStorage`**, which allows the calculator to permanently store and retrieve previous calculations.

---

### 4. Design Adjustments
Achieving a layout that resembled a real calculator required careful **fine-tuning of CSS grid properties**, padding, and button radius.  
This ensured a clean, balanced interface that works well across different screen sizes.


