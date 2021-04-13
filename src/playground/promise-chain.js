require('../../src/db/mongoose');
const User = require('../models/user');

const userUpdate = async (id, age) => {
    const user = await User.findByIdAndUpdate(id,{ age:age });
    const count = await User.countDocuments({ age:age });
    return count;
}

userUpdate('606b02f4082d8240f7811adb', 21).then((res) => {
    console.log(res);
}).catch((e) => {
    console.log(e);
})
