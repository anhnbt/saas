# PHÂN TÍCH HỆ THỐNG - SAAS QUẢN LÝ SALON NAILS

## 1. ĐỊNH NGHĨA VẤN ĐỀ (Problem Definition)

### 1.1 Bối cảnh vấn đề
Các tiệm nail salon hiện tại đang gặp phải nhiều thách thức trong việc quản lý hoạt động kinh doanh:
- **Quản lý lịch hẹn thủ công**: Khó khăn trong việc theo dõi và sắp xếp lịch hẹn của khách hàng
- **Mất khách hàng**: Thiếu hệ thống nhắc hẹn tự động, dẫn đến tỷ lệ khách hàng không quay lại cao
- **Quản lý nhân viên kém hiệu quả**: Khó khăn trong việc phân chia ca làm, tính lương và hoa hồng
- **Thiếu hệ thống CRM**: Không có cách thức hiệu quả để phân loại và chăm sóc khách hàng
- **Quản lý tài chính phức tạp**: Khó khăn trong việc theo dõi doanh thu, chi phí và lợi nhuận

### 1.2 Tác động của vấn đề
- Mất doanh thu do khách hàng không quay lại
- Hiệu suất làm việc thấp của nhân viên
- Khó khăn trong việc mở rộng quy mô kinh doanh
- Thiếu thông tin để đưa ra quyết định kinh doanh

## 2. TRỪU TƯỢNG HÓA VẤN ĐỀ (Problem Abstraction)

### 2.1 Vấn đề cốt lõi
Các salon nails cần một **hệ thống quản lý tích hợp** có khả năng:
- Tự động hóa quy trình check-in khách hàng
- Quản lý lịch hẹn đa kênh (Facebook, Google, Zalo)
- Theo dõi và phân loại khách hàng
- Gửi thông báo và chiến dịch marketing tự động
- Quản lý POS (Point of Sale) và tính toán hoa hồng
- Cung cấp báo cáo và thống kê chi tiết

### 2.2 Đối tượng chịu ảnh hưởng
- **Chủ salon**: Cần công cụ quản lý toàn diện
- **Nhân viên salon**: Cần giao diện đơn giản để phục vụ khách hàng
- **Khách hàng**: Cần trải nghiệm check-in thuận tiện và dịch vụ chăm sóc tốt

## 3. HỆ THỐNG HIỆN TẠI (The Current System)

### 3.1 Phương pháp quản lý truyền thống
- **Ghi chép thủ công**: Sử dụng sổ sách, giấy tờ để ghi nhận thông tin khách hàng
- **Điện thoại**: Gọi điện để đặt lịch và nhắc hẹn
- **Máy tính tiền cơ bản**: Chỉ tính tiền, không lưu trữ thông tin khách hàng
- **Quản lý nhân viên bằng bảng chấm công**: Thiếu tự động hóa trong tính lương và hoa hồng

### 3.2 Các giải pháp hiện có trên thị trường
- **MySpa**: Tập trung vào lưu dữ liệu và phân loại khách hàng
- **IDBeauty**: Gửi SMS/email tự động, đặt lịch online
- **QT Software**: Quản lý đa chi nhánh, booking, marketing
- **PosApp**: Tập trung POS, quản lý thu ngân, hoa hồng
- **ZinNails**: Tính tiền, CRM, chấm công/lương, kho, báo cáo

### 3.3 Hạn chế của hệ thống hiện tại
- Thiếu tích hợp giữa các module
- Giao diện người dùng phức tạp
- Chi phí cao
- Thiếu ứng dụng mobile chuyên sâu cho check-in

## 4. HỆ THỐNG ĐỀ XUẤT (The Proposed System)

### 4.1 Tầm nhìn hệ thống
Xây dựng một **nền tảng SaaS toàn diện** cho salon nails với:
- Ứng dụng mobile check-in thông minh
- Dashboard quản lý tích hợp
- Hệ thống POS linh hoạt
- Công cụ marketing tự động

### 4.2 Tính năng chính
#### 4.2.1 Module Check-in Khách hàng
- Check-in bằng số điện thoại
- Tự động nhận diện khách cũ/mới
- Thống kê số lần đến
- Giao diện thân thiện trên mobile

#### 4.2.2 Module Quản lý Lịch hẹn
- Đồng bộ lịch hẹn từ nhiều kênh (Facebook, Google, Zalo)
- Nhắc hẹn tự động qua SMS/Email
- Quản lý lịch làm việc của nhân viên

#### 4.2.3 Module CRM
- Phân loại khách hàng (VIP, Regular, New, At Risk)
- Lưu trữ thông tin chi tiết
- Theo dõi lịch sử dịch vụ

#### 4.2.4 Module Marketing
- Chiến dịch sinh nhật tự động
- Khuyến mãi theo phân loại khách hàng
- Gửi email/SMS hàng loạt

#### 4.2.5 Module POS
- Tính tiền dịch vụ và sản phẩm
- Tính hoa hồng cho nhân viên
- Quản lý điểm thưởng khách hàng

### 4.3 Lợi ích của hệ thống mới
- **Tăng tỷ lệ khách hàng quay lại**: Nhờ hệ thống chăm sóc tự động
- **Tiết kiệm thời gian**: Tự động hóa các quy trình thủ công
- **Tăng doanh thu**: Thông qua marketing có mục tiêu
- **Quản lý hiệu quả**: Báo cáo và thống kê chi tiết

## 5. RANH GIỚI HỆ THỐNG (Boundaries of the System)

### 5.1 Những gì hệ thống sẽ làm
- ✅ Quản lý thông tin khách hàng và lịch hẹn
- ✅ Tự động hóa quy trình check-in
- ✅ Gửi thông báo và chiến dịch marketing
- ✅ Quản lý POS và tính toán hoa hồng
- ✅ Cung cấp báo cáo và thống kê
- ✅ Tích hợp với các nền tảng social media

### 5.2 Những gì hệ thống sẽ không làm
- ❌ Quản lý kho hàng chi tiết (chỉ cơ bản)
- ❌ Kế toán phức tạp (chỉ theo dõi doanh thu cơ bản)
- ❌ Quản lý nhân sự toàn diện (chỉ lịch làm và hoa hồng)
- ❌ Tích hợp với hệ thống ngân hàng (giai đoạn đầu)

### 5.3 Giới hạn kỹ thuật
- Hỗ trợ tối đa 1000 khách hàng/salon trong giai đoạn đầu
- Lưu trữ dữ liệu trong 2 năm
- Hỗ trợ 5 nhân viên/salon đồng thời

## 6. YÊU CẦU PHẦN CỨNG VÀ PHẦN MỀM (Hardware and Software Requirements)

### 6.1 Phía khách hàng (Client-side)
#### 6.1.1 Yêu cầu phần cứng
- **Smartphone**: Android 8.0+ hoặc iOS 12.0+
- **Tablet**: Cho POS (tùy chọn)
- **Máy tính**: Windows 10/macOS 10.14+ cho dashboard
- **Kết nối internet**: Tối thiểu 2Mbps

#### 6.1.2 Yêu cầu phần mềm
- **Trình duyệt web**: Chrome 90+, Safari 14+, Firefox 88+
- **Ứng dụng mobile**: Sẽ phát triển cho iOS và Android

### 6.2 Phía máy chủ (Server-side)
#### 6.2.1 Hạ tầng đám mây
- **Cloud Provider**: DigitalOcean/Google Cloud Platform
- **Database**: PostgreSQL cho dữ liệu chính, Redis cho cache
- **Storage**: Object storage cho hình ảnh và files
- **CDN**: Cloudflare cho tăng tốc

#### 6.2.2 Dịch vụ bên thứ ba
- **Firebase**: Notifications và real-time updates
- **SendGrid/Mailgun**: Gửi email
- **Twilio/Viettel**: Gửi SMS
- **Google Maps API**: Dịch vụ bản đồ

### 6.3 Ước tính chi phí vận hành
- **Giai đoạn đầu**: $50-100/tháng
- **Khi mở rộng**: $200-500/tháng
- **Quy mô lớn**: $500-1000/tháng

## 7. NGƯỜI DÙNG HỆ THỐNG (Users of the System)

### 7.1 Khách hàng salon (Primary Users)
- **Đặc điểm**: Chủ yếu là phụ nữ, 25-55 tuổi
- **Mục tiêu**: Check-in nhanh chóng, nhận thông tin khuyến mãi
- **Kỹ năng công nghệ**: Cơ bản đến trung bình
- **Quyền hạn**: Chỉ check-in và xem thông tin cá nhân

### 7.2 Chủ salon (Admin Users)
- **Đặc điểm**: Người quản lý, chủ doanh nghiệp
- **Mục tiêu**: Quản lý toàn bộ hoạt động salon
- **Kỹ năng công nghệ**: Trung bình đến cao
- **Quyền hạn**: Toàn quyền quản lý hệ thống

### 7.3 Nhân viên salon (Staff Users)
- **Đặc điểm**: Thợ nail, nhân viên tư vấn
- **Mục tiêu**: Sử dụng POS, xem lịch làm việc
- **Kỹ năng công nghệ**: Cơ bản
- **Quyền hạn**: Hạn chế, chỉ những chức năng cần thiết

### 7.4 Quản trị viên hệ thống (System Admin)
- **Đặc điểm**: Nhân viên IT của công ty
- **Mục tiêu**: Duy trì và hỗ trợ hệ thống
- **Kỹ năng công nghệ**: Cao
- **Quyền hạn**: Toàn quyền hệ thống

## 8. CHỨC NĂNG HỆ THỐNG (System Functions)

### 8.1 Chức năng Quản lý Khách hàng
- **F1.1**: Đăng ký khách hàng mới
- **F1.2**: Check-in khách hàng
- **F1.3**: Cập nhật thông tin khách hàng
- **F1.4**: Phân loại khách hàng tự động
- **F1.5**: Theo dõi lịch sử dịch vụ

### 8.2 Chức năng Quản lý Lịch hẹn
- **F2.1**: Tạo lịch hẹn mới
- **F2.2**: Đồng bộ lịch hẹn từ các kênh
- **F2.3**: Gửi nhắc hẹn tự động
- **F2.4**: Quản lý lịch làm việc nhân viên
- **F2.5**: Báo cáo lịch hẹn

### 8.3 Chức năng Marketing
- **F3.1**: Tạo chiến dịch khuyến mãi
- **F3.2**: Gửi email/SMS hàng loạt
- **F3.3**: Quản lý chiến dịch sinh nhật
- **F3.4**: Theo dõi hiệu quả chiến dịch
- **F3.5**: Quản lý mã giảm giá

### 8.4 Chức năng POS
- **F4.1**: Tính tiền dịch vụ
- **F4.2**: Quản lý sản phẩm
- **F4.3**: Tính hoa hồng nhân viên
- **F4.4**: Quản lý điểm thưởng
- **F4.5**: In hóa đơn

### 8.5 Chức năng Báo cáo
- **F5.1**: Báo cáo doanh thu
- **F5.2**: Báo cáo khách hàng
- **F5.3**: Báo cáo hiệu suất nhân viên
- **F5.4**: Báo cáo chiến dịch marketing
- **F5.5**: Dashboard tổng quan

### 8.6 Chức năng Quản trị
- **F6.1**: Quản lý người dùng
- **F6.2**: Phân quyền hệ thống
- **F6.3**: Cấu hình hệ thống
- **F6.4**: Backup và restore
- **F6.5**: Theo dõi hoạt động hệ thống

---

*Tài liệu này sẽ được cập nhật thường xuyên trong quá trình phát triển dự án.*
