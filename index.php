<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="main.css">
        <script>
        function add() {
            // add functionallity
            alert('you clicked add');
        }
        function submit() {
            // submit funcitonality
            alert('you clicked submit');
        }
        function addFile(){
            //add functionality to addFile
            alert('you clicked add file');
        }
        function clickQuestion(){
            //functionality for when a question is clicked
            alert('you clicked a question');
        }
        function goHome(){
            alert('home button clicked');
        }
        function signOut(){
            alert('you clicked sign out');
        }
        </script>
        <title>Video Page</title>
    </head>
    <body class="background-grey">
        
        <div id="main_panel" class="background-grey">
            
            <div id="left-panel" class="background-grey">
                <div class="header"><img id="home" onclick="goHome()" style="cursor: pointer;" src="home.png"/><span id="title">The Molecular Structure of Sugar</span></div>
                <iframe id="ytplayer" type="text/html" width="640px" height="390px" src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com" frameborder="0"></iframe>
                <div style="padding-top: 2em; padding-left: 1em; font-weight: bold;">Teacher comments:</div>
                <div class='teacher-comments'>
                    This is the section with all the teacher's comments. They can be really lengthy and boring, and they may run out of things to say before it really gets interesting. By that time no one will be reading the comments anymore except Brendon who will be the only one to ge this far in reading this stupid ridiculous line. Hopefully you are laughing now because this is insanely long....
                </div>
            </div>
            <div id="right-panel" class="background-grey">
                <div class="header"><a id="signout" onclick="signOut()" href="#">Sign out</a></div>
                <!-- search bar -->
                <div><input id="search" class="search" placeholder="  Search..."/><span onclick="add()" style="cursor: pointer;"><img height="30px" width="30px" style="margin-left: -40px; margin-bottom: -7px" src="add_question.png"/></span></div>
                <!-- questions -->
                <div class="question shadow" onclick="clickQuestion()" style="cursor: pointer;">
                    <p>this is my sincere question? kjsljksfdjk lljk sfjk ljkl jkl sdj klsdfjk lsdfj kl sjfkl jklsfdjkl sdfjk lsdfjkl sdf ljkdsfjklfsdjklsfdjkl sfdjkl dfsj kljksdfl ljk sfd</p>
                    
                </div>
                <div class="question shadow" onclick="clickQuestion()" style="cursor: pointer;">
                    <p>this is my sincere question? kjsljksfdjk lljk sfjk ljkl jkl sdj klsdfjk lsdfj kl sjfkl jklsfdjkl sdfjk lsdfjkl sdf ljkdsfjklfsdjklsfdjkl sfdjkl dfsj kljksdfl ljk sfd</p>
                </div>
                <div class="ask-question shadow">
                    <p class='question-header'>Question 1:</p>
                    <textarea id="question" class="text-field"></textarea>
                    <button id="submit" class="submit shadow" onclick="submit()" style="cursor: pointer;">Submit</button>
                    <button id="add-file" class="add-file shadow" onclick="addFile()" style="cursor: pointer;"> + File</button>
                </div>
                <div class="ask-question shadow">
                    <p class='question-header'>Answer 1:</p>
                    <textarea id="answer" class="text-field"></textarea>
                    <button id="submit" class="submit shadow" onclick="submit()" style="cursor: pointer;">Submit</button>
                    <button id="add-file" class="add-file shadow" onclick="addFile()" style="cursor: pointer;"> + File</button>
                </div>
            </div>
        </div>
    </body>
</html>
