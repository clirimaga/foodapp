import React, { Fragment } from "react";
import classes from './Header.module.css';
import mealsImg from '../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";
export default function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShow={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt='table of delicious food'/>
      </div>
    </Fragment>
  );
}
