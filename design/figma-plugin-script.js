// Figma Plugin Script to Import Welcome Screen Design
// This script converts the JSON structure to Figma frames and components

// Main function to create the welcome screen
function createWelcomeScreen() {
  const designData = {
    "figma_component_structure": {
      "name": "Welcome Screen - Elegant Nails Spa",
      "type": "Frame",
      "width": 375,
      "height": 812,
      "background": {
        "type": "linear_gradient",
        "colors": ["#8B5CF6", "#A855F7", "#C084FC"],
        "direction": "vertical"
      }
      // ... rest of your JSON data
    }
  };

  // Create main frame
  const mainFrame = figma.createFrame();
  mainFrame.name = designData.figma_component_structure.name;
  mainFrame.resize(
    designData.figma_component_structure.width,
    designData.figma_component_structure.height
  );

  // Create gradient background
  const gradientColors = designData.figma_component_structure.background.colors;
  const paint = {
    type: 'GRADIENT_LINEAR',
    gradientTransform: [
      [1, 0, 0],
      [0, 1, 0]
    ],
    gradientStops: gradientColors.map((color, index) => ({
      color: hexToRgb(color),
      position: index / (gradientColors.length - 1)
    }))
  };
  mainFrame.fills = [paint];

  // Create header section
  createHeader(mainFrame);
  
  // Create welcome card
  createWelcomeCard(mainFrame);
  
  // Create input section
  createInputSection(mainFrame);
  
  // Create number pad
  createNumberPad(mainFrame);

  // Center the frame in viewport
  figma.viewport.scrollAndZoomIntoView([mainFrame]);
  
  figma.closePlugin("Welcome Screen created successfully!");
}

// Helper function to convert hex to RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16) / 255,
    g: parseInt(result[2], 16) / 255,
    b: parseInt(result[3], 16) / 255,
    a: 1
  } : { r: 0, g: 0, b: 0, a: 1 };
}

// Create header section
function createHeader(parent) {
  const header = figma.createFrame();
  header.name = "Header";
  header.resize(327, 80);
  header.x = 24;
  header.y = 60;
  header.fills = []; // Transparent
  
  // Create logo icon placeholder
  const logoIcon = figma.createEllipse();
  logoIcon.name = "Logo Icon";
  logoIcon.resize(32, 32);
  logoIcon.x = 147.5;
  logoIcon.y = 0;
  logoIcon.fills = [{
    type: 'SOLID',
    color: hexToRgb("#FFFFFF")
  }];
  
  // Create brand name text
  const brandText = figma.createText();
  brandText.name = "Brand Name";
  brandText.characters = "ELEGANT NAILS SPA";
  brandText.fontSize = 24;
  brandText.fontName = { family: "Inter", style: "Bold" };
  brandText.fills = [{
    type: 'SOLID',
    color: hexToRgb("#FFFFFF")
  }];
  brandText.textAlignHorizontal = "CENTER";
  brandText.resize(327, 32);
  brandText.x = 0;
  brandText.y = 48;
  
  header.appendChild(logoIcon);
  header.appendChild(brandText);
  parent.appendChild(header);
}

// Create welcome card
function createWelcomeCard(parent) {
  const card = figma.createFrame();
  card.name = "Welcome Card";
  card.resize(327, 160);
  card.x = 24;
  card.y = 180;
  card.fills = [{
    type: 'SOLID',
    color: hexToRgb("#FFFFFF")
  }];
  card.cornerRadius = 16;
  
  // Add shadow
  card.effects = [{
    type: 'DROP_SHADOW',
    color: { r: 0, g: 0, b: 0, a: 0.15 },
    offset: { x: 0, y: 4 },
    radius: 12,
    visible: true
  }];
  
  // Create nail icon placeholder
  const nailIcon = figma.createEllipse();
  nailIcon.name = "Nail Icon";
  nailIcon.resize(64, 64);
  nailIcon.x = 131.5;
  nailIcon.y = 32;
  nailIcon.fills = [{
    type: 'SOLID',
    color: hexToRgb("#8B5CF6")
  }];
  
  // Create welcome text
  const welcomeText = figma.createText();
  welcomeText.name = "Welcome Text";
  welcomeText.characters = "Welcome to Our Salon";
  welcomeText.fontSize = 20;
  welcomeText.fontName = { family: "Inter", style: "SemiBold" };
  welcomeText.fills = [{
    type: 'SOLID',
    color: hexToRgb("#1F2937")
  }];
  welcomeText.textAlignHorizontal = "CENTER";
  welcomeText.resize(267, 28);
  welcomeText.x = 30;
  welcomeText.y = 112;
  
  card.appendChild(nailIcon);
  card.appendChild(welcomeText);
  parent.appendChild(card);
}

// Create input section
function createInputSection(parent) {
  const inputSection = figma.createFrame();
  inputSection.name = "Input Section";
  inputSection.resize(327, 120);
  inputSection.x = 24;
  inputSection.y = 380;
  inputSection.fills = []; // Transparent
  
  // Create input label
  const inputLabel = figma.createText();
  inputLabel.name = "Input Label";
  inputLabel.characters = "Please enter your phone number";
  inputLabel.fontSize = 16;
  inputLabel.fontName = { family: "Inter", style: "Regular" };
  inputLabel.fills = [{
    type: 'SOLID',
    color: hexToRgb("#FFFFFF")
  }];
  inputLabel.textAlignHorizontal = "CENTER";
  inputLabel.resize(327, 24);
  inputLabel.x = 0;
  inputLabel.y = 0;
  
  // Create phone input
  const phoneInput = figma.createFrame();
  phoneInput.name = "Phone Input";
  phoneInput.resize(280, 56);
  phoneInput.x = 23.5;
  phoneInput.y = 40;
  phoneInput.fills = [{
    type: 'SOLID',
    color: hexToRgb("#FFFFFF")
  }];
  phoneInput.cornerRadius = 12;
  
  // Create country code text
  const countryCode = figma.createText();
  countryCode.name = "Country Code";
  countryCode.characters = "(+84)";
  countryCode.fontSize = 18;
  countryCode.fontName = { family: "Inter", style: "Regular" };
  countryCode.fills = [{
    type: 'SOLID',
    color: hexToRgb("#6B7280")
  }];
  countryCode.x = 20;
  countryCode.y = 16;
  
  // Create phone display text
  const phoneDisplay = figma.createText();
  phoneDisplay.name = "Phone Display";
  phoneDisplay.characters = "___-___-____";
  phoneDisplay.fontSize = 18;
  phoneDisplay.fontName = { family: "Inter", style: "Medium" };
  phoneDisplay.fills = [{
    type: 'SOLID',
    color: hexToRgb("#1F2937")
  }];
  phoneDisplay.x = 72;
  phoneDisplay.y = 16;
  
  phoneInput.appendChild(countryCode);
  phoneInput.appendChild(phoneDisplay);
  
  // Create privacy note
  const privacyNote = figma.createFrame();
  privacyNote.name = "Privacy Note";
  privacyNote.resize(200, 32);
  privacyNote.x = 63.5;
  privacyNote.y = 108;
  privacyNote.fills = []; // Transparent
  privacyNote.strokes = [{
    type: 'SOLID',
    color: hexToRgb("#FFFFFF")
  }];
  privacyNote.strokeWeight = 1;
  privacyNote.strokeDashes = [5, 5];
  privacyNote.cornerRadius = 8;
  
  const privacyText = figma.createText();
  privacyText.name = "Privacy Text";
  privacyText.characters = "Your info will not be shared";
  privacyText.fontSize = 14;
  privacyText.fontName = { family: "Inter", style: "Regular" };
  privacyText.fills = [{
    type: 'SOLID',
    color: { ...hexToRgb("#FFFFFF"), a: 0.8 }
  }];
  privacyText.textAlignHorizontal = "CENTER";
  privacyText.x = 16;
  privacyText.y = 6;
  
  privacyNote.appendChild(privacyText);
  
  inputSection.appendChild(inputLabel);
  inputSection.appendChild(phoneInput);
  inputSection.appendChild(privacyNote);
  parent.appendChild(inputSection);
}

// Create number pad
function createNumberPad(parent) {
  const numberPad = figma.createFrame();
  numberPad.name = "Number Pad";
  numberPad.resize(264, 320);
  numberPad.x = 55.5;
  numberPad.y = 540;
  numberPad.fills = []; // Transparent
  
  // Create number buttons
  const numbers = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['⌫', '0', '→']
  ];
  
  numbers.forEach((row, rowIndex) => {
    row.forEach((num, colIndex) => {
      const button = createNumberButton(num);
      button.x = colIndex * 96;
      button.y = rowIndex * 88;
      numberPad.appendChild(button);
    });
  });
  
  parent.appendChild(numberPad);
}

// Create individual number button
function createNumberButton(number) {
  const button = figma.createFrame();
  button.name = `Button ${number}`;
  button.resize(72, 72);
  button.fills = [{
    type: 'SOLID',
    color: hexToRgb("#FFFFFF")
  }];
  button.cornerRadius = 36;
  
  // Add shadow
  button.effects = [{
    type: 'DROP_SHADOW',
    color: { r: 0, g: 0, b: 0, a: 0.1 },
    offset: { x: 0, y: 2 },
    radius: 4,
    visible: true
  }];
  
  // Create button text
  const buttonText = figma.createText();
  buttonText.name = "Number Text";
  buttonText.characters = number;
  buttonText.fontSize = 24;
  buttonText.fontName = { family: "Inter", style: "SemiBold" };
  buttonText.fills = [{
    type: 'SOLID',
    color: hexToRgb("#1F2937")
  }];
  buttonText.textAlignHorizontal = "CENTER";
  buttonText.textAlignVertical = "CENTER";
  buttonText.resize(72, 72);
  
  button.appendChild(buttonText);
  return button;
}

// Run the main function
createWelcomeScreen();
