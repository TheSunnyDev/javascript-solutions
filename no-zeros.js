// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// Zero alone is fine, don't worry about it. Poor guy anyway

// Solution:

noBoringZeros = n => + `${n}`.replace(/0+$/,'')