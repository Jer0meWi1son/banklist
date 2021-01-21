fire.collection('users').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderUser(doc.data());
    });
});

const renderUser = doc => {
    const userTable = document.getElementById('table1');

    const html  = `
        <tr>
            <td>${doc.Name}</td>
            <td>${doc.Email}</td>
            <td>${doc.Balance}</td>
        </tr>
    `;

    userTable.innerHTML += html;

};



// fire.collection('users').get().then((snapshot) => {

//     snapshot.docs.map(
//       document => console.log(document.data())
//     );

//   });