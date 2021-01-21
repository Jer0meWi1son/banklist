fire.collection('transfer').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderTransfers(doc.data());
    });
});

const renderTransfers = doc => {
    const userTransfer = document.getElementById('table2');

    const html  = `
        <tr>
            <td>${doc.Sender}</td>
            <td>${doc.Receiver}</td>
            <td>${doc.Amount}</td>
        </tr>
    `;

    userTransfer.innerHTML += html;

};