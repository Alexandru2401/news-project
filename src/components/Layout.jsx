import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Layout.css"

export default function Layout(props){
    // Componenta primesc ca si copii anumite tag-uri atunci cand este instantiata, deci ma folosesc de props.children

    return (
        <div className="layout">
            <Header/>
            <main>{props.children}</main>
            <Footer/>
        </div>
    )
}