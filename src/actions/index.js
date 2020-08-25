let nextId = 0
console.log("nextid",nextId)
export const adduser = (user) => ({
    type          :'adduser',
    id            :nextId++,
    // user
    username      :user.username,
    password      :user.password,
    gender        :user.gender,
    birth         :user.birth,
    job           :user.job,
    email         :user.email,
})