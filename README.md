[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11755811&assignment_repo_type=AssignmentRepo)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.


I analized the algorithm using pretty much the same process shown in the merge sort slides



If array has 0 elements we just return 0

If the array has 1 element we just return that element

If the array has 2 elements the middle index span will be zero and then we just add the numbers up

If the array has more than 3 elements we first calculate the split points and then do regular merge sort splits until we get to the base case and then we just sum them up

From the merge sort slides we saw that we get a T(n) = 2T(n/2) + 2. Now that is if we only split up into two parts if we split up into three we get T(n) = 3T(n/3) + 3. We can then follow the substitution steps from the slides to get 3(3 * T(n/3/3) + 3) + 3 = 9T(n/9) + 6.

We then can plug in i and get 3^i * T(n/3^i) + 3i where i is i = log of base 3 (n) 

That then gets us to n * T(1) + 3log(n) = n(1) + 3 * log(n) = n * 3log(n) which gets us our final answer for theta (n).

For this explination I took some inspiration from Boomboomyoyo's answer as I got a little stuck.