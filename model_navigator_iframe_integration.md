# Data Model Navigator – CRDC-DH Iframe Integration Guide

*A guide for integration of the CRDC-DH variant of Model Navigator into a React application.*  
**Updated:** May 19th, 2025 by Alec Mattu

---

## Brief

Data Model Navigator is a React.js package designed for exploring a Data Model (MDF) specification file using an interactive user interface. The core functionality includes:

- Hierarchical graph view with filtering functionality  
- Table view with PDF and TSV exporting functionality  

The **CRDC Submission Portal (CRDC-DH)** expands these core functionalities to include:

- **Feat:** Support Icon-To-Category Mapping Customization  
- **Feat:** Support JSON/TSV Data Dictionary Exports  
- **Feat:** Model Release Notes / Changelog Display  
- **Feat:** Support arbitrary number of MDF model files (not just 2)  
- **Feat:** Customize the TSV template filenames based on the Model name and version  

To make integration simple, an **iframe-based integration** is provided for usage in any type of project.  
Example implementation: [Childhood Cancer Clinical Data Commons (C3DC)](https://clinicalcommons-dev.ccdi.cancer.gov/data_model)

---

## Setup

### Prepare a Content Manifest

A **content manifest** provides Model Navigator with information to fine-tune the UI and provide assets (MDF, README, etc.).

- Format: **JSON**
- Filename: `content.json`
- Location: Same repository as data model assets.

**Example Repository Structure:**
```
my-organization/repository-xyz
│── content.json
│── mock-mdf-model.yml
│── README.md
│── Mock_Data_Files.zip
│── local-path-here.png
└── … any other files
```

---

### Manifest Properties

| Key                   | Type              | Description |
|-----------------------|-------------------|-------------|
| `model-files`         | Array<string>    | List of valid YAML MDF files. Multiple files allowed; first takes priority on conflicts. |
| `readme-file`         | string            | Path to README markdown file. |
| `release-notes`       | string\|null      | Optional changelog markdown file. |
| `loading-file`        | string            | Path to Example TSV zip file for user reference. |
| `model-navigator-logo`| string\|null      | Optional header icon path (defaults to generic if not provided). |
| `current-version`     | string            | Current data model version (e.g., `"7.0.0"`). |
| `versions`            | Array<string>    | Historic versions (unused; leave empty). |
| `ui_settings`         | object            | UI configuration. |

---

### Example Manifest (`content.json`)

```json
{
  "model-files": [
    "mock-mdf-model.yml"
  ],
  "readme-file": "README.md",
  "release-notes": "version-history.md",
  "loading-file": "Mock_Data_Examples.zip",
  "model-navigator-logo": "local-path-here.png",
  "current-version": "7.1.9",
  "versions": [
    "7.1.9",
    "7.1.8",
    "7.1.0"
  ],
  "ui_settings": {
    "name": "Mock MDF",
    "configuration": {
      "pageTitle": "Mock MDF Data Model",
      "pdfConfig": {
        "fileType": "pdf",
        "prefix": "mock_",
        "downloadPrefix": "mock_",
        "fileTransferManifestName": "mock_",
        "iconSrc": "https://pdf-header-logo-here/x.png",
        "footnote": "Example Footer Note",
        "landscape": true,
        "enabled": true
      }
    }
  }
}
```
