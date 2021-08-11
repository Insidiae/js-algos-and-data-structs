function fib(num) {
  console.count("fib");
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

function memoizedFibHOF() {
  //  Create a cache variable to store previous results
  const cache = {};

  return function memoizedFib(num) {
    console.count("memoizedFib");
    //  If the number we're looking for is already in the cache:
    if (num in cache) {
      //  Simply return the cached result
      // console.log(cache);
      return cache[num];
    }

    //  Otherwise, just calculate the result like usual
    if (num < 2) {
      return num;
    }

    //  Don't forget to store new results in the cache!
    cache[num] = memoizedFib(num - 1) + memoizedFib(num - 2);

    // console.log(cache);
    return cache[num];
  };
}

function tabulatedFibHOF() {
  //  Create a cache variable to store previous results
  const cache = [0, 1, 1];

  return function tabulatedFib(num) {
    //  If the number we're looking for is already in the cache:
    if (num in cache) {
      //  Simply return the cached result
      console.count("tabulatedFib");
      // console.log(cache);
      return cache[num];
    }

    //  Otherwise, calculate next values
    //  based on previously cached results
    for (let i = cache.length; i <= num; i++) {
      console.count("tabulatedFib");
      cache.push(cache[i - 1] + cache[i - 2]);
    }

    // console.log(cache);
    return cache[cache.length - 1];
  };
}

const memoizedFib = memoizedFibHOF();
const tabulatedFib = tabulatedFibHOF();
