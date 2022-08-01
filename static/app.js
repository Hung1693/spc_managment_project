$(document).ready(function () {
    let name;
    let personnel_id;
    let position;
    let status;
    function rowCreator(string) {
        return(`<tr class="fw-normal">
            <th>
                <img src="avatar.jpg" alt="avatar 1" style="width: 45px; height: auto;"><span class="ms-2">${name} (id: ${personnel_id})</span>
            </th>
            <td class="align-middle">
                <span>${position}</span>
            </td>
            <td class="align-middle">
                <h6 class = "mb-0" > <span class="badge ${string}">${status}</span><h6 >
            </td>
        </tr>`);
    }
    // READ
    $.get("/personnels", (data) => { // console.log(data);
        data.forEach(element => { // console.log(element);
            status = element.status;
            personnel_id = element.personnel_id;
            name = element.name;
            position = element.position;
            if (status === 'yes') {
                $('tbody').append(rowCreator('bg-danger'));
            }
            if (status === 'no') {
                $('tbody').append(rowCreator('bg-success'))
            }
        })
    });

    // CREATE
    $('.btn-add').click((e) => { // e.preventDefault();
        const name = $('.input-name').val();
        const position = $('.input-position').val();
        const status = $('.input-status').val();
        console.log(name, position, status);
        $.ajax({type: "POST", url: '/personnels/add', data: {name: name, position: position, status: status}, success: function () {}});
    })


    // DELETE
    $('.btn-remove').click((e) => {
        const id = $('.remove-form').val();
        console.log(id);
        $.ajax({url: `/personnels/remove/${id}`, type: 'DELETE', success: function (response) {}});
    })


    // UPDATE
    $('.btn-update').click((e) => { // e.preventDefault();
        const name = $('.input-name-update').val();
        const position = $('.input-position-update').val();
        const status = $('.input-status-update').val();
        const id = $('.update-form').val();
        console.log(name, position, status);
        $.ajax({url: `/personnels/update/${id}`, type: 'PATCH', data: {name: name, position: position, status: status}, success: function () {}});

    })

});
