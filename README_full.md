# SaaS Quản Lý Salon Nails

# 📚 TÀI LIỆU HỆ THỐNG & HƯỚNG DẪN SỬ DỤNG

Toàn bộ tài liệu phân tích, thiết kế, đặc tả hệ thống SaaS quản lý salon nails đã được phân tách rõ ràng trong thư mục `Documentation/`:

- `business-requirements.md`: Yêu cầu nghiệp vụ, mục tiêu kinh doanh, bài toán thực tế.
- `functional-spec.md`: Đặc tả chức năng, luồng nghiệp vụ, các tính năng chính.
- `user-requirements.md`: Đặc tả vai trò, nhu cầu, quyền hạn từng loại người dùng.
- `architecture-design.md`: Kiến trúc hệ thống, tech stack, microservices, bảo mật, DevOps.
- `database-structure.md`: Thiết kế cơ sở dữ liệu, ERD, mô hình bảng, quan hệ dữ liệu.
- `screen-design.md`: Thiết kế giao diện, wireframe, mô tả màn hình chính.
- `project-management.md`: Lộ trình phát triển, quản lý dự án, phân chia giai đoạn.

> 📄 Mỗi file tập trung vào một chủ đề riêng biệt, không trùng lặp. Khi cần chỉnh sửa, hãy cập nhật trực tiếp file tương ứng trong `Documentation/`.

---

mô hình SaaS	subscription hàng tháng) hoặc đóng gói bán trọn gói cho từng tiệm		
Module	Hạng mục	Mô tả	Ước tính	tech stack
  Backend (Spring Boot API)	App + Auth + DB + Admin	1 dev backend full-stack	Spring Boot → API
  Frontend Dashboard (ReactJS)	Dành cho chủ tiệm	1 dev web	ReactJS → Dashboard
  Customer (NextJS + React Native)	Web + mobile checkin	"\t1 dev UI"\tReact Native → App
  Firebase/Pusher/Mailgun…	Gói Free hoặc trả phí nhẹ	"\t~$0–50/tháng"\tFirebase → Notif/Realtime
  Hosting (VPS, DB, object storage)	DigitalOcean / GCP	~$20–100/tháng khi scale	Mailgun → Email
  bắt đầu rất nhẹ			Twilio hoặc Viettel → SMS
        
  Ước tính chi phí từng giai đoạn phát triển			
  "Gợi ý pricing strategy (giá bán)
"

