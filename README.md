# NextJS Technical Challenge: SpaceX API Integration

## Deployment

Visit this [site](https://spacex-api-playground.vercel.app/) to view the project.

## Future Extensibility

The project here was built in around four hours, however much more could be added to this playground due to how the codebase was built.

Best practices such as type-safety and code splitting with global state management such as Redux Toolkit contribute to this application's incredible maintainability and scalability factors.

### API Calls

The three API endpoints used were stored in the local environment variables and accessed at runtime. Upon loading the site, the data is fetched and stored in the Redux before the home page renders.

This saves time fetching the data and then attempting to pull it from the client side Redux store after a prospective user navigates to the desired page.

### UI/UX

Utilising Shad-cn UI with TailwindCSS for components and a crisp black/white theming with integrated dark/light mode switch all assist in giving the prospective user a better experience. The simplicity of the design together with the less-harsh-than-white shades of the dark mode provide the user with a theme that will be easy on the eyes, no matter what time of day.

### File Basted App Router

Taking advantage of the new App router, two routes were created for displaying two endpoint responses. The straightforward method of creating new routes make this application open to be expanded to fetch and display many more endpoint responses without much more boilerplate code needing to be written.

## Less visible design choices

The application is responsive for mobile and tablet devices, as well as the styling of some of the JSX being adjusted for smaller laptop screens.

The data table component used to display the Crew response data makes use of pagination; a component being displayed at the bittom of the table on larger screens and both above and below the table body on smaller/mobile screens.

Right-clicking on any row containing data in the table will being up a small context-menu, in which the user can select either `View Crew Member` or `View Wikipedia page`. The former takes you to another page within the application which contains details on the specific crew member and the latter takes the user to the crew member's external Wikipedia page.
