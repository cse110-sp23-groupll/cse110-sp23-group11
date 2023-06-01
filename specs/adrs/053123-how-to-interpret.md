# How should we generate a fortune based on the cards
## Context and Problem Statement
* Since we have the user choose three cards (1 for past, 1 for present, 1 for future), do we still need to generate an overall fortune?

## Considered Options
* Keep it to just the interpretation of the three cards
* Keep the three cards as well and have an overall fortune
  * What would the overall fortune be based on then?

## Decision Outcome
* We chose to keep the interpreations of the three cards and generate an overall fortune as well. 
* How to do this: assign each tarot card a value (ex. -1 for a negative card or 0 for a neutral card) and sum the values of the three cards to get the connotation for the overall fortune.
