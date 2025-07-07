# Cách Import JSON Structure vào Figma

JSON structure không thể import trực tiếp vào Figma. Dưới đây là các cách khác nhau để sử dụng:

## 🔧 Phương pháp 1: Sử dụng Figma Plugin (Khuyến nghị)

### Bước 1: Tạo Figma Plugin
1. Mở Figma → **Plugins** → **Development** → **New Plugin**
2. Chọn **"With UI & browser APIs"**
3. Thay thế code trong `code.ts` bằng script từ file `figma-plugin-script.js`

### Bước 2: Run Plugin
1. **Plugins** → **Development** → **Your Plugin Name**
2. Plugin sẽ tự động tạo toàn bộ Welcome Screen theo JSON structure

## 🎨 Phương pháp 2: Manual Setup (Thủ công)

### Tạo theo từng bước:

#### 1. Main Frame
```
- Create Frame: 375×812px
- Name: "Welcome Screen - Elegant Nails Spa"
- Background: Linear gradient #8B5CF6 → #C084FC
```

#### 2. Header Section
```
- Frame: 327×80px, position (24, 60)
- Logo: Circle 32×32px, white color
- Text: "ELEGANT NAILS SPA", Inter Bold 24px, white
```

#### 3. Welcome Card
```
- Frame: 327×160px, position (24, 180)
- Background: White, corner radius 16px
- Shadow: 0px 4px 12px rgba(0,0,0,0.15)
- Icon: 64×64px circle, purple color
- Text: "Welcome to Our Salon", Inter SemiBold 20px
```

#### 4. Input Section
```
- Frame: 327×120px, position (24, 380)
- Label: "Please enter your phone number"
- Input field: 280×56px, white background, radius 12px
- Privacy note: Dashed border frame
```

#### 5. Number Pad
```
- Create 4×3 grid of circular buttons (72×72px each)
- 96px horizontal spacing, 88px vertical spacing
- Numbers 1-9, backspace, 0, arrow icons
```

## 🚀 Phương pháp 3: Copy từ Expo Component

### Bước 1: Run Expo App
```bash
cd d:\project\saas
npx expo start
```

### Bước 2: Screenshot & Trace
1. Chạy `WelcomeScreen.tsx` trên device/simulator
2. Screenshot màn hình
3. Import image vào Figma
4. Trace lại design theo component

## 📋 Phương pháp 4: Sử dụng Design Tokens

### Tạo Design System trước:

#### Colors
```
Primary: #8B5CF6
Primary Light: #A855F7
Primary Lighter: #C084FC
White: #FFFFFF
Text Primary: #1F2937
Text Secondary: #6B7280
```

#### Typography
```
Brand Name: Inter Bold 24px
Welcome Title: Inter SemiBold 20px
Body: Inter Regular 16px
Phone Display: Inter Medium 18px
Number Button: Inter SemiBold 24px
```

#### Components
1. **Number Button**: 72×72px circle, white bg, shadow
2. **Input Field**: 280×56px, white bg, radius 12px
3. **Card**: White bg, radius 16px, shadow

## 🔄 Figma Plugins Hữu ích

### 1. **JSON to Figma** Plugin
- Search "JSON to Figma" trong plugin store
- Có thể convert một phần JSON structure

### 2. **Figma to Code** Plugins
- **Anima**: Convert design to React code
- **Figma to React**: Generate component code
- **Figma Tokens**: Manage design tokens

### 3. **Design System Plugins**
- **Design Tokens**: Sync colors/typography
- **Component Creator**: Auto-create variants
- **Auto Layout**: Smart spacing & alignment

## 💡 Tips & Best Practices

### 1. Component Organization
```
📁 Welcome Screen
  ├── 🎨 Design Tokens
  ├── 🔧 Base Components
  │   ├── Number Button
  │   ├── Input Field
  │   └── Card
  └── 📱 Screen Layout
```

### 2. Auto Layout Setup
- Use Auto Layout cho responsive design
- Set proper spacing (24px, 40px, 16px)
- Configure resizing rules

### 3. Component Variants
- Create button states (default, pressed, disabled)
- Input states (empty, filled, error)
- Theme variants (light/dark)

### 4. Documentation
- Add descriptions to components
- Document color usage
- Create style guide

## 🔗 Liên kết hữu ích

- [Figma Plugin API](https://www.figma.com/plugin-docs/)
- [Design Tokens W3C](https://design-tokens.github.io/community-group/)
- [Figma to React Tools](https://www.figma.com/community/tag/figma%20to%20code)

## ⚡ Quick Start

Cách nhanh nhất:
1. Copy script từ `figma-plugin-script.js`
2. Tạo Figma plugin mới
3. Run plugin để generate toàn bộ design
4. Customize theo brand của bạn
