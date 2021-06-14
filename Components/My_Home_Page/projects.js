/**
 This page all information about zeel-codder education info.

 @name:Projects
 @type:React Component
 @param:none
 @returns: JSX of Education details
 @functionality : This Component is use to show Project info of zeel in website.
**/


// Imports
// ====================================
// import {IoIosArrowDroprightCircle} from 'react-icons/io'
// import {FaRegHandPointRight} from 'react-icons/fa'
// import Brightness1Icon from '@material-ui/icons/Brightness1';
// import Brightness5Icon from '@material-ui/icons/Brightness5';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import {useState} from 'react'
import React from "react";
import { WebLink } from '@const/List';
import Link from 'next/link';
// import { useGlobalContext } from '../context';
// ====================================




const Projects=()=>{


    const ProjectData=[
        {
            id:1,
            title:'My Introduction',
            technology:'Next Js',
            description:'A blogging web site which build on next js. Web-site main function are User Auth , User can read the blogs , Search blogs and also like or share the blog.',
            codelink:'https://github.com/zeel-codder/My_Introduction',
            link:'https://zeelcodder.tech/',
            
        },
        {
            id:2,
            title:'Anteryamin-Store',
            technology:'Html,Css and Js',
            description:'An e-commerce web site which build on Only Html,css and js. Main function are User Login, singing , see the item or product of store, sort or search the item by name and price and add item or remove to cart.',
            codelink:'https://github.com/zeel-codder/AnteryamiStore-e-commerce-website-',
            link:'https://anteryaminstore.netlify.app/',
            
        },
     
     ]

    //Store the open ul data
    const [arr,setarr]=useState([]);


    
    //=============================
    // @name:changeIndex
    // @type:Javascript Function
    // @param:none
    // @return:none
    // @functionality: Function is used to show the Text of ul. It item in arr than it nested ul is display in screen other wise not.
    //=============================

    const changeIndex=(index)=>{
        // console.log(index)
        let new_arr=arr;
        if(new_arr.includes(index)){
            new_arr=new_arr.filter((index1)=>index1!==index);
        }else{
           new_arr.push(index);
        }
        // console.log([...new_arr])
        setarr([...new_arr]);
    }


    // console.log('rendee')
    return(
        <div id="projects">
        <h1>Projects</h1>
        <div className="box row" id="projects">
        {/* <div className="row"> */}

        {/* <img className="container-img" src='/images/home/project.jpg' alt="Project svg"></img> */}
        <div className="ListOfBlogs blog-container tools" style={{width:"100%"}}>
     

           {
               ProjectData.map((data,index)=>{

                const {id,technology,description,codelink ,link,title}=data
  
                return (

                    <div key={id} className="BlogShort" >
                <span className="title">Technology:{technology}</span>
              

                <div>
                <h1>{title}</h1>
                <div className="description">{description}</div>
                <div>
                
                {
                    codelink 
                  &&
                  <div className="code"><Link href={codelink}>code</Link></div>
                }
                {
                    link
                    &&
                    <div className="link"><Link href={link}>Web site</Link></div>
                    
                }

                
                </div>
                </div>
              
            </div>
                )
                })
            }
        {/* </ul> */}
        <div className="code">
            <Link href={`${WebLink}/me/tools`}>More Projects</Link>
        </div>
        </div>
        </div>
            {/* </div> */}
        </div>
    )
}
export default Projects;