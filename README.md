# GitHub Search App

This is a **GitHub Search App** built using **React**, **TypeScript**, and **Tailwind CSS**. It allows users to search for GitHub profiles by username and displays key information about the user in a clean, responsive UI.

## Features

- **Search GitHub Users**: Enter a GitHub username to fetch user data.
- **Profile Overview**: Displays the following information (if available):
  - Profile Picture
  - Name
  - Bio
  - Followers Count
  - Following Count
  - Repository Count
  - Workplace
  - Location
  - Blog
  - Twitter Handle
- **Responsive Design**: Works seamlessly across devices.
- **Error Handling**: Provides meaningful feedback for invalid usernames or API rate limits.
- **Dark Mode**: Includes a toggle for dark mode.

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **TypeScript**: Adds type safety and better development experience.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Installation

Follow these steps to get the app running locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/nk-on/Github-searchapp
   ```

2. Navigate to the project directory:
   ```bash
   cd github-search-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Usage

1. Enter a GitHub username into the search bar.
2. Press the search button or hit `Enter`.
3. View the user's profile information, such as name, bio, location, and more.

## Screenshots

Here’s an example of the app interface:

![GitHub Search App Screenshot]('public/assets/Screenshot.png')

_Add a mock screenshot of your app named `mock-screenshot.png` in the project root directory._


## API Used

The app fetches data from the [GitHub API](https://docs.github.com/en/rest).

### Example API Endpoint

```plaintext
https://api.github.com/users/{username}
```

## Future Improvements

- Display pinned repositories for users.
- Add pagination for followers, repositories, etc.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to contribute by submitting issues or pull requests!
