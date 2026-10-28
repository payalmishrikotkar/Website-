# Dr. Magdum Children's Clinic — Official Website

A modern, responsive, professional pediatric healthcare website built for **Dr. Magdum Children's Clinic**, Sangli.

---

## 🏥 Clinic & Doctor Details

- **Clinic Name:** Dr. Magdum Children's Clinic
- **Doctor:** Dr. Sudhir Magdum
- **Qualification:** MBBS, DCH (Mumbai)
- **Specialization:** Children's Specialist (Pediatrician)
- **OPD Timings:** Monday to Saturday: 11:00 AM – 5:00 PM
- **Address:** Civil Hospital Chowk, Ram Mandir Road, Sangli - 416416, Maharashtra, India
- **Appointment / Visiting Model:** Walk-in consultations & Direct Phone inquiries (Online booking system intentionally removed per request).

---

## 🛠️ Technology Stack

- **Frontend:** React.js (Vite)
- **Styling:** Tailwind CSS (Custom healthcare palette: Soft medical blue, mint green, warm yellow, dark navy)
- **Icons:** Lucide React
- **Routing:** React Router v6
- **Backend:** Node.js & Express.js (REST API, CORS, Rate Limiting, MongoDB Atlas support with Safe In-Memory Demo fallback)

---

## 📂 Project Structure

```text
Children Hospital/
├── frontend/
│   ├── public/
│   │   ├── favicon.svg
│   │   └── images/
│   │       └── hospital/       <-- Drop actual hospital photographs here!
│   ├── src/
│   │   ├── config/
│   │   │   ├── hospitalInfo.js   <-- Central configuration for clinic info, doctor, address, timings
│   │   │   └── hospitalImages.js <-- Central photograph registry with fallback labels
│   │   ├── data/
│   │   │   ├── servicesData.js   <-- Clinical services & pediatric specialties
│   │   │   ├── doctorsData.js    <-- Dr. Sudhir Magdum profile & OPD schedule
│   │   │   └── faqData.js        <-- Parent guidance checklist & FAQs
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── ImageWithFallback.jsx <-- Graceful photo fallback (never breaks)
│   │   │   │   ├── LightboxModal.jsx     <-- Fullscreen photo preview
│   │   │   │   ├── DoctorCard.jsx        <-- Doctor profile card with direct call
│   │   │   │   └── ServiceCard.jsx       <-- Specialty card with features
│   │   │   └── layout/
│   │   │       ├── Header.jsx            <-- Responsive navigation & timings bar
│   │   │       └── Footer.jsx            <-- Emergency strip, address & links
│   │   ├── pages/
│   │   │   ├── Home.jsx           <-- Full homepage (Hero, Quick Info, About, Services, Doctor, Facilities, FAQs, Gallery)
│   │   │   ├── AboutUs.jsx        <-- Pediatric philosophy & standards
│   │   │   ├── Services.jsx       <-- Detailed specialties with category filtering
│   │   │   ├── Doctors.jsx        <-- Doctor profile directory
│   │   │   ├── Facilities.jsx     <-- Infrastructure showcase with Lightbox
│   │   │   ├── Gallery.jsx        <-- Categorized photo gallery with Lightbox
│   │   │   ├── ContactUs.jsx      <-- Sangli address, phone channels, Google Maps embed & inquiry form
│   │   │   └── PrivacyPolicy.jsx  <-- Healthcare data privacy policy
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── models/
│   │   └── ContactMessage.js
│   ├── routes/
│   │   └── contactRoutes.js
│   ├── server.js
│   ├── .env.example
│   ├── .env
│   └── package.json
├── package.json                  <-- Root helper scripts
└── README.md
```

---

## 🚀 Quick Start Guide

### 1. Run the Frontend (Vite)

```powershell
cd "c:\Users\PAYAL\Desktop\Children Hospital\frontend"
npm install
npm run dev
```
Open **`http://localhost:5173/`** in your browser.

### 2. Run the Backend (Express, Optional for Contact Form Inquiries)

```powershell
cd "c:\Users\PAYAL\Desktop\Children Hospital\backend"
npm install
npm start
```
Runs on **`http://localhost:5000/`**.

---

## 📸 Integrating Real Hospital Photographs

1. Place your actual photographs into:
   ```text
   frontend/public/images/hospital/
   ```
2. Recommended file names matching `src/config/hospitalImages.js`:
   - `hero-hospital.jpg` (Clinic front entrance / reception)
   - `about-hospital.jpg` (Dr. Sudhir Magdum consulting chamber)
   - `dr-sudhir-magdum.jpg` (Doctor portrait)
   - `reception-waiting.jpg` (Waiting lounge)
   - `consultation-room.jpg` (Examination desk)
   - `vaccination-section.jpg` (Vaccine storage)
   - `play-area.jpg` (Children play corner)
3. If an image is not yet uploaded, the site displays a **branded placeholder card** indicating the exact photograph slot without breaking the layout.

---

## 📝 Updating Clinic Details

To update the phone number, email, or timings at any time, edit **`frontend/src/config/hospitalInfo.js`**. All changes automatically propagate across the entire website.
