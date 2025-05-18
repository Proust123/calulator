🧮 JavaScript Calculator
A simple yet fully functional calculator built with HTML, CSS, and Vanilla JavaScript. This project demonstrates DOM manipulation, dynamic element creation, and basic arithmetic operation handling—all in a single file.

🚀 Features
➕ Basic Operations: Addition, Subtraction, Multiplication, Division
🧹 Clear Functionality: Resets the calculator
🧠 Smart Input Handling:
Prevents multiple consecutive operators
Evaluates expressions correctly using eval()

🖥️ Interface Overview
Display:
Shows user input and calculated result

Buttons:
Number keys (0–9)
Operators: +, -, *, /
C: Clear input
=: Calculate and display result

📂 How It Works
On page load, the calculator interface is generated dynamically inside a container div.
Each button is created with a click event listener attached.

Button behavior:
If a number or operator is clicked, it is appended to the display string.
If = is clicked, the string is evaluated using eval().
If an operator already exists at the end of the string, and a new one is entered, the previous operator is replaced.
C resets the display to 0.

🧰 Tech Stack
HTML – Structure of the calculator
CSS – Styling and layout
JavaScript – Calculator logic and dynamic DOM generation
