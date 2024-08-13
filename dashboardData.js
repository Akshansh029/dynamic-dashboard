export const dashboardData = {
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
      categoryName: "Operations Dashboard",
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
  ],
};

export const categories = dashboardData.categories;

export function addWidget(categoryId, widgetName, widgetText) {
  const category = dashboardData.categories.find(
    (cat) => cat.categoryId === categoryId
  );
  if (category) {
    const newWidgetId = category.widgets.length
      ? category.widgets[category.widgets.length - 1].widgetId + 1
      : 1;
    category.widgets.push({
      widgetId: newWidgetId,
      widgetName,
      widgetText,
    });
  } else {
    console.error("Category not found!");
  }
}
