<h1 align="center">🛒 ExpressMart</h1>

<p align="center">
  A lightweight e-commerce web application built with <strong>Node.js, Express, MongoDB, and EJS</strong>.
  <br/>
  Featuring product browsing, a dynamic shopping cart with quantity management, discounts, and a professional checkout experience.
</p>

<hr/>

<h2>✨ Features</h2>
<ul>
  <li>User authentication (login/logout)</li>
  <li>Browse products with images, prices, and discounts</li>
  <li>Add products to cart with quantity management (+/-)</li>
  <li>Smart cart calculation (Total MRP, Discounts, Net Price, Platform Fee)</li>
  <li>Flash-based notifications with professional popups (SweetAlert2)</li>
  <li>Checkout-ready UI</li>
</ul>

<h2>🛠 Tech Stack</h2>
<ul>
  <li><strong>Backend:</strong> Node.js, Express.js</li>
  <li><strong>Frontend:</strong> EJS Templates, TailwindCSS</li>
  <li><strong>Database:</strong> MongoDB (with Mongoose ORM)</li>
  <li><strong>Authentication:</strong> JWT & Middleware</li>
  <li><strong>Notifications:</strong> Connect-flash + SweetAlert2</li>
</ul>

<h2>🚀 Getting Started</h2>

<h3>1️⃣ Clone the Repository</h3>
<pre>
git clone https://github.com/your-username/expressmart.git
cd expressmart
</pre>

<h3>2️⃣ Install Dependencies</h3>
<pre>
npm install
</pre>

<h3>3️⃣ Setup Environment Variables</h3>
Create a <code>.env</code> file in the root directory:

<pre>
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
</pre>

<h3>4️⃣ Run the App</h3>
<pre>
npm start
</pre>

Your app will be live at <a href="http://localhost:3000">http://localhost:3000</a> 🎉

<h2>📜 License</h2>
<p>This project is licensed under the <a href="https://opensource.org/licenses/MIT">MIT License</a>.</p>
