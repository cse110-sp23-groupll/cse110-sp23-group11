# Rules
A lot of the files are failing default/reccomended configurations so I made our own rules. I will give a brief description of the rules in this
document but I will give links to a rulesheet with better descriptions. 

## CSS rules https://stylelint.io/user-guide/rules
1. color-no-invalid-hex : Invalid hex colors are not allowed. 
2. no-invalid-position-at-import-rule : Any @import rules must precede all other valid at-rules and style rules in a stylesheet (ignoring @charset and @layer), or else the @import rule is invalid.
3. string-no-newline: No newlines in strings. 
4. named-grid-areas-no-invalid" All grids must form a rectangle.
5. no-irregular-whitespace: No weird whitespaces. 

## HTML rules https://htmlhint.com/docs/user-guide/list-rules
1. attr-no-duplication: HTML elements cannot have dulplicate attributes. 
2. doctype-first: Doctype must be declared first in a file. 
3. inline-script-disabled: No inline scripts. Use script tag or use another file.
4. inline-style-disabled: No inline style. Use style tag or use another file.
5. title-require: Title tag must be present in head. 
6. space-tab-mixed-disabled: Tab mode is enabled. All indentation must use tabs. 
7. tagname-lowercase: All tags must be lowercase. 

## Javascript rules https://eslint.org/docs/latest/rules/
All of the reccomended rules(marked with green checkmark) are enablded. 
