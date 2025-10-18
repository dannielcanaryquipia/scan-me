 # Google Apps Script Codes for Each Product

## Overview
Each product needs its own Google Apps Script to handle form submissions. Here are the specific codes for each product's Google Sheet.

## Pastiyum (Sheet ID: 14CSGeIU9_YXpQ2di55oqymDM3RXZV3G07Cw5PX-XoFs)

```javascript
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Open the specific spreadsheet by ID
    const sheet = SpreadsheetApp.openById('14CSGeIU9_YXpQ2di55oqymDM3RXZV3G07Cw5PX-XoFs').getActiveSheet();
    
    // Add headers if this is the first row
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 6).setValues([
        ['Reviewer Name', 'Date of Purchase', 'Overall Satisfaction', 'Texture Feedback', 'Packaging Feedback', 'Suggestions for Improvement']
      ]);
    }
    
    // Add the new review data
    const newRow = [
      data.reviewerName || 'Anonymous',
      data.dateOfPurchase || new Date().toISOString().split('T')[0],
      data.overallSatisfaction,
      data.textureFeedback,
      data.packagingFeedback,
      data.suggestionsForImprovement
    ];
    
    sheet.appendRow(newRow);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Langka Chips (Sheet ID: 14V8YbK7XrSGKRi1k5eh3KXYDn_lTecuSdsq_nurwNmg)

```javascript
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Open the specific spreadsheet by ID
    const sheet = SpreadsheetApp.openById('14V8YbK7XrSGKRi1k5eh3KXYDn_lTecuSdsq_nurwNmg').getActiveSheet();
    
    // Add headers if this is the first row
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 6).setValues([
        ['Reviewer Name', 'Date of Purchase', 'Overall Satisfaction', 'Texture Feedback', 'Packaging Feedback', 'Suggestions for Improvement']
      ]);
    }
    
    // Add the new review data
    const newRow = [
      data.reviewerName || 'Anonymous',
      data.dateOfPurchase || new Date().toISOString().split('T')[0],
      data.overallSatisfaction,
      data.textureFeedback,
      data.packagingFeedback,
      data.suggestionsForImprovement
    ];
    
    sheet.appendRow(newRow);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Palawan Chips (Sheet ID: 1hDk0Xbn8n84a4Dy7LaC4mnq3aYjnUsS1tpXiF0VzRsA)

```javascript
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Open the specific spreadsheet by ID
    const sheet = SpreadsheetApp.openById('1hDk0Xbn8n84a4Dy7LaC4mnq3aYjnUsS1tpXiF0VzRsA').getActiveSheet();
    
    // Add headers if this is the first row
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 6).setValues([
        ['Reviewer Name', 'Date of Purchase', 'Overall Satisfaction', 'Texture Feedback', 'Packaging Feedback', 'Suggestions for Improvement']
      ]);
    }
    
    // Add the new review data
    const newRow = [
      data.reviewerName || 'Anonymous',
      data.dateOfPurchase || new Date().toISOString().split('T')[0],
      data.overallSatisfaction,
      data.textureFeedback,
      data.packagingFeedback,
      data.suggestionsForImprovement
    ];
    
    sheet.appendRow(newRow);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Pilipulp (Sheet ID: 1WDvzWYTARmhBTyXry226k_pUvFuyxZE5Pir-HYmZMwY)

```javascript
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Open the specific spreadsheet by ID
    const sheet = SpreadsheetApp.openById('1WDvzWYTARmhBTyXry226k_pUvFuyxZE5Pir-HYmZMwY').getActiveSheet();
    
    // Add headers if this is the first row
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 6).setValues([
        ['Reviewer Name', 'Date of Purchase', 'Overall Satisfaction', 'Texture Feedback', 'Packaging Feedback', 'Suggestions for Improvement']
      ]);
    }
    
    // Add the new review data
    const newRow = [
      data.reviewerName || 'Anonymous',
      data.dateOfPurchase || new Date().toISOString().split('T')[0],
      data.overallSatisfaction,
      data.textureFeedback,
      data.packagingFeedback,
      data.suggestionsForImprovement
    ];
    
    sheet.appendRow(newRow);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Pawpaya Crackers (Sheet ID: 1Az-HVGHTVl0N5CJTLxBjQIrNTvJioNsffPGAjR-1VJk)

```javascript
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Open the specific spreadsheet by ID
    const sheet = SpreadsheetApp.openById('1Az-HVGHTVl0N5CJTLxBjQIrNTvJioNsffPGAjR-1VJk').getActiveSheet();
    
    // Add headers if this is the first row
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 6).setValues([
        ['Reviewer Name', 'Date of Purchase', 'Overall Satisfaction', 'Texture Feedback', 'Packaging Feedback', 'Suggestions for Improvement']
      ]);
    }
    
    // Add the new review data
    const newRow = [
      data.reviewerName || 'Anonymous',
      data.dateOfPurchase || new Date().toISOString().split('T')[0],
      data.overallSatisfaction,
      data.textureFeedback,
      data.packagingFeedback,
      data.suggestionsForImprovement
    ];
    
    sheet.appendRow(newRow);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Setup Instructions

1. **For each product:**
   - Open the corresponding Google Sheet
   - Go to Extensions > Apps Script
   - Delete any existing code
   - Paste the appropriate code above
   - Save the project with a descriptive name (e.g., "Pastiyum Reviews")
   - Deploy as a web app:
     - Click Deploy > New deployment
     - Choose "Web app" as type
     - Set "Execute as" to "Me"
     - Set "Who has access" to "Anyone"
     - Click Deploy
     - Copy the web app URL

2. **Update your project:**
   - Replace the placeholder URLs in `src/data/products.js` with the actual web app URLs
   - Test the integration

## Data Structure

Each Google Sheet will have these columns:
- **A**: Reviewer Name
- **B**: Date of Purchase  
- **C**: Overall Satisfaction (1-5 stars)
- **D**: Texture Feedback
- **E**: Packaging Feedback
- **F**: Suggestions for Improvement

The form data will be automatically mapped to these columns when users submit reviews.
