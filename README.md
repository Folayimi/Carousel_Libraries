# Carousel_Libraries

Simplified and Ready Made Functions for smooth development

![Nature](https://user-images.githubusercontent.com/75343238/132236166-4bfb3ffc-6dab-4d96-b7c1-cc8da180312c.PNG) ![Nature](https://user-images.githubusercontent.com/75343238/132236208-a42d6c2f-a1ec-492c-a1f4-32eca0d25c97.JPG)


![Sunset](https://user-images.githubusercontent.com/75343238/132236286-05e2c82f-f555-4786-8a8d-76089e81cd6f.PNG) ![Sunset](https://user-images.githubusercontent.com/75343238/132236134-60c4ef73-0f06-441f-b49b-93a1936a57de.JPG)

https://devfola.netlify.app

## NOTE: THIS WORKS ON WORKFRAMES OF JAVASCRIPTS SUCH AS Next.js,React.js etc..

## Guidelines and Steps to make use of my Library

The library only accepts a list of user input named "data".

## Visit the Carousel-text-image-library branch and follow the steps outlined below.

visit the following files....

-> "React-git-files" Folder

-> "src" Folder
   
-> Located in the source folders, are some of the files I made use of while creating the hooks

-> These files are:
   
  -> "carousel.js" file   //needed

  -> "Carousel.css" file   //needed

  -> "data.js" file       //needed but you can create yours or edit this!.

  -> Some Images.         

Note: you only need the "carousel.js","carousel.css" and your "data.js" file.

## The "carousel.js" file

The carousel.js file consists of the "Carousel" function that executes the library tasks,

intergrated with some react hooks and mappings.

The "carousel.css" and "data.js (json file)" are the files required for smooth operation.

## FOLLOW THE STEPS BELOW TO MAKE USE OF THE COMPONENTS IN YOUR PC

-> clone the repo to your local machine

   open a file in the folder you wish to work on and save as a .js file.

-> also create a .json file in the same folder. 

   Execute the following in the json file.
	
   export default data = [ 
   {
	    id:1,
   	  image:"scr",
	    text: "txt"
   },
   {
	    id:2,
    	image:"scr",
	    text: "txt"
   },
   {},
   ....
   ]

The data input in the 'name' list can be unlimited provided the naming convention is followed

-> The variable of the identification number must be "id" and must begin from 1, 2, 3 and so on...

(no skipping any number. It must be assigned in an orderly manner depending on the number of list input)

-> The image variable must be "image"

-> The text variable must be "text"

-> The list can be represented with any name.

## Execute the following operations.

import Carousel from './carousel.js' or './carousel'(if in the same folder);

import './carousel.css';

import data from './data.js' or 'data'(if in the same folder);

//Note: 'data' is the name given to the data list in the data.js file.

-> Then call the Library function "Carousel data= data" when you need it.

