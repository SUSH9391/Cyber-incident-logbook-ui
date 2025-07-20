# Cyber Incident Logbook UI

This is a responsive frontend-only React application to simulate a cyber incident logging system. It allows users to input incidents, view them in different formats (table or card), and filter by status. All interactions are simulated using local React state.

## 🚀 Features
- Add incidents with type, description, date, and status
- View incidents in card or table layout
- Filter by incident status
- Fully responsive for mobile, tablet, and desktop

## 🛠️ Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/SUSH9391/cyber-incident-logbook-ui.git
   cd cyber-incident-logbook-ui 
   ```
2. **Install dependencies**
    ```bash
      npm install
    ```
3. **Run the app**
     npm run dev
4. Open your browser at http://localhost:5173/

5. **Don't forget to import tailwind css version 4.0.2**
  ```bash
     npm install tailwindcss @tailwindcss/vite
  ```
6. **Configure Vite plugin**
    ```javascript
    // vite.config.js
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';
    import tailwindcss from 'tailwindcss';''

7. **Add Tailwind to index.css file**
    ```css
     /* src/index.css */
     @import "tailwindcss";