import React from 'react'

import {Link} from 'react-router-dom'

import DetailProduct from './Details/DetailProduct';
import { IRestaurant } from '../ListProducts';

import './Product.css'



interface IProps {
	list: IRestaurant;
	detail: IRestaurant;
}

function Products(props: IProps) {
	/*DATA from user*/
	//getting the day
	
	/*
	function getUserDay() {
		const data = new Date();
		const day = data.getDay();

		return day;
	}

	//getting the hours
	function getUserHour() {
		const data = new Date();
		const hours = data.getHours();

		//const h = parseInt(props.list.hours[0].from)

		return hours;
	}

	var copy = Object.create( Object.getPrototypeOf(props) );
	var array = Object.getOwnPropertyNames(props);

	array.forEach(function(a){
			console.log(a);
	})

	function isItOpen() {
		const day = getUserDay();
		const hours = getUserHour();
		
		
	}

	//testing if it is open or not.
	/*function open() {
		const day = getUserDay();
		const hours = getUserHour();

		console.log("daysUser: " + day)
		console.log("days: " + props.list.hours[0].days.length)

		console.log("from1: " + props.list.hours[0].from.length)

		for (let i = 0; i < props.list.hours.length; i++) {
			for (let j = 0; j < props.list.hours[i].days.length; j++) {
				if (props.list.hours[i].days[j] == 1){
					//if(props.list.hours[i].from )
					console.log("achou")
					break
				}
			}
		}
		*/

	return (
		<div className="productBox flex" key={props.list.id}>
			<img src={props.list.image} className="productImg" alt="Restaurant"></img>
			<div className="productText flex">
				<h1 className="productName">{props.list.name}</h1>
				<h2 className="productAddress">{props.list.address}</h2>

				<Link to={`/detalhes/produto${props.list.id}`}>clique</Link>

				
			</div>
		</div>
	)
	//<DetailProduct list2={props.list}/>
}

export default Products
