import User from '../models/User.js';


export const getUser = async (req, res) => {
    try {
        const user = await User.findAll();
        res.send(user);
    } catch (err) {
        console.log(err);
    }
}
// export const getRPS = async (req, res) => {
//     try {
//         const RPS = await User.findAll();
//         res.send(RPS);
//     } catch (err) {
//         console.log(err);
//     }
// }
