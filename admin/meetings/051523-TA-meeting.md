# Updates from the team
We split into groups of frontend/backend devs to each work on specific parts of the website.
- 3 groups of devs, 1 group of our designers

# How are we organizing our tasks?
- **Currently**: we know our tasks (like our overarching goals for each page / feature) and communicate on Slack within our respective channels
- Gagan: use github issues

# Time frame
- **Currently**: we know our deadline is the end of the quarter
- Should set up "sprints"
- We should define smaller tasks (smaller parts of each part of the website) that should be completed by the end of each sprint
- Maybe 1 week for each sprint 
  - 2 weeks per sprint could be feasible as well

# Project management: using Github Issues
- Gagan showed an example from a previous quarter
- We should create specific (small) tasks and use the assignee feature to set who is working on them 
- use the Milestone feature: maybe set 1 milestone per sprint

# CI/CD
- In Github Actions
- Gagan's example had CSS linting, HTML linting, Javascript linting, Javascript unit tests, pages deployment
- After passing the linting, the unit testing should be called 
- For checkpoint 1:
  - mostly to set up the framework of our pipeline
  - we can make dummy tests that can just pass each time they're run
  - once we start coding, replace the dummy tests with real unit tests (should probably be done by Checkpoint 2)
- **Suggestion**: have a group of people work on this for a bit (specifically the unit testing part)

# ADRs
Should answer "Why did we choose this framework over that one?", "Why did we choose this design over that one?", etc.
- Gagan's example had low-level ADRs (one markdown file per decision)
- Either do low-level or sprint-level (one markdown file per sprint with list of decisions we made during that sprint)
- **Suggestion**: have one or both of the leads work on this

# Questions
- Can you post the examples? -> **Yes**, will send some examples (for Issues, CI/CD, and ADRs) to team lead Slack channel
