🏢 Tower Layout Viewer App
📌 Overview
A clean and interactive real estate UI built with React.js and Tailwind CSS. Navigate from towers ➡️ floors ➡️ apartments ➡️ layout details in just a few clicks.

Built as a front-end prototype with dummy data, this app mimics a modern apartment listing experience.

✨ Features
🔹 Tower Overview Page
 View 3 towers (A, B, C) as clickable cards.

🔹 Floor View
 After selecting a tower, browse through 10–15 floors.

🔹 Apartment Layouts
 Each floor shows 3–4 layouts with:

🖼 Thumbnail placeholder

📐 Area (e.g., 120 sqm)

🛏 Unit type and room count (dummy)

🔹 Detailed View
 Clicking on a layout shows:

Full-size layout image (placeholder)

All metadata in a clear layout

🔹 Smooth Navigation with react-router-dom
🔹 Loading Spinners using react-spinners
🔹 Modern Icons via lucide-react

🧰 Tech Stack & Libraries
Tool	Description
⚛️ React.js	Frontend framework
🎨 Tailwind CSS	Styling with utility-first classes
🔁 React Router DOM	Page and route transitions
🔄 React Spinners	Loading animations
🧩 Lucide React	Icon library
📊 JavaScript	Used to structure dummy data in Data.js


🧪 Data
All data is static and stored in a file called Data.js.
It includes sample towers, floors, apartments, and layout metadata to simulate dynamic content.

⚙️ Getting Started
Clone the repo and run it locally:

bash
Copy
Edit
git clone https://github.com/EbukaNweje/Mini-Real-Estate-Floor-Selector.git
cd tower-layout-viewer
npm install
npm run dev

Live Link : https://mini-real-estate-floor-selector-xi.vercel.app/

🚀 Future Ideas
🔌 Connect to a real API or CMS

🔐 Add booking/authentication flow

📱 Make fully mobile-responsive

🗺 Add interactive floorplans or 3D tower views

📝 License
MIT – Free to use and adapt.