// Quick Question #1
new Set([1,1,2,2,3,4])
//  => {1,2,3,4}

// Quick Question #2
[...new Set("referee")].join("")
// =>{"ref"}

// Quick Questions #3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// => Array[0] => true,
//    Array[1] => false

// hasDuplicate
hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = arr => 
new Set(arr).size !== arr.length;

// vowelCount
vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function isVowel(char) {
  return "aeiou".includes(char)
}

function vowelCount(word) { 
  const vowelMap = new Map();
  for (let vowels of word) {
    let lowVowels = vowels.toLowerCase();
    if (isVowel(lowVowels)){
      if (vowelMap.has(lowVowels)) {
        vowelMap.set(lowVowels, vowelMap.get(lowVowels) ++);
      } else {
        vowelMap.set(lowVowels, 1);
      }
    }
  }
return vowelMap

}