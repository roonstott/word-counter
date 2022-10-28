JS script that takes a sentence, in the form of a single string input, and prints the number of times that each word is used in the sentence. 

For example: 
  let string = "one two two three three three four four four four five five five five five";
  countWords(string) = 
  [
  'one',   1,
  'two',   2,
  'three', 3,
  'four',  4,
  'five',  5
]

Limitations: Does not account for capitalization or adjacency to punctuation, instead treating these cases as unique instances. 

For Example; 
  let stringB = "A cat is a good friend to have, a good friend to have!"
  countWords(stringB) =
[
  'A',  1,        'cat',
  1,    'is',     1,
  'a',  2,        'good',
  2,    'friend', 2,
  'to', 2,        'have,',
  1,    'have!',  1
]