export const initialDashboardData = {
  categories: [
    {
      categoryId: 1,
      categoryName: "CSPM Executive Dashboard",
      widgets: [
        {
          widgetId: 1,
          widgetName: "Widget 1",
          widgetText: "This is some random text for Widget 1.",
        },
        {
          widgetId: 2,
          widgetName: "Widget 2",
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
          widgetName: "Widget A",
          widgetText: "This is some random text for Widget A.",
        },
        {
          widgetId: 2,
          widgetName: "Widget B",
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
          widgetName: "Widget C",
          widgetText: "This is some random text for Widget C.",
        },
        {
          widgetId: 2,
          widgetName: "Widget D",
          widgetText: "This is some random text for Widget D.",
        },
      ],
    },
  ],
};

export const categories = initialDashboardData.categories;
