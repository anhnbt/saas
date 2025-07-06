# KIẾN TRÚC VÀ THIẾT KẾ HỆ THỐNG - SAAS QUẢN LÝ SALON NAILS

## 1. KIẾN TRÚC HỆ THỐNG (Architecture)

### 1.1 Tổng quan kiến trúc
Hệ thống được thiết kế theo mô hình **3-tier Architecture** với **microservices pattern**:

```
┌─────────────────────────────────────────────────────────────┐
│                    PRESENTATION LAYER                       │
├─────────────────────────────────────────────────────────────┤
│  React Native App  │  Next.js Bảng điều khiển  │  Admin Portal   │
│  (Customer)        │  (Salon Owner)      │  (System Admin) │
└─────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                    API GATEWAY & CÂN BẰNG TẢI             │
├─────────────────────────────────────────────────────────────┤
│  Nginx/HAProxy  │  Rate Limiting  │  Authentication        │
└─────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                    BUSINESS LOGIC LAYER                     │
├─────────────────────────────────────────────────────────────┤
│  Customer Service │  POS Service  │  Marketing Service     │
│  Booking Service  │  Report Service │  Notification Service │
│  (Spring Boot Microservices)                               │
└─────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                    DATA ACCESS LAYER                        │
├─────────────────────────────────────────────────────────────┤
│  MySQL       │  Redis Cache  │  Firebase  │  Object Storage │
│  (Main DB)   │  (Session)    │  (Realtime) │  (Files)       │
└─────────────────────────────────────────────────────────────┘
```

### 1.2 Các thành phần chính

#### 1.2.1 Frontend Applications
- **React Native Mobile App**: Ứng dụng check-in cho khách hàng
- **Next.js Bảng điều khiển**: Giao diện quản lý cho chủ salon
- **Admin Portal**: Giao diện quản trị hệ thống

#### 1.2.2 Backend Microservices
- **Customer Service**: Quản lý thông tin khách hàng và check-in
- **Booking Service**: Quản lý lịch hẹn và đồng bộ đa kênh
- **POS Service**: Xử lý thanh toán và quản lý sản phẩm
- **Marketing Service**: Quản lý chiến dịch và gửi thông báo
- **Report Service**: Tạo báo cáo và thống kê
- **Notification Service**: Gửi SMS/Email/Push notifications

#### 1.2.3 Database & Storage
- **MySQL**: Database chính lưu trữ dữ liệu business
- **Redis**: Cache và session management
- **Firebase Firestore**: Real-time data sync
- **Object Storage**: Lưu trữ hình ảnh và files

#### 1.2.4 External Services
- **SMS Gateway**: Twilio/Viettel SMS
- **Email Service**: SendGrid/Mailgun
- **Social Media APIs**: Facebook, Google, Zalo
- **Payment Gateway**: Stripe, PayPal (future)

### 1.3 Đặc điểm kiến trúc

#### 1.3.1 Scalability (Khả năng mở rộng)
- **Horizontal Scaling**: Có thể thêm instances cho từng service
- **Load Balancing**: Phân tải request giữa các servers
- **Database Sharding**: Phân chia data theo salon_id

#### 1.3.2 Reliability (Độ tin cậy)
- **Circuit Breaker Pattern**: Tránh cascade failures
- **Retry Mechanism**: Tự động retry khi có lỗi
- **Health Checks**: Monitoring service health

#### 1.3.3 Security (Bảo mật)
- **JWT Authentication**: Xác thực người dùng
- **API Rate Limiting**: Chống spam và DDoS
- **Data Encryption**: Mã hóa dữ liệu nhạy cảm
- **HTTPS/TLS**: Bảo mật truyền tải

### 1.4 Technology Stack

#### 1.4.1 Frontend
- **React Native**: Cross-platform mobile app
- **Next.js**: Server-side rendering web app
- **TypeScript**: Type safety
- **Tailwind CSS**: Framework CSS utility-first

#### 1.4.2 Backend
- **Spring Boot**: Java-based REST APIs
- **Node.js**: Real-time services
- **Redis**: Caching and session management
- **MySQL**: Primary database

#### 1.4.3 DevOps & Infrastructure
- **Docker**: Containerization
- **Docker Compose**: Local development
- **Nginx**: Reverse proxy và cân bằng tải
- **DigitalOcean**: Cloud hosting

## 2. LUỒNG DỮ LIỆU (Data Flow Diagram)

### 2.1 Data Flow Diagram Level 0 (Context Diagram)

```
                    ┌─────────────────┐
                    │   KHÁCH HÀNG    │
                    │     SALON       │
                    └─────────┬───────┘
                              │
                              ▼
           ┌──────────────────────────────────────────┐
           │                                          │
           │        HỆ THỐNG QUẢN LÝ SALON           │
           │                                          │
           └──────────────────┬───────────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │   CHỦ SALON     │
                    │   NHÂN VIÊN     │
                    └─────────────────┘
```

**Mô tả:**
- **Khách hàng salon**: Check-in, nhận thông báo khuyến mãi
- **Hệ thống quản lý salon**: Xử lý tất cả logic business
- **Chủ salon/Nhân viên**: Quản lý và vận hành hệ thống

### 2.2 Data Flow Diagram Level 1

```
  ┌─────────────┐         ┌─────────────┐         ┌─────────────┐
  │  KHÁCH HÀNG │         │  CHỦ SALON  │         │  NHÂN VIÊN  │
  └──────┬──────┘         └──────┬──────┘         └──────┬──────┘
         │                       │                       │
         ▼                       ▼                       ▼
  ┌─────────────┐         ┌─────────────┐         ┌─────────────┐
  │1. CHECK-IN  │         │2. QUẢN LÝ   │         │3. POS       │
  │   SYSTEM    │◄────────┤   KHÁCH     │◄────────┤   SYSTEM    │
  └─────────────┘         │   HÀNG      │         └─────────────┘
         │                └─────────────┘                │
         ▼                       │                       ▼
  ┌─────────────┐               ▼                ┌─────────────┐
  │4. MARKETING │         ┌─────────────┐        │5. REPORT    │
  │   CAMPAIGN  │◄────────┤6. DATABASE  │────────┤   SYSTEM    │
  └─────────────┘         │   SYSTEM    │        └─────────────┘
                          └─────────────┘
```

**Mô tả các process:**
1. **Check-in System**: Xử lý check-in khách hàng
2. **Quản lý Khách hàng**: CRUD operations cho customer data
3. **POS System**: Xử lý thanh toán và tính hoa hồng
4. **Marketing Campaign**: Tạo và gửi chiến dịch marketing
5. **Report System**: Tạo báo cáo và thống kê
6. **Database System**: Lưu trữ và quản lý dữ liệu

### 2.3 Data Flow Diagram Level 2 - Process 1: Check-in System

```
 ┌─────────────┐
 │ KHÁCH HÀNG  │
 └──────┬──────┘
        │ Phone Number
        ▼
 ┌─────────────┐    Customer Info    ┌─────────────┐
 │1.1 VALIDATE │◄─────────────────────┤1.4 CUSTOMER │
 │  CUSTOMER   │                     │  DATABASE   │
 └──────┬──────┘                     └─────────────┘
        │ Valid Phone
        ▼
 ┌─────────────┐    New Customer     ┌─────────────┐
 │1.2 CHECK    │────────────────────►│1.3 REGISTER │
 │ CUSTOMER    │                     │ NEW CLIENT  │
 │ STATUS      │◄────────────────────┤             │
 └──────┬──────┘    Customer Data    └─────────────┘
        │ Check-in Success
        ▼
 ┌─────────────┐
 │1.5 UPDATE   │
 │ VISIT COUNT │
 └─────────────┘
```

**Mô tả:**
- **1.1 Validate Customer**: Kiểm tra tính hợp lệ của số điện thoại
- **1.2 Check Customer Status**: Xác định khách cũ hay mới
- **1.3 Register New Client**: Đăng ký thông tin khách hàng mới
- **1.4 Customer Database**: Lưu trữ thông tin khách hàng
- **1.5 Update Visit Count**: Cập nhật số lần đến

## 3. SƠ ĐỒ THỰC THỂ LIÊN KẾT (Entity Relationship Diagram)

### 3.1 Main Entities

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│     SALON       │     │    CUSTOMER     │     │     STAFF       │
├─────────────────┤     ├─────────────────┤     ├─────────────────┤
│ + salon_id (PK) │     │ + customer_id   │     │ + staff_id (PK) │
│ + name          │     │ + phone_number  │     │ + salon_id (FK) │
│ + address       │     │ + full_name     │     │ + username      │
│ + phone         │     │ + email         │     │ + password      │
│ + email         │     │ + birthday      │     │ + full_name     │
│ + owner_name    │     │ + gender        │     │ + role          │
│ + created_at    │     │ + customer_type │     │ + commission_rate│
│ + updated_at    │     │ + total_visits  │     │ + created_at    │
└─────────────────┘     │ + total_spent   │     │ + updated_at    │
                        │ + loyalty_points│     └─────────────────┘
                        │ + last_visit    │
                        │ + created_at    │
                        │ + updated_at    │
                        └─────────────────┘
```

### 3.2 Relationship Diagram

```
     SALON                    CUSTOMER
┌─────────────┐            ┌─────────────┐
│ salon_id    │            │ customer_id │
│ name        │            │ phone       │
│ address     │            │ full_name   │
│ phone       │            │ email       │
│ email       │            │ birthday    │
│ owner_name  │            │ type        │
└─────────────┘            └─────────────┘
       │                          │
       │ 1                        │
       │                          │ M
       │                          │
       ▼                          ▼
┌─────────────┐            ┌─────────────┐
│   STAFF     │            │   VISIT     │
│ staff_id    │            │ visit_id    │
│ salon_id    │            │ customer_id │
│ username    │            │ salon_id    │
│ full_name   │            │ staff_id    │
│ role        │            │ visit_date  │
│ commission  │            │ services    │
└─────────────┘            │ total_amount│
       │                   │ status      │
       │ 1                 └─────────────┘
       │                          │
       │ M                        │ M
       │                          │
       ▼                          ▼
┌─────────────┐            ┌─────────────┐
│   ORDER     │            │  SERVICE    │
│ order_id    │            │ service_id  │
│ customer_id │            │ salon_id    │
│ staff_id    │            │ name        │
│ total_amount│            │ price       │
│ commission  │            │ duration    │
│ created_at  │            │ description │
└─────────────┘            └─────────────┘
       │                          │
       │ 1                        │
       │                          │ M
       │ M                        │
       ▼                          ▼
┌─────────────┐            ┌─────────────┐
│ORDER_DETAIL │            │   PRODUCT   │
│ detail_id   │            │ product_id  │
│ order_id    │            │ salon_id    │
│ service_id  │            │ name        │
│ product_id  │            │ price       │
│ quantity    │            │ stock       │
│ unit_price  │            │ category    │
│ total_price │            └─────────────┘
└─────────────┘
```

### 3.3 Additional Entities

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│    CAMPAIGN     │     │   APPOINTMENT   │     │   NOTIFICATION  │
├─────────────────┤     ├─────────────────┤     ├─────────────────┤
│ + campaign_id   │     │ + appointment_id│     │ + notification_id│
│ + salon_id      │     │ + customer_id   │     │ + customer_id   │
│ + name          │     │ + staff_id      │     │ + type          │
│ + type          │     │ + salon_id      │     │ + title         │
│ + target_group  │     │ + service_id    │     │ + content       │
│ + discount_type │     │ + appointment_dt│     │ + status        │
│ + discount_value│     │ + duration      │     │ + sent_at       │
│ + start_date    │     │ + status        │     │ + created_at    │
│ + end_date      │     │ + notes         │     └─────────────────┘
│ + status        │     │ + created_at    │
│ + created_at    │     │ + updated_at    │
└─────────────────┘     └─────────────────┘
```

---

*Tài liệu kiến trúc này sẽ được cập nhật khi có thay đổi trong quá trình phát triển.*
