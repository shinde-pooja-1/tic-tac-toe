🎮 Dynamic Tic Tac Toe

An interactive browser-based Tic Tac Toe variant built using HTML, CSS, and JavaScript.

This version introduces a dynamic gameplay rule:
Each player can have a maximum of three active symbols on the board.
When a fourth move is made, the oldest symbol is automatically removed, creating a continuously evolving board state.

🔗 Live Demo:
https://shinde-pooja-1.github.io/tic-tac-toe/


🚀 Features

✅ Maximum 3 active symbols per player
✅ Automatic removal of oldest move (FIFO logic)
✅ Real-time win detection
✅ Dynamic board state updates
✅ Restart game functionality
✅ Clean and responsive UI
✅ Built with pure JavaScript (No frameworks)

🛠 Tech Stack

✅ HTML – Structure
✅ CSS – Styling & Layout
✅ JavaScript – Game Logic & State Management

🎯 How to Play

1. The game is played between two players:
     Player X
     Player O

2. Players take turns clicking on empty cells in the 3×3 grid.
3. Each player can have a maximum of three symbols on the board at any time.

4. When a player places a fourth move:
     The oldest symbol of that player is automatically removed.
     The new symbol is placed in the selected position.

5. A player wins by aligning three of their symbols in a row:
      Horizontally
      Vertically
      Diagonally

6. Since older moves are replaced dynamically, the board state continuously changes until a player wins.
7. Click the Restart button to reset the game and start again.


🧠 Game Logic Overview

✅ Each player's moves are stored in an array.
✅ When the array length exceeds 3:
     The first element (oldest move) is removed.
✅ After every move:
     The game checks for winning combinations.
✅ The UI updates instantly to reflect the new state.
✅ This demonstrates understanding of:
       DOM manipulation
       Event handling
       Conditional logic
       Array operations
       Queue (FIFO) behavior
       State synchronization

📂 Project Structure
tic-tac-toe/
│── index.html
│── style.css
│── script.js


💡 Future Improvements

✅ Add Player vs Computer (AI mode)
✅ Add Score tracking system
✅ Add Sound effects
✅ Add Animations & transitions
✅ Add Game history tracking

📸 Preview

(Add a screenshot of your game here)

👩‍💻 Author

Pooja Shinde
Frontend Developer | JavaScript Enthusiast

GitHub: https://github.com/shinde-pooja-1
