# Batch 18 Student Directory

## Requirements
- Node.js 18+ recommended
- npm

## Start

Open this folder in VS Code terminal and run:

```bash
npm install
npm run dev
```

Open the URL shown by Vite, normally:

http://localhost:5173

## Add students

Edit:

src/data/students.js

Example:

```js
{
  id: 7,
  name: "Student Name",
  role: "Frontend Developer",
  image: "/students/student7.jpg",
  linkedin: "https://linkedin.com/in/username",
  github: "https://github.com/username",
  portfolio: "https://portfolio.com",
  whatsapp: "https://wa.me/923001234567"
}
```

Put the image here:

public/students/student7.jpg

## If npm is not recognized

Install Node.js LTS first, then restart VS Code.

## If an old node_modules folder exists

Delete:
- node_modules
- package-lock.json

Then run:

```bash
npm install
npm run dev
```

## Features
- Separate reusable StudentCard component
- Live student search
- Responsive cards
- LinkedIn / GitHub / Portfolio / Business WhatsApp links
- Manual student data
- Default profile image
