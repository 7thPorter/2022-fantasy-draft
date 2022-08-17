# 2022 Fantasy Football Draft Order Picker

This is a fun little app I created to determine the draft order for my fantasy football league. To keep track of my progress and remind myself what I still need to do, I'm going to keep track of my big-picture goals here.

### Pre-Selection Features

- [x] Page background image either NFL blue or just sort of grey nondescript background
- [x] Main component background is football field green with white lines mimicking real life football field. This field grows or shrinks proportional to how many teams are entered in the league. (Mostly done... Field doesn't grow or shrink.)
- [x] A text input field allowing a user to input a team name, adding it to the list of teams in the league. (These aren't pretty.)
- [x] A component which populates newly entered teams onto the football field, showing their name, possibly an image (randomly assigned most likely, from a list of generic football images), and a randomly assigned colored bar, which starts at the zero yard line on the left-hand side of the field. Teams can be removed by clicking their names on the field. (No images or team removal.)
- [x] A button to begin the draft selection. When the button is pressed, users can no longer change teams (either through adding or subtracting), and the app moves to actual selection.
- [x] Another button resets the entire app to the initial state.

### Selection Features

- [x] Each team begins selection with 0 points.
- [x] Every two to three seconds, teams (either one at a time or simultaneously) randomly select a number from within a certain range (probably 0-99), and point assignment happens based on the number selected.
- [x] Based on real-world percentage of play outcomes, teams will either lose yards (not possible from the 0 yard line - no safeties!), go nowhere, make a small gain, or make a large gain. These outcomes are determined by the previously mentioned randomly selected number.
- [ ] A fun play-by-play at the bottom of the field gives a small amount of color commentary based on outcome. (I got rid of this idea. Probably not coming back to it.)
- [x] The player's colored bar updates to the appropriate yard line on screen to reflect the random outcome.
- [x] The first player to reach 100 yards is awarded first pick in the draft. Second player has second pick, and so on.
- [x] A helpful sidebar tracks team order.
- [x] A button allows the user to stop the selection in progress, resetting all yards gained to zero. This returns the app status to pre-selection mode.

### Post-Selection Features

- [x] The final selection order is displayed on screen.
- [x] A button allows the user to return to pre-selection mode.
- [ ] EXTRA CREDIT: If I'm feeling really ambitious, I'll add a way to effectively screenshot the final draft order and save it to your computer's download folder. Probably not gonna happen though. (<--- Yeah, not gonna happen.)
