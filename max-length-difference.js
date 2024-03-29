// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Solution:

const mxdiflg = (a1, a2) => 
  a1.reduce((prev,curr) => 
           Math.max(prev, a2.reduce((prev2,curr2) =>
                                   Math.max(prev2,Math.abs(curr.length - curr2.length)), -1)), -1)

                                   