import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

interface WelcomeScreenProps {
  onNext: (phoneNumber: string) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNext }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [displayNumber, setDisplayNumber] = useState('');

  const handleNumberPress = (num: string) => {
    if (displayNumber.length < 10) {
      const newNumber = phoneNumber + num;
      setPhoneNumber(newNumber);
      
      // Format display number
      let formatted = newNumber;
      if (newNumber.length > 3 && newNumber.length <= 6) {
        formatted = `${newNumber.slice(0, 3)} ${newNumber.slice(3)}`;
      } else if (newNumber.length > 6) {
        formatted = `${newNumber.slice(0, 3)} ${newNumber.slice(3, 6)} ${newNumber.slice(6)}`;
      }
      setDisplayNumber(formatted);
    }
  };

  const handleBackspace = () => {
    const newNumber = phoneNumber.slice(0, -1);
    setPhoneNumber(newNumber);
    
    let formatted = newNumber;
    if (newNumber.length > 3 && newNumber.length <= 6) {
      formatted = `${newNumber.slice(0, 3)} ${newNumber.slice(3)}`;
    } else if (newNumber.length > 6) {
      formatted = `${newNumber.slice(0, 3)} ${newNumber.slice(3, 6)} ${newNumber.slice(6)}`;
    }
    setDisplayNumber(formatted);
  };

  const handleNext = () => {
    if (phoneNumber.length >= 9) {
      onNext(`+84${phoneNumber}`);
    } else {
      Alert.alert('Lỗi', 'Vui lòng nhập đủ số điện thoại');
    }
  };

  const NumberButton = ({ number, onPress }: { number: string; onPress: () => void }) => (
    <TouchableOpacity style={styles.numberButton} onPress={onPress}>
      <Text style={styles.numberButtonText}>{number}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#8B5CF6" />
      
      <LinearGradient
        colors={['#8B5CF6', '#A855F7', '#C084FC']}
        style={styles.gradient}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Ionicons name="flower" size={32} color="#FFFFFF" />
          </View>
          <Text style={styles.brandName}>ELEGANT NAILS SPA</Text>
        </View>

        {/* Welcome Card */}
        <View style={styles.welcomeCard}>
          <View style={styles.iconContainer}>
            <Ionicons name="brush" size={64} color="#8B5CF6" />
          </View>
          <Text style={styles.welcomeText}>Welcome to Our Salon</Text>
        </View>

        {/* Phone Input Section */}
        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>Please enter your phone number</Text>
          
          <View style={styles.phoneInputContainer}>
            <Text style={styles.countryCode}>(+84)</Text>
            <Text style={styles.phoneDisplay}>
              {displayNumber || '___-___-____'}
            </Text>
          </View>

          <View style={styles.privacyNote}>
            <Text style={styles.privacyText}>Your info will not be shared</Text>
          </View>
        </View>

        {/* Number Pad */}
        <View style={styles.numberPad}>
          <View style={styles.numberRow}>
            <NumberButton number="1" onPress={() => handleNumberPress('1')} />
            <NumberButton number="2" onPress={() => handleNumberPress('2')} />
            <NumberButton number="3" onPress={() => handleNumberPress('3')} />
          </View>
          
          <View style={styles.numberRow}>
            <NumberButton number="4" onPress={() => handleNumberPress('4')} />
            <NumberButton number="5" onPress={() => handleNumberPress('5')} />
            <NumberButton number="6" onPress={() => handleNumberPress('6')} />
          </View>
          
          <View style={styles.numberRow}>
            <NumberButton number="7" onPress={() => handleNumberPress('7')} />
            <NumberButton number="8" onPress={() => handleNumberPress('8')} />
            <NumberButton number="9" onPress={() => handleNumberPress('9')} />
          </View>
          
          <View style={styles.numberRow}>
            <TouchableOpacity style={styles.numberButton} onPress={handleBackspace}>
              <Ionicons name="backspace" size={24} color="#4B5563" />
            </TouchableOpacity>
            
            <NumberButton number="0" onPress={() => handleNumberPress('0')} />
            
            <TouchableOpacity 
              style={[styles.numberButton, phoneNumber.length >= 9 && styles.nextButtonActive]} 
              onPress={handleNext}
              disabled={phoneNumber.length < 9}
            >
              <Ionicons 
                name="arrow-forward" 
                size={24} 
                color={phoneNumber.length >= 9 ? "#8B5CF6" : "#9CA3AF"} 
              />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B5CF6',
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoContainer: {
    marginBottom: 8,
  },
  brandName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  welcomeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  iconContainer: {
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
  },
  inputSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  inputLabel: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 16,
    textAlign: 'center',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginBottom: 12,
    minWidth: 280,
    justifyContent: 'center',
  },
  countryCode: {
    fontSize: 18,
    color: '#6B7280',
    marginRight: 8,
  },
  phoneDisplay: {
    fontSize: 18,
    color: '#1F2937',
    fontWeight: '500',
    letterSpacing: 1,
  },
  privacyNote: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderStyle: 'dashed',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  privacyText: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  numberPad: {
    flex: 1,
    justifyContent: 'center',
    maxHeight: 320,
  },
  numberRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  numberButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  numberButtonText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1F2937',
  },
  nextButtonActive: {
    backgroundColor: '#F3E8FF',
  },
});

export default WelcomeScreen;
