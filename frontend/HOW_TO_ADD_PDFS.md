# How to Add/Delete PDF Files (For Non-Coders)

## Adding a New PDF File

### Step 1: Add the PDF to the folder
1. Navigate to: `public/pdfs/judgements/`
2. Copy your PDF file into this folder
3. **Important**: Use simple file names without spaces (e.g., `case-2024-01.pdf`)

### Step 2: Update the judgements.json file
1. Open the file: `public/data/judgements.json`
2. Find the court where you want to add the PDF
3. Add a new entry in the "pdfs" array like this:

```json
{
  "id": 3,
  "title": "Your Case Title Here",
  "fileName": "your-pdf-filename.pdf",
  "date": "2024-10-22",
  "description": "Brief description of the case"
}
```

### Example:
If you want to add a PDF to Supreme Court section:

**Before:**
```json
{
  "id": 1,
  "name": "Supreme Court",
  "pdfs": [
    {
      "id": 1,
      "title": "Sample Judgement 1",
      "fileName": "supreme-court-case-1.pdf",
      "date": "2024-01-15",
      "description": "Important case regarding..."
    }
  ]
}
```

**After:**
```json
{
  "id": 1,
  "name": "Supreme Court",
  "pdfs": [
    {
      "id": 1,
      "title": "Sample Judgement 1",
      "fileName": "supreme-court-case-1.pdf",
      "date": "2024-01-15",
      "description": "Important case regarding..."
    },
    {
      "id": 2,
      "title": "New Case Title",
      "fileName": "new-case.pdf",
      "date": "2024-10-22",
      "description": "This is the new case description"
    }
  ]
}
```

**Important Notes:**
- Make sure to add a comma `,` after the previous entry
- Keep the "id" numbers unique (just increment the last number)
- Make sure the "fileName" matches exactly what you named the PDF file
- Use the format "YYYY-MM-DD" for dates

## Deleting a PDF File

### Step 1: Remove from judgements.json
1. Open `public/data/judgements.json`
2. Find the PDF entry you want to delete
3. Delete the entire entry including the curly braces `{ }`
4. **Important**: Remove the comma from the previous entry if this was the last item

### Step 2: Delete the PDF file
1. Go to `public/pdfs/judgements/`
2. Delete the PDF file

## After Making Changes

After adding or deleting PDFs:
1. Save all files
2. The website will automatically refresh
3. Check if your PDFs appear correctly

## Troubleshooting

**Problem: PDF doesn't show up**
- Check if the fileName in JSON matches the actual file name exactly
- Make sure the PDF is in the correct folder: `public/pdfs/judgements/`
- Check for any missing commas or brackets in the JSON file

**Problem: Website shows error**
- You may have a syntax error in the JSON file
- Common issues:
  - Missing comma between entries
  - Extra comma after the last entry
  - Missing quotation marks
  - Unmatched brackets

**Need Help?**
If you're stuck, you can use an online JSON validator like https://jsonlint.com/ to check if your JSON file is correct.
