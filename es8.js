// introducing async/await

const url = 'https://api.github.com/search/users?q=yong-asial';

// fetch(url)
//   .then(response => response.json())
//   .then(result => console.log(result));

const fetchData = async () => {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
}

fetchData();