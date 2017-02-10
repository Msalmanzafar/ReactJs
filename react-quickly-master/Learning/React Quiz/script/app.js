var myNavBar = React.createClass({
    render:function(){
       <nav class="navbar header navbar-fixed-top" id="my-navbar">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle " data-toggle="collapse" data-target="#navbar-collapse">
                        <span class="icon-color icon-bar"></span>
                        <span class="icon-color icon-bar"></span>
                        <span class="icon-color icon-bar"></span>
                    </button>
                    <a href="JavaScript:void(0)" class="navbar-brand" id="logo"><marquee behavior="slide" scrollamount="3">SKY SCHOOL</marquee></a>
                </div>
                <div class="collapse navbar-collapse" id="navbar-collapse">
                    <ul class="nav link1 navbar-nav">
                        <li><a id="link" href="index.html">Home</a></li>
                        <li><a id="link" href="gallery.html">Gallery</a></li>
                        <li><a id="link" href="projects.html">Projects</a></li>
                        <li><a id="link" href="courses.html">Courses</a></li>
                        <li><a id="link" href="contact-us.html">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    }
});

ReactDOM.render(
    React.createElement(myNavBar),
    document.getElementById("myNavBar")
);

// var Component = React.createClass({
//     render: function() {
//         return React.DOM.span(null, "I'm so custom");
//     }
// });
// ReactDOM.render(
//     React.createElement(Component),
//     document.getElementById("app")
// );