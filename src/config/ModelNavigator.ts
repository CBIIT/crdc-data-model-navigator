const filterResetIcon = {
  src: "https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/svgs/Clear-icon.svg",
  alt: "Reset icon",
  size: "12 px",
};

/**
 * Configuration for the facet filter (i.e. the entire DMN)
 */
export const baseConfiguration = {
  // Populated by the useBuildReduxStore hook
  facetSearchData: null,
  facetSectionVariables: null,
  baseFilters: {},
  filterOptions: [],
  filterSections: [],
  // Base configuration that does not change by model
  resetIcon: filterResetIcon,
  showCheckboxCount: 6,
};

/**
 * Base configuration for the graph view
 */
export const graphViewConfig = {
  legend: {
    legendExpand: {
      position: "absolute",
      top: "300px",
      backgroundColor: "#494949",
      border: "2px solid #5486AF",
      borderTopLeftRadius: "10px 10px",
      borderBottomLeftRadius: "10px 10px",
      paddingBottom: "15px",
    },
  },
  canvas: {
    fit: {
      x: 0,
      y: 20,
      zoom: 0.7,
      minZoom: 0.7,
      maxZoom: 2,
    },
    nodeTree: [
      ["program"],
      ["project"],
      ["study"],
      ["principal_investigator", "subject", "image_collection", "associated_link"],
      ["non_targeted_therapy", "surgery", "radiotherapy", "subject_status", "targeted_therapy"],
      ["demographic", "diagnosis", "specimen"],
      ["exposure", "data_file"],
    ],
  },
};

/**
 * Fall-back title for the Data Model README popup
 */
export const defaultReadMeTitle = "Understanding the Data Model";
