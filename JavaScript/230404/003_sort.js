// 실무사용코드
function sort(key) {
  if (click) {
    click = false;
    var sortedData = jsonData.sort((a, b) =>
      a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0
    );
  } else {
    click = true;
    var sortedData = jsonData.sort((a, b) =>
      a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0
    );
  }
}

// 딥하게 sort를 탐색해보겠다?
const nums = [3, 1, 11, 8, 6];
console.log(
  nums.sort((a, b) => {
    console.log(a, b);
  })
);
