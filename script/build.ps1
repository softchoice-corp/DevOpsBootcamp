Install-WindowsFeature Web-Server

$htmlcode = "<body style='background-color:orange;'> <br> <center> <h1> <font face='segoe ui light'> DevOps is Awesome! <br><br> <3 GitHub </font> </h1> </center> </body>"

Set-Content -Path "C:\inetpub\wwwroot\Default.htm" -Value $htmlcode