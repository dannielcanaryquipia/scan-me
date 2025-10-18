# Google Sheets Integration Setup Guide

This guide will help you connect your ScanMe! project to Google Sheets so that customer reviews are automatically saved to the correct product-specific sheets.

## Prerequisites
- A Google account
- Access to Google Sheets
- Your Google Sheets already created for each product

## Your Google Sheets Structure

Each product has its own Google Sheet with these columns:
- **Reviewer Name** (optional)
- **Date of Purchase** (optional) 
- **Overall Satisfaction** (1-5 stars)
- **Texture Feedback** (required)
- **Packaging Feedback** (required)
- **Suggestions for Improvement** (required)

## Step 1: Set Up Google Apps Script for Each Product

You need to create a separate Google Apps Script for each product. The specific codes are provided in `GOOGLE_APPS_SCRIPT_CODES.md`.

### For Pastiyum:
1. **Open the Pastiyum Google Sheet**: [https://docs.google.com/spreadsheets/d/14CSGeIU9_YXpQ2di55oqymDM3RXZV3G07Cw5PX-XoFs/edit](https://docs.google.com/spreadsheets/d/14CSGeIU9_YXpQ2di55oqymDM3RXZV3G07Cw5PX-XoFs/edit)
2. **Go to Extensions > Apps Script**
3. **Paste the Pastiyum code** from `GOOGLE_APPS_SCRIPT_CODES.md`
4. **Deploy as web app** and copy the URL

### Repeat for each product:
- **Langka Chips**: [https://docs.google.com/spreadsheets/d/14V8YbK7XrSGKRi1k5eh3KXYDn_lTecuSdsq_nurwNmg/edit](https://docs.google.com/spreadsheets/d/14V8YbK7XrSGKRi1k5eh3KXYDn_lTecuSdsq_nurwNmg/edit)
- **Palawan Chips**: [https://docs.google.com/spreadsheets/d/1hDk0Xbn8n84a4Dy7LaC4mnq3aYjnUsS1tpXiF0VzRsA/edit](https://docs.google.com/spreadsheets/d/1hDk0Xbn8n84a4Dy7LaC4mnq3aYjnUsS1tpXiF0VzRsA/edit)
- **Pilipulp**: [https://docs.google.com/spreadsheets/d/1WDvzWYTARmhBTyXry226k_pUvFuyxZE5Pir-HYmZMwY/edit](https://docs.google.com/spreadsheets/d/1WDvzWYTARmhBTyXry226k_pUvFuyxZE5Pir-HYmZMwY/edit)
- **Pawpaya Crackers**: [https://docs.google.com/spreadsheets/d/1Az-HVGHTVl0N5CJTLxBjQIrNTvJioNsffPGAjR-1VJk/edit](https://docs.google.com/spreadsheets/d/1Az-HVGHTVl0N5CJTLxBjQIrNTvJioNsffPGAjR-1VJk/edit)

## Step 2: Deploy Each Apps Script

For each product's Apps Script:

1. **Save the Project**
   - Click the save icon or press Ctrl+S
   - Give your project a descriptive name (e.g., "Pastiyum Reviews")

2. **Deploy as Web App**
   - Click "Deploy" → "New deployment"
   - Click the gear icon and select "Web app"
   - Set the following:
     - Description: "Product Name Reviews Webhook"
     - Execute as: "Me"
     - Who has access: "Anyone"
   - Click "Deploy"
   - **IMPORTANT**: Copy the web app URL that appears

## Step 3: Update Your Project

1. **Open your project file**: `src/data/products.js`

2. **Replace the webhook URLs**:
   - Find each product's `reviewWebhookUrl` field
   - Replace the placeholder URLs with your actual Google Apps Script web app URLs
   - Each product should have its own unique web app URL

3. **Example**:
```javascript
// Pastiyum
reviewWebhookUrl: "https://script.google.com/macros/s/YOUR_PASTIYUM_SCRIPT_ID/exec",

// Langka Chips  
reviewWebhookUrl: "https://script.google.com/macros/s/YOUR_LANGKA_SCRIPT_ID/exec",
```

## Step 4: Test the Integration

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Test a review submission**:
   - Navigate to any product page
   - Fill out the new review form with:
     - Reviewer Name (optional)
     - Date of Purchase (optional)
     - Overall Satisfaction (1-5 stars)
     - Texture Feedback (required)
     - Packaging Feedback (required)
     - Suggestions for Improvement (required)
   - Submit the review
   - Check the corresponding Google Sheet for the new data

## Step 5: Verify Data Structure

Each Google Sheet will automatically have these columns:
- **A**: Reviewer Name
- **B**: Date of Purchase  
- **C**: Overall Satisfaction (1-5 stars)
- **D**: Texture Feedback
- **E**: Packaging Feedback
- **F**: Suggestions for Improvement

## Troubleshooting

### Common Issues:

1. **"Could not send" error**:
   - Check that your webhook URL is correct
   - Ensure your Google Apps Script is deployed as a web app
   - Verify the script has permission to access your sheet

2. **Data not appearing in sheet**:
   - Check the Google Apps Script execution logs
   - Ensure the sheet ID is correct in the script
   - Verify the script has edit permissions

3. **CORS errors**:
   - The current setup uses `mode: 'no-cors'` which should handle this
   - If you still get CORS errors, you may need to add CORS headers to your Apps Script

### Advanced Configuration:

If you want separate sheets for each product:

1. Create separate Google Sheets for each product
2. Create separate Apps Script projects for each sheet
3. Update each product's `reviewWebhookUrl` with its specific script URL

## Security Notes

- The current setup allows anyone to submit data to your sheet
- For production, consider adding authentication or rate limiting
- Monitor your sheet for spam or inappropriate content

## Next Steps

Once everything is working:
1. Test with real data
2. Consider adding data validation
3. Set up notifications for new reviews
4. Create dashboards or reports from your review data

## Support

If you encounter issues:
1. Check the browser console for errors
2. Check Google Apps Script execution logs
3. Verify your webhook URL is accessible
4. Test the Apps Script function manually in the editor
