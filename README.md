<html>
    <head>
        <title>Priyank Gupta Portfolio</title>
        <style>
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            .container{
                width:100vw;
                height: 210vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: white;
            }
            .photo{
                width: 100vw;
                height: 500px;
                border: 1px solid black;
                margin: 0;
                background-image:url(photoport\ \(3\).jpg);
                background-repeat: no-repeat;
                background-size: 100vw 150vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            #image{
                height: 125px;
                width: 125px;
                margin-top: 10px;
                border-radius: 125px;
                box-shadow: 0px 0px 10px black;
                overflow: hidden;
            }
            #pic{
                height: 125px;
                width: 125px;
            }
            #name{
                height: 40px;
                width: 300px;
                color: white;
                font-size: 30px;
                margin-top: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            }
            #discription{
                width: 800px;
                height: 40px;
                color: white;
                font-size: 15px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                margin-top: 10px;
            }
            #bookmarks{
               height: 25px;
               width: 400px;
               margin-top: 55px;
               display:grid;
               grid-template-columns: repeat(3,1fr);
               grid-template-rows: repeat(1,1fr);
            }
            #m1{
               border-right: 1px solid white;
               display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                font-size: 19px;
            }
            #m2{
                border-right: 1px solid white;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                font-size: 19px;
            }
            #m3{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                font-size: 19px;
            }
            #s{
               text-decoration: none;
               color: white;
               transition: all;
               transition-duration: 0.5s;
            }
            #s:hover{
                color: black;
            }
            .text{
                width: 80vw;
                height: 1100px;
                background-color: #f5f5f5;
                margin-top: -70px;
                border-radius: 0.25cm;
            }
            .footer{
                width: 100vw;
                height: 150px;
                background-color: #2a3c4d;
                margin-top: 66px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
            }
            #skills{
                height: 100px;
                width: 80vw;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: #2a3c4d;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                font-size: 30px;
            }
            #projects{
                height: 100px;
                width: 80vw;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: #2a3c4d;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                font-size: 30px;
            }
            .t{
                height: 150px;
                width: 80vw;
            }
            #h1{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;  
            }
            #h2{
                height: 720px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .cell{
                height: 175px;
                width: 175px;
                border-radius: 0.10cm;
                background-color:white;
                margin: 40px;
                color: white;
                font-size: 20px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                overflow: hidden;
            }
            .cell1{
                height: 100px;
                width: 1000px;
                border-radius: 0.10cm;
                margin: 25px;
                background-color:#4c6d8d;
                color: #f5f5f5;
                font-size: 17px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            }
            .block{
                height: 100px;
                width: 400px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center; 
            }
            #i3{
                height: 210px;
                margin-right: 70px;
                transform: all;
                transition-duration: 1s;
            }
            #i3:hover{
                transform: translate(60px);
            }
            #i4{
                height: 170px;
                margin-right: 80px;
                transform: all;
                transition-duration: 1s;
            }
            #i4:hover{
                transform: translate(60px);
            }
            #i5{
                height: 170px;
                margin-right: 60px;
                transform: all;
                transition-duration: 1s;
            }
            #i5:hover{
                transform: translate(60px);
            }
            #i6{
                height: 170px;
                margin-right:75px;
                transform: all;
                transition-duration: 1s;
            }
            #i6:hover{
                transform: translate(65px);
            }
            .i1{
                margin-right: -100px;
            }
            .r1{
                color: white;
                margin: 17px;
                transition: all;
                transition-duration: 1s;
            }
            .r1:hover{
                transform: scale(1.6);
            }
            .r2{
                color: white;
                margin: 25px;
                transition: all;
                transition-duration: 1s;
            }
            .r2:hover{
                transform: scale(1.6);
            }
            .r3{
                color: white;
                margin: 30px;
                transition: all;
                transition-duration: 1s;
            }
            .r3:hover{
                transform: scale(1.6);
            }
            #linked{
                border-radius: 5px;
            }
            #box2{
                flex-direction: row;
            }
            .r3{
                margin: 5px;
            }
            .r4{
                margin: 5px;
                color: #f5f5f5;
            }
            #box3{
                flex-direction: row;
            }
            #mail{
                margin: 20px;
                transition: all;
                transition-duration: 1s;
            }
            #mail:hover{
                transform: scale(1.6);
            }
            .imag{
                color: white;
            }
            .pics{
                height: 600px;
                width: 1000px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
            }
            .pic1{
                height:500px;
                width: 480px;
                margin: 20px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
             .pic2{
                height:500px;
                width: 480px;
                margin: 20px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }  
             #page{
                width: 480;
                height: 240px;
                margin-bottom: 10px;
                box-shadow: 0px 0px 10px black;
            }
             a{
                text-decoration: none;
                color: whitesmoke;
             }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="photo">
                  <div class="content" id="image"><img id="pic" src="profile.jpg" alt="pic"></div>
                  <div class="content" id="name">Priyank Gupta</div>
                  <div class="content" id="discription">
                    <p>Hello! I am Priyank Gupta,learning full stack and an Augmented reality & Virtual reality enthusiast.</p>
                    <p>I enjoy creating user friendly and efficient websites which helps the users in several ways.</p>
                </div>
                  <div class="content" id="bookmarks">
                       <div class="marks" id="m1"><a id="s" href="#skills">Skills</a></div>
                       <div class="marks" id="m2"><a id="s" href="#projects">Projects</a></div>
                       <div class="marks" id="m3"><a id="s" href="ContactMe.html">Contacts</a></div>
                  </div>
            </div>
            <div class="text"> 
                <div class="t" id="skills">Skills</div>
                <div class="t" id="h1">
                    <div class="cell">
                        <div class="i1">Java</div>
                        <div class="i2"><img id="i3" src="java.png"></div>
                    </div>
                    <div class="cell">
                        <div class="i1">HTML</div>
                        <div class="i2"><img id="i4" src="HTML.png"></div>
                    </div>
                    <div class="cell">
                        <div class="i1">CSS</div>
                        <div class="i2"><img id="i5" src="css.png" height="40px"></div>
                    </div>
                    <div class="cell">
                        <div class="i1">Java Script</div>
                        <div class="i2"><img id="i6" src="js.png"></div>
                    </div>
                </div>
                <div class="t" id="projects">Projects</div>
                <div class="t" id="h2">
                    <div class="cell1">
                       <p>Sustainable Recycling Initiative : A project focused on collecting and repurposing plastic waste into reusable products.</p>
                       <p><a href="Front.html">Click here to view the website</a></p>
                    </div>
                    <div class="pics">
                        <div class="pic1">
                            <img id="page" src="page1.png"alt="page1">
                            <img  id="page" src="page2.png" alt="page2">
                        </div>
                        <div class="pic2">
                            <img  id="page" src="page3.png" alt="page3">
                            <img  id="page" src="page4.png" alt="page4">
                        </div>
                    </div>
                    <div class="cell1">
                        Portfolio Website : A simple portfolio showcasing my skills and projects.
                    </div>
                </div>
            </div>
        </div>
        </div>
    </body>
</html>
