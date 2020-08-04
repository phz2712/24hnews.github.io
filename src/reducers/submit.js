const submit = (state = [], action) => {
  

    switch (action.type) {
      case 'adduser':
        console.log("adduser",action, state)
        return [
          {
            id            :action.id,
            username      :action.username,
            password      :action.password,
            gender        :action.gender,
            birth         :action.birth,
            job           :action.job,
            email         :action.email,
          }
        ];
     default:
         return state;

    }
  }
  
  export default submit