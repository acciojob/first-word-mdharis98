function firstWord(s) {
    // Trim the string to remove leading spaces
    s = s.trim();

    // Find the index of the first space
    let firstSpaceIndex = s.indexOf(' ');

    // If there's no space, return the entire string
    if (firstSpaceIndex === -1) {
        return s;
    }

    // Return the substring up to the first space
    return s.substring(0, firstSpaceIndex);
}

// Test the function
const s = prompt("Enter String:");
alert(firstWord(s));
