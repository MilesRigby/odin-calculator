# odin-calculator
A simple web calculator with the four basic arithmetic operations (+ - / *).
Final project for Odin Foundations course.

The calculator has a display at the top, and 16 buttons beneath arranged in a square.
The buttons available are the numerals 0-9, the operations +, -, *, /, a clear button, and an equals button.

Users can input numeric characters using the number buttons.

An operator (+, -, *, /) can be input after an initial set of numeric characters.
If there is already an operator at the end of the display, it will be replaced with the new user input.
If there is an operator between two numerical strings, it will be evaluated to a single number and then the new operator will be added to the end.

The clear button removes the display contents.

The equals button evaluates the expression in the display if it is a valid expression with two numbers seperated by an operator.

After clicking the equals button, clicking a numeral will automatically clear the display before continuing.

The project instructions suggested truncating/rounding values with many decimal places (e.g. 1/3) however I chose not to implement this feature as I prefer the precision of full decimals (as far as JS allows, which has its own limits).