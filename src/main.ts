import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import { handleRecipes } from './recipe.js';

async function main() {
  const rl = createInterface({ input: stdin, output: stdout });
  console.log('*** Recipe Book ***');
  console.log('Type "help" for a list of commands.');
  console.log('Type "q" to quit.');
  console.log('');
  while (true) {
    const input = await rl.question('> ');
    if (input === null) {
      break;
    }
    if (input.toLowerCase() === 'q') {
      break;
    }
    const tokens = input.trim().split(/\s+/);
    const commandName = tokens[0];
    const args = tokens.slice(1);

    if (commandName === 'list') {
      await handleRecipes(Number(args[0]));
    } else {
      break;
    }
  }

  rl.close();
}

main();
