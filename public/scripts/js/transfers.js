fire
    .collection("users")
    .get()
    .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            transfer(doc);
        });
    });

function transfer(doc) {
    const transferList = document.querySelector("#option select");
    let Name = document.createElement("option");

    Name.setAttribute("value", doc.data().Name);
    Name.textContent = doc.data().Name;

    transferList.appendChild(Name);
}
/////////////////////////////////////////////////////////////////////
fire
    .collection("users")
    .get()
    .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            transfer1(doc);
        });
    });

function transfer1(doc) {
    const transferList1 = document.querySelector("#option1 select");
    let Name = document.createElement("option");

    Name.setAttribute("value", doc.data().Name);
    Name.textContent = doc.data().Name;

    transferList1.appendChild(Name);
}


////////////////////////////////////////////////////////////////////////////////////////////
var form = document.getElementById('my-form');

form.addEventListener('click', (e) => {
    e.preventDefault();


    fire.collection('transfer').add({
        Sender: document.getElementById('sender').value,
        Receiver: document.getElementById('receiver').value,
        Amount: document.getElementById('amt').value
    }).then(() => {
        //window.location.reload();
        const senderName = document.getElementById('sender').value;
        fire.collection('users').doc(senderName).get().then(snapshot => {
            if (snapshot.data().Balance - document.getElementById('amt').value * 1 < 0) {
                alert('Insufficient Balance');
                return false;
            }
            fire.collection('users').doc(senderName).update({
                Balance: snapshot.data().Balance - document.getElementById('amt').value * 1
            })
        }).then(()=> {
                const receiverName = document.getElementById('receiver').value;
                fire.collection('users').doc(receiverName).get().then(snapshot => {
                    if (snapshot.data().Balance - document.getElementById('amt').value * 1 > 0) {
                        alert('Transaction Successful');
                    }
                    fire.collection('users').doc(receiverName).update({
                        Balance: snapshot.data().Balance + document.getElementById('amt').value * 1
                    })
                }).then(() => {
                    window.location.reload();})
            
        });
    });
});