

# PHÂN TÍCH HỆ THỐNG - SAAS QUẢN LÝ SALON NAILS

## 1. ĐỊNH NGHĨA VẤN ĐỀ (Problem Definition)

### 1.1 Bối cảnh vấn đề (Problem Abstraction)
Salon nails tại Tây Ban Nha và Việt Nam đang gặp những thách thức chung:
- Thiếu dữ liệu khách hàng: Không biết ai là khách VIP, khách có nguy cơ rời bỏ
- Quản lý đánh giá yếu: Khó thu thập và quản lý đánh giá từ khách hàng
- Không hiểu hành vi khách hàng: Thiếu thông tin chi tiết về sở thích và xu hướng
- Vận hành thủ công: Quản lý thủ công dẫn đến bỏ lỡ cơ hội
- Cạnh tranh với chuỗi lớn: Cần lợi thế cạnh tranh thông qua dữ liệu

### 1.2 Tác động của vấn đề
- Mất cơ hội: Không biết khách nào cần quan tâm đặc biệt
- Danh tiếng trực tuyến kém: Thiếu hệ thống đánh giá dẫn đến khả năng hiển thị thấp
- Marketing không hiệu quả: Không nhắm đúng đối tượng do thiếu dữ liệu
- Mất khách hàng: Không có hệ thống cảnh báo sớm

## 2. HỆ THỐNG HIỆN TẠI (The Current System)

### 2.1 Mô tả hệ thống hiện tại
Hiện tại, salon nails đang sử dụng các phương pháp truyền thống:
- Sổ tay giấy: Ghi chép thông tin khách hàng thủ công
- Máy tính tiền cơ bản: Chỉ tính tiền, không lưu trữ dữ liệu
- Quản lý đánh giá thủ công: Yêu cầu khách hàng viết đánh giá bằng lời
- Không có hệ thống phân tích: Thiếu báo cáo và thông tin chi tiết

### 2.2 Hạn chế của hệ thống hiện tại
- Dữ liệu phân tán: Thông tin khách hàng nằm rải rác
- Không có phân tích: Không thể dự đoán xu hướng khách hàng
- Quản lý đánh giá kém: Mất nhiều đánh giá tiềm năng
- Báo cáo thủ công: Mất thời gian và dễ sai sót
- Không tích hợp: Các quy trình làm việc tách biệt

## 3. HỆ THỐNG ĐỀ XUẤT (The Proposed System)

### 3.1 Tầm nhìn hệ thống
Xây dựng một nền tảng SaaS toàn diện cho salon nails với:
- Ứng dụng di động check-in thông minh
- Bảng điều khiển quản lý tích hợp
- Hệ thống POS linh hoạt
- Công cụ marketing tự động
- Hỗ trợ đa ngôn ngữ (Tiếng Việt và Tiếng Tây Ban Nha)

### 3.2 Tính năng chính
- Thu thập dữ liệu & Thông tin khách hàng
- Hệ thống quản lý đánh giá
- Tối ưu hóa đa ngôn ngữ
- Quản lý nhân viên
- Marketing tự động
- Báo cáo và phân tích

## 4. RANH GIỚI HỆ THỐNG (Boundaries of the System)

### 4.1 Những gì hệ thống bao gồm
- Quản lý khách hàng: Hồ sơ, lịch sử, phân loại
- Hệ thống POS: Tính tiền, thanh toán, in hóa đơn
- Quản lý nhân viên: Lịch làm việc, hoa hồng, hiệu suất
- Marketing tự động: SMS, email, chiến dịch
- Quản lý đánh giá: Thu thập, phản hồi, giám sát
- Báo cáo và phân tích: Dashboard, KPI, dự đoán

### 4.2 Những gì hệ thống không bao gồm
- Kế toán chi tiết: Chỉ có báo cáo doanh thu cơ bản
- Quản lý kho sâu: Chỉ theo dõi sản phẩm cơ bản
- Tích hợp ERP: Không tích hợp với hệ thống ERP lớn
- Thanh toán trực tuyến: Chỉ hỗ trợ thanh toán tại chỗ
- Đặt lịch trực tuyến: Tập trung vào check-in, không phải booking


## 5. YÊU CẦU PHẦN CỨNG VÀ PHẦN MỀM (Hardware and Software Requirements)


### 5.1 Yêu cầu phần cứng (Hardware Requirements)

#### 5.1.1 Yêu cầu tối thiểu (Minimum Hardware Requirements)

**a. Máy chủ (Server):**
- CPU: 2 cores, 2.4GHz
- RAM: 4GB
- Ổ cứng: 20GB SSD
- Băng thông: 10Mbps

**b. Thiết bị đầu cuối (Client Devices):**
- Máy tính để bàn/laptop: RAM 4GB, Chrome 90+, Firefox 88+, Safari 14+, Internet 5Mbps
- Điện thoại: Android 8.0+ hoặc iOS 12+, RAM 3GB, 3G/4G/WiFi
- Máy in hóa đơn: Máy in nhiệt 80mm
- Máy quét mã QR: Camera hoặc máy quét chuyên dụng
- Máy tính bảng/iPad: Android 8.0+ hoặc iPadOS 13+, RAM 3GB

#### 5.1.2 Yêu cầu khuyến nghị (Recommended Hardware Requirements)

**a. Máy chủ (Server):**
- CPU: 4 cores, 3.0GHz
- RAM: 8GB
- Ổ cứng: 50GB SSD
- Băng thông: 50Mbps

**b. Thiết bị đầu cuối (Client Devices):**
- Máy tính để bàn/laptop: RAM 8GB, trình duyệt mới nhất, Internet 20Mbps
- Điện thoại: Android 11+ hoặc iOS 15+, RAM 6GB, 4G/5G/WiFi
- Máy in hóa đơn: Máy in nhiệt 80mm hỗ trợ kết nối LAN/WiFi
- Máy quét mã QR: Máy quét chuyên dụng tốc độ cao
- Máy tính bảng/iPad: Android 10+ hoặc iPadOS 14+, RAM 6GB, hỗ trợ cài app native

### 5.2 Yêu cầu phần mềm (Software Requirements)

#### 5.2.1 Máy chủ (Server)
- Hệ điều hành: Ubuntu 20.04+ hoặc CentOS 8+ (tối thiểu), Ubuntu 22.04 LTS (khuyến nghị)
- Docker, Docker Compose
- Java 17+ và Spring Boot 3.x (backend Java)
- MySQL 8+ (CSDL chính)
- Redis 6+ (cache/session)
- Nginx hoặc Apache (nếu cần reverse proxy)
- OpenJDK hoặc Oracle JDK (nếu dùng Spring Boot)

#### 5.2.2 Thiết bị đầu cuối (Client Devices)
- Trình duyệt web: Chrome, Firefox, Safari, Edge (bản mới nhất)
- Ứng dụng di động: Cài đặt app từ App Store (iOS) hoặc Google Play (Android)
- Ứng dụng tablet/iPad: Hỗ trợ cài đặt app native hoặc truy cập web app
- Phần mềm in hóa đơn: Driver máy in tương thích hệ điều hành

## 6. ĐẶC TẢ YÊU CẦU NGƯỜI DÙNG (Users Requirements Specification)



### 6.1 Người dùng của hệ thống (Users of the System)

| No | Users                        | Permission                                                                                       |
|----|------------------------------|--------------------------------------------------------------------------------------------------|
| 1  | Quản trị viên hệ thống (Admin)| Toàn quyền: Quản lý người dùng, sản phẩm, đơn hàng, cấu hình hệ thống, xem mọi báo cáo           |
| 2  | Chủ salon (Owner/Manager)     | Quản lý salon, nhân viên, xem báo cáo, cấu hình POS, quản lý chương trình khách hàng thân thiết  |
| 3  | Nhân viên salon (Staff)       | Thực hiện dịch vụ, check-in khách, tạo đơn hàng, xem lịch làm việc, xem doanh số cá nhân         |
| 4  | Khách hàng (Customer)        | Check-in, xem điểm thưởng, nhận thông báo, gửi đánh giá, xem lịch sử dịch vụ cá nhân             |

#### Mô tả chi tiết từng đối tượng:

**Quản trị viên hệ thống (Admin)**
- Đăng nhập/Đăng xuất
- Quản lý tài khoản (đổi mật khẩu, chỉnh sửa thông tin cá nhân)
- Quản lý người dùng (tìm kiếm, khóa/mở khóa, phân quyền)
- Quản lý sản phẩm/dịch vụ (thêm/sửa/xóa, cập nhật thông tin)
- Quản lý đơn hàng (lọc, xử lý, cập nhật trạng thái)
- Quản lý nhân viên (thêm/sửa/xóa, phân ca, tính hoa hồng)
- Quản lý chương trình khách hàng thân thiết
- Xem báo cáo (doanh thu, tồn kho, hoạt động người dùng, hiệu suất nhân viên)
- Cấu hình hệ thống (ngôn ngữ, POS, tích hợp thanh toán)

**Chủ salon (Owner/Manager)**
- Đăng nhập/Đăng xuất
- Quản lý thông tin salon
- Quản lý nhân viên, phân ca làm việc
- Xem báo cáo doanh thu, hiệu suất, khách hàng
- Quản lý chương trình khách hàng thân thiết
- Quản lý sản phẩm/dịch vụ
- Quản lý đơn hàng, kiểm tra lịch sử giao dịch
- Cấu hình POS, chương trình khuyến mãi

**Nhân viên salon (Staff)**
- Đăng nhập/Đăng xuất
- Xem lịch làm việc cá nhân
- Check-in khách hàng
- Tạo đơn hàng, thực hiện thanh toán
- Xem doanh số cá nhân
- Quản lý dịch vụ đã thực hiện
- Gửi yêu cầu hỗ trợ tới quản lý

**Khách hàng (Customer)**
- Đăng ký/Đăng nhập/Đăng xuất
- Đổi mật khẩu, cập nhật thông tin cá nhân
- Check-in tại salon (quét QR hoặc nhập số điện thoại)
- Xem điểm thưởng, lịch sử dịch vụ
- Nhận thông báo khuyến mãi, sinh nhật
- Gửi đánh giá, phản hồi dịch vụ
- Xem lịch sử giao dịch, hóa đơn


### 6.2 Chức năng hệ thống (System functions)

#### Ví dụ mô tả chức năng chi tiết dạng bảng:

| No | Function name | Users    | Description                  | Input                | Process                                                                 | Output                                 |
|----|--------------|----------|------------------------------|---------------------|-------------------------------------------------------------------------|----------------------------------------|
| 1  | Login        | Customer | Xác thực người dùng vào hệ thống | Tên đăng nhập, mật khẩu | 1. Kiểm tra thông tin đăng nhập<br>2. Nếu hợp lệ, cho phép truy cập<br>3. Nếu sai, báo lỗi | Nếu hợp lệ: vào dashboard<br>Nếu sai: báo lỗi |

// Có thể áp dụng mẫu này cho các chức năng quan trọng khác nếu cần đặc tả chi tiết.

