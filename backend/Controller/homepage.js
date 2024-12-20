const User = require('../Models/User');
const Event = require('../Models/Event');


exports.getLatest = async (req, res) => {

    try {
        const latestevent = await Event.find({})
            .sort({ listedAt: -1 })
            .limit(3);
        res.status(200).json({latestevent,status:"ok"});
    } catch (error) {
        res.status(500).json({ error: 'Error fetching trending events' });
    }
};

exports.getTrending = async (req, res) => {
    try {
        // console.log("ttrr");
        const trendingEvents = await Event.find({})
            .sort({ 'registrations.length': 1 })
            .limit(3);
        
        res.status(200).json({ trendingEvents, status: "ok" });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching trending events' });
    }
};


