# Pipeline Status: Phase 1 Checkpoint
## 5/21/2023

## Currently Functional
### Super Linter
We currently are using the Github Super Linter workflow to lint the code base on push. The goal of running the linter is to prevent basic errors and keep our code base somewhat standardized.

### Phase 1 Diagram
![phase 1 diagram](phase1.drawio.png)
<br>
**Explanation**: On push, the super linter is run to beautify any code. Then the linter outputs its results and we are able to fix any errors. Then, we are able to update our code again to ensure our code base is error-free.

## Blockers
- Team does not have much previous experience with Github Actions and workflows
  - Took about 4 days to figure out the most basic super linter, so hopefully we will be able to run language-specific ones such as HTML, CSS, and Javascript linters.
  - Did a lot of research online on websites [like this](https://www.freecodecamp.org/news/github-super-linter/#:~:text=GitHub%20Super%20Linter%20is%20a,linters%20in%20a%20single%20project!)

## Planned / In Progress
- More specific linting
  - Language specific ones: HTML, CSS, and JS
- Unit tests for our Javascript functions
  - We will be writing these tests as we develop any Javascript code
  - These tests will be run on push
- Documentation generation
  - We want to create and update any documentation for any Javascript code
  - This should be run on push
