# React Fullstack with Python and PostgreSQL (Complete)

This project is a full-stack application using React for the frontend and Python with PostgreSQL for the backend. The frontend loads an information from Starlette server.

## Directory Structure

The project follows a structured directory layout to ensure easy navigation and maintenance:

```
src/
|-- components/       # Shared components across features
|   |-- Button
|   |-- Image
|   |-- ...
|-- features/         # Each feature has its own subdirectory
|   |-- FeatureA/
|       |-- components/  # Components specific to FeatureA
|       |-- hooks/       # Hooks specific to FeatureA
|       |-- utils/       # Utility functions for FeatureA
|       |-- FeatureA.js  # Entry point for FeatureA
|       |-- ...
|   |-- FeatureB/
|       |-- ...
|-- hooks/            # Shared hooks
|-- utils/            # Shared utility functions
|-- App.tsx           # Main application setup
|-- main.tsx          # Entry point for the React app
```

## Tech Stack

This project uses a widely adopted and versatile tech stack:

•  [**Vite + React + TypeScript**](https://vitejs.dev/): For a fast and type-safe development experience.

•  [**TailwindCSS**](https://tailwindcss.com/): For utility-first CSS styling.

•  [**Zustand**](https://zustand-demo.pmnd.rs/): A small, fast, and scalable bearbones production ready state management solution.


## Advanced React Concepts

The following advanced React concepts are utilized:

•  [**React Hooks**](https://react.dev/reference/react/hooks): For component lifecycle and state management.

•  [**Custom Hooks**](https://react.dev/learn/reusing-logic-with-custom-hooks):

    `useSetShipmentListing`: For handling shipment listings.

    `useEscapeKeyDown`: For escape button event handling.

•  [**Higher-Order Components (HOC)**]():

    `withMainLayout`: For common layout across the application.

•  [**State Management Store**](https://zustand-demo.pmnd.rs/):

    `useStore` (Zustand): For global state management.


## Third-Party Libraries

•  `react-hooks-use-modal`: For modal dialog management.

•  `react-sortablejs`: For sortable list components.


## Installation

### NOTE: 
#### Ensure that the backend server is operational, either locally or on Gitpod, before initiating the frontend. Additionally, update the `VITE_API_URL` in the .env file. Although it's typically not advisable to include .env files in the repository, it has been added for convenience in this case.

To set up the project locally, follow these steps:

```bash
git clone https://github.com/OpenRnD007/python-react-fs.git
cd python-react-fs
npm run setup
npm run dev
```

## Note on Testing
`Cypress` is typically used for component and end-to-end testing in my projects. However, to keep the project straightforward and not over-engineered, it has not been included. If interested, I can provide examples of my work with Cypress through blogs and repositories.

## License
This project is open-sourced under the MIT license.

## Author
Sumedh M
