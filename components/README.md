# Package Dependencies for Welcome Screen

This document lists the required packages to run the Welcome Screen component.

## Required Dependencies

```json
{
  "dependencies": {
    "expo": "~51.0.0",
    "expo-linear-gradient": "~13.0.2",
    "@expo/vector-icons": "^14.0.0",
    "react": "18.2.0",
    "react-native": "0.74.0"
  },
  "devDependencies": {
    "@types/react": "~18.2.79",
    "@types/react-native": "~0.73.0",
    "typescript": "~5.3.3"
  }
}
```

## Installation Commands

```bash
npx expo install expo-linear-gradient
npx expo install @expo/vector-icons
```

## Component Usage

```tsx
import WelcomeScreen from './components/WelcomeScreen';

// In your app
const App = () => {
  const handlePhoneSubmit = (phoneNumber: string) => {
    console.log('Phone number submitted:', phoneNumber);
    // Navigate to next screen or process the phone number
  };

  return <WelcomeScreen onNext={handlePhoneSubmit} />;
};
```

## Features Included

- ✅ Gradient background matching design
- ✅ Interactive number pad
- ✅ Phone number formatting (xxx xxx xxxx)
- ✅ Input validation
- ✅ Responsive design for mobile devices
- ✅ Icons using Expo vector icons
- ✅ Smooth animations and transitions
- ✅ TypeScript support
- ✅ Accessibility friendly

## Design System

The component follows the design system defined in `figma-welcome-screen.json` with:
- Primary color: #8B5CF6 (Purple)
- Typography: Inter font family
- Consistent spacing and shadows
- Mobile-first responsive design
