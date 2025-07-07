# QUẢN LÝ DỰ ÁN VÀ KIỂM TRA CHẤT LƯỢNG

## 1. BẢNG PHÂN CÔNG CÔNG VIỆC (Task Sheet)

### 1.1 Thông tin dự án
- **Tên dự án**: SaaS Quản lý Salon Nails
- **Thời gian thực hiện**: 10/07/2025 - 18/08/2025 (40 ngày)
- **Phương pháp**: Solo Development với Agile principles
- **Developer**: Nguyễn Bá Tuấn Anh (Solo Full-stack Developer)
- **Stakeholder**: Chủ salon muốn bán giải pháp SaaS cho các salon nails khác

### 1.2 Thông tin stakeholder và mô hình kinh doanh

| Vai trò                | Mô tả                                                   | Mục tiêu                                                         |
| ---------------------- | ------------------------------------------------------- | ---------------------------------------------------------------- |
| **Client/Stakeholder** | Chủ salon nails có kinh nghiệm, muốn mở rộng kinh doanh | Tạo ra sản phẩm SaaS để bán cho các salon nails khác             |
| **End Users**          | Các chủ salon nails khác (khách hàng của stakeholder)   | Quản lý salon hiệu quả, tăng doanh thu, giữ chân khách hàng      |
| **Developer**          | Nguyễn Bá Tuấn Anh                                      | Phát triển MVP trong 40 ngày, đảm bảo chất lượng và tính khả thi |

### 1.3 Mô hình kinh doanh B2B SaaS
- **Stakeholder** trả tiền cho việc phát triển sản phẩm
- **Sản phẩm** sẽ được bán dưới dạng subscription cho các salon khác
- **Revenue model**: Monthly/yearly subscription từ các salon sử dụng
- **Target market**: Các salon nails nhỏ và vừa tại Việt Nam

### 1.4 Tech Stack 
- **Database**: MySQL
- **Server**: Ubuntu Linux
- **Backend**: Spring Boot với MySQL
- **Frontend**: React Native (Mobile), Next.js (Dashboard)
- **Deployment**: Ubuntu server với Docker

### 1.5 Phân công công việc (Solo Development)

| STT   | Tên công việc                 | Người thực hiện    | Thời gian bắt đầu | Thời gian kết thúc | Trạng thái      | Ghi chú                             |
| ----- | ----------------------------- | ------------------ | ----------------- | ------------------ | --------------- | ----------------------------------- |
| **1** | **GIAI ĐOẠN LẬP TÀI LIỆU**    |                    | **10/07/2025**    | **25/07/2025**     |                 |                                     |
| 1.1   | Phân tích yêu cầu hệ thống    | Nguyễn Bá Tuấn Anh | 10/07/2025        | 12/07/2025         | ⏳ Chờ thực hiện | Trao đổi với stakeholder            |
| 1.2   | Thiết kế kiến trúc hệ thống   | Nguyễn Bá Tuấn Anh | 13/07/2025        | 16/07/2025         | ⏳ Chờ thực hiện | Microservices với MySQL             |
| 1.3   | Thiết kế cơ sở dữ liệu        | Nguyễn Bá Tuấn Anh | 17/07/2025        | 19/07/2025         | ⏳ Chờ thực hiện | MySQL schema design                 |
| 1.4   | Thiết kế UI/UX mockups        | Nguyễn Bá Tuấn Anh | 20/07/2025        | 22/07/2025         | ⏳ Chờ thực hiện | Mobile-first, admin dashboard       |
| 1.5   | Lập tài liệu kỹ thuật         | Nguyễn Bá Tuấn Anh | 23/07/2025        | 24/07/2025         | ⏳ Chờ thực hiện | Comprehensive documentation         |
| 1.6   | Review và hoàn thiện tài liệu | Nguyễn Bá Tuấn Anh | 25/07/2025        | 25/07/2025         | ⏳ Chờ thực hiện | Review toàn bộ tài liệu giai đoạn 1 |
| **2** | **GIAI ĐOẠN PHÁT TRIỂN**      |                    | **26/07/2025**    | **10/08/2025**     |                 |                                     |
| 2.1   | Setup môi trường development  | Nguyễn Bá Tuấn Anh | 26/07/2025        | 26/07/2025         | ⏳ Chờ thực hiện | Docker, MySQL, Ubuntu setup         |
| 2.2   | Phát triển Backend APIs       |                    |                   |                    |                 |                                     |
| 2.2.1 | Customer Service API          | Nguyễn Bá Tuấn Anh | 27/07/2025        | 01/08/2025         | ⏳ Chờ thực hiện | Check-in, customer management       |
| 2.2.2 | POS Service API               | Nguyễn Bá Tuấn Anh | 02/08/2025        | 05/08/2025         | ⏳ Chờ thực hiện | Order, payment processing           |
| 2.2.3 | Marketing Service API         | Nguyễn Bá Tuấn Anh | 06/08/2025        | 08/08/2025         | ⏳ Chờ thực hiện | Campaign, notification              |
| 2.3   | Phát triển Frontend           |                    |                   |                    |                 |                                     |
| 2.3.1 | Customer Mobile App           | Nguyễn Bá Tuấn Anh | 28/07/2025        | 03/08/2025         | ⏳ Chờ thực hiện | React Native, check-in flow         |
| 2.3.2 | Admin Dashboard               | Nguyễn Bá Tuấn Anh | 29/07/2025        | 04/08/2025         | ⏳ Chờ thực hiện | Next.js, responsive design          |
| 2.3.3 | POS Interface                 | Nguyễn Bá Tuấn Anh | 07/08/2025        | 10/08/2025         | ⏳ Chờ thực hiện | Web-based POS, tablet friendly      |
| **3** | **GIAI ĐOẠN KIỂM THỬ**        |                    | **11/08/2025**    | **18/08/2025**     |                 |                                     |
| 3.1   | Unit Testing Backend          | Nguyễn Bá Tuấn Anh | 11/08/2025        | 13/08/2025         | ⏳ Chờ thực hiện | JUnit tests, coverage >= 70%        |
| 3.2   | Integration Testing           | Nguyễn Bá Tuấn Anh | 14/08/2025        | 15/08/2025         | ⏳ Chờ thực hiện | API testing, database integration   |
| 3.3   | Frontend Testing              | Nguyễn Bá Tuấn Anh | 16/08/2025        | 17/08/2025         | ⏳ Chờ thực hiện | Manual testing, user flows          |
| 3.4   | User Acceptance Testing       | Nguyễn Bá Tuấn Anh | 18/08/2025        | 18/08/2025         | ⏳ Chờ thực hiện | Demo với stakeholder                |
| 3.5   | Performance Testing           | Nguyễn Bá Tuấn Anh | 18/08/2025        | 18/08/2025         | ⏳ Chờ thực hiện | Basic load testing                  |

### 1.6 Milestone và Deliverables

| Milestone                | Ngày hoàn thành | Deliverables                           | Trạng thái      |
| ------------------------ | --------------- | -------------------------------------- | --------------- |
| M1: Hoàn thành tài liệu  | 25/07/2025      | Tài liệu phân tích, thiết kế, mockups  | ⏳ Chờ thực hiện |
| M2: MVP Backend          | 08/08/2025      | Customer API, POS API cơ bản           | ⏳ Chờ thực hiện |
| M3: MVP Frontend         | 10/08/2025      | Mobile app, Admin dashboard            | ⏳ Chờ thực hiện |
| M4: Demo với stakeholder | 18/08/2025      | Hệ thống hoàn chỉnh, demo presentation | ⏳ Chờ thực hiện |

## 2. DANH SÁCH KIỂM TRA XÁC THỰC (Check List of Validation)

### 2.1 Kiểm tra chức năng hệ thống

| STT | Tiêu chí kiểm tra                                                                     | Đã xác thực    | Ghi chú                                |
| --- | ------------------------------------------------------------------------------------- | -------------- | -------------------------------------- |
| 1   | Tất cả các tùy chọn trong ứng dụng có hiển thị kết quả chính xác không?               | ⏳ Chờ kiểm tra | Sẽ test khi hoàn thành development     |
| 2   | Chức năng ứng dụng có giải quyết được vấn đề của người dùng và đáp ứng nhu cầu không? | ⏳ Chờ kiểm tra | Phù hợp với yêu cầu nghiệp vụ salon    |
| 3   | Phần cứng và phần mềm đã được lựa chọn đúng chưa?                                     | ✅ Có           | Tech stack phù hợp với yêu cầu         |
| 4   | Đảm bảo dữ liệu tuân thủ các ràng buộc                                                | ⏳ Chờ kiểm tra | Database constraints sẽ được thiết lập |
| 5   | Hệ thống có thể xử lý đồng thời nhiều người dùng không?                               | ⏳ Chờ kiểm tra | Sẽ test performance                    |
| 6   | Bảo mật dữ liệu khách hàng được đảm bảo không?                                        | ⏳ Chờ kiểm tra | JWT authentication, data encryption    |
| 7   | Giao diện người dùng thân thiện và dễ sử dụng không?                                  | ⏳ Chờ kiểm tra | Thiết kế responsive, intuitive         |
| 8   | Hệ thống có khả năng backup và recovery không?                                        | ⏳ Chờ kiểm tra | Automated backup sẽ được scheduled     |

### 2.2 Kiểm tra chi tiết từng module

#### 2.2.1 Module Check-in
| STT | Chức năng              | Trạng thái | Kết quả kiểm tra                    |
| --- | ---------------------- | ---------- | ----------------------------------- |
| 1   | Nhập số điện thoại     | ⏳ Chờ test | Sẽ test validation số điện thoại VN |
| 2   | Nhận diện khách cũ/mới | ⏳ Chờ test | Sẽ test auto detect và hiển thị     |
| 3   | Đăng ký khách hàng mới | ⏳ Chờ test | Sẽ test form validation             |
| 4   | Cập nhật số lần visit  | ⏳ Chờ test | Sẽ test counter tăng chính xác      |
| 5   | Hiển thị điểm thưởng   | ⏳ Chờ test | Sẽ test points calculation          |

#### 2.2.2 Module Admin Dashboard
| STT | Chức năng              | Trạng thái | Kết quả kiểm tra             |
| --- | ---------------------- | ---------- | ---------------------------- |
| 1   | Login/Logout admin     | ⏳ Chờ test | Sẽ test authentication       |
| 2   | Hiển thị dashboard     | ⏳ Chờ test | Sẽ test charts và statistics |
| 3   | Quản lý khách hàng     | ⏳ Chờ test | Sẽ test CRUD operations      |
| 4   | Tạo campaign marketing | ⏳ Chờ test | Sẽ test campaign builder     |
| 5   | Xuất báo cáo           | ⏳ Chờ test | Sẽ test export functions     |

#### 2.2.3 Module POS
| STT | Chức năng          | Trạng thái | Kết quả kiểm tra               |
| --- | ------------------ | ---------- | ------------------------------ |
| 1   | Tính tiền dịch vụ  | ⏳ Chờ test | Sẽ test calculation            |
| 2   | Áp dụng discount   | ⏳ Chờ test | Sẽ test discount rules         |
| 3   | Tính hoa hồng      | ⏳ Chờ test | Sẽ test commission calculation |
| 4   | In hóa đơn         | ⏳ Chờ test | Sẽ test print functionality    |
| 5   | Cập nhật inventory | ⏳ Chờ test | Sẽ test stock management       |

## 3. DANH SÁCH KIỂM TRA NỘP BÀI (Submission Checklist)

### 3.1 Checklist chức năng chính

| STT | Tiêu chí                                                                        | Có  | Không | N/A | Ghi chú                        |
| --- | ------------------------------------------------------------------------------- | --- | ----- | --- | ------------------------------ |
| 1   | Người dùng có thể đăng nhập vào ứng dụng sau khi xác thực username và password? | ⏳   |       |     | Sẽ test khi hoàn thành backend |
| 2   | Admin có thể chỉnh sửa thông tin của mình sau khi đăng nhập?                    | ⏳   |       |     | Sẽ test profile management     |
| 3   | Tất cả nội dung màn hình có bị lỗi chính tả không?                              | ⏳   |       |     | Sẽ review content              |
| 4   | Ứng dụng có thân thiện với người dùng không?                                    | ⏳   |       |     | Sẽ test UI/UX                  |
| 5   | Khách hàng có thể check-in thành công bằng số điện thoại?                       | ⏳   |       |     | Core feature sẽ được test      |
| 6   | Hệ thống có gửi thông báo SMS/Email tự động?                                    | ⏳   |       |     | Sẽ setup SMS gateway           |
| 7   | Báo cáo và thống kê hiển thị chính xác?                                         | ⏳   |       |     | Sẽ test dashboard metrics      |
| 8   | Hệ thống có xử lý được multiple salons?                                         | ⏳   |       |     | Multi-tenant architecture      |
| 9   | Data backup có hoạt động đúng lịch?                                             | ⏳   |       |     | Sẽ setup automated backup      |
| 10  | Performance có đáp ứng được yêu cầu?                                            | ⏳   |       |     | Sẽ test load testing           |

### 3.2 Checklist kỹ thuật

| STT | Tiêu chí                             | Có  | Không | N/A | Ghi chú                       |
| --- | ------------------------------------ | --- | ----- | --- | ----------------------------- |
| 1   | Code có follow coding standards?     | ✅   |       |     | ESLint, Prettier configured   |
| 2   | Database có được thiết kế chuẩn hóa? | ✅   |       |     | Normalized schema             |
| 3   | API có documentation đầy đủ?         | ✅   |       |     | Swagger/OpenAPI docs          |
| 4   | Unit tests có coverage >= 80%?       | ⏳   |       |     | Đang viết thêm tests          |
| 5   | Security measures có được implement? | ✅   |       |     | Authentication, authorization |
| 6   | Error handling có comprehensive?     | ✅   |       |     | Global error handlers         |
| 7   | Logging có được setup đúng?          | ✅   |       |     | Structured logging            |
| 8   | Configuration có được externalize?   | ✅   |       |     | Environment variables         |

### 3.3 Checklist tài liệu

| STT | Tiêu chí                       | Có  | Không | N/A | Ghi chú                  |
| --- | ------------------------------ | --- | ----- | --- | ------------------------ |
| 1   | System Analysis Document       | ✅   |       |     | Hoàn thành và detailed   |
| 2   | Architecture & Design Document | ✅   |       |     | Include DFD, ERD         |
| 3   | Database Structure Document    | ✅   |       |     | Schema và relationships  |
| 4   | Screen Design Document         | ✅   |       |     | UI mockups và wireframes |
| 5   | API Documentation              | ✅   |       |     | Swagger documentation    |
| 6   | Deployment Guide               | ⏳   |       |     | Đang hoàn thiện          |
| 7   | User Manual                    | ⏳   |       |     | Đang viết                |
| 8   | Testing Documentation          | ⏳   |       |     | Test cases và results    |

## 4. KẾ HOẠCH KIỂM TRA VÀ TRIỂN KHAI

### 4.1 Test Strategy

#### 4.1.1 Unit Testing
- **Framework**: JUnit (Backend), Jest (Frontend) 
- **Coverage Target**: >= 70% (realistic cho solo dev)
- **Database**: MySQL test database
- **Responsible**: Nguyễn Bá Tuấn Anh

#### 4.1.2 Integration Testing
- **Tools**: Postman, manual testing
- **Focus**: API endpoints và MySQL integration
- **Server**: Ubuntu test environment
- **Responsible**: Nguyễn Bá Tuấn Anh

#### 4.1.3 End-to-End Testing
- **Method**: Manual testing các user workflows
- **Focus**: Check-in flow, admin dashboard, POS
- **Devices**: Mobile (Android/iOS), Desktop browsers
- **Responsible**: Nguyễn Bá Tuấn Anh

#### 4.1.4 Performance Testing
- **Tools**: Simple load testing với curl/ab
- **Targets**: 
  - Response time < 3s (realistic cho MVP)
  - Concurrent users: 20+ (đủ cho demo)
  - Basic uptime monitoring
- **Responsible**: Nguyễn Bá Tuấn Anh

### 4.2 Deployment Plan

#### 4.2.1 Development Environment
- **Server**: Ubuntu 22.04 LTS
- **Database**: MySQL 8.0
- **Application**: Docker containers
- **Access**: Local development

#### 4.2.2 Staging Environment  
- **Timeline**: 15/08/2025
- **Purpose**: Demo với stakeholder
- **Server**: Ubuntu VPS (DigitalOcean/Vultr)
- **Database**: MySQL production instance
- **Access**: Stakeholder và developer

#### 4.2.3 Production Deployment Plan
- **Timeline**: Sau khi stakeholder approve (post 18/08/2025)
- **Method**: Docker deployment trên Ubuntu
- **Database**: MySQL với backup strategy
- **Domain**: Sẽ setup theo yêu cầu stakeholder
- **SSL**: Let's Encrypt certificates

### 4.3 Chiến lược hỗ trợ sau khi ra mắt sản phẩm

#### 4.3.1 Các chỉ số quan trọng cho MVP
- Thời gian hoạt động hệ thống (mục tiêu: 95%+)
- Thời gian phản hồi (mục tiêu: < 3 giây)
- Tỷ lệ thành công của việc check-in khách hàng
- Điểm đánh giá từ stakeholder
- Phân tích dữ liệu sử dụng cơ bản

#### 4.3.2 Cấu trúc hỗ trợ
- **Lập trình viên**: Nguyễn Bá Tuấn Anh (hỗ trợ toàn diện)
- **Stakeholder**: Yêu cầu kinh doanh và phản hồi từ người dùng
- **Người dùng cuối**: Hỗ trợ thông qua stakeholder
- **Thời gian phản hồi**: 
  - Vấn đề nghiêm trọng: Trong ngày
  - Vấn đề không nghiêm trọng: Trong vòng 2-3 ngày

#### 4.3.3 Kế hoạch bảo trì
- **Sửa lỗi**: Ưu tiên dựa trên phản hồi từ stakeholder
- **Yêu cầu tính năng mới**: Thảo luận lộ trình với stakeholder
- **Hạ tầng**: Bảo trì máy chủ Ubuntu, sao lưu MySQL
- **Cập nhật**: Phát hành hàng tháng với tính năng mới

#### 4.3.4 Triển khai mô hình kinh doanh
- **Giai đoạn 1**: Demo MVP và phê duyệt từ stakeholder (08/2025)
- **Giai đoạn 2**: Đưa khách hàng đầu tiên vào sử dụng có trả phí (09/2025) 
- **Giai đoạn 3**: Thiết lập mô hình thuê bao (10/2025)
- **Chia sẻ doanh thu**: Sẽ thảo luận với stakeholder

---

*Tài liệu quản lý dự án này sẽ được cập nhật hàng ngày trong quá trình thực hiện.*
