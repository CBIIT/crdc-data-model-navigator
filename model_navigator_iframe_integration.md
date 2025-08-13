# Data Model Navigator – CRDC-DH Iframe Integration Guide

*A guide for integration of the CRDC-DH variant of Model Navigator into a React application.*  
**Updated:** May 19th, 2025 by Alec Mattu

---

## Brief

Data Model Navigator is a React.js package designed for exploring a Data Model (MDF) specification file using an interactive user interface.  
Core features include:

- Hierarchical graph view with filtering functionality  
- Table view with PDF and TSV exporting functionality  

The CRDC Submission Portal (**CRDC-DH**) adds:

- **Feat:** Support Icon-To-Category Mapping Customization  
- **Feat:** Support JSON/TSV Data Dictionary Exports  
- **Feat:** Model Release Notes / Changelog Display  
- **Feat:** Support arbitrary number of MDF model files  
- **Feat:** Customize TSV template filenames based on Model name/version  

Example: [Childhood Cancer Clinical Data Commons (C3DC)](https://clinicalcommons-dev.ccdi.cancer.gov/data_model)

---

## Setup

### Prepare a Content Manifest

A **content manifest** provides configuration and assets (MDF, README, etc.).  

**Requirements:**
- JSON file named `content.json`
- Stored in the same repository as your data model assets

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

### Manifest Properties

| Key | Type | Description |
|-----|------|-------------|
| `model-files` | Array<string> | List of YAML MDF files |
| `readme-file` | string | Path to README markdown file |
| `release-notes` | string/null | Optional changelog markdown file |
| `loading-file` | string | Path to Example TSV zip |
| `model-navigator-logo` | string/null | Optional header icon |
| `current-version` | string | Current version number |
| `versions` | Array<string> | Historic versions (unused) |
| `ui_settings` | object | UI configuration |

### Example Manifest (`content.json`)
```json
{
  "model-files": ["mock-mdf-model.yml"],
  "readme-file": "README.md",
  "release-notes": "version-history.md",
  "loading-file": "Mock_Data_Examples.zip",
  "model-navigator-logo": "local-path-here.png",
  "current-version": "7.1.9",
  "versions": ["7.1.9","7.1.8","7.1.0"],
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

---

## Embedding the Iframe

**Base URL:**  
```
https://cbiit.github.io/crdc-data-model-navigator
```
Append `config` URL parameter, e.g.:  
```
https://cbiit.github.io/crdc-data-model-navigator/?config=https://raw.githubusercontent.com/CBIIT/your-repository
```

### Required Sandbox Attributes
- `allow-scripts`
- `allow-downloads` (optional if downloads are disabled)
- `allow-popups`
- `allow-same-origin`

### Example (JavaScript)
```jsx
import React from 'react';
const url = "... your iframe URL here ...";
const DataModelNavigator = () => (
  <div style={{ width: '100%', height: '1000px' }}>
    <iframe
      src={url}
      scrolling="no"
      title="Model Navigator"
      style={{ width: '100%', height: '1000px', border: 'none' }}
      sandbox="allow-popups allow-scripts allow-same-origin allow-downloads"
    />
  </div>
);
export default DataModelNavigator;
```

### Example (TypeScript)
```tsx
import React, { memo } from "react";
type DataModelNavigatorProps = { url: string; };
const DataModelNavigator: React.FC<DataModelNavigatorProps> = ({ url }) => (
  <div style={{ width: "100%", height: "1000px" }}>
    <iframe
      src={url}
      scrolling="no"
      title="Model Navigator"
      style={{ width: "100%", height: "1000px", border: "none" }}
      sandbox="allow-popups allow-scripts allow-same-origin allow-downloads"
    />
  </div>
);
export default memo<DataModelNavigatorProps>(
  DataModelNavigator,
  (prevProps, nextProps) => prevProps.url === nextProps.url
);
```

---

## Reference Integration

| Description | URL |
|-------------|-----|
| Frontend integration (Bento) | https://github.com/CBIIT/bento-c3dc-frontend/pull/259 |
| Data model repository (C3DC) | https://github.com/CBIIT/c3dc-model/tree/045885bb381beb0bb41e67c9f31b83e2f3e0f475/model-desc |
| More configuration examples | https://github.com/CBIIT/ctdc-data-model-navigator-landing/tree/dev/example |
