# Remove Shuffle Button
## Context and Problem Statement
* The "Shuffle" button at the bottom of the card selection page allows for duplicates of the card in localStorage.
* For example: if the original card was "Judgement", and I shuffle and click that same card 3 more times (even if the card technically got reshuffled), when you move on to interpretation it duplicates the card so I get 3 "Judgement"
* Should we remove this function entirely? (Remove the button)

## Considered Options
* Keep the button -> figure out a way to avoid these duplicates
* Remove the button -> force the user to go to the fortune page after 3 cards
  * The user cannot reselect their cards and must get their fortune with the ones they have already chosen

## Decision Outcome
* Remove the button