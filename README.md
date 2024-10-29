# Kanban Board Application

A dynamic Kanban board application built with React that allows users to visualize and organize tickets based on different grouping and sorting criteria.

## 🌟 Features

- **Dynamic Grouping Options:**

  - Group by Status
  - Group by User
  - Group by Priority

- **Sorting Options:**

  - Sort by Priority
  - Sort by Title

- **Visual Indicators:**

  - User avatars
  - Priority levels
  - Status indicators
  - User availability status

- **Responsive Design:**
  - Works on desktop and mobile devices
  - Horizontal scrolling for multiple columns
  - Collapsible display menu

## 🚀 Live Demo

[View Live Demo](https://kanban-one-rosy.vercel.app/)

## 🛠️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/kanban-board.git
cd kanban-board
```

2. **Install dependencies**

```bash
    npm install
```

3. **Start the development server**

```bash
    npm start
```

4. **Open your browser**
   Navigate to http://localhost:3000

## 💻 Usage

1. **Display Menu:**

   - Click the "Display" button in the top bar
   - Select grouping option (Status/User/Priority)
   - Choose sorting preference (Priority/Title)

2. **View Tickets:**

   - Tickets are organized based on selected grouping
   - Each ticket shows:
     - Title
     - User assigned
     - Status
     - Priority level

3. **User Status:**
   - Green dot: User is available
   - Red dot: User is unavailable

## 🏗️ Project Structure

```
src/
├── assets/
│   └── assets.js         # Image and icon imports
├── components/
│   ├── Board.js          # Main board component
│   ├── Card.js           # Individual ticket card
│   ├── Dropdown.js       # Display options dropdown
│   └── Navbar.js         # Top navigation bar
├── App.js                # Root component
├── index.js              # Entry point
└── Status.css            # Styles
```

## 🔧 Technical Details

### API Integration

- Fetches ticket data from: `https://api.quicksell.co/v1/internal/frontend-assignment`
- Handles loading and error states

### State Management

- Uses React's useState for local state
- Implements useEffect for API calls
- Maintains display preferences in localStorage

### Grouping Logic

- **Status Based:**

  - Backlog
  - Todo
  - In Progress
  - Done
  - Canceled

- **Priority Based:**

  - No Priority (0)
  - Low (1)
  - Medium (2)
  - High (3)
  - Urgent (4)

- **User Based:**
  - Groups tickets by assigned user
  - Shows user availability status

## 🎨 Styling

- Clean and modern UI
- Consistent color scheme
- Responsive design
- Custom icons and avatars
- Smooth animations and transitions

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

## 👏 Acknowledgments

- QuickSell for the project requirements
- React community for excellent documentation
- All contributors and testers

## 📞 Support

For support, email 6517kritiraj@gmail.com or open an issue in the repository.
