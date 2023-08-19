let file = "https://sheetsu.com/tables/e712d69a72"

let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let username = document.getElementById('inputUsername').value;
    let pass = document.getElementById('inputPassword').value;

    let temp = '<td>'+username+'</td><td>'+pass+'</td>';

    fetch (file)
    .then(x => x.text())
    .then(y =>{let user = y.substring(y.search('tbody')+6,y.search('/tbody')-1);
    console.log(temp)
    let login = user.substring(user.search('<tr>')+4,user.search('</tr>'));


    if (temp == login) {
        window.location.href = "https://macneu.github.io/TE-CIK/index";
      } else {
        console.log('CHUj')
      }
    });
});
