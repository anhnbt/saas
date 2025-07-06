# CẤU TRÚC CƠ SỞ DỮ LIỆU - SAAS QUẢN LÝ SALON NAILS

## 1. THIẾT KẾ CƠ SỞ DỮ LIỆU (Database Structure)

### 1.1 Danh sách các bảng chính

| STT | Tên bảng      | Mô tả                  | Số cột |
| --- | ------------- | ---------------------- | ------ |
| 1   | salons        | Thông tin salon        | 12     |
| 2   | customers     | Thông tin khách hàng   | 15     |
| 3   | staff         | Thông tin nhân viên    | 13     |
| 4   | services      | Dịch vụ salon          | 10     |
| 5   | products      | Sản phẩm bán tại salon | 12     |
| 6   | appointments  | Lịch hẹn               | 11     |
| 7   | visits        | Lịch sử check-in       | 9      |
| 8   | orders        | Đơn hàng/Hóa đơn       | 10     |
| 9   | order_details | Chi tiết đơn hàng      | 8      |
| 10  | campaigns     | Chiến dịch marketing   | 12     |
| 11  | notifications | Thông báo              | 9      |
| 12  | reviews       | Đánh giá khách hàng    | 8      |

### 1.2 Chi tiết cấu trúc bảng

#### 1.2.1 Bảng SALONS
```sql
CREATE TABLE salons (
    salon_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255),
    owner_name VARCHAR(255) NOT NULL,
    business_license VARCHAR(100),
    tax_code VARCHAR(50),
    status VARCHAR(20) DEFAULT 'active',
    subscription_plan VARCHAR(50) DEFAULT 'basic',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### 1.2.2 Bảng CUSTOMERS
```sql
CREATE TABLE customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    salon_id INT,
    phone_number VARCHAR(20) NOT NULL UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    birthday DATE,
    gender VARCHAR(10),
    address TEXT,
    customer_type VARCHAR(20) DEFAULT 'new',
    total_visits INTEGER DEFAULT 0,
    total_spent DECIMAL(10,2) DEFAULT 0,
    loyalty_points INTEGER DEFAULT 0,
    last_visit TIMESTAMP,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 1.2.3 Bảng STAFF
```sql
CREATE TABLE staff (
    staff_id SERIAL PRIMARY KEY,
    salon_id INTEGER REFERENCES salons(salon_id),
    username VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    email VARCHAR(255),
    role VARCHAR(20) DEFAULT 'employee',
    commission_rate DECIMAL(5,2) DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    hire_date DATE,
    salary DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 1.2.4 Bảng SERVICES
```sql
CREATE TABLE services (
    service_id SERIAL PRIMARY KEY,
    salon_id INTEGER REFERENCES salons(salon_id),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    duration INTEGER, -- minutes
    category VARCHAR(100),
    commission_rate DECIMAL(5,2) DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 1.2.5 Bảng PRODUCTS
```sql
CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    salon_id INTEGER REFERENCES salons(salon_id),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    cost DECIMAL(10,2),
    stock_quantity INTEGER DEFAULT 0,
    category VARCHAR(100),
    brand VARCHAR(100),
    barcode VARCHAR(100),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 1.2.6 Bảng APPOINTMENTS
```sql
CREATE TABLE appointments (
    appointment_id SERIAL PRIMARY KEY,
    salon_id INTEGER REFERENCES salons(salon_id),
    customer_id INTEGER REFERENCES customers(customer_id),
    staff_id INTEGER REFERENCES staff(staff_id),
    service_id INTEGER REFERENCES services(service_id),
    appointment_datetime TIMESTAMP NOT NULL,
    duration INTEGER, -- minutes
    status VARCHAR(20) DEFAULT 'scheduled',
    notes TEXT,
    source VARCHAR(50), -- 'facebook', 'google', 'zalo', 'manual'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 1.2.7 Bảng VISITS
```sql
CREATE TABLE visits (
    visit_id SERIAL PRIMARY KEY,
    salon_id INTEGER REFERENCES salons(salon_id),
    customer_id INTEGER REFERENCES customers(customer_id),
    visit_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    check_in_method VARCHAR(20) DEFAULT 'mobile', -- 'mobile', 'manual'
    staff_id INTEGER REFERENCES staff(staff_id),
    services_received TEXT[], -- array of service names
    total_spent DECIMAL(10,2) DEFAULT 0,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 1.2.8 Bảng ORDERS
```sql
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    salon_id INTEGER REFERENCES salons(salon_id),
    customer_id INTEGER REFERENCES customers(customer_id),
    staff_id INTEGER REFERENCES staff(staff_id),
    visit_id INTEGER REFERENCES visits(visit_id),
    total_amount DECIMAL(10,2) NOT NULL,
    discount_amount DECIMAL(10,2) DEFAULT 0,
    tax_amount DECIMAL(10,2) DEFAULT 0,
    commission_amount DECIMAL(10,2) DEFAULT 0,
    payment_method VARCHAR(50),
    status VARCHAR(20) DEFAULT 'completed',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 1.2.9 Bảng ORDER_DETAILS
```sql
CREATE TABLE order_details (
    detail_id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(order_id),
    item_type VARCHAR(20) NOT NULL, -- 'service' or 'product'
    item_id INTEGER NOT NULL, -- service_id or product_id
    item_name VARCHAR(255) NOT NULL,
    quantity INTEGER DEFAULT 1,
    unit_price DECIMAL(10,2) NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    commission_rate DECIMAL(5,2) DEFAULT 0
);
```

#### 1.2.10 Bảng CAMPAIGNS
```sql
CREATE TABLE campaigns (
    campaign_id SERIAL PRIMARY KEY,
    salon_id INTEGER REFERENCES salons(salon_id),
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL, -- 'promotion', 'birthday', 'reminder'
    target_customer_type VARCHAR(20), -- 'all', 'vip', 'regular', 'new', 'at_risk'
    discount_type VARCHAR(20), -- 'percentage', 'fixed_amount'
    discount_value DECIMAL(10,2),
    start_date DATE,
    end_date DATE,
    message_template TEXT,
    status VARCHAR(20) DEFAULT 'draft',
    total_sent INTEGER DEFAULT 0,
    total_used INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 1.2.11 Bảng NOTIFICATIONS
```sql
CREATE TABLE notifications (
    notification_id SERIAL PRIMARY KEY,
    salon_id INTEGER REFERENCES salons(salon_id),
    customer_id INTEGER REFERENCES customers(customer_id),
    campaign_id INTEGER REFERENCES campaigns(campaign_id),
    type VARCHAR(50) NOT NULL, -- 'sms', 'email', 'push'
    title VARCHAR(255),
    content TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'sent', 'failed'
    sent_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 1.2.12 Bảng REVIEWS
```sql
CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    salon_id INTEGER REFERENCES salons(salon_id),
    customer_id INTEGER REFERENCES customers(customer_id),
    visit_id INTEGER REFERENCES visits(visit_id),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    is_public BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 1.3 Bảng bổ sung cho hệ thống

#### 1.3.1 Bảng ADMIN_USERS
```sql
CREATE TABLE admin_users (
    admin_id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    role VARCHAR(20) DEFAULT 'admin',
    is_active BOOLEAN DEFAULT true,
    last_login TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 1.3.2 Bảng SYSTEM_SETTINGS
```sql
CREATE TABLE system_settings (
    setting_id SERIAL PRIMARY KEY,
    salon_id INTEGER REFERENCES salons(salon_id),
    setting_key VARCHAR(100) NOT NULL,
    setting_value TEXT,
    data_type VARCHAR(20) DEFAULT 'string',
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(salon_id, setting_key)
);
```

#### 1.3.3 Bảng AUDIT_LOGS
```sql
CREATE TABLE audit_logs (
    log_id SERIAL PRIMARY KEY,
    salon_id INTEGER REFERENCES salons(salon_id),
    user_id INTEGER,
    user_type VARCHAR(20), -- 'admin', 'staff', 'customer'
    action VARCHAR(100) NOT NULL,
    table_name VARCHAR(100),
    record_id INTEGER,
    old_values JSONB,
    new_values JSONB,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 2. INDEXES VÀ CONSTRAINTS

### 2.1 Primary Keys và Foreign Keys
```sql
-- Primary Keys đã được định nghĩa trong CREATE TABLE statements

-- Additional Indexes for performance
CREATE INDEX idx_customers_salon_phone ON customers(salon_id, phone_number);
CREATE INDEX idx_customers_type ON customers(customer_type);
CREATE INDEX idx_visits_salon_date ON visits(salon_id, visit_datetime);
CREATE INDEX idx_appointments_salon_datetime ON appointments(salon_id, appointment_datetime);
CREATE INDEX idx_orders_salon_date ON orders(salon_id, created_at);
CREATE INDEX idx_notifications_status ON notifications(status);
CREATE INDEX idx_staff_salon_active ON staff(salon_id, is_active);
```

### 2.2 Triggers và Functions

#### 2.2.1 Trigger cập nhật customer stats
```sql
CREATE OR REPLACE FUNCTION update_customer_stats()
RETURNS TRIGGER AS $$
BEGIN
    -- Update total visits and last visit
    UPDATE customers 
    SET total_visits = total_visits + 1,
        last_visit = NEW.visit_datetime,
        updated_at = CURRENT_TIMESTAMP
    WHERE customer_id = NEW.customer_id;
    
    -- Update customer type based on visit frequency
    UPDATE customers 
    SET customer_type = CASE 
        WHEN total_visits >= 10 THEN 'vip'
        WHEN total_visits >= 5 THEN 'regular'
        WHEN last_visit < CURRENT_DATE - INTERVAL '90 days' THEN 'at_risk'
        ELSE 'regular'
    END
    WHERE customer_id = NEW.customer_id;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_customer_stats
    AFTER INSERT ON visits
    FOR EACH ROW
    EXECUTE FUNCTION update_customer_stats();
```

#### 2.2.2 Trigger cập nhật total spent
```sql
CREATE OR REPLACE FUNCTION update_customer_total_spent()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE customers 
    SET total_spent = total_spent + NEW.total_amount,
        loyalty_points = loyalty_points + FLOOR(NEW.total_amount),
        updated_at = CURRENT_TIMESTAMP
    WHERE customer_id = NEW.customer_id;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_customer_total_spent
    AFTER INSERT ON orders
    FOR EACH ROW
    EXECUTE FUNCTION update_customer_total_spent();
```

## 3. VIEWS VÀ STORED PROCEDURES

### 3.1 Views for reporting

#### 3.1.1 Customer Summary View
```sql
CREATE VIEW customer_summary AS
SELECT 
    c.customer_id,
    c.salon_id,
    c.full_name,
    c.phone_number,
    c.customer_type,
    c.total_visits,
    c.total_spent,
    c.loyalty_points,
    c.last_visit,
    COALESCE(AVG(r.rating), 0) as avg_rating,
    COUNT(r.review_id) as total_reviews
FROM customers c
LEFT JOIN reviews r ON c.customer_id = r.customer_id
GROUP BY c.customer_id;
```

#### 3.1.2 Daily Revenue View
```sql
CREATE VIEW daily_revenue AS
SELECT 
    salon_id,
    DATE(created_at) as revenue_date,
    COUNT(*) as total_orders,
    SUM(total_amount) as total_revenue,
    AVG(total_amount) as avg_order_value,
    SUM(commission_amount) as total_commission
FROM orders
WHERE status = 'completed'
GROUP BY salon_id, DATE(created_at)
ORDER BY salon_id, revenue_date DESC;
```

### 3.2 Stored Procedures

#### 3.2.1 Procedure tạo báo cáo doanh thu
```sql
CREATE OR REPLACE FUNCTION get_revenue_report(
    p_salon_id INTEGER,
    p_start_date DATE,
    p_end_date DATE
)
RETURNS TABLE(
    report_date DATE,
    total_orders INTEGER,
    total_revenue DECIMAL(10,2),
    total_commission DECIMAL(10,2),
    new_customers INTEGER,
    returning_customers INTEGER
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        DATE(o.created_at) as report_date,
        COUNT(*)::INTEGER as total_orders,
        SUM(o.total_amount) as total_revenue,
        SUM(o.commission_amount) as total_commission,
        COUNT(CASE WHEN c.total_visits = 1 THEN 1 END)::INTEGER as new_customers,
        COUNT(CASE WHEN c.total_visits > 1 THEN 1 END)::INTEGER as returning_customers
    FROM orders o
    JOIN customers c ON o.customer_id = c.customer_id
    WHERE o.salon_id = p_salon_id
    AND DATE(o.created_at) BETWEEN p_start_date AND p_end_date
    AND o.status = 'completed'
    GROUP BY DATE(o.created_at)
    ORDER BY report_date DESC;
END;
$$ LANGUAGE plpgsql;
```

## 4. DATA MIGRATION VÀ SEEDING

### 4.1 Sample Data for Testing (MySQL)
```sql
-- Insert sample salon
INSERT INTO salons (name, address, phone, email, owner_name) VALUES
('Elegant Nails Spa', '123 Main St, District 1, Ho Chi Minh City', '0901234567', 'info@elegantnails.com', 'Nguyen Van A');

-- Insert sample services
INSERT INTO services (salon_id, name, price, duration, category) VALUES
(1, 'Classic Manicure', 150000, 45, 'Manicure'),
(1, 'Gel Manicure', 250000, 60, 'Manicure'),
(1, 'Classic Pedicure', 200000, 60, 'Pedicure'),
(1, 'Nail Art', 300000, 90, 'Art');

-- Insert sample staff
INSERT INTO staff (salon_id, username, password_hash, full_name, role, commission_rate) VALUES
(1, 'admin', '$2b$10$...', 'Nguyen Van A', 'admin', 0),
(1, 'staff01', '$2b$10$...', 'Tran Thi B', 'employee', 15);

-- Insert sample customers
INSERT INTO customers (salon_id, phone_number, full_name, customer_type) VALUES
(1, '0987654321', 'Le Thi C', 'regular'),
(1, '0976543210', 'Pham Van D', 'vip');
```

---

*Tài liệu cơ sở dữ liệu này sẽ được cập nhật khi có thay đổi trong thiết kế.*
