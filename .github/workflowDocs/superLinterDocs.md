# Super Linter Docs
The super linter is a collection of linters. With the way the linter is configured, the linter will only lint files in the source folder every time someone makes a push. Currently, the linters being used are styelint(css), eslint(javascript), and htmlhint(html).

## Editing the Super Linter
If you want to add more linters, change linting paths, or just modify anything, you can change the enviornment variables in Super-Linter.yml. They 
can be found here https://github.com/super-linter/super-linter/tree/main

## Editing Individual Linter Rules
If you want to change the linting rules, you can go to the .github/rules folder to edit the rules or add new rule files. If you added a new linter
for a file extension that doesn't already exist in the folder, you will need to add a new rule file and add a new environment variable to 
Super-Linter.yml. Our super linter is set up so that all linter rules can be found in .github/rules. You will also need to google what kind of
configuration the specific linter needs. 

### Where to find docs for linter rules. 
The Javascript linter rules can be found https://eslint.org/docs/latest/rules/ \
The CSS linter rules can be found https://stylelint.io/user-guide/rules \
The HTML rules can be found https://htmlhint.com/docs/user-guide/list-rules \

### Creating Custom Rules
Search it up on your own. 

