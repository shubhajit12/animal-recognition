

function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classfier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/k2LlFj6Zy/model.json",modelready);
}
function modelready(){
    classfier.classify(gotResult);
}
function gotResult(error,results){
 if(error){
    console.error(error);
 }
 else{
    console.log(results);
    r=Math.floor(Math.random()*255)+1;
    g=Math.floor(Math.random()*255)+1;
    b=Math.floor(Math.random()*255)+1;

    document.getElementById("label").innerHTML="I can hear- "+results[0].label;
    document.getElementById("label").style.color="rgb("+r+","+g+","+b+")";
 }
 img=document.getElementById("hear");

 if(results[0].label=="barking"){
    img.src="download.jpg";
 }
 else if(results[0].label=="meowing"){
   img.src="sticker-template-cat-cartoon-character_1308-73786.avif";
 }
 else{
    img.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAtFBMVEVeqt/+xp/osYb+6NfGl3f/6tf/7Nb/7db/x53/yJn/xp5aqd//x5tWqN9LpeBKqOTvuI7559fd29lzsd7rtIrD0Nr4wZnn39i1uMDU19mBtt2yydvt4th5s96Ws8xmrd+Lud3eqYLH0tqtx9ubwNyLsdDlwqp/r9Tlso6Vvty8zdqkxNzyxKPh3NidtMqptsXdwK7Cu7vQvrSmtsbNnXrtw6bXpoTVvrHJvLayuMHBurzerYoJs4PSAAAPR0lEQVR4nO1dCXfaOhOFBrwgZIfQkKVJICshW5ulWdr//78+wJqRtUuG7zUmvuf0nJe8YMvXM3dGo5FotRo0aNCgQYMGDRo0aNCgQYMGDRo0aNDg84NQACH/eiz/OeYPn+X5eHr58PNjf3//4+FynOeU/uth/WcgNM+mz4+/7tI07S+QzP/N//Pq8aSV0y9gDzTLLvev+mk/SXptEb2kn/7eP8432xrmFnDylqTK05d4mNPw0co31hhIfvw+N3zj83Ma3qabaQwkv7xKnQQUSNKryw20hXx6lZpdQDWG9Gqa/+sxrxeUPIUwULDw1Nokh8gvk34YAwsk/YfNMYX8Iw1nYIH016akTfl7RQrmptCebgQJ+VsFP+CmsAn+kD+tQsGchP3ak5A/Wh1hNNpmGI1MJLzXnITs2UjBaPv7NwnbWh769SaBTg0UjLbl52f4rqEhfaw1CfrkeKRYgGANKgkf9SUh/6XjYGQjQM9CelLXEEl1YmC3AYDsEelxPUkgYw0FJh1wmEKvXU8OdJ7gZQRLfBc/mPyqoyTQS8UM3EpQhuQNzzW0hPxOni2HUaCQMK5dVYU+yzlyKAUSCb2r2nlDrmhBMAWSJtQuQKpmEE6BFB167ZoZgqIG7qC4mDeN5rOo8kRCyBP6+7UyBHoiBQWXGGyLlCFjwm/7tVLF/JdkBlYCdBOlbY031MoQlBTR6gn6ysFI5w014oB+SIpo8wItA/ghITb0f9aHhPxKdAWLGpgpYJ8qG0Lvrj6hgUiuYJ4mmCpoS2wrJKXTusgiPfF1BYsV4OfKv0je6+IMdF+cMRpdQZocKhgpPPX/pTOQbEx834E8azZGBasnaA0hvfQ2hIyMs7V6Djk+iqMDz/vLSaJJDlxmwNgT7ODRlwN6FsVHh2t0HTKOtra2ooPM668zqXhioOD02slBW3EG38iQHSxHPFyfJWSDrQViz0um6oNo0HFT0FbMxbOMQIbxcsSDtRlCdtBdXrF74XNJMvQKC6c+HKjO8OD1VHTGRuxpuu4LXkTLC25FE5+XQIZedtDpOCWRRYby3yV+gkAOYcher80DBadzeJHqzYGHHigc+JaTmPfOLWEtNbhsh10uOvT0RR8OTjsdX0EQRDHxe6/kMGaj3lmDN9AZmNUPfjVq6xCRZ41GDl7dHHyXOUjHlqGW2lyzcxj2bHVvQKu65xRks5tbc1st8dLEOQce3rCtcHBpui+htzcXpTGC+Q5WNgT6g6lBxHvLs72oGw2MjpZL+YE+R3rxImH0Ta4hGAPDeNDtRnv8/xI28O7NyoYAFHCBze4Xv+vem/jNfxsqY6ohuEn4JhfUPgxPlO0sR7WHo+JO3FpNFrNdFmj5E0O2EJs+k795zZlOlyT8dXIghtDkj4EDEskZAXhD92wlbyAt4BItH8XGmDX6zhtflyS8uCxBhHH6PI5l6S4yfGHwVUBvmBns4oUx6HRNbuZdPygswSdXKnHwZPIFSGJiDOF89KsoQtaVn5dCmIh+mC7sX1JlJHgkSyUODIZNwT7LgwUxW4EDes6IxOcFMdiKSk4m70aSJ8/meiIjwSNRQA7eBA5Kt87OGAlcEoCXrvF9uZEdMWrhEmQC9+HpF6WTQ7FaQd/9Zs8LdAJFQfAFkh1OeLZWRIbF+5nA78AQqucIMPPgERYTJj4pzS62ovhI0EdFEGzrCy9h/lDWRDI+iqMuz4v46NAQmCL4zfZ0yM4kXQXfKBUnmAWKRNOQpTbmD64gqeGgeOYYvZIMMa3HP2K/qTyHBkXk/gUUnKNh7EQaouUMwd6EcxriD6X8ABwzwtyF3oIu4is6cAQxB8hMej7MmzEZy/YgcJyXb6I4g2PN9cU/SJbyRHoLNy+NZ0sUQeSp4syJnknelcmegCok34PK/ViOtfdXb1EozRdQoHkWSyBT6uKYmUb4FoQlsKwDMwywNMw9s10YhCy8SmRw9WB4i0J53ogayCN1dsai+S0MGvKkSoJAjgtOsXQChhbBg84wZRxIebNSR3E3YXhmCmnpTmQ4ADuM0Q7ZazkCy2CxzbMAJAGCALxiqNWiGcDkdJ4sKMUEednVozfxxYsEYf2d0B10BzY5hElefAxvbiAqRBDYtAuzLoy17E1oU0YkUG1PdHHARMFOQu+3WE/E5BCCFygC5jSUeUelmhoQCJ4FSSPTH3AVQ/06v5OH727OO3WToEwb8U3AVAlmzGC+9KK6IEDCAVNk+BmKKVir2tNenD5U6FM9dUYHtQ0DVArfzUw0VzCMKmtOWIYBPlk0jtithjBfN1Rp1EZVbxIsHKTH8t2wxAEKkLHoBRkLs+cqKw3g/uBHlGVc7GdIHqJbw6WV3jR/EizekKjLC3LIhtQQMgL2c5WyIpU+CvLA6IV86cjoZnJZMYAEY8LY01VQpNktGOxA0vIKUwZ2ZW5CzK0Ki8Mc1GxhRA0NPr2aLzZD0FaVwWujWTE0EC62EgGiaH5bZg6Y+zO5hYdm8kp33Wqr3cvj5OCbTRFSLeOQL54JJgpVBHIcOYdqAAU2Cw7AwlgUYFZirdQR3bY2tyG8mkNDT7+VA14Ie9PZvSiKTDQj3UetQIuSvIpxTXVTZhlKu6oXB9/MzpCeaG9HJuzNs9dVZEX4fjIxWAZwwPLsgRgWWMoJ9mUvVuoUwYODV7MzmOqpgt/CFB9EENQ8eMYA3IKSQOZchELocXDojCZH8NnVZYoMPdP6CnhmIdAggjChBnUPLiHAU0IWyNKxbnEhmE85knC6r+z49qBgwYG2c9G45gwpQKEAyuu7LzMUwoGBzEnZ3Lpn9suSY9kZvHb0vOpFMXky9V8wUWS5jOzGogmHcHArvmnggLncjSg7Jihberw2OJ7qOUiNoiYOB8RqdQ4ufDhw5Z9KiuBDgaFPx2wGLg4OVuRgJV9o0UfPllUPDixteXpfkOU8XA9YArqSJiqi6EeBtmctsZyDIGniTKuJ4RPHtcTGFv0j2IHvdmddfmDbzSTObaCXUG/CIRwoOZJgbpAjOS5LnwQOTn05UNdb+rbNvlSomxpypPCqKjQwwAKNIVd25B1SkvTiy4EiB9a+RJzEsrGdiYJdOVc2zZlgXsLkwS6KcifCix8JmjZea58ylE2lsUEcGPvZrAby3PlQsAu/pQv6U5TE144XCafKUot9N5e0GMR+BP/HkVeoHxRsYq2MCCsuuHRhDbryfOG640WCogaJtUMXK53FQ4NWQc/YCjUUVy2N1S1s3Q3KIsOo40WCEhj71qYqXHJj5R1pbWiFWhqo644YGCDi0BtmgJb1G7Wi+OJDgkJBam3Yx4YhcAVYG4KXtyO+zBAOZqIbgcXFrEKFvXDmLF4tH1wvCmWOCKlQYD8IBDvwYCGExqKXglpUWH2Ha+MaCwRLdm1c4DH6mbrm2G53XCRoJs32vd5YVWa2Du6PayxDWGMJpsC81rYnLbKYmna15cRrOwnac7Kshz9gCwS8K5YZ46uRS+1hHBwI/KJARLCeswttIPpZg9KQww3BIAnawollurhoTAMKYIUFV8dRy8W1oTCg1sg9HkgK7hU50p19KjdmlQ3Bm4E5bJXrFvQCYaMcNGFgJzHIwXm4HJQcCeYaYGWYOmLbri4Xpw/6kxMNHJgYsG1xJoe4yyiGxQRQSJjvQiITKwuVXpCWLvgqLE5GfmAvjtr3pbbjFHjRcWDc+Ny3HZqXIQXYqA1KjRNlWHuo2KUJabjS38R7PA6wDUSJPLqoYLADnRIWsO72h765UgsE5Ih8+xkou6vaY7qH3NeGbdEYDjFAqu4m73Zl+KtqoqUlz1xCbJV68yLUO4hdOBx8hkk1DrAdfkc2hOiGk2BccNKfH1m0mvi4wcITrKepwjYCvgeZOyfvId0SbTkU4Eu8Vxf6QGPcTZ39iAXLwAEqnWncDMr5ga0vU24+kpEdLcYX800b4Al8ogexrKIr8JYjvoMDk7ItbJrPDgdxfK/5rJaDjigH9q3vVk9Y4j6OBxPeQQ/BGt8IvsVKnXnCI3f5k4Gx8S4kkg3HqqVps8T2q2gG9nMwjNu3SgMcD/m2AexM4k9MXPm8G9jmwpv3zzTJoe4bZfS+IGaJdgpcniDfmusz9gpipSd4aaEE7FDmZGNy6JiL6o7R/Ct4guM0FLcnCKA3YKI8FSCw42SVjW0wR+iqewRc7fBUkyYKnuA4BqP/J+zsE9hXUNpvh83Lq+3ypKC0eGF6Ecv30kKz7i5WD+yd+sHH5GE9A+0eX1fX+kEnwKNKGpgxo4vtpqqZNr76i0H4cYnM7qNdPlDYzHCziiu0SltXuKwUeZHriAlN70GIGfgIooBCEkujwmSm6h4W/ii4h543QGQHcTc6ciiWphFHSA0cZuB/CBDe8CjqxjxaYf9qtVmzAAwEpb7k7PB85rSvXMvBqZ8ZVDk9NZucH5bGCNnC6nv/S1saS25FPL4lRG1PLFeVHWZQ6WA0Uj4DAoQsrjpbKoPvUwirzKpnql5zZ7Ar4upHSpMJ1HfWczIO3fLLCBQozsADw//DDMrA8kp3PadEUeA0cAVf06J5zRTBoQZrMINojZ6wAOxfC+xm0XXvt0d/X7cdqcEazAAXiFY7/qEMNn+MLWfS6KAeNO2FNRypDXWDFeaLyiWXp6Lo9m5ZIR+I4YkKuYF66+Ver/UcEMVAxvfRIDzl1M0d3WawllNTs5tBdL/GY/Nai0IJzcLfTv4W+FV1C1g7j/wxH+96z5CsCH0xycXBmpT8s8C0yGBBfc6N9YRyCIAb6u69ukNTSbGjht814YLcmeaE50GZtYJ8iJ4Lmk2ctYf+y7rMZmDarlNnBDpDDb9+x42wFCF520BX0H9lmdkManOwfhBCJo/2ntz6IiRDMB+WWm8EpMsbmB8VCAiO6ygcfEpk2lbNL2UGxh49jRlsZlBoKVvbLGZQy++p9ILyZU1GM1hv5eszwdSzK8O2h7Pu8E2W+yuehv2poe9fVyio0feQhUN3TpKC8J6LWkHTkKJigwVxAUPXrkjBx/oWxT4l3NlyPb/COgTOyNC722Q9LJA/WQ2hl2xiAU0GbVtCQ68/3HwzsHtD0v4SFGi3/TL0r3T7AjcSdNrXaUKSfmx6RCiBjq9SWRSS9G38VYxgCZKf/E65LfSSfv99mH+BgCCA5tP3uzTtz5Gm7acHav6qrw0GoXlrevL8fDJt5R7dvhsLQunXNIAGDRo0aNCgQYMGDRo0aNCgQYMGDRpsAv4H57E706VDZ8UAAAAASUVORK5CYII=";
 }

 
}