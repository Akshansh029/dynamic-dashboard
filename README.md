# Dynamic Dashboard Widget Management System

This project involves creating a dynamic dashboard where users can manage widgets categorized under different sections. Users can add, remove, and search widgets across multiple categories.

![image](https://github.com/user-attachments/assets/dce049c9-0b80-48d4-b5ac-5bc9444b701b)


## Features

1. **Dynamic Categories and Widgets:** 
   - The dashboard is structured into categories (e.g., CSPM Executive Dashboard), and each category can contain multiple widgets.
   - Widgets are represented with random text for assignment purposes.

2. **Add and Remove Widgets:**
   - Users can add a widget to a category by providing a widget name and description.
   - Widgets can be removed either by clicking the cross icon on the widget or by unchecking the widget from the category list in the "Add Category" section.

3. **Search Functionality:**
   - Users can search through a list of all available widgets, making it easy to find and add the desired widget to a specific category.
  
4. **Local Storage Persistence:**
   - The dashboard state (categories, widgets, and configurations) is saved in the browser's local storage, ensuring that user preferences and changes are preserved even after refreshing the page or reopening the application.

## JSON Structure

The widgets and categories are dynamically generated based on a JSON configuration. Below is an example JSON structure:

```bash
{
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
}
```

# Functionality Breakdown

## Adding a Widget

1. Users can click the "+ Add Widget" button.
2. A form appears where the user can input:
    - Widget Name
    - Widget Text (Description)
    - Category to which the widget should be added
3. On submission, the widget is dynamically added to the selected category and displayed on the dashboard.

## Removing a Widget

1. Each widget has a cross icon (`X`) that, when clicked, will remove the widget from its category.
2. Alternatively, users can go to the "Add Category" section and uncheck the widget from the list of available widgets in that category.

## Searching Widgets

1. The dashboard includes a search bar where users can type and filter through all available widgets.
2. The search results will display widgets across all categories, allowing users to quickly find and manage widgets.

## Local Storage Implementation
1. The state of the dashboard, including categories and widgets, is automatically saved in the browser's local storage whenever changes are made.
2. Upon loading the application, the stored state is retrieved and used to restore the dashboard to its previous state.

# How to Run Locally

## Prerequisites

- Node.js (version 16.x or higher)
- npm (version 7.x or higher)

## Cloning the Repository

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/dashboard-widget-management.git
    cd dashboard-widget-management
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Running the Application

1. Start the development server:

    ```bash
    npm run dev
    ```

2. Open your browser and navigate to:

    ```bash
    http://localhost:3000
    ```

    You should now see the dynamic dashboard interface where you can manage categories and widgets.
# Technologies Used

- **NextJS:** Frontend library for building the dynamic UI.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **JSON:** Configuration for categories and widgets.
