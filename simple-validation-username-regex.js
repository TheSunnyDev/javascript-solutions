// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

// Solution:

function validateUsr(username) {
    res =  /^[abcdefghijklmnopqrstuvwxyz\d_]{4,16}$/.test(username) 
    return res
  }