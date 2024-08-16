export const initialDashboardData = {
  categories: [
    {
      categoryId: 1,
      categoryName: "CSPM Executive Dashboard",
      widgets: [
        {
          widgetId: 1,
          widgetName: "Cloud Accounts",
          widgetText: "This is some random text for Widget 1.",
        },
        {
          widgetId: 2,
          widgetName: "Cloud Accounts Risk Assessment",
          widgetText: "This is some random text for Widget 2.",
        },
      ],
    },
    {
      categoryId: 2,
      categoryName: "CWPP Dashboard",
      widgets: [
        {
          widgetId: 1,
          widgetName: "Namespace Specific Events",
          widgetText: "This is some random text for Widget A.",
        },
        {
          widgetId: 2,
          widgetName: "Workload Alerts",
          widgetText: "This is some random text for Widget B.",
        },
      ],
    },
    {
      categoryId: 3,
      categoryName: "Registry Scan",
      widgets: [
        {
          widgetId: 1,
          widgetName: "Image Risk Assessment",
          widgetText: "This is some random text for Widget C.",
        },
        {
          widgetId: 2,
          widgetName: "Image Security Issues",
          widgetText: "This is some random text for Widget D.",
        },
      ],
    },
  ],
};

export const categories = initialDashboardData.categories;
