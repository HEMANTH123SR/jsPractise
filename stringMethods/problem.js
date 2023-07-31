// 1. Reverse a String: Write a function that takes a string as input and returns the reverse of that string. For example, if the input is "hello," the output should be ",olleh".

let reverse = (str) => {
  return str.split("").reverse().join("");
};

// console.log(reverse("hello"));

// 2. Count the Occurrences: Write a function that takes a string and a character as input and returns the number of occurrences of that character in the string. For example, if the input is "hello, world!" and the character is "o," the output should be 2.

const occurrences = (str,ch) => {
 let counter=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==ch){
            counter++;
        }
    }
    return counter;
};

// console.log(occurrences("hello, world!","o"));

// 3. Palindrome Check: Write a function that takes a string as input and returns true if it is a palindrome (reads the same backward as forward), and false otherwise. For example, if the input is "level," the output should be true.

const palindrome=(str)=>{
    str=str.toLowerCase();
    const revStr=str.split("").reverse().join("");
    return `${str === revStr}`;
}

console.log(palindrome("Level"));

// 4. Title Case: Write a function that takes a string as input and converts it to title case (capitalize the first letter of each word while making all other letters lowercase). For example, if the input is "hello, world!" the output should be "Hello, World!"

const titleCase=(str)=>{
    
}

// 5. Count Words: Write a function that takes a string as input and returns the number of words in the string. Assume that words are separated by spaces. For example, if the input is "Hello, world! How are you?" the output should be 5.

// 6. Truncate a String: Write a function that takes a string and a maximum length as input and truncates the string if it exceeds the maximum length. Add "..." at the end to indicate truncation. For example, if the input is "Hello, world!" and the maximum length is 7, the output should be "Hello, ...".

// 7. Remove Extra Spaces: Write a function that takes a string as input and removes any extra spaces between words, leaving only one space between each word. For example, if the input is "  Hello,   world!  " the output should be "Hello, world!".

// 8. Remove Special Characters: Write a function that takes a string as input and removes any special characters (non-alphanumeric characters) from it. For example, if the input is "Hello, $world!", the output should be "Hello world".

// 9. Camel Case: Write a function that takes a string as input and converts it to camel case (capitalize the first letter of each word except the first one while removing spaces). For example, if the input is "hello, world!", the output should be "helloWorld".

// 10. Find the Longest Word: Write a function that takes a string as input and returns the longest word in the string. For example, if the input is "The quick brown fox jumps over the lazy dog," the output should be "jumps".
