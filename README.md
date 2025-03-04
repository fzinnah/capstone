# Capstone Project

A full-stack web application built with React, TypeScript, Express, and PostgreSQL.

## Features

- TypeScript support for both frontend and backend
- React with Material-UI for the frontend
- Express.js backend with TypeScript
- PostgreSQL database with Sequelize ORM
- JWT authentication
- Error handling middleware
- Request validation
- Rate limiting
- Logging with Winston
- Environment configuration
- Security middleware (helmet, cors)

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

## Getting Started

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd capstone
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env
\`\`\`
Edit the .env file with your configuration.

4. Set up the database:
\`\`\`bash
# Create database
createdb capstone

# Run migrations
npm run migrate
\`\`\`

5. Start the development server:
\`\`\`bash
npm start
\`\`\`

## Project Structure

\`\`\`
├── src/                  # Frontend source code
│   ├── components/       # React components
│   ├── hooks/           # Custom React hooks
│   ├── services/        # API services
│   ├── utils/           # Utility functions
│   └── types/           # TypeScript type definitions
├── server/              # Backend source code
│   ├── config/          # Configuration files
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Express middleware
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── utils/           # Utility functions
│   └── validation/      # Request validation schemas
└── tests/               # Test files
\`\`\`

## Available Scripts

- \`npm start\`: Start the development server
- \`npm run build\`: Build the production bundle
- \`npm test\`: Run tests
- \`npm run lint\`: Run ESLint
- \`npm run format\`: Format code with Prettier

## Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
