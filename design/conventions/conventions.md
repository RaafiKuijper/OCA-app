# Coding Conventions

- Everything should be in English, no exceptions!

## Code
- Variable, method, function and package names should all be in English.
- Classnames in PascalCase, static final variables in UPPERCASE, variable & method/function names in camelCase, packages in snake_case
- Use 4 space indents
- Only import necessary files (no import java.util.*;)
- Lines of code should not be longer than 100 characters
- Declare one variable per line
- Curly Brackets start on the same line of the function
- Max one blank line between methods
- No magic numbers (exceptions: 0, 1, -1)

## Code (JS)
- End all lines with semicolons (like in Java)
- Use `const name = () => {}` for functions

## GitHub
- Branch names in kebab-case
- Commit messages should:
    1. start with a Capital letter
    2. not end with a dot
    3. use imperative mood (add file.txt, not added file.txt)
- Do not push code that doesn't compile/work
- Before merging main, follow these steps
    1. Check out main
    2. Pull main
    3. Check out `your feature` branch
    4. Merge main with `your feature`
    5. Solve merge conflicts
    6. Make sure `your feature` (and main!) still works
    7. Push `your feature` 
    8. Pull request
- A pull request should be reviewed by (at least) 1 other team member, if the review is approved, the team member can immediatly merge/confirm/close the request