class commonfunctionHelper {
    // let r = (Math.random() + 1).toString(36).substring(7);
    //     let gengmail = r + '@gmail.com'
    //     let genpass = Math.floor((Math.random() * 1000000) + 1);
    //     let genGST = Math.floor((Math.random() * 10000000000) + 1);
    generateRandomString = async (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    // const userlist = await this.page.$$(this.userlist);
    // for (const user of userlist) {
    //     if (u)
    //         await user.click();
    // }
}

module.exports = commonfunctionHelper