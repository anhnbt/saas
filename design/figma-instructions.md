# Figma Design Instructions for Welcome Screen

## How to Use the Figma Component Structure

1. **Import the JSON structure** from `figma-welcome-screen.json`
2. **Create the main frame** (375×812) with the gradient background
3. **Use the component hierarchy** as defined in the JSON

## Step-by-Step Figma Setup

### 1. Create Main Frame
- Width: 375px, Height: 812px
- Background: Linear gradient from #8B5CF6 to #C084FC (vertical)

### 2. Add Header Section
- Position: 24px from left, 60px from top
- Contains logo icon and brand name
- Use Inter font family

### 3. Create Welcome Card
- White background with 16px corner radius
- Add drop shadow: 0px 4px 12px rgba(0,0,0,0.15)
- Center the nail icon and welcome text

### 4. Phone Input Section
- Input field with white background
- Placeholder text formatting
- Dashed border privacy note

### 5. Number Pad Component
- Create master component "Number Button"
- 72×72px circles with shadows
- Arrange in 4×3 grid with 16px spacing

## Color Palette
```
Primary: #8B5CF6
Primary Light: #A855F7  
Primary Lighter: #C084FC
White: #FFFFFF
Text Primary: #1F2937
Text Secondary: #6B7280
Text Muted: #9CA3AF
```

## Typography Scale
```
Brand Name: Inter Bold 24px, Letter Spacing 1px
Welcome Title: Inter SemiBold 20px
Body Text: Inter Regular 16px
Phone Display: Inter Medium 18px, Letter Spacing 1px
Number Buttons: Inter SemiBold 24px
```

## Component States
- Default number buttons
- Active/pressed states
- Disabled next button state
- Filled phone number state

## Icons Needed
- Flower icon (header)
- Brush/nail icon (welcome card)
- Backspace icon
- Arrow forward icon

## Responsive Considerations
- Design for 375px mobile width
- Maintain 24px side margins
- Ensure touch targets are minimum 44px
- Test on various screen sizes

## Figma Plugins Recommended
- **Iconify** - For consistent icons
- **Stark** - For accessibility checking
- **Component Inspector** - For component organization
