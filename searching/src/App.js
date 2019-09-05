import React from 'react';

function App() {
  const array = [
    89, 30, 25, 32, 72,
    70, 51, 42, 25, 24,
    53, 55, 78, 50, 13,
    40, 48, 32, 26, 2,
    14, 33, 45, 72, 56,
    44, 21, 88, 27, 68,
    15, 62, 93, 98, 73,
    28, 16, 46, 87, 28,
    65, 38, 67, 16, 85,
    63, 23, 69, 64, 91,
    9, 70, 81, 27, 97, 
    82, 6, 88, 3, 7,
    46, 13, 11, 64, 76,
    31, 26, 38, 28, 13,
    17, 69, 90, 1, 6,
    7, 64, 43, 9, 73,
    80, 98, 46, 27, 22,
    87, 49, 83, 6, 39,
    42, 51, 54, 84, 34,
    53, 78, 40, 14, 5,
  ]
  //linear search
  function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == value) {
        return `Found ${value} after ${i+1} searches`;
      }
    }
    return `Cannot find ${value} after ${array.length} searches`;
  }
  //Binary search
  function binarySearch(array, value, start, end, searches) {
     start = start === undefined ? 0 : start;
     end = end === undefined ? array.length : end;
     searches = searches === undefined ? 0 : searches;

    if (start > end) {
      return `Cannot find ${value} after ${searches} searches`;
    }
  
    const index = Math.floor((start + end) / 2);
    const item = array[index];
  
    //console.log(start, end);
    if (item == value) {
      return `Found ${value} after ${searches} searches`;
    }
    else if (item < value) {
      
      return binarySearch(array, value, index + 1, end, searches + 1);
    }
    else if (item > value) {
      
      return binarySearch(array, value, start, index - 1, searches + 1);
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    let target = e.target.numInput.value;
    console.log(target);
    //alert(indexOf(array, target));
    const sorted = array.sort((a, b) =>{
      return a-b;
    })
    //console.log(sorted);
    alert(binarySearch(sorted, target));
  }
  return (
    <main className='App'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='inputData'>Input Data</label>
        <input id ='numInput' type='text' name='inputData' />
        <button type='submit'>Submit</button>
      </form>

      
    </main>
  );
}

export default App;