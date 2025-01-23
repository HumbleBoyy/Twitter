 const getUserInfo = () => {
    const username  = JSON.parse(localStorage.getItem("user_info")).username
    const email  = JSON.parse(localStorage.getItem("user_info")).email
    const postList = JSON.parse(localStorage.getItem("post_list"))

    return {username, postList, email}
}

export default getUserInfo