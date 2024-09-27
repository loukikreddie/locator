module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: 'Fitnesshub - find a place to workout',
        pageHeader: {
            title: 'Fitnesshub',
            strapline: 'Find places to workout near you!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about.Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: [{
            name: 'A1 GYm',
            address: 'madhapur',
            rating: 3,
            facilities: ['protein drinks', 'workout equipment', 'Premium wifi'],
            distance: '100m'
        }, {
            name: 'Fit GYm',
            address: 'Jublihills',
            rating: 4,
            facilities: ['protein drinks', 'workout equipment', 'Premium wifi'] ,
            distance: '200m'
        }, {
            name: 'Streak Gym',
            address: 'Lb nagar',
            rating: 2,
            facilities: ['protein drinks', 'workout equipment', 'Premium wifi'],
            distance: '250m'
        }]
    });
};
module.exports.locationInfo = function (req, res) {
    res.render('locations-info', { title: 'LocationInfo' });
};
module.exports.locationInfo1 = function (req, res) {
    res.render('locations-info1', { title: 'LocationInfo1' });
};
module.exports.locationInfo2 = function (req, res) {
    res.render('locations-info2', { title: 'LocationInfo2' });
};
module.exports.addReview = function (req, res) {
    res.render('locations-review-form', { title: 'ADD REVIEW' });
};