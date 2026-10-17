# Recipe Book CLI

A simple terminal-based recipe browser built with Node.js and TypeScript. It fetches recipe data from the public DummyJSON API and lets you browse or filter recipes directly from your shell.

## Features

- Browse a list of recipes from the command line
- Filter recipes by preparation time, calorie count, and difficulty
- Quick interactive terminal workflow
- Lightweight and dependency-friendly setup

## Tech Stack

- Node.js
- TypeScript
- DummyJSON API

## Requirements

- Node.js 18 or later
- npm

## Installation

```bash
git clone https://github.com/ru0te/recipe-book-cli.git
cd recipe-book-cli
npm install
```

## Build

```bash
npm run build
```

## Usage

Start the app:

```bash
npm start
```

Once it launches, use these commands in the interactive prompt:

- `list [number]` – display up to the given number of recipes
- `search [time] [calories] [difficulty] [number]` – filter recipes by max prep time, max calories, and difficulty
- `q` – quit the application

### Examples

```bash
> list 5
> search 30 500 easy 10
> q
```

The `search` command compares each recipe against the following:

- prep time must be less than or equal to the provided time
- calories per serving must be less than or equal to the provided calories
- difficulty must match the provided value (for example: `easy`, `medium`, or `hard`)

## Example Output

```text
*** Recipe Book ***
Type "help" for a list of commands.
Type "q" to quit.

> list 2
Name: Classic Margherita Pizza
Ingredients:
- pizza dough
- tomato sauce
- mozzarella
- basil
Instructions:
1. Preheat oven...
...
Difficulty: Easy
Calories: 300
Preparation Time: 25 miutes
-------------------------
```

## Project Structure

```text
recipe-book-cli/
├── src/
│   ├── main.ts
│   ├── recipe.ts
│   ├── types.ts
│   └── utils.ts
├── dist/
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome. Feel free to open an issue or submit a pull request with improvements, bug fixes, or additional recipe filtering features.
