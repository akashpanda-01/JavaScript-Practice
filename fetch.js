async function getData(){
  const data = await fetch(
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=77949&catalog_qa=undefined&submitAction=ENTER"
  );
  const json = await data.json();
  console.log(json);
}

getData();