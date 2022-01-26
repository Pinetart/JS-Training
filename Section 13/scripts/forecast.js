const key = "kBuIpRH9VukfyFBbhH9R32Lk20R0sWNG";

const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

getCity("Georgetown")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
