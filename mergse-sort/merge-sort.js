"use strict";

function mergeSort(arr) {
  let len = arr.length;

  if (len > 1) {
    let mid = Math.floor(len / 2);
    let left = arr.splice(0, mid);
    let right = arr.splice(-mid);

    mergeSort(left);
    mergeSort(right);

    return merge(left, right, arr);
  }
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i = i + 1;
    } else {
      arr[k] = right[j];
      j = j + 1;
    }
    k = k + 1;
  }

  if (i === left.length) {
    arr = [...arr, right];
  } else {
    arr = [...arr, left];
  }
}

console.log(mergeSort([8, 4, 23, 42, 16, 15]));
