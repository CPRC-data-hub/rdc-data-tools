/*
  TOOL CATALOG — this is the only file you need to edit to add a tool.

  To add a new tool:
    1. Make a folder inside /tools named with lowercase-and-dashes,
       e.g. tools/commute-dashboard/
    2. Put your HTML file in it and name it index.html
       (if it uses extra files like .csv or images, put them in the same folder).
    3. Copy one of the entries below, paste it at the top of the list,
       and update the details. "url" is the folder path ending in a slash.

  Fields:
    title       — card heading
    description — one or two sentences on what the tool shows and who it helps
    url         — link to the tool (a folder in /tools, or any full https:// link)
    topics      — one or more topic tags; these build the topic filter
    updated     — date last updated, YYYY-MM-DD
    color       — card stripe: purple, turquoise, orange, lime, coral or peony
*/

window.TOOLS = [
  {
    title: "Example Tool (template)",
    description: "A placeholder showing where an interactive tool goes. Replace this entry with your first real tool.",
    url: "tools/example-tool/",
    topics: ["Template"],
    updated: "2026-11-23",
    color: "turquoise"
  },
  {
    title: "GIS Open Data Portal",
    description: "Download regional GIS layers and browse maps and apps on our ArcGIS open data site.",
    url: "https://cprc-data-hub-tjcoggis.hub.arcgis.com/",
    topics: ["GIS", "Maps"],
    updated: "2026-11-23",
    color: "purple"
  }
];
