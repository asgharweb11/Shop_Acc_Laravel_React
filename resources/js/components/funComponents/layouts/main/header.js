import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch , faTag} from "@fortawesome/free-solid-svg-icons"
// -------------------
import "../../../../../sass/main/home.scss"

export default function header() {
    return (
        <header className="header-main">
            <div className="d-flex flex-column justify-content-start">
                <div className="TopestHeader">
                    <div className="container d-flex flex-row align-item-center justify-content-between">
                        <div className="title">
                            <span className="ml-2 d-none d-sm-inline-block text-light">
                                فروشگاه اکانت ، مکانی برای خرید و فروش کانت های شما
                            </span>
                        </div>
                        <div className="PanelUser">
                            <ul className="">
                                <li className="d-inline-block ml-2"><Link className="text-light" to="/">سبد خرید</Link></li>
                                <li className="d-inline-block ml-2"><Link className="text-light" to="/login">پروفایل</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="headerFix d-flex flex-row justify-content-between align-items-center mt-3">
                    <div className="container d-flex flex-row justify-content-start align-items-center ">
                        <div className="logo">
                            <img src="images\logo\logo.png" alt="فروشگاه بازی" />
                        </div>
                        <div className="links">
                            <ul className="m-0 p-0">
                                <li className="d-inline-block ml-3"><Link className="text-light" to="/">صفحه اصلی</Link></li>
                                <li className="d-inline-block ml-3"><Link className="text-light" to="/products">محصولات</Link></li>
                                <li className="d-inline-block ml-3"><Link className="text-light" to="/panel/recordAcc">فروش اکانت شما</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="search">
                        <input type="text" name="search" placeholder="جستجوی اکانت ..." />
                        <FontAwesomeIcon className="iconSearch" icon={faSearch} />
                    </div>
                </div>
                <div className="breadcrumbs mt-5">
                    <div className="container">
                        <ul className="m-0 p-0">
                            <li className="ml-3 d-inline-block text-light"><FontAwesomeIcon icon={faTag} /></li>
                            <li className="ml-3 d-inline-block text-light"><Link className="link text-light" to="/">صفحه اصلی</Link> /</li>
                            <li className="ml-3 d-inline-block text-light"><Link className="link text-light" to="/">محصولات</Link> /</li>
                            <li className="ml-3 d-inline-block text-light"><Link className="link text-light" to="#">اکانت فورت نایت</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </header>
    )
}