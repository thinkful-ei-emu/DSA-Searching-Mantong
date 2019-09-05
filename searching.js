function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return i;
    }
  }
  return -1;
}
function binarySearch(array, value, start, end) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item == value) {
    return index;
  }
  else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

/*1. How many searches?
11 search left  3,5,6,8
then 5 search right 6,8
then 6, search right 8
find 8
so 4 searches until find 8

11 search right 12,14,15,17,18
15 search 17,18
17 returns
no find
so 3 searches until no find of 16
*/

//2. Adding a React UI
//See in searching folder

/*3. Find a book
input:
{ author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
{ author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
{ author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
{ author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
{ author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
{ author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
{ author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
{ author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
{ author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
{ author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
*/
function DeweySearch(dewey, title, start, end) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? dewey.length : end;
  
  if (start > end) {
    return -1;
  }
  
  const index = Math.floor((start + end) / 2);
  const item = dewey[index];
  
  for (let i = 0; i < dewey.length; i++) {   
    if (dewey[i] == title) {
      return 'found book';
    } 
  }
 
  if (item < dewey) {
    return DeweySearch(dewey, title, index + 1, end);
  }
  else if (item > dewey) {
    return DeweySearch(dewey, title, start, index - 1);
  }
}
/*4. Searching in a BST
1)
*/

