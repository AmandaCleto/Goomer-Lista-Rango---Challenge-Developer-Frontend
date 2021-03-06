import React from 'react'

import Products from './Products/Products'
import DatailProducts from './Products/Details/DetailProduct'

import './ListProducts.css'


//interface
export interface IRestaurant {
  id: number;
  name: string;
  address: string;
  image: string;

  hours: [
    {
      from: string,
      to: string,
      days: number[];
    },
    {
      from: string,
      to: string,
      days: [number];
    }
  ];
}

function ListProducts() {
  React.useEffect(() => {
    async function run() {
      const restaurants = await getRestaurants();
      setRestaurantList(restaurants);
    }

    run();
  }, []);

  //useState (array, function)
  const [restaurantList, setRestaurantList] = React.useState<IRestaurant[]>([]);

  //getting the full API
  async function getRestaurants() {
    const response = await fetch('http://challange.goomer.com.br/restaurants');
    const allRestaurants = await response.json();

    return allRestaurants;
  }

  return (
    <div className="listProducts">
      {restaurantList.map((get) => {
        return (
          <Products detail={get} list={get} key={get.id}/>
        )
      })}
    </div>
  )
}

export default ListProducts