var actualCode = "document.getElementsByClassName(\"dropup hidden\")[0].classList = \"dropup\";";

var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();