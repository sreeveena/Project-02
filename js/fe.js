function register(event) {
    $('#myModal').modal('toggle')
    const data = {
        event1: {
            FirstName: 'FirstName',
            LastName: 'Last Name'
        },
        event2: {
            title: 'Second event',
            body: 'body2'
        },
        event3: {
            title: 'Third event',
            body: 'body3'
        },
    }[event]
    $('.modal-title').text(data.title)
    $('.modal-body').text(data.body)
}