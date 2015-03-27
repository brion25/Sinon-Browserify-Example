fakeResponse = {
    getPlunks : {
        data : [
            {
                description : "Test Description 1",
                created_at : "2014-05-06T00:15:30.000Z"
            },
            {
                description : "Test Description 2",
                created_at : "2014-05-06T00:36:30.000Z"
            },
            {
                description : "Test Description 3",
                created_at : "2014-05-06T02:15:30.000Z"
            }
        ]
    },
    searchResults : {
        data : [
            {
                Owner : "Test 1",
                Name : "Test Name",
                URL : "http://www.google.com"
            },
            {
                Owner : "Test 2",
                Name : "Test Name",
                URL : "http://www.facebook.com"
            },
            {
                Owner : "Test 3",
                Name : "Test Name",
                URL : "http://www.twitter.com"
            }
        ]
    }
};

module.exports = fakeResponse;