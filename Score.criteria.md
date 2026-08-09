# 📝 เกณฑ์การให้คะแนน Health Tracker API

## 🎯 คะแนนรวม 180 คะแนน (Bonus 60 คะแนน)

### 1. การออกแบบและจัดการโครงสร้างโปรเจกต์ (20 คะแนน)

- [ ] จัดโครงสร้างโฟลเดอร์ถูกต้อง (5 คะแนน)
  ```
  📁 src/
    📁 config/
    📁 controllers/
    📁 middlewares/
    📁 routes/
    📁 utils/
    📄 app.js
  ```
- [ ] แยก routes และ controllers (5 คะแนน)
- [ ] มี Error Handling (5 คะแนน)
- [ ] ใช้ Environment Variables (5 คะแนน)

### 2. การออกแบบและจัดการ Database (20 คะแนน)

- [ ] สร้าง Models ครบถ้วน (10 คะแนน)
  - Doctor Model
  - User Model
  - HealthRecord Model
  - DoctorNote Model
- [ ] กำหนด Relations ถูกต้อง (5 คะแนน)
- [ ] ใช้ Data Types เหมาะสม (5 คะแนน)

### 3. การพัฒนา API Endpoints (190 คะแนน)

#### Authentication (40 คะแนน)

**1. POST /auth/register/doctor (10 คะแนน)**

- **7 คะแนน** - API ทำงานได้และ Response ถูกต้อง
- **3 คะแนน** - Validate Input (username, password, specialization)
- **0 คะแนน** - Authentication (ไม่ต้องใช้ token เพราะเป็น public endpoint)

**2. POST /auth/register/user (10 คะแนน)**

- **7 คะแนน** - API ทำงานได้และ Response ถูกต้อง
- **3 คะแนน** - Validate Input (username, password)
- **0 คะแนน** - Authentication (ไม่ต้องใช้ token เพราะเป็น public endpoint)

**3. POST /auth/login/doctor (10 คะแนน)**

- **7 คะแนน** - API ทำงานได้และ Response ถูกต้อง (ต้องส่งคืน token)
- **3 คะแนน** - Validate Input (username, password)
- **0 คะแนน** - Authentication (ไม่ต้องใช้ token เพราะเป็น public endpoint)

**4. POST /auth/login/user (10 คะแนน)**

- **7 คะแนน** - API ทำงานได้และ Response ถูกต้อง (ต้องส่งคืน token)
- **3 คะแนน** - Validate Input (username, password)
- **0 คะแนน** - Authentication (ไม่ต้องใช้ token เพราะเป็น public endpoint)

#### User Management & Doctor Management (40 คะแนน)

**5. GET /users/me (10 คะแนน)**

- **8 คะแนน** - API ทำงานได้และ Response ถูกต้อง
- **0 คะแนน** - Validate Input (ไม่ต้องรับ data ใดๆ)
- **2 คะแนน** - Authentication (ต้องตรวจสอบ token)

**6. PUT /users/me (10 คะแนน)**

- **5 คะแนน** - API ทำงานได้และ Response ถูกต้อง
- **3 คะแนน** - Validate Input (username, password)
- **2 คะแนน** - Authentication (ต้องตรวจสอบ token)

**7. GET /doctors/me (10 คะแนน)**

- **8 คะแนน** - API ทำงานได้และ Response ถูกต้อง
- **0 คะแนน** - Validate Input (ไม่ต้องรับ data ใดๆ)
- **2 คะแนน** - Authentication (ต้องตรวจสอบ doctor token)

**8. PUT /doctors/me (10 คะแนน)**

- **5 คะแนน** - API ทำงานได้และ Response ถูกต้อง
- **3 คะแนน** - Validate Input (username, password, specialization)
- **2 คะแนน** - Authentication (ต้องตรวจสอบ doctor token)

#### Health Records (50 คะแนน)

**9. POST /health-records (10 คะแนน)**

- **5 คะแนน** - API ทำงานได้และ Response ถูกต้อง
- **3 คะแนน** - Validate Input (type, value)
- **2 คะแนน** - Authentication (ต้องตรวจสอบ token)

**10. GET /health-records (10 คะแนน)**

- **8 คะแนน** - API ทำงานได้และ Response ถูกต้อง (รวมถึง query parameters)
- **0 คะแนน** - Validate Input (query params เป็น optional)
- **2 คะแนน** - Authentication (ต้องตรวจสอบ token)

**11. GET /health-records/:id (10 คะแนน)**

- **5 คะแนน** - API ทำงานได้และ Response ถูกต้อง
- **3 คะแนน** - Validate Input (ตรวจสอบ id parameter และเจ้าของ record)
- **2 คะแนน** - Authentication (ต้องตรวจสอบ token)

**12. PUT /health-records/:id (10 คะแนน)**

- **5 คะแนน** - API ทำงานได้และ Response ถูกต้อง
- **3 คะแนน** - Validate Input (type, value และตรวจสอบเจ้าของ)
- **2 คะแนน** - Authentication (ต้องตรวจสอบ token)

**13. DELETE /health-records/:id (10 คะแนน)**

- **5 คะแนน** - API ทำงานได้และ Response ถูกต้อง
- **3 คะแนน** - Validate Input (ตรวจสอบ id parameter และเจ้าของ record)
- **2 คะแนน** - Authentication (ต้องตรวจสอบ token)

#### Doctor Notes (60 คะแนน) Bonus

**14. POST /doctor-notes (10 คะแนน)**

- **5 คะแนน** - API ทำงานได้และ Response ถูกต้อง
- **3 คะแนน** - Validate Input (userId, note)
- **2 คะแนน** - Authentication (ต้องตรวจสอบ doctor token)

**15. GET /doctor-notes/my-notes (10 คะแนน)**

- **8 คะแนน** - API ทำงานได้และ Response ถูกต้อง
- **0 คะแนน** - Validate Input (ไม่ต้องรับ data)
- **2 คะแนน** - Authentication (ต้องตรวจสอบ doctor token)

**16. GET /doctor-notes/user/:userId (10 คะแนน)**

- **5 คะแนน** - API ทำงานได้และ Response ถูกต้อง
- **3 คะแนน** - Validate Input (ตรวจสอบ userId parameter)
- **2 คะแนน** - Authentication (ต้องตรวจสอบ doctor token)

**17. GET /doctor-notes/received (10 คะแนน)**

- **8 คะแนน** - API ทำงานได้และ Response ถูกต้อง
- **0 คะแนน** - Validate Input (ไม่ต้องรับ data)
- **2 คะแนน** - Authentication (ต้องตรวจสอบ user token)

**18. PUT /doctor-notes/:id (10 คะแนน)**

- **5 คะแนน** - API ทำงานได้และ Response ถูกต้อง
- **3 คะแนน** - Validate Input (note และตรวจสอบเจ้าของ)
- **2 คะแนน** - Authentication (ต้องตรวจสอบ doctor token)

**19. DELETE /doctor-notes/:id (10 คะแนน)**

- **5 คะแนน** - API ทำงานได้และ Response ถูกต้อง
- **3 คะแนน** - Validate Input (ตรวจสอบ id parameter และเจ้าของ)
- **2 คะแนน** - Authentication (ต้องตรวจสอบ doctor token)

### 4. Authentication & Security (10 คะแนน)

- [ ] เข้ารหัสรหัสผ่านด้วย bcryptjs (3 คะแนน)
- [ ] สร้างและตรวจสอบ JWT token (4 คะแนน)
- [ ] ตรวจสอบสิทธิ์ผู้ใช้ (3 คะแนน)
