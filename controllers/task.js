

const posttask = (req, res) => {
    const {username} = req.body;

    res.status(200).json({
        message: 'Data received successfully',
        username,
    });
};


const gettask = (req, res) => {
    const id = req.params.id;
    const name="abdo90";

    res.status(200).json({
        message: 'Data received successfully',
        name:name,
    });
};
module.exports = {
    posttask,
    gettask,
};
