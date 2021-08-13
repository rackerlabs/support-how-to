---
permalink: regex-cheat-sheet-basics/
audit_date:
title: 'Regex Cheat Sheet/Basics'
type: article
created_date: '2021-03-31'
created_by: Alfonso Murillo
last_modified_date: '2021-08-13'
last_modified_by: Miguel Salgado
product: Cloud Servers
product_url: cloud-servers
---

# Regex Cheat Sheet/Basics
Regular Expressions (regex or regexp) are a very useful tool to identify specific patterns in any text, which helps to extract information regardless the format of the text.

Regex can be used to validate inputs, web scrapping, finding specific strings in documents, syntax validation for compilers, and so many others examples. 

Regex is widely used in multiple programming languages using almost the same syntax, so this article pretends to show the basic regex operators.

The following sections will show the different operators used for regex and some examples. You can also test your regular expressions with some explanations of them on [this page](https://regex101.com).

## Anchors

Characters | Use
:---:|----
^ | Indicates the beginning of the string. It will only match the string that begins with the character(s) that follows
$ | Indicates the end of the string. This will match any string that ends with the character(s) before the '$' symbol
abc | Matches any string that contains the 'abc' characters sequence on it

Some examples are:

Example | Description | Matching string examples
:--:|--|--
^A | Matches all the strings that start with an A | "**A**n apple is in the tree", "**A** new restaurant"
end$ | Matches a string that ends with the 'end' sequence of characters | "The **end**", "Let's pret**end**"
^Hello world$ | Matches the exact string 'Hello world' | "**Hello world**"
order | Matches any string that contains the text 'order' in it | "My **order** number is 54"

## Quantifiers
Quantifiers are used to represent the times we want the preeceding character or group of characters to appear in our match.

Characters | Use
:---:|----
\* | Indicates zero or more
\+ | Indicates one ore more
? | Indicates zero or one
x{n} | Used to specify the number of times ('n') the previous character ('x') should appear
x{n, } | Used to specify the minimum number of times ('n') the previous character ('x') should appear
x{n, m} | Used to specify the minimum ('n') and maximum ('m') number of times the previous character ('x') should appear

Some examples are:

Example | Description | Matching string examples
:--:|--|--
hello!\* | Matches any string 'hello' followed by zero or more '!' characters | "**hello**", "**hello!**", **hello!!**
hello!\+ | Matches any string 'hello' followed by one or more '!' characters | "**hello!**", "**hello!!**"
hello!? | Matches any string 'hello' followed by zero or one '!' characters | "**hello**", "**hello!**"
(ha){2,4} | Matches any string that repeats the group of characters 'ha' two up to four times | "**haha**", "**hahaha**", "**hahahaha**"

## OR operator

Characters | Use
:---:|----
a\|b | Matches any string that contains either 'a' or 'b'
[ ] | Is used to represent a list, so it matches a string that contains one of the characters inside the list

Some examples are:

Example | Description | Matching string examples
:--:|--|--
se(a\|e) | Matches any string that contains the text 'se' followed either by an 'a' or an 'e' | "**see**", "**sea**"
a[bcd] | Matches any string that contains an 'a' followed either by 'b', 'c', or 'd' | "**ab**", "**ac**", "**ad**"

## Character classes
The character classes operators allow you to match characters inside a category (class). These operators offer their negations, which are the same as the normal operator but in upper case.

Characters | Use
:---:|----
\\d | Matches a single **digit** character
\\w | Matches a single **word** character (letters, numbers, and underscore)
\\s | Matches a single **white space** character, including tabs and line breaks
\\D | Matches a single **non-digit** character
\\W | Matches a single **non-word** character (letters, numbers, and underscore)
\\S | Matches a single **non-white space** character, including tabs and line breaks
. | Matches any single character

## Flags
Regex usually uses the form `/pattern/`. At the end, we can use the following flags:

Flag | Description
:---:|----
g | The **global** flag is used to search for all the individual matches inside the string. If it is not used, the expression will return after the first match
m | The **multiline** flag allows to use `^` and `$` as the beginning and end of a line, not the beginning and end of the string, which can contain multiple lines
i | The **insensitive** flag makes the regular expression case insensitive


## Conclusions
Regex has a lot of uses. You can combine the simple operators explained in this article to create complex pattern searches. One example is to validate an email address, this can be donde with the following regular expression:

`^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$`

This example matches a complete string for which it searches a pattern with the following order:

- `[\w-\.]+` : a combination of one or more word characters, hyphens or dots
- `@`: the @ symbol
- `([\w-]+\.)+` : one or more combinations of one or more word characters or hyphens ended by a dot (for domains and subdomains on the email like email.rackspace.)
- `[\w-]{2,4}` : a combination for 2, 3 or 4 word characters or hyphens for the end part of the email (com)

Just like this example there are many others that can be easily implemented for different purposes.
