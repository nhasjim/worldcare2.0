
## How to Run the Website on Localhost

* Run `npm install` in the root directory
* Run `npm start server.js`



## How to Develop
Most of the code is in index.html
This is where all of the info is. If you want to change a header title, or an image, basically just find the text in the website, and CTRL+F it. That should take you to where the location of that text is. 

If you want to change the pictures, you have to get a new picture and put it in the images folder. Once it is in the images folder, you can do one of two things. Change the code in index.html so that the string for the image name matches the filename of the image you put in the folder, or you can change the filename of the image you put in the folder to match the string in the code, and you would also have to delete the previous filename. 

Furthermore, many of the weird div classes like "col-lg-12" are bootstrap classes. This means that it will pull the formatting from bootstrap, which makes it a lot easier for us to code. This way, we don't have to deal with the super specific details of CSS or html, because the bootstrap classes already take care of it. 
